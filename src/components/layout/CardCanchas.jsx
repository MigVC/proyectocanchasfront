import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar, Grid, IconButton, Rating, Stack } from '@mui/material';
export const CardCanchas = () => {
  const [star, setStar] = useState(3);
  const [hoverStar, setHoverStar] = useState(0);
  
  return (
    <Card sx={{color:'#323232',
    backgroundColor:'rgba(52, 52, 52, alpha)', 
    overflow:'hidden', transition:'0.3s',
    animation:'ease-in','&:hover':{transform:'scale(1.05)'},
    maxWidth: 300}}>
      <CardMedia
        sx={{p:1,borderRadius:3}}
        component="img"
        alt="green iguana"
        height="140"
        image="https://donpotrero.com/img/posts/2/medidas_lg.jpg"
      />
      <CardContent sx={{alignContent:'center',alingContent:'center'}}>
        <Grid container sx={{marginTop:-2}}>
          <Grid item xs={6}>
            <Typography sx={{fontSize:20,fontWeight:600,marginBottom:1}}>
              Balón de Oro
            </Typography>
          </Grid>
          <Grid item xs={6}  justifyContent='space-between'textAlign={'end'} >
            <Typography sx={{fontSize:15,fontWeight:600}}>
                    S/. 50
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.secondary" sx={{fontSize:10,fontWeight:200,marginBottom:1,marginTop:-1}}>
              <RoomIcon style={{heigth:'20',width:'10'}}/>
              Whanchaq 213 Av Tupac
            </Typography>
          </Grid>
          <Grid item xs={3}  sx={{textAlign:'start'}} >
            <Avatar sx={{width:40,height:40}} alt="Remy Sharp" src="https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/10/16/634c017d3b29104a0834810c.webp" />
          </Grid>
          <Grid item xs={5} >
            <Grid item xs={12}>
              <Typography sx={{fontSize:10,fontWeight:700,textAlign:'start'}}>
                Victor Martinez
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{fontSize:10,fontWeight:300,textAlign:'start'}}>
                Canchero
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{marginBottom:1}} >
            <Typography sx={{textAlign:'end'}}>
            <Rating name="read-only" size='small' value={star} readOnly />
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:1, fontSize:12}} >
          La canchita esta en perfectas condiciones 
          Contamos con baños limpios 
          Tienda y Barra
          Alquilamos polos, pelotas
        </Typography>
      </CardContent>
      <CardActions  >
        <Grid container item sx={{marginX:2,marginTop:-1}}>
          <Grid item xs={6} justifyContent='space-between'>
            <Button style={{left:1,backgroundColor:'#6DB193',color:'white', fontWeight:600,fontSize:13}} size="small" variant='contained'  startIcon={<NavigateNextIcon />}>Ver</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
