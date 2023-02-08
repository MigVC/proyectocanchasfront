import React, { useContext, useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import {
  Button,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { style } from '../../../../theme/style';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AuthUserContext } from '../../../../context/AuthUserContext';
import { useUploadImage } from '../../../../hooks/useUploadImage';
import { useLoadImages } from '../../../../hooks/useLoadImages';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export const FormUpdatePerfil = () => {
  const {
    images,
    filesUploads,
    convert2Base64,
    deleteHandler,
    setImages,
    setFilesUploads,
  } = useLoadImages();
  const { statusObject, handleMultiple, setStatusObject, setLinks } =
    useUploadImage();
  const [openAlert, setOpenAlert] = useState(false);
  const { updateCanchero } = useContext(AuthUserContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  const { user } = useContext(AuthUserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const imagesData = await handleMultiple(filesUploads);
      const formData = {
        nombres: data.nombres === '' ? user.nombres : data.nombres,
        apellidos: data.apellidos === '' ? user.apellidos : data.apellidos,
        ubication: data.ubication === '' ? user.ubication : data.ubication,
        telefono: data.telefono === '' ? user.telefono : data.telefono,
        avatar: typeof imagesData === 'undefined' ? user.avatar : imagesData[0],
      };
      await updateCanchero(formData);
      setOpenAlert(true);
    } catch (e) {}
  };
  return (
    <div style={{ ...style.content, padding: 20 }}>
      <Typography
        style={{
          ...style.typography,
          fontWeight: 600,
          color: style.color.letraDark,
        }}
      >
        Edite su información
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1} p={2}>
          <Grid item xs={6}>
            <TextField
              label='Nombres'
              placeholder={user.nombres}
              fullWidth
              {...register('nombres')}
              error={!!errors.nombres}
              helperText={!!errors.nombres ? errors.nombres.message : null}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Apellidos'
              fullWidth
              {...register('apellidos')}
              placeholder={user.apellidos}
              error={!!errors.apellidos}
              helperText={!!errors.apellidos ? errors.apellidos.message : null}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Teléfono'
              fullWidth
              type='text'
              {...register('telefono')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              placeholder={user.telefono}
              error={!!errors.telefono}
              helperText={!!errors.telefono ? errors.telefono.message : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Ubicación'
              fullWidth
              {...register('ubication')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
              placeholder={user.ubication}
              error={!!errors.ubicacion}
              helperText={!!errors.ubicacion ? errors.ubicacion.message : null}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Descripción de tu empresa'
              fullWidth
              {...register('descriptionEmpresa')}
              placeholder={user.descriptionEmpresa}
              error={!!errors.descriptionEmpresa}
              helperText={
                !!errors.descriptionEmpresa
                  ? errors.descriptionEmpresa.message
                  : null
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type='file'
              {...register('files')}
              inputProps={{
                multiple: false,
                color: 'red',
              }}
              onChange={(e) => convert2Base64(e.target.files)}
              error={!!errors.files}
              helperText={!!errors.files ? errors.files.message : null}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              height: 'auto',
              flexWrap: 'wrap',
            }}
          >
            {images &&
              images.map((image, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <img
                      src={image}
                      height='130px'
                      width='130px'
                      alt='upload'
                    />
                    <Button
                      style={{
                        backgroundColor: '#ffc107',
                        margin: 2,
                        color: style.color.letra,
                      }}
                      onClick={() => deleteHandler(image)}
                    >
                      Borrar imagen
                    </Button>
                  </div>
                );
              })}
          </Grid>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              height: 'auto',
              flexWrap: 'wrap',
            }}
          >
            {statusObject &&
              Object.values(statusObject).map((ob) => {
                return (
                  <div
                    style={{
                      width: '142px',
                    }}
                  >
                    <p>{ob.progress}%</p>
                  </div>
                );
              })}
          </div>

          <Grid item xs={6}>
            <Button
              variant='contained'
              fullWidth
              color='error'
              onClick={() => {
                reset();
                setStatusObject({});
                setImages([]);
                setFilesUploads([]);
                setLinks([]);
              }}
            >
              Cancelar
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button type='submit' variant='contained' fullWidth>
              EDITAR
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Se editó Correctamente!
        </Alert>
        {/* <Alert onClose={handleClose} severity="warning">Esta función aun no está habilitada!, lo sentimos mucho :c</Alert> */}
      </Snackbar>
    </div>
  );
};
