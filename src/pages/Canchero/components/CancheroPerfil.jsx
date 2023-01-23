import { Box, Button,Container,Grid, Paper} from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Outlet } from 'react-router-dom'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ContactEmergencyRoundedIcon from '@mui/icons-material/ContactEmergencyRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Fondo2 from '../../../assets/images/Fondo2.jpg'
export const CancheroPerfil = () => {
  return (
    <Box >
      <Container component="main" maxWidth='sm' sx={{mt:8,fontFamily:'Montserrat'}}>
        <Paper elevation={2}>
        <Paper elevation={0} style={{padding:30,backgroundImage:`url(${Fondo2})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center', 
        backgroundColor:'#212121',
        backgroundSize:'cover',borderEndEndRadius:0,borderEndStartRadius:0}}>
          <Grid item  xs={6} sx={{textAlign:'center',fontSize:40,marginBottom:-12,fontWeight:560,color:'white'}}>
            <div >Canchero</div>
            <div style={{justifyContent: 'center',display: 'flex',}}>
              <Avatar alt="Remy Sharp" sx={{
                m: 2, width: 150, height: 150, border: '5px solid #eeeeee', bgcolor: 'gray',
                p: 2,
                }}
                src="https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/10/16/634c017d3b29104a0834810c.webp" 
                >
              </Avatar>
            </div>
          </Grid>
        </Paper>
        <Paper elevation={0} style={{padding:50,borderStartStartRadius:0,borderStartEndRadius:0}}> 
        <Box sx={{textAlign:'end',marginTop:-2}}>
          <Button>
            <EditRoundedIcon style={{color:'gray'}}/>
          </Button>
        </Box>
        <Box sx={{textAlign:'center', fontSize:20,fontWeight:700}}>
          <div>Jose Alquimides Quispe</div>
        </Box>
        <Box sx={{fontSize:15,fontWeight: 300}}>
          <Grid item  xs={6} my={2} >
            <LocationOnRoundedIcon style={{color:'gray'}} />
            <div style={{display:'inline',marginLeft:5}}>Wanchaq Urb - 328</div>
          </Grid>
        </Box>   
        <Box >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={2}>
              DNI
            </Grid>
            <Grid item xs={2} sx={{textAlign:'end'}}>
              <ContactEmergencyRoundedIcon/>
            </Grid>
            <Grid item xs={8} sx={{textAlign:'start'}}>
              72802363
            </Grid>
            <Grid item xs={2}>
              Telf
            </Grid>
            <Grid item xs={2} sx={{textAlign:'end'}}>
              <PhoneRoundedIcon />
            </Grid>
            <Grid item xs={8} sx={{textAlign:'start'}}>
              951260282
            </Grid>
            <Grid item xs={2} >
              Email
            </Grid>
            <Grid item xs={2} sx={{textAlign:'end'}}>
              <EmailRoundedIcon/>
            </Grid>
            <Grid item xs={8} sx={{textAlign:'start'}}>
              example@gmai.com
            </Grid>
          </Grid>
        </Box> 
        </Paper>     
        </Paper>               
      </Container>
      <Outlet/>
    </Box>
  )
}
