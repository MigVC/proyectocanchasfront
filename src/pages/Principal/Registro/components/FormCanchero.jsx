import React, { useContext, useState } from 'react';
import { Formik } from 'formik';

import swal from 'sweetalert';
import { Grid, TextField } from '@mui/material';
import { AuthUserContext } from '../../../../context/AuthUserContext';

export const FormCanchero = () => {
  const { signUp } = useContext(AuthUserContext);
  const [gender, setgender] = useState('otro');
  return (
    <div className='animate__animated animate__fadeIn justify-content-center'>
      <Grid p={2}>
      <Formik
        initialValues={{
          dni: '',
          nombres: '',
          apellidos: '',
          nacimiento: '',
          sexo: 'M',
          telefono: '',
          avatar:
            'https://previews.123rf.com/images/sirup/sirup1608/sirup160800050/61971886-avatar-abstracto-del-vector-de-cabeza-humana-con-vista-de-perfil-y-bal%C3%B3n-de-f%C3%BAtbol-en-el-medio-sobre.jpg',
          correo: '',
          password: '',
          passwordConfirmation: '',
          nombre: '',
          description: '',
          ubicacion: '',
          estado: 'opened',
          
        }}
        onSubmit={async (values, actions) => {
          values.sexo = gender;
          try {
            await signUp(values);
          } catch (error) {
            swal({
              title: 'Error',
              icon: 'error',
              text: 'Todos los campos son obligatorios',
              buttons: 'OK',
            });
          }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className='text-center'>
            <Grid container spacing={2} p={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name='dni'
                  value={values.dni}
                  onChange={handleChange}
                  type='text'
                  label='DNI'
                  placeholder='Ingresa tu DNI'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name='nombres'
                  value={values.nombres}
                  onChange={handleChange}
                  type='text'
                  placeholder='Ingresa tus nombres'
                  label='Nombres'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name='apellidos'
                  value={values.apellidos}
                  onChange={handleChange}
                  type='text'
                  placeholder='Ingresa tus apellidos'
                  label='Apellidos'
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type='date'
                  onChange={handleChange}
                  id='nacimineto'
                  name='nacimiento'
                  value={values.nacimiento}
                  placeholder='Fecha de nacimiento'
                  // label='Fecha de nacimiento'
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <label
                  className='text-center'
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {' '}
                  Sexo{' '}
                </label>
                <Grid container>
                  <Grid item  xs={4}>
                    <input
                    
                      onChange={() => {
                        setgender('M');
                      }}
                      name='sexo'
                      className='btn-check'
                      id='sexoM'
                      type='radio'
                    />
                    <label
                      className='btn btn-outline-success fw-bold'
                      htmlFor='sexoM'
                    >
                      Masculino
                    </label>
                  </Grid>
                  <Grid item xs={4}>
                    <input
                      onChange={() => {
                        setgender('F');
                      }}
                      name='sexo'
                      className='btn-check'
                      id='sexoF'
                      type='radio'
                    />
                    <label
                      className='btn btn-outline-success fw-bold'
                      htmlFor='sexoF'
                    >
                      Femenino
                    </label>
                  </Grid>
                  <Grid item xs={4}>
                    <input
                      onChange={() => {
                        setgender('Otro');
                      }}
                      name='sexo'
                      className='btn-check'
                      id='sexoO'
                      type='radio'
                    />
                    <label
                      className='btn btn-outline-success fw-bold'
                      htmlFor='sexoO'
                    >
                      Otro
                    </label>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name='telefono'
                  onChange={handleChange}
                  type='text'
                  placeholder='Ingresa tu numero de telefono'
                  value={values.telefono}
                  label='Teléfono'
                />
              </Grid>
              
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  name='correo'
                  onChange={handleChange}
                  type='email'
                  placeholder='Ingresa tu correo electrónico'
                  value={values.correo}
                  label='Correo electrónico'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='password'
                  fullWidth
                  label='Contraseña'
                  onChange={handleChange}
                  type='text'
                  placeholder='Ingresa tu password'
                  value={values.password}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name='passwordConfirmation'
                  fullWidth
                  onChange={handleChange}
                  type='text'
                  label='Confirmar Contraseña '
                  placeholder='Confirmar Contraseña'
                  value={values.passwordConfirmation}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='nombre'
                  fullWidth
                  value={values.nombre}
                  onChange={handleChange}
                  type='text'
                  placeholder='Ingresa nombre de tu negocio'
                  label='Nombre de tu negocio'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name='ubicacion'
                  onChange={handleChange}
                  type='text'
                  label='Ubicación de tu negocio'
                  placeholder='Ingresa ubicación de tu negocio'
                  value={values.ubicacion}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='description'
                  fullWidth
                  label='Descripción de tu negocio'
                  onChange={handleChange}
                  value={values.description}
                  multiline
                  rows={2}
                />
              </Grid>

              
              <Grid item xs={12}>
                <button
                  type='submit'
                  className='btn btn-success '
                  disabled={isSubmitting}
                >
                  {' '}
                  {isSubmitting ? 'Registrando ...' : 'Registrarse'}{' '}
                </button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      </Grid>
    </div>
  );
};
