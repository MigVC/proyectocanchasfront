import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { stylesNavBar } from '../../theme/style';
import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
import LogoCanchero from '../../assets/Logo/LogoCanchero.png';
const settings = ['/canchero/perfil', '/canchitas'];
const settingsLabel = ['Perfil', 'Salir'];
const Page = [
  {
    name: 'Canchero',
    path: 'canhero',
    link: '/canchero',
  },
];
export const NavbarCanchero = () => {
  const { logOut } = useContext(AuthUserContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { user } = useContext(AuthUserContext);

  return (
    <>
      <AppBar position='sticky' style={stylesNavBar.root}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex', flexGrow: 1 },
              }}
            >
              <Button
                edge='start'
                color='inherit'
                // aria-label="menu"
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Link to={Page[0].link}>
                  <img
                    alt=''
                    src={LogoCanchero}
                    style={{ display: { xs: 'none', md: 'flex' } }}
                    height={30}
                    width={210}
                  />
                </Link>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Button
                edge='start'
                color='inherit'
                // aria-label="menu"
                sx={{ display: { xs: 'flex', md: 'none' } }}
              >
                <Link to={Page[0].link}>
                  <img
                    alt=''
                    src={LogoCanchero}
                    style={{ display: { xs: 'flex', md: 'none' } }}
                    height={30}
                    width={190}
                  />
                </Link>
              </Button>
            </Box>

            <Box>
              <Tooltip title='Configuraciones'>
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2 }}>
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    alt='Remy Sharp'
                    src={user?.avatar}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={setting}
                    onClick={
                      settingsLabel[index] === 'Salir'
                        ? logOut
                        : () => handleCloseUserMenu()
                    }
                  >
                    <Link
                      style={{ textDecoration: 'none', color: 'grey' }}
                      to={settingsLabel[index] === 'Perfil' && `${setting}`}
                    >
                      <Typography textAlign='center'>
                        {settingsLabel[index]}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
