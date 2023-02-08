import { Box, Button, Card, Grid, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { style } from '../../theme/style'
import GarageIcon from '@mui/icons-material/Garage';
import SavingsIcon from '@mui/icons-material/Savings';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EditIcon from '@mui/icons-material/Edit';
export const CardCanchita = ({open, setOpen}) => {
  return (
    <Box sx={{borderRadius:3,p:2, marginBottom:5}}>
              <Grid container spacing={2}>
              <Grid sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}  container >
                  <img src='https://i.pinimg.com/originals/70/79/44/70794492c24ea5cf20bcb0605e79d83f.jpg' width={250}  />
                </Grid>
                <Grid item xs={12}  sx={{display:'flex' ,justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                <Typography sx={{fontFamily:style.typography,fontSize:14, fontWeight:400, color:'gray'}}>
                  La canchita esta en perfectas condiciones Contamos con baños limpios Tienda y Barra Alquilamos polos, pelotas, etc.
                </Typography>
              </Grid>
                <Grid item xs={6} sx={{display:'flex' ,justifyContent:'end',alignItems:'center',}}>
                  <Typography sx={{fontFamily:style.typography,}}>
                    <SavingsIcon sx={{color:'gray'}}/> S/.60
                  </Typography>
              </Grid>
                <Grid item  xs={6}sx={{display:'flex' ,justifyContent:'start',alignItems:'center'}}>
                <Typography sx={{fontFamily:style.typography,}}>
                <GarageIcon sx={{color:'gray'}}/> 8
              </Typography >
                </Grid>
                <Grid item xs={12}sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{fontFamily:style.typography,}}>
                <FmdGoodIcon sx={{color:'gray'}}/> Av Los Geraneos 113
              </Typography>
                </Grid>
                <Grid item xs={12}sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <Tooltip
                  title='Editar Canchita'
                  aria-label='editar'>
                  <Button sx={{fontFamily:style.typography,}} variant='contained' onClick={() => setOpen(true)}>
                    Editar <EditIcon style={{marginLeft:3,width:15,height:15}}/>
                  </Button>
                </Tooltip>
                </Grid>
                
                
              </Grid>
              </Box>
  )
}
