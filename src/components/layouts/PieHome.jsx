import { Grid, Typography } from '@mui/material';
import React from 'react';
import { contributors } from '../../data/Contributors';
import { style } from '../../theme/style';
import { CardContrib } from './CardContrib';
import LogoCanchitas from '../../assets/Logo/LogoCanchitas.png'


export const PieHome = ({seccion}) => {
  return (
    <div className='banner text-center colorprim p-1' style={{"fontFamily":"montserrat"}}>
      <div className='mx-3 animate__animated animate__fadeIn'>
        <Grid container  p={4} >
          <Grid item  xs={12}>
          <img src={LogoCanchitas} style={{}} height={95} width={250} />
          <Typography sx={{fontFamily:style.typography,color:'white',fontSize:14,fontWeight:300}}>Trabajamos para brindarte la mejor experiencia y encontrar la canchita perfecta para ti</Typography>
          </Grid>
          <Grid item xs={2}>
            
          </Grid>

        </Grid>
        <hr align="center "  size="3"  />
      </div>
      {
        seccion && 
        <>
        <Typography sx={{fontFamily:style.typography,color:'white',fontSize:21}}>Equipo de desarrollo</Typography>
          <Grid>
          <div className='row m-0 d-flex  text-light justify-content-center mt-3'>
          {
            contributors.map((contributor) => (
              <div className='col-lg-2 col-md-4 col-sm-6' key={contributor.correo}>
                <CardContrib values={contributor}  />
              </div>
              
            ))
          }
          </div>
          </Grid>
          
          <hr align="center "  size="4"  />
        </>
      }
          
       
      <div className='my-3' >
      <span className='text-light'>  © Elaborado en 2023 </span>
      </div>
    </div>
  )
}
