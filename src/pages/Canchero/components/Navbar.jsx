import React from 'react'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { stylesNavBar } from '../../../context/theme';
import AddBoxIcon from '@mui/icons-material/AddBox';
const settings = ['perfil', '/'];
const settingsLabel = ['Perfil', 'Salir'];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems:'center',
    width: 450,
    height: 450,
    borderRadius: 8,
    flexDirection: 'column',
    backgroundColor: 'white',
    bgcolor: 'background.paper',
    boxShadow: 24,
  };
export const NavbarCanchero = () => {
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <>
        <AppBar position='sticky' style={stylesNavBar.root}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
         <Link to='/canchero'>
          <SportsSoccerIcon color='iconNavbar' sx={{width: 50, height: 50, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            color={{color:'white'}}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow:1,
              
            }}
          >
            Canchero
          </Typography>

          
          <Link  to="/canchero">
          <SportsSoccerIcon color='iconNavbar' sx={{ display: { width: 40, height: 40,xs: 'flex', md: 'none' }, mr: 1 }} />
          </Link>
          <Typography
            variant="h5"
            // noWrap
            component="div"
            
            color={{color:'white'}}
            sx={{
              // mr: 2,
              display: { xs: 'flex', md: 'none' },
              
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              
              textDecoration: 'none',
              flexGrow: 1,
              
            }}
          >
            Canchero
          </Typography>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configuraciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ ml:2, }}>
                <Avatar sx={{width:40,height:40}} alt="Remy Sharp" src="https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/10/16/634c017d3b29104a0834810c.webp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
              {settings.map((setting,index) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link style={{textDecoration:"none", color:"grey"}} to={`/canchero/${setting}`}>
                    <Typography  textAlign="center">{settingsLabel[index]}</Typography>
                    </Link>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
        </AppBar>
        <Outlet/>
        </>
  )
};

