import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MuiAlert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { Button, Grid, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import { style } from '../../../../theme/style';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';


const PerfilSchema = yup.object({
  dni: yup.string().required('Ingrese nro de DNI'),
  nombres: yup.string().required('Ingrese su nombre'),
  apellidos: yup.string().required('Ingrese su apellido'),
  ubicacion: yup.string().required('Ingrese ubicación de su negocio'),
  telefono: yup.number().required('Ingrese número de contacto'),
  correo: yup.string().required('Ingrese su correo'),
  
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export const FormUpdatePerfil = () => {
  const [openAlert, setOpenAlert] = useState(false);
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
    resolver: yupResolver(PerfilSchema),
  });
  const onSubmit = async (data) => {
    try {
      
      const formData = {
        dni: data.dni,
        nombres: data.nombres,
        apellidos: data.apellidos,
        ubicacion: data.ubicacion,
        telefono: data.telefono,
        correo: data.correo,
      };
      console.log(formData)
      setOpenAlert(true);
    } catch (e) {}
  };
  return (
    <div style={{...style.content,padding:20}}>
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
              fullWidth
              {...register('nombres')}
              error={!!errors.nombres}
              helperText={
                !!errors.nombres ? errors.nombres.message : null
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Apellidos'
              fullWidth
              {...register('apellidos')}
              error={!!errors.apellidos}
              helperText={
                !!errors.apellidos ? errors.apellidos.message : null
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='DNI'
              fullWidth
              {...register('dni')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <ContactEmergencyIcon/>
                  </InputAdornment>
                ),
              }}
              error={!!errors.dni}
              helperText={!!errors.dni ? errors.dni.message : null}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Teléfono'
              fullWidth
              type='telefono'
              {...register('telefono')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              error={!!errors.telefono}
              helperText={
                !!errors.telefono
                  ? errors.telefono.message
                  : null
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Correo'
              fullWidth
              {...register('correo')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <ContactMailIcon />
                  </InputAdornment>
                ),
              }}
              error={!!errors.correo}
              helperText={!!errors.correo ? errors.correo.message : null}
            />
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
                    
          <Grid item xs={6}>
            <Button
              variant='contained'
              fullWidth
              color='error'
              onClick={() => {
                reset();
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
          Se agregó Correctamente!
        </Alert>
        {/* <Alert onClose={handleClose} severity="warning">Esta función aun no está habilitada!, lo sentimos mucho :c</Alert> */}
      </Snackbar>
    </div>
  )
}
