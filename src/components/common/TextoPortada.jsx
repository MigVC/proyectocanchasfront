import { Box, Button } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { buttonStyle, style, themeTypographyWhite } from '../../theme/style';


export const TextoPortada = ({titulo,contenido,button,page}) => {
  return (
    <ThemeProvider theme={themeTypographyWhite}>
    <Box sx={{textAlign: 'center', marginY:1,p:{md:4,xs:0} } }>
      <Typography variant="h1">{titulo}</Typography>
      <Typography mb={1} variant="h4">{contenido}</Typography>
      <Link style={style.link} to={page} >
        {button && <Button variant='contained' sx={buttonStyle.button} >
            {button}
        </Button>}
      </Link>
    </Box>
    </ThemeProvider>
  )
}
