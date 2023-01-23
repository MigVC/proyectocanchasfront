import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const CardCanchitas = ({props}) => {
  const [star, setStar] = useState(3);
  const [hoverStar, setHoverStar] = useState(0);
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          La canchita esta en perfectas condiciones 
          Contamos con baños limpios 
          Tienda y Barra
          Alquilamos polos, pelotas
        </Typography>
      </CardContent>
      <CardActions>
        
        
        <Stack direction="row" spacing={2} justifyContent='space-between'>

        <Link style={{textDecoration:"none"}} to={`/canchero/canchita/${props.id}`}>
        <Button style={{left:1,}} size="small" startIcon={<ReadMoreIcon />}>Ver</Button></Link>
        <div >
        {[1,2,3,4,5].map((index)=>{
          const valueStar=index
          
        return(
          <label key={valueStar} style={{margin:0.05,}}>
          <input type='radio' 
          name='rating' 
          value={valueStar} 
          style={{display:'none'}} 
          
          onClick={()=>setStar(valueStar)} />
          <StarRoundedIcon  
          onMouseEnter={()=>setHoverStar(valueStar)}
          onMouseLeave={()=>setHoverStar(0)}
          style={{color:valueStar <= (hoverStar||star)?'#ffd600':'#e0e0e0'}} />
          </label>
        )})}
        </div>
        </Stack>
      </CardActions>
    </Card>
  );
}
