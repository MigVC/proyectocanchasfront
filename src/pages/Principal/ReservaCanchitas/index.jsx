import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import {  Grid, Paper,TextField, Typography } from '@mui/material';
import FondoHorario from '../../../assets/images/FondoHorario.jpg'
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
import { TableroDias } from '../../Canchero/AdminCanchitas/components/TableroDias';
import { InfoReservaCanchita } from './components/InfoReservaCanchita';
import { TextoHeader } from '../../../components/common/TextoHeader';
import {PieHome} from '../../../components/layouts/PieHome'
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
      field: 'reservar',
      width: 250,
      type: 'actions',
      headerName: 'Reservar',
      actions:[InfoReservaCanchita]      
  }
]
export const TableroCanchitaUsuario = () => {
  const params=useParams();
  const { setHorario, fecha } = useContext(HorarioContext);
  const [dia, setDia] = React.useState((new Date(fecha).getDay()-1)===-1? 6: (new Date(fecha).getDay()-1));
  return (
    <Box sx={{fontFamily:'Montserrat'}}>
      <Box sx={{
          ...headerStyle,
          backgroundImage:`url(${FondoHorario})`,
          // background: `linear-gradient(#e66465, #9198e5) url(${FondoHorario})` 
        }}>
        <Box my={{xs:5}} alignContent='center' sx={{textAlign: 'center', p:{xs:1,md:5,sm:2},}}>
        <div style={{justifyContent:'space-between'}}>
          <TextoHeader
            encabezado={'HORARIO DE LA CANCHITA'}
            titulo={`${params.canchitaid.toLocaleUpperCase()}`}
            contenido={'Los mejores amigos los regala el futbol'}
            />
          </div>
        </Box>
      </Box>
      <Box sx={{marginTop:-2,}}>
        <TextoCentrado
        encabezado={'Usuario '}
        titulo={'ATENCIÓN'}
        contenido={'Antes de elegir el horario ten en cuenta lo siguiente'}
        />
      </Box>
      <Box>
        <Box sx={{p:2, marginTop:-3,display:'flex',alignItems:'center',paddingX:{md:10,xs:2},textAlign: 'center',color:'gray',backgroundColor:'rgb(244, 229, 194,0.1)' }}>
          <Grid container spacing={5} >
            <Grid item xs={4}>
              <Grid item xs={12}>
              <TimerOutlinedIcon sx={{color:'#f50057',width: {md:70,sm:68,xs:50}, height:{md:70,sm:68,xs:50}}} />
              </Grid>
              <Grid item xs={12}>
              <Typography style={style.typography}>
                  Actualiza la pagina si ya pasó la hora
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
              <DateRangeIcon sx={{color:'#ffc400',width: {md:70,sm:68,xs:50}, height:{md:70,sm:68,xs:50}}}/>
              </Grid>
              <Grid item xs={12}>
              <Typography style={style.typography}>
                  Selecciona la Fecha que deseas
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
              <QueryBuilderIcon sx={{color:'#33c9dc',width: {md:70,sm:68,xs:50}, height:{md:70,sm:68,xs:50}}}/>
              </Grid>
              <Grid item xs={12}>
              <Typography style={style.typography}>
                  Encuentra el horario perfecto para ti 
              </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        
        <Box >
        <>
          <Box sx={{ p:4,textAlign: 'center' }}>
            <Grid container spacing={2} px={{md:6,xs:1}}>
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
          <TableroDias habilitado={'usuario'} rows={rows} dia={dia} setDia={setDia} columns={columns}/>
          </Box>
                
              </Grid>
              <Grid item xs={12} sm={12} md={4}  
              >
                <RigthBar/>
              </Grid>
            </Grid>
          </Box>
        </>
        </Box>
      </Box>
      <PieHome/>
    </Box>
  )
}
