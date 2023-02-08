import { Box, Button } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { buttonStyle, style, themeTypographyPrincipal } from '../../theme/style';
import { Link } from 'react-router-dom';
export const TextoPrincipal = ({encabezado,titulo,contenido,button}) => {
  return (
    
    <ThemeProvider theme={themeTypographyPrincipal}>
    <Box sx={{textAlign: 'center', p:{md:4,xs:2},} }>
      <Typography variant="h3">{encabezado}</Typography>
      <Typography variant="h1">{titulo}</Typography>
      <Typography variant="h4" sx={{marginY:1}}>{contenido}</Typography>
      <Box>
            <Link to="/canchitas" style={style.link} >
              <Button sx={{...buttonStyle.button,backgroundColor:style.color.secondary,fontSize:18}}>
                {button}
              </Button>
              
            </Link>
        </Box>
    </Box>
    </ThemeProvider>
  )
}
