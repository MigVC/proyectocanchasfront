import {
  Box,
  Grid,
  IconButton,
  Modal,
  Rating,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link, Outlet } from 'react-router-dom';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ContactEmergencyRoundedIcon from '@mui/icons-material/ContactEmergencyRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Perfil2 from '../../../assets/images/Canchero.jpg';
import { TextoCentrado } from '../../../components/common/TextoCentrado';
import { EncabezadoPerfil } from './components/EncabezadoPerfil';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import { CardIr } from '../../../components/common/CardIr';
import { FormUpdatePerfil } from './components/FormUpdatePerfil';
import { style } from '../../../theme/style';
import { AuthUserContext } from '../../../context/AuthUserContext';
import {PieHome} from '../../../components/layouts/PieHome'
export const CancheroPerfil = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthUserContext);

  return (
    <Box>
      <EncabezadoPerfil
        imagen={Perfil2}
        titulo={user.nombres ? user.nombres : 'Nombre de Canchero'}
        contenido={'CANCHERO'}
        avatar={user?.avatar}
      />
      <Box sx={{ fontFamily: 'Montserrat' }}>
        <Box
          sx={{
            textAlign: 'end',
            marginTop: { md: -8, xs: -6, sm: -7 },
            marginRight: { md: 8, xs: 1, sm: 3 },
          }}
        >
          <Tooltip title='Editar Perfil' aria-label='editar'>
            <IconButton onClick={() => setOpen(true)}>
              <ManageAccountsIcon
                sx={{
                  color: 'primary',
                  width: { md: 50, sm: 40, xs: 30 },
                  height: { md: 50, sm: 40, xs: 30 },
                }}
              />
            </IconButton>
          </Tooltip>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={{ ...style.modal, height: '650px' }}>
              <FormUpdatePerfil />
            </div>
          </Modal>
        </Box>
        <Box
          sx={{
            fontSize: { xs: 15, sm: 20 },
            marginTop: { md: -8, xs: -6, sm: -7 },
            fontWeight: 300,
            mx: { xs: 0, sm: 6, md: 20 },
          }}
        >
          <Grid container marginLeft={{ md: 20, sm: 23 }}>
            <Grid
              item
              xs={12}
              marginY={1}
              sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}
            >
              <LocationOnRoundedIcon style={{ color: 'gray' }} />
              <div style={{ display: 'inline' }}>
                {user.ubication ? user.ubication : 'Wanchaq Urb - 328'}
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ textAlign: { md: 'start', sm: 'start', xs: 'center' } }}
            >
              <Typography>
                <Rating name='read-only' value={5} readOnly />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgb(244, 229, 194,0.1)',
          fontFamily: 'Montserrat',
          color: '#323232',
          marginTop: 3,
        }}
      >
        <Grid
          container
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Grid container sx={{ textAlign: 'center', marginTop: 2 }}>
              <Grid
                item
                xs={12}
                mx={{ md: 8, sm: 8, xs: 8 }}
                sx={{ overflow: 'auto' }}
              >
                <ContactEmergencyRoundedIcon
                  sx={{ marginRight: { md: 3, sm: 2, xs: 1 } }}
                />
                {user.dni ? user.dni : '72802363'}
              </Grid>
              <Grid
                item
                xs={12}
                mx={{ md: 8, sm: 8, xs: 8 }}
                sx={{ overflow: 'auto' }}
              >
                <PhoneRoundedIcon
                  sx={{ marginRight: { md: 3, sm: 2, xs: 1 } }}
                />
                {user.telefono ? user.telefono : '951260282'}
              </Grid>
              <Grid
                item
                xs={12}
                mx={{ md: 8, sm: 8, xs: 8 }}
                sx={{ overflow: 'auto' }}
              >
                <EmailRoundedIcon
                  sx={{ marginRight: { md: 3, sm: 2, xs: 1 } }}
                />
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#295F4E',
                    fontWeight: 400,
                  }}
                >
                  {user.correo ? user.correo : 'giovdeyabrahmoficial@gmai.com'}
                </Link>
              </Grid>
            </Grid>
            <EmojiEventsRoundedIcon
              sx={{ width: 90, height: 90, color: '#ffc107' }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <CardIr
              titulo={'CANCHAS'}
              button={'Ir'}
              encabezado={'Administra tus'}
              link={'/canchero'}
            />
          </Grid>
        </Grid>
      </Box>
      <TextoCentrado
        encabezado={'MUY PRONTO NUEVAS FUNCIONALIDADES'}
        titulo={'CANCHITAS CUSCO'}
        contenido={'Gracias por tu preferencia'}
      />
      <PieHome/>
      <Outlet />
    </Box>
  );
};
