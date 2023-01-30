import React from 'react'
import { Box, Button, Fab, Grid, Stack, Zoom } from '@mui/material'
import { CardCanchas } from '../../components/layout/CardCanchas';
import { CardCanchitas } from './components/CardCanchitas';
import { stylesNavBar } from '../../context/theme';
import FondoCanchero from '../../assets/images/FondoCanchero.jpg'
import { Link } from 'react-router-dom';
import { TextoCentrado } from '../../components/TextoCentrado'

import { Agregar } from '../../components/Agregar';
import { TextoPortada } from '../../components/TextoPortada';

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
      <Box sx={{
          position:'relative',
          backgroundImage:`url(${FondoCanchero})`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center', 
          backgroundSize:'cover',
          height:{xs:'30vh',md:'50vh'},
          display:'flex',
          justifyContent:'center'      
          
        }}>
        <Box alignContent='center' sx={{textAlign: 'center', p:{xs:1,md:5,sm:2},marginTop:{xs:3,md:2,sm:1}}}>
        <div style={{justifyContent:'space-between'}}>
          <TextoPortada 
            titulo={'!Bienvenido Canchero!'}
            contenido={'Aquí podras encontrar todas tus canchas y modificar tus horarios'}
            button={'Ver perfil'}
            page={'perfil'}
            />
          </div>
        </Box>
        
        </Box>
      <Box>
        
        
        <Box >
          <TextoCentrado encabezado={'Todas tus Canchitas'} contenido={'recuerda verificar tus horarios y cambiar el estado cuando hagan una reserva'}/>
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
