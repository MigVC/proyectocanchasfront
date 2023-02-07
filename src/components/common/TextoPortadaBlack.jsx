import { Box, Button } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { buttonStyle, style, themeTypography } from '../../theme/style';


export const TextoPortadaBlack = ({titulo,contenido,button,page}) => {
  return (
    <ThemeProvider theme={themeTypography}>
    <Box sx={{textAlign: 'center', marginY:1,p:{md:4,xs:1} ,backgroundColor:'rgb(244,229,194,0.1)' } }>
    <Typography mb={1} variant="h4">{contenido}</Typography>
      <Typography mb={1}  variant="h2" style={{fontSize:20}}>{titulo}</Typography>
      
      <Link style={style.link} to={page} >
        {button && <Button variant='contained' sx={buttonStyle.button} >
            {button}
        </Button>}
      </Link>
    </Box>
    </ThemeProvider>
  )
}
