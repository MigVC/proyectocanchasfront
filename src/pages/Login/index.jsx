import React from 'react';
import Avatar from '@mui/material/Avatar';
import SportsRoundedIcon from '@mui/icons-material/SportsRounded';
import FormControl from '@mui/material/FormControl';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Container } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { buttonStyle, style } from '../../theme/style';
import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';

export const LoginCanchero = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthUserContext);
  const [formData, setFormData] = useState({
    Usuario: '',
    Contraseña: '',
    MostrarContraseña: false,
  });
  const { Usuario, Contraseña } = formData;
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signIn({ correo: Usuario, password: Contraseña });
    navigate('/canchero');
  };
  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClickMostrarContraseña = () => {
    setFormData({
      ...formData,
      MostrarContraseña: !formData.MostrarContraseña,
    });
  };

  const handleClickOcultarContraseña = (event) => {
    event.preventDefault();
  };

  return (
    <div className={{ width: '100%', height: '100vh' }}>
      <div style={style.content}>
        <Avatar
          alt='Remy Sharp'
          sx={{
            m: 2,
            width: 150,
            height: 150,
            border: '5px solid white',
            bgcolor: '#295F4E',
            p: 2,
            position: 'relative',
            bottom: 65,
            zIndex: 'tooltip',
          }}
        >
          <SportsRoundedIcon sx={{ width: 130, height: 130 }} />
        </Avatar>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            position: 'relative',
            bottom: 75,
          }}
        >
          <Container component='main' maxWidth='xs'>
            <Box>
              <Box component='form' sx={{ mx: 4 }}>
                <FormControl
                  fullWidth
                  required
                  sx={{ mt: 2, borderRadius: 8, backgroundColor: 'white' }}
                >
                  <InputLabel style={{ ...style.typography }} htmlFor='Usuario'>
                    Usuario
                  </InputLabel>
                  <OutlinedInput
                    error={false}
                    type='text'
                    value={Usuario}
                    sx={{ borderRadius: 8 }}
                    id='Usuario'
                    name='Usuario'
                    placeholder='Correo Institucional'
                    autoComplete='Usuario'
                    onChange={handleOnchange}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton edge='end'>
                          <MailIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label='Usuario'
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  required
                  sx={{ mt: 3, borderRadius: 8, backgroundColor: 'white' }}
                >
                  <InputLabel
                    style={{ ...style.typography }}
                    htmlFor='Contraseña'
                  >
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    error={false}
                    value={Contraseña}
                    placeholder='Contraseña'
                    sx={{ borderRadius: 8 }}
                    name='Contraseña'
                    type={formData.MostrarContraseña ? 'text' : 'password'}
                    id='Contraseña'
                    autoComplete='Contraseña'
                    onChange={handleOnchange}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickMostrarContraseña}
                          onMouseDown={handleClickOcultarContraseña}
                          edge='end'
                        >
                          {formData.MostrarContraseña ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label='Contraseña'
                  />
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    sx={{
                      zIndex: 'tooltip',
                      mt: 2,
                      color: style.color.primary,
                    }}
                    control={
                      <Checkbox
                        value='remember'
                        sx={{
                          color: style.color.primary,
                          '&.Mui-checked': {
                            color: 'grey',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography style={style.typography}>
                        Recordarme
                      </Typography>
                    }
                  />
                </FormControl>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  onClick={(e) => handleSubmit(e, Usuario, Contraseña)}
                  sx={{
                    mt: 2,
                    mb: 2,
                    ...buttonStyle.buttonRadius,
                  }}
                  color='warning'
                >
                  INGRESAR
                </Button>
                <Grid container>
                  <Grid
                    item
                    xs
                    sx={{ zIndex: 'tooltip', mb: 5, textAlign: 'center' }}
                  >
                    <Link
                      underline='hover'
                      href='#'
                      variant='body2'
                      sx={{ ...style.typography, color: 'gray', mx: 1, ml: -1 }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                    <Link
                      href='/registro'
                      sx={{
                        ...style.link,
                        fontSize: 18,
                        fontWeight: 650,
                        ...style.typography,
                        color: style.color.primary,
                      }}
                    >
                      Registrarse
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  );
};
