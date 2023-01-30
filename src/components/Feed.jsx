import { Box, Grid } from '@mui/material'
import React from 'react'
import { stylesNavBar } from '../context/theme';
import { CardCanchas } from './layout/CardCanchas'


export const Feed = () => {
  
  return (
    <Box flex={3} sx={{marginX:{md:4,xs:3}}}>
      <Grid sx={{ flexGrow: 1 }} container >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2,3,4,5,6].map((value) => (
            <Grid key={value} item>
              <CardCanchas/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </Box>
  )
}
