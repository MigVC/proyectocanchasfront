import { Box, Grid } from '@mui/material'
import React from 'react'
import { stylesNavBar } from '../context/theme';
import { CardCanchas } from './layout/CardCanchas'


export const Feed = () => {
  
  return (
    <Box style={{...stylesNavBar.background}} flex={3}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
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
