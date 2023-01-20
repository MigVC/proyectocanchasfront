import React from 'react'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

//Trabajar con href o to ?


export const NavbarUsuario = () => {
    
  

    return (
        <>
        <AppBar position='absolute' color='primary' >
            <Toolbar>
                
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
                    Canchitas sdgsdsCusco 
                </Typography>
                
                
            </Toolbar>
            
        </AppBar>
        <Outlet/>
        </>
    
  )
};
