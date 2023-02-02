import { Box, Grid } from '@mui/material'
import React from 'react'
import { CardCanchas } from '../../../../components/layouts/CardCanchas'


export const Feed = () => {
  
  return (
    <Box flex={3} sx={{marginX:{md:4,xs:3}}}>
      <Grid sx={{ flexGrow: 1 }} container >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2,3,4,5,6].map((value) => (
            <Grid key={value} item>
              <CardCanchas
                image={'https://donpotrero.com/img/posts/2/medidas_lg.jpg'}
                titulo={'Balón de Oro'}
                precio={50}
                ubicacion={'Whanchaq 213 Av Tupac'}
                avatar={"https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/10/16/634c017d3b29104a0834810c.webp"}
                nombreCanchero={'Victor Martinez'}
                star={3}
                person={"Canchero"}
                descripcion={'La canchita esta en perfectas condiciones Contamos con baños limpios Tienda y Barra Alquilamos polos, pelotas'}
                button={"Ver"}
                link={'/canchero/canchita/'}
                id={value}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </Box>
  )
}
