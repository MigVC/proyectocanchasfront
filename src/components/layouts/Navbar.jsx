import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Modal,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { stylesNavBar } from '../../theme/theme';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { style } from '../../theme/style';
import { LoginCanchero } from '../../pages/Login';
import LogoCanchitasNegro from '../../assets/Logo/LogoCanchitasNegro.png';
import LogoCanchitas from '../../assets/Logo/LogoCanchitas2.png';

const Pages = [
  {
    name: 'Canchero',
    path: 'canchero',
  },
  {
    name: 'Registrarse',
    path: 'registro',
    link: '/registro',
  },
];
const drawerWidth = 240;
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#000000'),
  ...style.typography,
  borderRadius: 56,
  margin: '8px',
  backgroundColor: style.color.secondary,
  '&:hover': {
    backgroundColor: style.color.primary,
  },
}));
export const Navbar = () => {
  //Drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  //Ventana modal 1
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link style={style.linkDark} to='/'>
        <Typography variant='h6' sx={{ my: 2, ...style.typography }}>
          <img
            alt=''
            src={LogoCanchitasNegro}
            style={{}}
            height={50}
            width={140}
          />
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListItem key={Pages[0].path} disablePadding>
          <Link style={style.linkDark}>
            <ListItemButton onClick={handleOpen}>
              <VpnKeyIcon sx={{ margin: 2 }} />
              <ListItemText
                primaryTypographyProps={style.typography}
                primary={Pages[0].name}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style.modal}>
            <LoginCanchero />
          </Box>
        </Modal>
        <ListItem key={Pages[1].path} disablePadding>
          <Link style={style.linkDark} to={Pages[1].link}>
            <ListItemButton>
              <AppRegistrationOutlinedIcon sx={{ margin: 2 }} />
              <ListItemText
                primaryTypographyProps={style.typography}
                primary={Pages[1].name}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <AppBar position='sticky' style={stylesNavBar.root}>
        <Toolbar>
          <Box sx={{ flexGrow: 0.45, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color='iconNavbar'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              edge='start'
              color='inherit'
              // aria-label="menu"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <Link to='/'>
                <img alt='' src={LogoCanchitas} style={{}} height={29} width={380} />
              </Link>
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ColorButton
              onClick={handleOpen}
              key={Pages[0].path}
              variant='contained'
            >
              {Pages[0].name}
            </ColorButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style.modal}>
                <LoginCanchero />
              </Box>
            </Modal>
            <ColorButton key={Pages[1].path} variant='contained'>
              <nav>
                <Link style={style.link} to={Pages[1].link}>
                  {Pages[1].name}
                </Link>
              </nav>
            </ColorButton>
          </Box>
          <IconButton
            sx={{
              position: 'relative',
              display: { xs: 'flex', md: 'none' },
              mr: { xs: 1 },
            }}
          >
            <Link to='/'>
              <img alt='' src={LogoCanchitas} style={{}} height={22} width={250} />
            </Link>
          </IconButton>
        </Toolbar>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'flex', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
      <Outlet />
    </div>
  );
};
