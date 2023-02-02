import { Box, Grid } from '@mui/material';
import React from 'react';
import { CardCanchas } from '../../../../components/layouts/CardCanchas';
import { canchasMock } from '../../../../data/mockCanchas/chanchas';
import { useCanchaSearch } from '../../../../hooks/useCanchaSearch';

export const Feed = () => {
  const { isFetching, simpleCanchaList } = useCanchaSearch();

  return (
    <Box flex={3} sx={{ marginX: { md: 4, xs: 3 } }}>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={3}>
            {canchasMock.map((value, index) => (
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
