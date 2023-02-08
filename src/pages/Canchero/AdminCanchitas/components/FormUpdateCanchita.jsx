import React,{useState} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MuiAlert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { Button, Grid, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import { style } from '../../../../theme/style';
import SavingsIcon from '@mui/icons-material/Savings';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { Arco } from '../../../../assets/icons/arco';
import { useUploadImage } from '../../../../hooks/useUploadImage';
import { useLoadImages } from '../../../../hooks/useLoadImages';
const CanchitaSchema = yup.object({
  nombreCanchita: yup.string().required('Ingrese nombre de la Canchita'),
  descripcion: yup.string().required('Ingrese descripción de la Canchita'),
  ubicacion: yup.string().required('Ingrese ubicación de la Canchita'),
  cantApacamiento: yup
    .number()
    .typeError('Cantidad')
    .positive('Debe ser un número positivo')
    .max(30, 'Debe ser menor de 30')
    .required(),
  precio: yup.number().typeError('Debe ser un número').required(),
  files: yup
    .mixed()
    .test('fileType', 'Unsupported File Format', (value) =>
      ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'].includes(
        value[0].type
      )
    ),
  
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export const FormUpdateCanchita = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const { statusObject, handleMultiple, setStatusObject } =
    useUploadImage();
  const {
    images,
    filesUploads,
    convert2Base64,
    deleteHandler,
    setImages,
    setFilesUploads,
  } = useLoadImages();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CanchitaSchema),
  });

  const onSubmit = async (data) => {
    try {
      handleMultiple(filesUploads);
      // const formData = {
      //   nombreCanchita: data.nombreCanchita,
      //   descripcion: data.descripcion,
      //   ubicacion: data.ubicacion,
      //   cantAparcamiento: data.cantAparcamiento,
      //   precio: data.precio,
      // };
      setOpenAlert(true);
    } catch (e) {}
  };
  return (
    <div style={style.content}>
      <Typography
        style={{
          ...style.typography,
          fontWeight: 600,
          color: style.color.letraDark,
        }}
      >
        Edite los datos de su Canchita
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1} p={2}>
          <Grid item xs={12}>
            <TextField
              label='Nombre Canchita'
              fullWidth
              {...register('nombreCanchita')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Arco />
                  </InputAdornment>
                ),
              }}
              error={!!errors.nombreCanchita}
              helperText={
                !!errors.nombreCanchita ? errors.nombreCanchita.message : null
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Descripción'
              fullWidth
              {...register('descripcion')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
              rows={4}
              multiline
              error={!!errors.descripcion}
              helperText={
                !!errors.descripcion ? errors.descripcion.message : null
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12} mb={1}>
              <TextField
                label='S/. Precio'
                fullWidth
                {...register('precio')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SavingsIcon />
                    </InputAdornment>
                  ),
                }}
                error={!!errors.precio}
                helperText={!!errors.precio ? errors.precio.message : null}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Nro'
                fullWidth
                type='number'
                {...register('cantAparcamiento')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <GroupsIcon />
                    </InputAdornment>
                  ),
                }}
                error={!!errors.cantApacamiento}
                helperText={
                  !!errors.cantApacamiento
                    ? errors.cantApacamiento.message
                    : null
                }
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Ubicación'
              fullWidth
              {...register('ubicacion')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
              error={!!errors.ubicacion}
              helperText={!!errors.ubicacion ? errors.ubicacion.message : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='file'
              {...register('files')}
              inputProps={{
                multiple: true,
                color:'red'
              }}
              onChange={(e) => convert2Base64(e.target.files)}
              error={!!errors.files}
              helperText={!!errors.files ? errors.files.message : null}
            />
          </Grid>
          <Grid item xs={12}
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
                    <Button style={{backgroundColor:'#ffc107',margin:2,color:style.color.letra,}} onClick={() => deleteHandler(image)}>
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
                ;
              }}
            >
              Cancelar
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button type='submit' variant='contained' fullWidth>
              Guardar
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
          Se agregó Correctamente!
        </Alert>
        {/* <Alert onClose={handleClose} severity="warning">Esta función aun no está habilitada!, lo sentimos mucho :c</Alert> */}
      </Snackbar>
    </div>
  )
}
