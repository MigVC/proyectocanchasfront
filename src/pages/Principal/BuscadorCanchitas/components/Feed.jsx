import { Box, Grid } from '@mui/material';
import { CardCanchas } from '../../../../components/layouts/CardCanchas';


export const Feed = ({canchaList}) => {
  return (
    <Box flex={3} p={5} sx={{ marginX: { md: 4, xs: 3 } , marginTop:-5}}>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={3}>
            {canchaList.map((value, index) => (
              <Grid key={index} item>
                <CardCanchas
                  image={value.image}
                  nombre={value.nombre}
                  description={value.description}
                  ubicacion={value.ubicacion}
                  estado={value.estado}
                  owner={value.owner}
                  calificacion={value.calificacion}
                  aparcamiento={value.cantAparcamiento}
                  isValid={value.isValid}
                  precioHora={value.precioHora}
                  person={'Canchero'}
                  button={'Ver'}
                  link={'/canchitas/'}
                  id={value.nombre}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
