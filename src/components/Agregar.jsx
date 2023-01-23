import AddIcon from '@mui/icons-material/Add';
import { Container, Fab, Grid, Modal, Snackbar, TextField, Tooltip, Zoom } from '@mui/material'
import { border, Box, fontFamily } from '@mui/system';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
const style={
    Fab:{
        position:'fixed',
        bottom:10,
        right:10,
        color: 'common.white',
        bgcolor: 'green',
        '&:hover': {
        bgcolor: 'green',
        },
    },
    Container:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        alignItems:'center',
        width: 450,
        height: 450,
        borderRadius: 8,
        backgroundColor: 'white',
        boxShadow: 24,
    },
    content:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        zIndex: 'tooltip',
        fontFamily:'Montserrat'

    }
    
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export const Agregar = () => {
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
  return (
    <>
    <Zoom
        in
        timeout={{enter:1000,exit:500}}
        unmountOnExit
    >
        <Tooltip title='Agregar' aria-label='agregar' onClick={()=>setOpen(true)}>
        <Fab sx={style.Fab} aria-label={'Agregar'}>
        <AddIcon />
        </Fab>
        </Tooltip>
    </Zoom>
    <Modal open={open} onClose={()=>setOpen(false)}>
        <div style={style.Container}>
        <Container component="main" maxWidth="xs" >
            <Box sx={style.content} marginTop={3}>
            <Box sx={{fontWeight:560}}>
                Ingrese datos de la Canchita
            </Box>
            <form >
                <div style={{fontSize:16,marginTop:24}}>
                    Nombre
                    <TextField
                    id="name"
                    fullWidth
                    
                    />
                </div>
                <div style={{fontSize:16,marginTop:10}}>
                    Descripción
                    <TextField
                    id="description"
                    multiline
                    rows={3}
                    fullWidth
                    
                    />
                </div>
                <div style={style.content}>
                <Button sx={{color:'white',backgroundColor:'gray','&:hover':{backgroundColor:'black'},marginTop:2}} variant="contained" component="label" endIcon={<PhotoCamera />}>
                    Foto
                    
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                </div>
                <Box mt={4}  >
                    <Grid container  >
                        <Grid item xs={6} textAlign='center' >
                        <Button variant="contained" color='secondary' onClick={()=>setOpen(false)} >
                            Cancelar
                        </Button>
                        </Grid>
                        <Grid item xs={6} textAlign='center'>
                        <Button variant="contained" color='info' onClick={()=>setOpenAlert(true)} >
                          Agregar
                    </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            </Box>
        </Container>
        </div>
    </Modal>
    <Snackbar anchorOrigin={{vertical: 'bottom',horizontal: 'center'}} open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se agregó Correctamente!
        </Alert> */}
        <Alert onClose={handleClose} severity="warning">Esta función aun no está habilitada!, lo sentimos mucho :c</Alert>
      </Snackbar>
    </>
  )
}
