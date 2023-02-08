import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import {  Button, Card, CardActions, CardContent, Grid, IconButton, Modal, Paper,TextField, Tooltip, Typography } from '@mui/material';
import { TableroDias } from './components/TableroDias';
import { TableActionsCanchero } from './components/UpdateEstado';
import FondoHorario from '../../../assets/images/FondoHorario.jpg'
import Perfil4 from '../../../assets/images/Bar.jpg'
import { TextoPortada } from '../../../components/common/TextoPortada';
import { RigthBar } from '../../../components/layouts/RigthBar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { headerStyle, style } from '../../../theme/style';
import {TextoCentrado} from '../../../components/common/TextoCentrado'
import { HorarioContext } from '../../../context/HorarioContext';
import EditIcon from '@mui/icons-material/Edit';
import { FormUpdateCanchita } from './components/FormUpdateCanchita';
import { TextoHeader } from '../../../components/common/TextoHeader';
import { PieHome } from '../../../components/layouts/PieHome';
import GarageIcon from '@mui/icons-material/Garage';
import SavingsIcon from '@mui/icons-material/Savings';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import InsightsIcon from '@mui/icons-material/Insights';
const rows = [
  {
    id:'Lunes',
  },
  {
    id:'Martes',
  },
  {
    id:'Miercoles',
  },
  {
    id:'Jueves',
  },
  {
    id:'Viernes',
  },
  {
    id:'Sabado',
  },
  {
    id:'Domingo',
  },
  
];

const columns = [
  {
      width: 200,
      field: 'name',
      headerName: 'Hora',
      type: 'string'
  },
  {
      
      field: 'status',
      headerName: 'Estado',
      type: 'string'
  },
  {
      field: 'editar',
      width: 250,
      type: 'actions',
      headerName: 'Editar',
      actions:[TableActionsCanchero]      
  }
]

