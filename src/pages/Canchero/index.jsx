import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { CardCanchas } from '../../components/layout/CardCanchas';
export const DashBoardCanchero = () => {
  const [spacing, setSpacing] = React.useState(2);
  return (
    <Box>
      
      <Stack>
        
      <Box component="span" sx={{ p:4,textAlign: 'center', border: '1px dashed grey' }}>
      <h1>Bienvenido Canchero </h1>
      <h3>Todas Tus Canchas </h3>
    </Box>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between" >
        <Box bgcolor='lightcyan' flex={3}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2,3].map((value) => (
            <Grid key={value} item>
              <CardCanchas/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </Box>
        </Stack>
    </Box>
  )
}
