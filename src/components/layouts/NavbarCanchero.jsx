import React from 'react';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { style, stylesNavBar } from '../../theme/style';
import { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext';
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

  return (
    <>
      <AppBar position='sticky' style={stylesNavBar.root}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Link to={Page[0].link}>
              <SportsSoccerIcon
                color='iconNavbar'
                sx={{
                  width: 50,
                  height: 50,
                  display: { xs: 'none', md: 'flex' },
                  mr: 1,
                }}
              />
            </Link>
            <Typography
              variant='h6'
              noWrap
              color={{ ...style.color.letra }}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: style.typography,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              {Page[0].name}
            </Typography>
            <Link to={Page[0].link}>
              <SportsSoccerIcon
                color='iconNavbar'
                sx={{
                  display: { width: 40, height: 40, xs: 'flex', md: 'none' },
                  mr: 1,
                }}
              />
            </Link>
            <Typography
              variant='h5'
              component='div'
              color={{ color: 'white' }}
              sx={{
                // mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: style.typography,
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              {Page[0].name}
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Configuraciones'>
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2 }}>
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    alt='Remy Sharp'
                    src='https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/10/16/634c017d3b29104a0834810c.webp'
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
