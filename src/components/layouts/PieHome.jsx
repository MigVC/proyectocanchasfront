import { Grid, Typography } from '@mui/material';
import React from 'react';
import { contributors } from '../../data/Contributors';
import { style } from '../../theme/style';
import { CardContrib } from './CardContrib';



export const PieHome = () => {
  return (
    <div className='text-center colorprim p-1' style={{"fontFamily":"montserrat"}}>
      <div className='mx-3 animate__animated animate__fadeIn'>
        <Grid container  p={4} >
          <Grid item  xs={12}>
          <Typography sx={{fontFamily:style.typography,color:'white',fontSize:29,fontWeight:700}}>CANCHITAS CUSCO</Typography>
          <Typography sx={{fontFamily:style.typography,color:'white',fontSize:14,fontWeight:300}}>Trabajamos para brindarte la mejor experiencia y encontrar la canchita perfecta para ti</Typography>
          </Grid>
          <Grid item xs={2}>
            
          </Grid>

        </Grid>
        <hr align="center "  size="3"  />
      </div>
      <Typography sx={{fontFamily:style.typography,color:'white',fontSize:21}}>Equipo de desarrollo</Typography>
          <div className='row d-flex  text-light justify-content-center mt-3'>
          {
            contributors.map((contributor) => (
              <div className='col-lg-2 col-md-4 col-sm-6' key={contributor.correo}>
                <CardContrib values={contributor}  />
              </div>

            ))
          }


        </div>
        <hr align="center "  size="4"  />
      <div className='my-3' >
      
              <span className='text-light'>  © Elaborado en 2023 </span>
      </div>
    </div>
  )
}
