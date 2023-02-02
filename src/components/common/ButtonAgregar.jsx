import AddIcon from '@mui/icons-material/Add';
import { Fab,  Modal, Tooltip, Zoom } from '@mui/material'
import React, { useState } from 'react'
import MuiAlert from '@mui/material/Alert';
import { style } from '../../theme/style';
import { Agregar } from '../../pages/Canchero/components/FormAgregar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export const ButtonAgregar = () => {
    const [open, setOpen] = useState(false)
    
    
  return (
    <>
    <Zoom
        in
        timeout={{enter:1000,exit:500}}
        unmountOnExit
    >
        <Tooltip title='Agregar Canchita' aria-label='agregar' onClick={()=>setOpen(true)}>
        <Fab sx={style.Fab} aria-label={'Agregar'}>
        <AddIcon />
        </Fab>
        </Tooltip>
    </Zoom>
    <Modal open={open} onClose={()=>setOpen(false)}>
        <div style={{...style.modal,width:600,height:600}}>
        <Agregar setOpen={setOpen} />
        </div>
    </Modal>
    
    </>
  )
}
