import React from 'react'
import { Box, Button, Fab, Grid, Stack, Zoom } from '@mui/material'
import { CardCanchas } from '../../components/layout/CardCanchas';
import { CardCanchitas } from './components/CardCanchitas';
import { stylesNavBar } from '../../context/theme';
import CanchitaNoche from '../../assets/images/CanchitaNoche.jpg'
import { Link } from 'react-router-dom';

import { Agregar } from '../../components/Agregar';

export const DashBoardCanchero = () => {
  const [spacing, setSpacing] = React.useState(2);
  const Datacanchitas=[
    {
    name:'Juega Todo',
    image:"https://donpotrero.com/img/posts/2/medidas_lg.jpg",
    id:'134634',
    
    },
    {
    name:'Fubolero',
    image:"https://donpotrero.com/img/posts/2/medidas_lg.jpg",
    id:'2',
    
    },
    {
    name:'Juega Todo',
    image:"https://donpotrero.com/img/posts/2/medidas_lg.jpg",
    id:'134624',
    
    },
    {
    name:'Fubolero',
    image:"https://donpotrero.com/img/posts/2/medidas_lg.jpg",
    id:'7',
    
    },
    
  ]
  return (
    <Box>
      <Box sx={{ fontFamily:'Montserrat' }}>
        
        <Box sx={{p:8,fontFamily:'Montserrat',color:'white',backgroundRepeat:'no-repeat',backgroundPosition:'center', 
        position:'relative',
        backgroundImage:`url(${CanchitaNoche})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center', 
        backgroundColor:'#212121',
        // opacity:0.85,
        backgroundSize:'cover',
        display:'flex',
        
        }}>
          
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sx={{fontSize:33,fontWeight:660,}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                <Grid item xs={12} >
                  <div>¡Bienvenido Canchero! </div>
                </Grid>
                <Grid item xs={12}>
                  <h6  >Aquí podrás ver todas las reservas de tus canchitas registradas </h6>
                </Grid>
                <Grid item xs={12}>
                  <Link style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{fontFamily:'Montserrat',fontWeight: 600,backgroundColor:'#52b202',color:'white','&:hover':{backgroundColor:'#33691e'}}} >
                      ver Perfil
                    </Button>
                  </Link>
                </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{p:4,fontFamily:'Montserrat'}}>
          <Box sx={{textAlign:'center',fontSize:46,fontWeight:700,color:'#30c444'}}>
            Canchitas
          </Box>
          <Box sx={{p:6,fontFamily:'Montserrat'}} >
            <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {Datacanchitas.map((value) => (
                  <Grid key={value.id} item>
                    <CardCanchitas props={value} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            </Grid>
          </Box>
        </Box>
        <Agregar/>
      </Box>
      
    </Box>
  )
}
