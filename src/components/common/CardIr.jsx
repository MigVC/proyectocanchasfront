import { Box, Button} from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { buttonStyle, style, themeTypographyCard } from '../../theme/style';
import {Canchita}  from '../../assets/icons/canchita';
import imagen from '../../assets/images/Perfil.jpg'
export const CardIr = ({encabezado,titulo,button,link}) => {
  return (
    <ThemeProvider theme={themeTypographyCard}>
        
    <Box sx={{textAlign: 'center', marginY:2,background:`linear-gradient(190deg, #212121  10%, rgba(0, 0, 0, 0.25)80%), url(${imagen});`,borderRadius:3,p:4, m:2,backgroundRepeat:'no-repeat',
    backgroundPosition:'center', 
    backgroundSize:'cover', } }>
      <Typography variant="h3">{encabezado}</Typography>
      <Typography variant="h1">{titulo}</Typography>
      

      <Canchita color={'#fffde7'}/>
      
      <Typography>
      <Link to={link} style={style.link}>
      <Button variant='contained' sx={{...buttonStyle.button,backgroundColor:'rgba(0,0,0,0.7)'}}>{button}</Button>
      </Link>
      </Typography>
      
      
    </Box>
    </ThemeProvider>
  )
}
