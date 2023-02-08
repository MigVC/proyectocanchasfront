import { Box, Button, Grid, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { buttonStyle, style } from '../../theme/style'
import GarageIcon from '@mui/icons-material/Garage';
import SavingsIcon from '@mui/icons-material/Savings';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EditIcon from '@mui/icons-material/Edit';
import imagen from '../../assets/images/Perfil4.jpg'
export const CardCanchita = ({open, setOpen}) => {
  return (
        <Box sx={{textAlign: 'center', marginY:2,background:`linear-gradient(190deg, #212121  10%, rgba(0, 0, 0, 0.6)80%), url(${imagen});`,borderRadius:3,p:4, m:2,backgroundRepeat:'no-repeat',
        backgroundPosition:'center', 
        backgroundSize:'cover', } }>
              <Grid container spacing={2}>
              <Grid sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}  container >
                  <img alt='' src='https://i.pinimg.com/originals/70/79/44/70794492c24ea5cf20bcb0605e79d83f.jpg' width={250}  />
                </Grid>
                <Grid item xs={12}  sx={{display:'flex' ,justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                <Typography sx={{fontFamily:style.typography,fontSize:14, fontWeight:400, color:style.color.letra}}>
                  La canchita esta en perfectas condiciones Contamos con baños limpios Tienda y Barra Alquilamos polos, pelotas, etc.
                </Typography>
              </Grid>
                <Grid item xs={6} sx={{display:'flex' ,justifyContent:'end',alignItems:'center',}}>
                  <Typography sx={{fontFamily:style.typography,color:style.color.letra}}>
                    <SavingsIcon sx={{color:style.color.letra}}/> S/.60
                  </Typography>
              </Grid>
                <Grid item  xs={6}sx={{display:'flex' ,justifyContent:'start',alignItems:'center'}}>
                <Typography sx={{fontFamily:style.typography,color:style.color.letra}}>
                <GarageIcon sx={{color:style.color.letra}}/> 8
              </Typography >
                </Grid>
                <Grid item xs={12}sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{fontFamily:style.typography,color:style.color.letra}}>
                <FmdGoodIcon sx={{color:style.color.letra}}/> Av Los Geraneos 113
              </Typography>
                </Grid>
                <Grid item xs={12}sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <Tooltip
                  title='Editar Canchita'
                  aria-label='editar'>
                  <Button sx={{...buttonStyle.button,backgroundColor:'rgba(0,0,0,0.7)'}} variant='contained' onClick={() => setOpen(true)}>
                    Editar <EditIcon style={{marginLeft:3,width:15,height:15}}/>
                  </Button>
                </Tooltip>
                </Grid>
                
                
              </Grid>
              </Box>
  )
}
