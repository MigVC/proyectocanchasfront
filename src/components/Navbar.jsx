import React from 'react'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { AppBar, Box, Button, IconButton, Link, Modal, styled, Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
import { teal } from '@mui/material/colors';
import { Login } from '../pages/Login';

//Trabajar con href o to ?

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
  
const drawerWidth = 240;
const navItems = ['Iniciar', 'Registrarse'];
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[300],
    '&:hover': {
      backgroundColor: teal[100],
    },
  }));
export const Navbar = () => {
    
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link style={{textDecoration:"none", color:"black"}} href="/">
            <Typography variant="h6" sx={{ my: 2 }}>
                Canchitas
            </Typography>
        </Link>
        <Divider />
        <List>
            <ListItem  key={navItems[0]} disablePadding>
                <Link style={{textDecoration:"none", color:"black",flexGrow:1}}> 
                    <ListItemButton onClick={handleOpen} style={{flexGrow:1}}>
                    <ListItemText primary={navItems[0]} />
                    </ListItemButton>
                </Link>
            </ListItem>
            {/*Llamamos Ventana Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Login/>
                </Box>
            </Modal>
            <ListItem  key={navItems[1]} disablePadding>
                <Link style={{textDecoration:"none", color:"black"}} href={`/${navItems[1]}`}> 
                <ListItemButton >
                    <ListItemText primary={navItems[1]} />
                </ListItemButton>
                </Link>
            </ListItem>
        </List>
    </Box>
  );
    return (
        <AppBar position='sticky' color='primary' >
            <Toolbar>
                <Box sx={{flexGrow: 0.42,display: { sm: 'none',xs:'block' }}}>
                    <IconButton
                        color="iconNavbar"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{  mr: 2,  }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <IconButton                
                    edge="start"
                    color="inherit"
                    // aria-label="menu"
                    sx={{ mr: 2, display:{ xs: 'none', sm: 'block' } }}
                >
                    <Link  href="/">
                    <SportsSoccerIcon color='iconNavbar' sx={{width: 50, height: 50}}/>
                    </Link>
                </IconButton>
                <Typography color={{color:'white'}} variant="h6" component="div" sx={{fontWeight: 'bold',display:{ xs: 'none', sm: 'block' },flexGrow:1 }}>
                    Canchitas Cusco 
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <ColorButton  onClick={handleOpen} key={navItems[0]}  variant="contained" sx={{margin:'8px', color: '#fff' }}>
                        {navItems[0]}
                    </ColorButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Login/>
                        </Box>
                    </Modal>
                    <ColorButton key={navItems[1]}  variant="contained" sx={{margin:'8px', color: '#fff' }}>
                        <nav>
                        <Link style={{textDecoration:"none", color:"white"}} href={`/${navItems[1]}`}>
                        {navItems[1]}
                        </Link>
                        </nav>
                    </ColorButton>
                </Box>
                <IconButton
                   sx={{ position:'relative',display: { xs: 'block', sm: 'none' }, }}
                >
                    <Link href="/">
                    <SportsSoccerIcon color='iconNavbar' sx={{width: 50, height: 50}}/>
                    </Link>
                </IconButton>
            </Toolbar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    
  )
};
