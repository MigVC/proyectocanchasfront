import React from 'react';
import Avatar from '@mui/material/Avatar';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';
import FondoCancha from './Components/assets/images/FondoCancha.jpg';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom'
const styles = {
    root: {
        backgroundImage: `url(${FondoCancha})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        height: '100vh',
        position: 'relative',
        minHeight: '100vh'

    },
    overOpacity: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#999999',
        opacity: 0.2,
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        // fontSize: 'calc(10px + 2vmin)',
        // zIndex: 'tooltip'

    }

};


export const Login = ({id}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        Usuario: '',
        Contraseña: '',
        MostrarContraseña: false,
    })
    const { Usuario, Contraseña } = formData;

    const handleSubmit = () => {

        console.log(formData)
        setTimeout(() => {

        }, 3000);
        navigate('/canchero')

    }
    const handleOnchange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
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
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className={{ width: '100%', height: '100vh' }}>
                            <div style={styles.root}></div>
                            <div style={styles.overOpacity}></div>
                            <div style={styles.content}  >

                                <Avatar alt="Remy Sharp" sx={{
                                    m: 2, width: 150, height: 150, border: '5px solid white', bgcolor: 'green',
                                    p: 2,
                                    position: 'relative',
                                    // top:10,
                                    zIndex: 'tooltip',

                                }}>
                                    <SportsSoccerRoundedIcon sx={{ width: 150, height: 150 }} />
                                </Avatar>
                                <Box sx={{
                                    display: 'flex', flexWrap: 'wrap',
                                    position: 'relative',
                                    bottom: 75,

                                }}>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {

                                                width: 450,
                                                height: 450,
                                                position: 'absolute',
                                                flexDirection: 'column',
                                                border: '5px solid white',
                                                backgroundColor: 'black',
                                                opacity: 0.5

                                            },
                                        }}
                                    >
                                        <Paper elevation={3} sx={{ borderRadius: 8, opacity: 0.65 }}></Paper>
                                    </Box>


                                    <Container component="main" maxWidth="xs" sx={{}}  >
                                        <Box
                                            sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                        >

                                            <Box component="form" sx={{ mt: 2, mx: 4, }}>
                                                <FormControl fullWidth required sx={{ mt: 2, borderRadius: 8, backgroundColor: 'white' }} >
                                                    <InputLabel htmlFor="Usuario">Usuario</InputLabel>
                                                    <OutlinedInput
                                                        error={false}
                                                        type='text'
                                                        value={Usuario}
                                                        sx={{ borderRadius: 8, }}
                                                        id="Usuario"
                                                        name="Usuario"
                                                        placeholder='Correo Institucional'
                                                        autoComplete="Usuario"
                                                        onChange={handleOnchange}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    edge="end"
                                                                >
                                                                    <MailIcon />
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Usuario"
                                                    />
                                                </FormControl>
                                                <FormControl fullWidth required sx={{ mt: 3, borderRadius: 8, backgroundColor: 'white' }} >
                                                    <InputLabel htmlFor="Contraseña">Contraseña</InputLabel>
                                                    <OutlinedInput
                                                        error={false}
                                                        value={Contraseña}
                                                        placeholder='Contraseña'
                                                        sx={{ borderRadius: 8, }}
                                                        name="Contraseña"
                                                        type={formData.MostrarContraseña ? "text" : "password"}
                                                        id="Contraseña"
                                                        autoComplete="Contraseña"
                                                        onChange={handleOnchange}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickMostrarContraseña}
                                                                    onMouseDown={handleClickOcultarContraseña}
                                                                    edge="end"
                                                                >
                                                                    {formData.MostrarContraseña ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Contraseña"
                                                    />
                                                </FormControl>
                                                <FormControl>
                                                    <FormControlLabel

                                                        sx={{ zIndex: 'tooltip', mt: 2, color: '#ffffff', }}
                                                        control={<Checkbox value="remember" sx={{
                                                            color: 'white',
                                                            '&.Mui-checked': {
                                                                color: 'grey',
                                                            }
                                                        }} />}
                                                        label="Recordarme"
                                                    />
                                                </FormControl>

                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    onClick={() => handleSubmit(Usuario, Contraseña)}
                                                    sx={{
                                                        mt: 2, mb: 2, borderRadius: 5, backgroundColor: 'green', '&:hover': {
                                                            backgroundColor: '#124116',
                                                        },
                                                    }}
                                                >
                                                    INGRESAR
                                                </Button>
                                                <Grid container>
                                                    <Grid item xs sx={{ zIndex: 'tooltip', mb: 5, textAlign: 'center', }}>
                                                        <Link underline="hover" href="#" variant="body2" sx={{ color: 'white', mx: 1, }} >
                                                            ¿Olvidaste tu contraseña?
                                                        </Link>
                                                        <Link href="#" variant="body1 " underline="none" sx={{ fontSize: 18, fontWeight: 650, color: 'white', mx: 2 }} >
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

                    </div>

                </div>
            </div>
        </div>


    );
}
