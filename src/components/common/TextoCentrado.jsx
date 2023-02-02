import { Box } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { themeTypography } from '../../theme/style';
export const TextoCentrado = ({encabezado,titulo,contenido}) => {
  return (
    
    <ThemeProvider theme={themeTypography}>
    <Box sx={{textAlign: 'center', marginY:2,p:{md:4,xs:2} } }>
      <Typography variant="h3">{encabezado}</Typography>
      <Typography variant="h1">{titulo}</Typography>
      <Typography variant="h4" sx={{marginY:1}}>{contenido}</Typography>
    </Box>
    </ThemeProvider>
  )
}
