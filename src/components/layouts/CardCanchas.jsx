import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar, Grid, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { buttonStyle, style } from '../../theme/style';
export const CardCanchas = ({
  image,
  nombre,
  description,
  ubicacion,
  estado,
  owner,
  calificacion,
  isValid,
  precioHora,
  person,
  button,
  link,
  id,
}) => {
  console.log({image});
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        overflow: 'hidden',
        transition: '0.3s',
        animation: 'ease-in',
        '&:hover': { transform: 'scale(1.05)' },
        maxWidth: 300,
      }}
    >
      <CardMedia
        sx={{ p: 1, borderRadius: 3 }}
        component='img'
        alt='canchita'
        height='140'
        image={image[0]}
      />
      <CardContent sx={{ alignContent: 'center', alingContent: 'center' }}>
        <Grid container sx={{ marginTop: -2 }}>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 1,
                ...style.typography,
              }}
            >
              {nombre}
            </Typography>
          </Grid>
          <Grid item xs={3} justifyContent='space-between' textAlign={'end'}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 1,
                ...style.typography,
              }}
            >
              S/. {precioHora}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                ...style.typography,
                color: style.color.grey,
                fontSize: 10,
                fontWeight: 400,
                marginBottom: 1,
                marginTop: -1,
              }}
            >
              <RoomIcon style={{ heigth: '20', width: '10' }} />
              {ubicacion}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'start' }}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='Remy Sharp'
              src={owner.avatar}
            />
          </Grid>
          <Grid item xs={5}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  textAlign: 'start',
                  ...style.typography,
                }}
              >
                {owner.nombres}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 300,
                  textAlign: 'start',
                  ...style.typography,
                }}
              >
                {person}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ marginBottom: 1 }}>
            <Typography sx={{ textAlign: 'end' }}>
              <Rating name='read-only' size='small' value={calificacion} readOnly />
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            marginTop: 1,
            fontSize: 12,
            fontWeight: 400,
            ...style.typography,
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container item sx={{ marginX: 2, marginTop: -1 }}>
          <Grid item xs={6} justifyContent='space-between'>
            <Link style={{ textDecoration: 'none' }} to={`${link}${id}`}>
              <Button
                sx={{
                  ...style.typography,
                  left: 1,
                  ...buttonStyle.button,
                  fontWeight: 600,
                  fontSize: 13,
                }}
                size='small'
                variant='contained'
                startIcon={<NavigateNextIcon />}
              >
                {button}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
