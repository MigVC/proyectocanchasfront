import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const CardCanchas = () => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://donpotrero.com/img/posts/2/medidas_lg.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Canchita el Futbolero
        </Typography>
        <Typography variant="body2" color="text.secondary">
          La canchita esta en perfectas condiciones 
          Contamos con baños limpios 
          Tienda y Barra
          Alquilamos polos, pelotas
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
        <Button size="small">Reservar</Button>
      </CardActions>
    </Card>
  );
}
