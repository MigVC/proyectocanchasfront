import React from 'react'
import { Box, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { headerStyle, themeTypographyWhite } from '../../../../theme/style';
export const EncabezadoPerfil = ({imagen,titulo,contenido}) => {
  return (
    <ThemeProvider theme={themeTypographyWhite}>
    <Box>
        <Box sx={{
        ...headerStyle,
        backgroundImage:`url(${imagen})`,
        height:{xs:'25vh',sm:'35vh',md:'50vh'},
        justifyContent:{md:'start',sm:'center',xs:'center'},
        
        }}>
            <Box sx={{marginTop:{xs:5,sm:6,md:25}}}>
            <div style={{justifyContent:'space-between'}}>
                <Box sx={{textAlign: {md:'start',sm:'center',xs:'center'}, marginY:2,marginLeft:{md:40} } }>
                    <Typography variant="h2">{titulo}</Typography>
                    <Typography variant="h4">{contenido}</Typography>
                </Box>
            </div>
            </Box>
        </Box>
        <Grid container >
        <Grid item  xs={6} sx={{marginTop:{md:-18,sm:-14,xs:-8},marginLeft:{md:8,sm:6,xs:0}}}>
            <div style={{justifyContent: {md:'start',xs:'center'},display: 'flex',}}>
                <Avatar sx={{
                  m: 2, width: {md:200,sm:150,xs:100}, height:{md:200,sm:150,xs:100}, border: '5px solid #eeeeee', bgcolor: 'gray',
                  }}
                  src="https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/10/16/634c017d3b29104a0834810c.webp" 
                  >
                </Avatar>
                
              </div>
            </Grid>
            
        </Grid>

    </Box>
    </ThemeProvider>
  )
}
