import { Box, Grid } from '@mui/material';
import { CardCanchas } from '../../../../components/layouts/CardCanchas';


export const Feed = ({canchaList}) => {
  return (
    <Box flex={3} sx={{ marginX: { md: 4, xs: 3 } }}>
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
                  isValid={value.isValid}
                  precioHora={value.precioHora}
                  person={'Canchero'}
                  button={'Ver'}
                  link={'/canchero/canchita/'}
                  id={index}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
