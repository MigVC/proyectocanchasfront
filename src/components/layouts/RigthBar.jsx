import { Box} from '@mui/material';
import React from 'react';
import { CardPerfil } from '../common/CardPerfil';

export const RigthBar = () => {
  return (
    <Box flex={1} p={2} >
        <Box >
            <CardPerfil encabezado={'Perfil del Canchero'}/>
        </Box>
    </Box>
  )
}
