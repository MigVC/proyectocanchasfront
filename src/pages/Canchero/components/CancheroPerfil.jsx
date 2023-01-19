import styled from '@emotion/styled';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const CancheroPerfil = () => {
  return (
    <Box>
      
      <Stack>
        
      <Box component="span" sx={{ p:4,textAlign: 'center', border: '1px dashed grey' }}>
      <h1>Canchero</h1>
    </Box>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>
    <Box flex={1}>
        <Card  >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jose Alquimides "2do Quispe"
        </Typography>
        <Typography variant="body2" color="text.secondary">
          8965390
        </Typography>
        <Typography variant="body2" color="text.secondary">
          972492905
        </Typography>
      </CardContent>
      <CardActions  >
        
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
    </Box>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
      <img  width="300" height="200"
      src="https://www.epicentrochile.com/wp-content/uploads/2019/02/referencia1-720x404.jpg" />
      
       </Item>
  </Grid>
  
</Grid>
          
         
        </Stack>
        <Outlet/>
    </Box>
  )
}
