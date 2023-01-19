import { Box, Grid, List, ListItem, ListItemText, MenuItem, Paper, TextField } from '@mui/material'
import React from 'react'
import { CardCanchas } from './layout/CardCanchas'


export const Feed = () => {
  const [spacing, setSpacing] = React.useState(2);
  return (
    <Box bgcolor='lightcyan' flex={3}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
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
