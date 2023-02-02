import { Button, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Box } from '@mui/system';
import {
  DialogContent,
  DialogContentText,
  TextField
} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems:'center',
  width: 450,
  height: 450,
  borderRadius: 8,
  flexDirection: 'column',
  backgroundColor: 'white',
  bgcolor: 'background.paper',
  boxShadow: 24,
};
const styles = {
  content: {
      position: 'absolute',
      width: '100%',
      height: '90%',
      top: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      zIndex: 'tooltip'
  }

};
const stados = [
  {
    value: 'disponible',
    label: 'Disponible',
  },
  {
    value: 'deshabilitado',
    label: 'Deshabilitado',
  },
  {
    value: 'reservado',
    label: 'Reservado',
  },

];

export const TableActionsCanchero = (props) => {
  const {status}=props
    console.log(props)
    console.log('Estoy Aqui')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <>
    <IconButton onClick={handleOpen} >
        <ChangeCircleIcon  />
    </IconButton>
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        <form  style={styles.content}>
          <DialogContent sx={{alingItems:'center'}}>
            <DialogContentText sx={{ fontSize:33,marginBottom: '-1em' }}>
              Estado de la Canchita
            </DialogContentText>
          </DialogContent>
          <DialogContent sx={{alingItems:'center'}}>
            <DialogContentText sx={{alingItems:'center', fontSize:20,marginBottom: '1em' }}>
            Cambiar estado
            </DialogContentText>
            <DialogContentText sx={{alingItems:'center', fontSize:20,marginTop: '3rem' }}>
            <TextField
              select
              defaultValue={status}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
            >
              {stados.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions sx={{}}>
            <Button variant='contained' color='error' 
            startIcon={
            <CancelRoundedIcon />} 
            onClick={handleClose}>
              CANCELAR
            </Button>
            <Button
              type='submit'
              loadingPosition='start'
              startIcon={<SaveIcon />}
              variant='contained'
            >
              GUARDAR
            </Button>
          </DialogActions> */}
        </form>
        </Box>
    </Modal>
    </>
  )
}
export const tableActionsUsuario = () => {
  return (
    <Button>
        Reservar
    </Button>
  )
}
