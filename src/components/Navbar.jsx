import React from 'react'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { AppBar, Box, Button, IconButton, Modal, styled, Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { green,} from '@mui/material/colors';
import { Login } from '../pages/Usuario/Login';
import { LoginCanchero } from '../pages/Canchero/Login';
import { Outlet } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import {stylesNavBar} from '../context/theme';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
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
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[600]),
    borderRadius:56,
    margin:'8px',
    backgroundColor: green[500],
    
    '&:hover': {
      backgroundColor: green[800],
    //   color:grey[900],
    
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
  //Ventana modal 2
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link style={{textDecoration:"none", color:"black"}} to="/">
            <Typography variant="h6" sx={{ my: 2,marginRight:5 }}>
            <Button>
            <svg width={24} height={24} version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M235 5106 c-93 -29 -167 -95 -207 -181 l-23 -50 -3 -1672 -2 -1671
                26 -21 c35 -28 66 -26 101 3 l28 24 5 1654 c4 1231 8 1658 17 1673 18 31 65
                73 96 84 20 8 717 11 2293 11 2236 0 2265 0 2304 -20 47 -24 76 -63 89 -121 7
                -29 11 -606 11 -1666 l0 -1622 26 -20 c34 -27 64 -27 98 0 l26 21 -2 1681 -3
                1682 -30 54 c-33 60 -87 110 -154 143 l-46 23 -2305 2 c-1839 1 -2313 -1
                -2345 -11z"/>
                <path d="M414 4751 c-70 -42 -64 95 -64 -1567 l0 -1503 26 -20 c52 -41 39 -48
                360 185 l212 154 295 0 c200 0 304 4 321 11 36 17 49 62 31 104 -16 39 -29 44
                -130 47 l-70 3 -17 140 c-9 77 -17 157 -17 178 l-1 37 170 0 170 0 0 -37 c1
                -21 5 -98 10 -172 8 -117 12 -137 31 -157 13 -14 34 -24 50 -24 77 0 89 29 78
                195 -4 72 -8 145 -9 163 l0 32 170 0 170 0 0 -75 c0 -97 16 -132 66 -141 27
                -5 42 -2 62 13 25 19 27 26 30 112 l3 91 199 0 200 0 0 -58 c0 -48 4 -62 23
                -80 29 -27 77 -29 108 -3 18 14 23 31 27 80 l4 61 170 0 169 0 -8 -142 c-11
                -199 -10 -208 16 -230 33 -26 83 -23 110 6 19 20 23 40 31 157 5 74 9 151 10
                172 l0 37 170 0 170 0 -1 -37 c0 -21 -8 -101 -17 -178 l-17 -140 -70 -3 c-101
                -3 -114 -8 -130 -47 -18 -42 -5 -87 31 -104 17 -7 121 -11 321 -11 l295 0 212
                -154 c321 -233 308 -226 360 -185 l26 20 0 1497 c0 1177 -3 1502 -13 1522 -7
                13 -28 35 -46 47 l-34 23 -2116 0 c-2065 0 -2117 -1 -2147 -19z m540 -163 c7
                -32 36 -290 36 -316 0 -22 -2 -22 -179 -22 -162 0 -180 2 -185 18 -6 20 -56
                315 -56 331 0 8 57 11 190 11 189 0 190 0 194 -22z m630 -100 c4 -68 9 -149
                12 -181 l6 -57 -223 2 -224 3 -17 140 c-9 77 -17 157 -17 178 l-1 37 229 0
                229 0 6 -122z m616 -58 l0 -180 -219 0 -219 0 -6 68 c-3 37 -8 118 -12 180
                l-6 112 231 0 231 0 0 -180z m560 0 l0 -180 -200 0 -200 0 0 180 0 180 200 0
                200 0 0 -180z m616 68 c-4 -62 -9 -143 -12 -180 l-6 -68 -219 0 -219 0 0 180
                0 180 231 0 231 0 -6 -112z m623 75 c0 -21 -8 -101 -17 -178 l-17 -140 -224
                -3 -223 -2 6 57 c3 32 8 113 12 181 l6 122 229 0 229 0 -1 -37z m551 26 c0
                -16 -50 -311 -56 -331 -5 -16 -23 -18 -185 -18 -177 0 -179 0 -179 22 0 26 29
                284 36 316 4 22 5 22 194 22 133 0 190 -3 190 -11z m-3536 -531 c6 -29 36
                -297 36 -321 0 -16 -13 -17 -167 -15 l-167 3 -28 160 c-15 88 -27 168 -28 178
                0 16 15 17 175 17 173 0 175 0 179 -22z m600 -100 c4 -68 9 -149 12 -181 l6
                -57 -208 2 -209 3 -20 178 -21 177 217 0 217 0 6 -122z m586 -58 l0 -180 -204
                0 -204 0 -6 63 c-3 34 -8 115 -12 180 l-6 117 216 0 216 0 0 -180z m560 0 l0
                -180 -200 0 -200 0 0 180 0 180 200 0 200 0 0 -180z m586 63 c-4 -65 -9 -146
                -12 -180 l-6 -63 -204 0 -204 0 0 180 0 180 216 0 216 0 -6 -117z m579 -60
                l-20 -178 -209 -3 -208 -2 6 57 c3 32 8 113 12 181 l6 122 217 0 217 0 -21
                -177z m535 160 c-1 -10 -13 -90 -28 -178 l-28 -160 -167 -3 c-154 -2 -167 -1
                -167 15 0 24 30 292 36 321 4 22 6 22 179 22 160 0 175 -1 175 -17z m-3790
                -1016 c89 -516 160 -940 158 -941 -9 -9 -305 -223 -315 -230 -10 -6 -13 209
                -12 1061 0 587 2 1064 4 1058 2 -5 77 -432 165 -948z m3948 -648 l-3 -529
                -160 116 c-88 64 -162 118 -163 120 -2 1 70 429 160 951 l163 948 3 -538 c1
                -296 1 -777 0 -1068z m-3544 1139 c7 -33 36 -299 36 -325 0 -23 -1 -23 -150
                -23 -147 0 -150 0 -155 23 -10 49 -55 315 -55 330 0 15 17 17 160 17 157 0
                160 0 164 -22z m570 -100 c4 -68 9 -151 12 -186 l6 -62 -193 2 -194 3 -20 183
                -21 182 202 0 201 0 7 -122z m556 -63 l0 -185 -189 0 -189 0 -6 73 c-3 39 -9
                123 -12 185 l-7 112 202 0 201 0 0 -185z m560 0 l0 -185 -200 0 -200 0 0 185
                0 185 200 0 200 0 0 -185z m556 73 c-3 -62 -9 -146 -12 -185 l-6 -73 -189 0
                -189 0 0 185 0 185 201 0 202 0 -7 -112z m549 -70 l-20 -183 -194 -3 -193 -2
                6 62 c3 35 8 118 12 186 l7 122 201 0 202 0 -21 -182z m505 165 c0 -15 -45
                -281 -55 -330 -5 -23 -8 -23 -155 -23 -149 0 -150 0 -150 23 0 26 29 292 36
                325 4 22 7 22 164 22 143 0 160 -2 160 -17z m-3235 -535 c8 -48 35 -289 35
                -315 0 -23 -2 -23 -135 -23 -131 0 -135 1 -140 23 -11 50 -55 312 -55 329 0
                16 12 18 145 18 l144 0 6 -32z m539 -90 c4 -68 9 -151 12 -186 l6 -62 -178 2
                -179 3 -20 183 -21 182 187 0 186 0 7 -122z m526 -63 l0 -185 -174 0 -174 0
                -6 73 c-3 39 -9 123 -12 185 l-7 112 187 0 186 0 0 -185z m560 0 l0 -185 -200
                0 -200 0 0 185 0 185 200 0 200 0 0 -185z m526 73 c-3 -62 -9 -146 -12 -185
                l-6 -73 -174 0 -174 0 0 185 0 185 186 0 187 0 -7 -112z m519 -70 l-20 -183
                -179 -3 -178 -2 6 62 c3 35 8 118 12 186 l7 122 186 0 187 0 -21 -182z m475
                164 c0 -17 -44 -279 -55 -329 -5 -22 -9 -23 -140 -23 -133 0 -135 0 -135 23 0
                26 27 267 35 315 l6 32 144 0 c133 0 145 -2 145 -18z m-3085 -534 c6 -29 35
                -290 35 -318 0 -19 -6 -20 -120 -20 -116 0 -120 1 -125 23 -9 37 -55 311 -55
                324 0 10 31 13 130 13 126 0 130 -1 135 -22z m2995 9 c0 -13 -46 -287 -55
                -324 -5 -22 -9 -23 -125 -23 -114 0 -120 1 -120 20 0 28 29 289 35 318 5 21 9
                22 135 22 99 0 130 -3 130 -13z"/>
                <path d="M2340 2231 c-430 -92 -794 -458 -885 -890 -71 -342 36 -699 292 -972
                183 -194 427 -324 672 -360 263 -37 563 42 789 210 581 431 642 1204 134 1707
                -157 157 -368 268 -585 309 -109 21 -309 19 -417 -4z m350 -148 c-1 -10 -117
                -93 -130 -93 -13 0 -129 83 -129 93 -1 4 58 7 129 7 72 0 130 -3 130 -7z
                m-344 -146 l129 -93 3 -146 3 -145 -167 -121 -166 -120 -46 20 c-26 10 -81 36
                -122 56 l-75 37 -49 151 -50 151 33 42 c48 61 184 165 281 216 47 24 88 44 91
                45 4 0 65 -42 135 -93z m653 48 c97 -50 233 -154 282 -216 l33 -42 -50 -151
                -49 -151 -75 -37 c-41 -20 -96 -46 -122 -56 l-46 -20 -166 120 -167 121 3 145
                3 146 129 93 c70 51 130 93 133 93 3 0 44 -20 92 -45z m-1273 -526 l22 -67
                -65 -47 c-36 -25 -67 -44 -70 -41 -7 7 32 142 57 201 14 32 24 45 28 35 3 -8
                15 -45 28 -81z m1724 44 c25 -56 64 -193 57 -199 -3 -3 -34 16 -70 41 l-65 47
                26 79 c15 43 27 79 29 79 1 0 12 -21 23 -47z m-733 -208 c83 -60 150 -112 148
                -115 -1 -3 -28 -85 -59 -182 l-57 -178 -189 0 -189 0 -59 183 -58 182 100 74
                c56 40 124 91 151 112 28 21 53 37 56 36 3 -1 73 -51 156 -112z m-627 -142 c4
                -4 33 -88 64 -185 31 -98 59 -183 62 -191 2 -7 -27 -50 -66 -95 l-71 -82 -166
                2 -167 3 -38 70 c-60 111 -110 286 -113 397 0 4 58 50 129 102 l129 93 115
                -53 c63 -29 118 -56 122 -61z m1314 16 c91 -65 125 -96 122 -108 -2 -9 -7 -43
                -11 -76 -9 -82 -57 -226 -103 -310 l-38 -70 -167 -3 -166 -2 -71 82 c-39 45
                -68 88 -66 95 3 8 31 93 62 191 31 97 60 181 64 186 12 12 213 104 231 105 9
                1 73 -40 143 -90z m-560 -591 l70 -81 -50 -151 -50 -151 -50 -14 c-67 -19
                -341 -19 -408 0 l-50 14 -50 151 -50 151 70 81 69 81 215 0 215 0 69 -81z
                m-765 -210 c13 -40 26 -79 29 -86 7 -21 -112 57 -171 110 l-52 47 86 1 85 0
                23 -72z m1104 24 c-59 -53 -178 -131 -171 -110 3 7 16 46 29 86 l23 72 85 0
                86 -1 -52 -47z"/>
                </g>
            </svg>
            </Button>
                Canchitas
            </Typography>
        </Link>
        <Divider />
        <List>
            <ListItem  key={'iniciarsesion'} disablePadding>
                <Link style={{textDecoration:"none", color:"black",flexGrow:1}}> 
                    <ListItemButton onClick={handleOpen} >
                    <LoginIcon sx={{margin:2}}/>
                    <ListItemText primary={'Iniciar Sesión'} />
                    </ListItemButton>
                </Link>
            </ListItem>
            {/*Llamamos Ventana Modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Login/>
                </Box>
            </Modal>
            <ListItem  key={'canchero'} disablePadding>
                <Link style={{textDecoration:"none", color:"black",flexGrow:1}}> 
                    <ListItemButton onClick={handleOpen2} >
                    <VpnKeyIcon sx={{margin:2}}/>
                    <ListItemText primary={'Canchero'} />
                    </ListItemButton>
                </Link>
            </ListItem>
            {/*Llamamos Ventana Modal */}
            <Modal open={open2} onClose={handleClose2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <LoginCanchero/>
                </Box>
            </Modal>
            <ListItem  key={'registro'} disablePadding>
                <Link style={{textDecoration:"none", color:"black",flexGrow:1}} to={`/registro`}> 
                <ListItemButton>
                    <AppRegistrationOutlinedIcon sx={{margin:2}}/>
                    <ListItemText primary={'Registrarse'} />
                </ListItemButton>
                </Link>
            </ListItem>
        </List>
    </Box>
  );
    return (
        <div>
        <AppBar position='sticky' style={stylesNavBar.root} >
            <Toolbar>
                <Box sx={{flexGrow: 0.42,display: { xs: 'block', md: 'none' }}}>
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
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <Link  to="/">
                    <SportsSoccerIcon color='iconNavbar' sx={{width: 50, height: 50}}/>
                    </Link>
                </IconButton>
                <Typography color={{color:'white'}} variant="h6" component="div" 
                sx={{display: { xs: 'none', md: 'flex' },fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow:1, }}>
                    Canchitas Cusco 
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <ColorButton  onClick={handleOpen} key={'iniciarsesion'}  variant="contained" >
                        Iniciar Sesión
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
                    <ColorButton  onClick={handleOpen2} key={'Canchero'}  variant="contained">
                        Canchero
                    </ColorButton>
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <LoginCanchero/>
                        </Box>
                    </Modal>
                    <ColorButton key={'registro'}  variant="contained" >
                        <nav>
                        <Link style={{textDecoration:"none", color:"white"}} to={`/registroAd`}>
                        Registrarse
                        </Link>
                        </nav>
                    </ColorButton>
                </Box>
                <IconButton
                   sx={{ position:'relative',display: { xs: 'flex', md: 'none' }, }}
                >
                    <Link to="/">
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
                sx={{display: { xs: 'flex', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            
        </AppBar>
        <Outlet/>
        </div>
    
  )
};
