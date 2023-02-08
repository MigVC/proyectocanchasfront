import { Box} from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import imagen from '../../assets/images/Registro.jpg'
import { themeTypographyCard } from '../../theme/style';

export const CardPerfil = ({encabezado,titulo,avatar,nombreCanchero,descripcion,contenido}) => {
  return (
    <ThemeProvider theme={themeTypographyCard}>
        
        <Box sx={{textAlign: 'center', marginY:2,background:`linear-gradient(190deg, #212121  10%, rgba(0, 0, 0, 0.25)80%), url(${imagen});`,borderRadius:3,p:4, m:2,backgroundRepeat:'no-repeat',
      backgroundPosition:'center', 
      backgroundSize:'cover', } }>
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
