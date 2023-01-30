import { Box, Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '2.5rem',
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
  color:'white',fontWeight:800

};
theme.typography.h4 = {
  fontSize: '0.919rem',
  '@media (min-width:600px)': {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  color:'white',fontWeight:300,
  

};
theme.typography.h3 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  color:'white' ,fontWeight:500,

};
export const TextoPortada = ({titulo,contenido,button,page}) => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{textAlign: 'center', marginY:2,p:{md:4,xs:0} } }>
      <Typography variant="h1">{titulo}</Typography>
      <Typography variant="h4">{contenido}</Typography>
      <Link style={{textDecoration:"none"}} to={page}>
        <Button variant='contained' sx={{marginY:2,backgroundColor:'#295F4E',":hover":{backgroundColor:'#6DB193'}}} >
            {button}
        </Button>
      </Link>
    </Box>
    </ThemeProvider>
  )
}
