import { Box } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  color:'#323232',fontWeight:800

};
theme.typography.h4 = {
  fontSize: '0.919rem',
  '@media (min-width:600px)': {
    fontSize: '0.915rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.93rem',
  },
  color:'#323232',fontWeight:300

};
theme.typography.h3 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  color:'#295F4E' ,fontWeight:500,

};

export const TextoCentrado = ({encabezado,titulo,contenido}) => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{textAlign: 'center', marginY:2,p:{md:4,xs:2} } }>
      <Typography variant="h3">{encabezado}</Typography>
      <Typography variant="h1">{titulo}</Typography>
      <Typography variant="h4">{contenido}</Typography>
    </Box>
    </ThemeProvider>
  )
}