export const TableroCanchita = () => {
  const params= useParams();
  const [open, setOpen] = useState(false);

  const closeModal = (eventClose) => {
    setOpen(eventClose);
  };
  const { setHorario, fecha } = useContext(HorarioContext);
  const [dia, setDia] = React.useState((new Date(fecha).getDay()-1)===-1? 6: (new Date(fecha).getDay()-1));
  return (
    <Box sx={{fontFamily:'Montserrat'}}>
      <Box sx={{
          ...headerStyle,
          backgroundImage:`url(${FondoHorario})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'
        }}>
        <Box my={{xs:5}} alignContent='center' sx={{textAlign: 'center', p:{xs:1,md:5,sm:2},}}>
        <div style={{justifyContent:'space-between'}}>
          <TextoHeader
            encabezado={'HORARIOS'}
            titulo={`ADMINISTRA TU CANCHITA`}
            contenido={'Los mejores amigos los regala el futbol'}
            />
          </div>
        </Box>
      </Box>
      <Box textAlign='right' p marginRight={5} >
        
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={{ ...style.modal}}>
            <FormUpdateCanchita/>
          </div>
        </Modal>
        </Box>
      {/* <Box marginTop={-5}>
        <TextoCentrado
        encabezado={'CANCHERO'}
        titulo={'EDITA LA INFORACIÓN DE TU CANHITA'}
        contenido={'Antes de elegir el horario ten en cuenta lo siguiente'}
        />
      </Box> */}
      <Box marginTop={1} marginBottom={5} paddingX={{md:25,xs:3}} style={{justifyContent:'center',textAlign:'center',}}>
        <Grid container spacing={2}>
          
          <Grid item xs={6} >
          <Card >
            <CardContent >
              <ManageHistoryIcon sx={{width:50,height:50 ,color:'#ff9100'}}/>
              <Typography sx={{fontFamily:style.typography,fontWeight:700,fontSize:20}}>
                Optimiza tus Horarios
              </Typography>
              <Typography sx={{ mb: 1.5,fontFamily:style.typography,fontSize:12 }} color="text.secondary">
                Ten un registro organizado de las reservas
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={6}>
          <Card >
            <CardContent >
              
              <InsightsIcon sx={{width:50,height:50,color:'#00bcd4'}}/>
              <Typography sx={{fontFamily:style.typography,fontWeight:700,fontSize:20}}>
                Genera más ganancias
              </Typography>
              <Typography sx={{ mb: 1.5,fontFamily:style.typography,fontSize:12 }} color="text.secondary">
                Todas las personas pueden econtrar tu negocio
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          
        </Grid>
      </Box>


      <Box >
        <Box sx={{background:`linear-gradient(190deg, #212121  10%, rgba(0, 0, 0, 0.5)80%), url(${Perfil4});`,backgroundRepeat:'no-repeat',backgroundSize:'cover',display:'flex' ,justifyContent:'center',alignItems:'center',marginTop:-2}}>
          <TextoHeader
          titulo={'EL GOLAZO'}
          />
        </Box>
        
        
        <Box >
        <>
          <Box sx={{ p:4,textAlign: 'center' }}>
            
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={8}  justifyContent='center' alignContent='center' alignItems='center' 
              >
                <Grid item xs={12}>
                    <Typography style={{...style.typography,color:style.color.letraDark,fontSize:35,fontWeight:800}} >HORARIO</Typography>
                  </Grid>
                  <Grid container justifyItems='center' alignContent='center' justifyContent='center' textAlign='center'>
            <Paper
              component="form"
              elevation={0}
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',borderRadius:50 ,maxWidth:1600 ,m:2}}
            >
            <LocalizationProvider  dateAdapter={AdapterDayjs} >
              <DatePicker
              
                InputProps={{sx:{borderRadius:50,height:40,color:'grey','& .MuiSvgIcon-root':{}}}}
                value={fecha}
                
                minDate={dayjs(new Date(new Date() -1))}
                onChange={(newValue) => {
                  setHorario(newValue);
                  setDia((new Date(newValue).getDay()-1)===-1? 6: (new Date(newValue).getDay()-1))
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </Paper>
          </Grid >
          <Box sx={{display:'flex',justifyContent:'center'}}>
                <TableroDias rows={rows} dia={dia} setDia={setDia} columns={columns}/>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}  
              >
                <RigthBar/>
                <Grid sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}} item xs={12} md={12} >
                <Paper sx={{p:2, marginBottom:5}}>
              <Grid container spacing={2}>
                
                <Grid item xs={12} sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                
                </Grid>
                <Grid item xs={12}  sx={{display:'flex' ,justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                <Typography sx={{fontFamily:style.typography,fontSize:14, fontWeight:400, color:'gray'}}>
                  La canchita esta en perfectas condiciones Contamos con baños limpios Tienda y Barra Alquilamos polos, pelotas, etc.
                </Typography>
              </Grid>
                <Grid item xs={6} sx={{display:'flex' ,justifyContent:'end',alignItems:'center',}}>
                  <Typography sx={{fontFamily:style.typography,}}>
                    <SavingsIcon sx={{color:'gray'}}/> S/.60
                  </Typography>
              </Grid>
                <Grid item  xs={6}sx={{display:'flex' ,justifyContent:'start',alignItems:'center'}}>
                <Typography sx={{fontFamily:style.typography,}}>
                <GarageIcon sx={{color:'gray'}}/> 8
              </Typography >
                </Grid>
                <Grid item xs={12}sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{fontFamily:style.typography,}}>
                <FmdGoodIcon sx={{color:'gray'}}/> Av Los Geraneos 113
              </Typography>
                </Grid>
                <Grid item xs={12}sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
                <Tooltip
                  title='Editar Canchita'
                  aria-label='editar'>
                  <Button sx={{fontFamily:style.typography,}} variant='contained' onClick={() => setOpen(true)}>
                    Editar <EditIcon style={{marginLeft:3,width:15,height:15}}/>
                  </Button>
                </Tooltip>
                </Grid>
                
                
              </Grid>
              </Paper>
              
            </Grid>
            <Paper sx={{p:2}}>
              <Grid sx={{display:'flex' ,justifyContent:'center',alignItems:'center'}}  container >
                  <img src='https://i.pinimg.com/originals/70/79/44/70794492c24ea5cf20bcb0605e79d83f.jpg' width={250}  />
                </Grid>
              </Paper>
              </Grid>
            </Grid>
          </Box>
        </>
        </Box>
      </Box>
      <PieHome/>
    </Box>
    
  );
}