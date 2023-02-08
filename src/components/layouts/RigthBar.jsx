import { Box} from '@mui/material';
import React from 'react';
import { CardPerfil } from '../common/CardPerfil';

export const RigthBar = () => {
  return (
    <Box flex={1} >
        <Box >
            <CardPerfil encabezado={'CANCHITAs CUSCO'}
            titulo={'Pronto más Funcionalidades'}
            />
        </Box>
    </Box>
  )
}
