import { Box } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { themeTypography } from '../../theme/style';
export const TextoInfo = ({pie,titulo,contenido}) => {
  return (
    
    <ThemeProvider theme={themeTypography}>
    <Box sx={{textAlign: 'center', marginY:2,p:{md:4,xs:2} } }>
      <Typography variant="h1">{titulo}</Typography>
      <Typography variant="h4" sx={{marginY:1}}>{contenido}</Typography>
      <Typography variant="h5">{pie}</Typography>
    </Box>
    </ThemeProvider>
  )
}
