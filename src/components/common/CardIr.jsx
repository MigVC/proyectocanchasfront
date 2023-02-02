import { Box, Button} from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { buttonStyle, style, themeTypographyCard } from '../../theme/style';
export const CardIr = ({encabezado,titulo,button,link}) => {
  return (
    <ThemeProvider theme={themeTypographyCard}>
        
    <Box sx={{textAlign: 'center', marginY:2,backgroundColor:'#295F4E',borderRadius:3,p:4, m:2 } }>
      <Typography variant="h3">{encabezado}</Typography>
      <Typography variant="h1">{titulo}</Typography>
      <Typography>
      
      <AdminPanelSettingsOutlinedIcon  sx={{marginY:2,color:style.color.alternate ,width:60,height:60}}/>
      
      </Typography>
      <Typography>
      <Link to={link} style={style.link}>
      <Button variant='contained' sx={buttonStyle.buttonWhite}>{button}</Button>
      </Link>
      </Typography>
      
      
    </Box>
    </ThemeProvider>
  )
}
