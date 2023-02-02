import { Box} from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
const theme = createTheme();

theme.typography.h1 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  color:'white',fontWeight:800

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
  color:'#F4E5C2' ,fontWeight:500,

};
export const CardPerfil = ({encabezado,titulo,avatar,nombreCanchero,descripcion,contenido}) => {
  return (
    <ThemeProvider theme={theme}>
        
    <Box sx={{textAlign: 'center', marginY:2,backgroundColor:'#295F4E',borderRadius:3,p:4, m:2 } }>
      <Typography variant="h3">{encabezado}</Typography>
      <Typography variant="h1">{titulo}</Typography>
      <Typography>
      
      <AdminPanelSettingsOutlinedIcon sx={{color:'#F4E5C2' ,width:60,height:60}}/>
      
      </Typography>
      <Typography>
      
      </Typography>
      
      
    </Box>
    </ThemeProvider>
  )
}
