import React from 'react';
import { Box, Grid } from '@mui/material';
import { CardCanchas } from '../../components/layouts/CardCanchas';
import FondoCanchero from '../../assets/images/FondoCanchero.jpg';
import { TextoCentrado } from '../../components/common/TextoCentrado';
import { ButtonAgregar } from '../../components/common/ButtonAgregar';
import { TextoPortada } from '../../components/common/TextoPortada';
import { headerStyle } from '../../theme/style';
import { useCanchasCanchero } from '../../hooks/useCanchasCanchero';
import { Loading } from '../../components/common/Loading/Loading';
import {PieHome} from '../../components/layouts/PieHome'
export const DashBoardCanchero = () => {
  const { canchasList, isFetching } = useCanchasCanchero();

  return (
    <Box>
      <Box
        sx={{
          ...headerStyle,
          backgroundImage: `url(${FondoCanchero})`,
        }}
      >
        <Box
          alignContent='center'
          sx={{
            textAlign: 'center',
            p: { xs: 1, md: 5, sm: 2 },
            marginY:8
          }}
        >
          <div style={{ justifyContent: 'space-between' }}>
            <TextoPortada
              titulo={'!BIENVENIDO CANCHERO !'}
              contenido={
                'Aquí podras encontrar todas tus canchas y modificar tus horarios'
              }
              button={'Ver perfil'}
              page={'perfil'}
            />
          </div>
        </Box>
      </Box>
      <Box>
        <Box>
          <TextoCentrado
            encabezado={'Todas tus Canchitas'}
            titulo={'EN UN SOLO LUGAR'}
            contenido={
              'recuerda verificar tus horarios y cambiar el estado cuando hagan una reserva'
            }
          />
          <Box flex={3} sx={{ marginX: { md: 4, xs: 3 } }}>
            <Grid sx={{ flexGrow: 1 }} container>
              <Grid item xs={12}>
                <Grid container justifyContent='center' p={2} spacing={3}>
                  {isFetching ? (
                    <div className='containerLoading'>
                      <Loading />
                    </div>
                  ) : (
                    
                    canchasList.map((value, index) => (
                      <Grid key={value.id} item>
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
                          button={'Ver'}
                          link={'/canchero/canchita/'}
                          id={value.name}
                        />
                      </Grid>
                    ))
                  )}
                  {canchasList.length===0 && 
                  <>
                  <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:-4}}>
                    <TextoCentrado contenido={'Tus canchitas se mostraran aquí'} />
                  </Box>
                  </>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ButtonAgregar />
        <PieHome/>
      </Box>
    </Box>
  );
};
