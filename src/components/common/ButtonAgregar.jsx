import AddIcon from '@mui/icons-material/Add';
import { Fab, Modal, Tooltip, Zoom } from '@mui/material';
import React, { useState } from 'react';
import { style } from '../../theme/style';
import { Agregar } from '../../pages/Canchero/components/FormAgregar';

export const ButtonAgregar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Zoom in timeout={{ enter: 1000, exit: 500 }} unmountOnExit>
        <Tooltip
          title='Agregar Canchita'
          aria-label='agregar'
          onClick={() => setOpen(true)}
        >
          <Fab sx={style.Fab} aria-label={'Agregar'}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Zoom>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ ...style.modal, width: 600, height: 700 }}>
          <Agregar setOpen={setOpen} closeModal={(state) => setOpen(state)} />
        </div>
      </Modal>
    </>
  );
};
