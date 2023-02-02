import React, { useState } from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import {  Grid, Paper,TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { TableroDias } from './components/TableroDias';
import { TableActionsCanchero, tableActionsUsuario } from './components/UpdateEstado';
import FondoHorario from '../../../assets/images/FondoHorario.jpg'
import { TextoPortada } from '../../../components/common/TextoPortada';
import { RigthBar } from '../../../components/layouts/RigthBar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { headerStyle, style } from '../../../theme/style';
import {TextoCentrado} from '../../../components/common/TextoCentrado'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const rows = [
  {
    id:'Lunes',
    horas:[{
      name:'7:00 am - 8:00 am',
      status:'Disponible',
    },
    {
      name:'9:00 am - 10:00 am',
      status: 'Reservado',
    } ,
    {
      name:'1:00 pm - 2:00 pm',
      status: 'Deshabilitado',
    },
    {
      name:'2:00 am - 3:00 am',
      status:'Disponible'
    },
    {
      name:'3:00 am - 4:00 am', 
      status:'Reservado'
    },]
      
  },
  {
    id:'Martes',horas:[
      {
        name:'8:00 am - 9:00 am',
        status:'Deshabilitado',
      },
      {
        name:'10:00 am - 11:00 am',
        status: 'Disponible',
      } ,
      {
        name:'1:00 pm - 2:00 pm',
        status: 'Deshabilitado',
      },
      {
        name:'2:00 am - 3:00 am',
        status:'Disponible'
      },
      {
        name:'3:00 am - 4:00 am', 
        status:'Reservado'
      },
    ]
  },
  {
    id:'Miercoles',horas:[
      {
        name:'7:00 am - 8:00 am',
        status:'Reservado',
      },
     {
        name:'9:00 am - 10:00 am',
        status: 'Reservado',
      } ,
      {
        name:'1:00 pm - 2:00 pm',
        status: 'Reservado',
      },
      {
        name:'2:00 am - 3:00 am',
        status:'Deshabilitado'
      },
      {
        name:'3:00 am - 4:00 am', 
        status:'Reservado'
      },
    ]
  },
  {
    id:'Jueves',horas:[
      {
        name:'7:00 am - 8:00 am',
        status:'Reservado',
      },
      {
        name:'9:00 am - 10:00 am',
        status: 'Reservado',
      } ,
      {
        name:'1:00 pm - 2:00 pm',
        status: 'Deshabilitado',
      },
      {
        name:'2:00 am - 3:00 am',
        status:'Reservado'
      },
      {
        name:'3:00 am - 4:00 am', 
        status:'Reservado'
      },
    ]
  },
  {
    id:'Viernes',horas:[
      {
        name:'7:00 am - 8:00 am',
        status:'Disponible',
      },
      {
        name:'9:00 am - 10:00 am',
        status: 'Reservado',
      } ,
      {
        name:'1:00 pm - 2:00 pm',
        status: 'Deshabilitado',
      },
      {
        name:'2:00 am - 3:00 am',
        status:'Reservado'
      },
      {
        name:'3:00 am - 4:00 am', 
        status:'Reservado'
      },
    ]
  },
  {
    id:'Sabado',horas:[
      {
        name:'7:00 am - 8:00 am',
        status:'Disponible',
      },
      {
        name:'9:00 am - 10:00 am',
        status: 'Reservado',
      } ,
      {
        name:'1:00 pm - 2:00 pm',
        status: 'Reservado',
      },
      {
        name:'2:00 am - 3:00 am',
        status:'Disponible'
      },
      {
        name:'3:00 am - 4:00 am', 
        status:'Reservado'
      },
    ]
  },
  {
    id:'Domingo',horas:[
      {
        name:'7:00 am - 8:00 am',
        status:'Reservado',
      },
      {
        name:'9:00 am - 10:00 am',
        status: 'Reservado',
      } ,
      {
        name:'1:00 pm - 2:00 pm',
        status: 'Deshabilitado',
      },
      {
        name:'2:00 am - 3:00 am',
        status:'Reservado'
      },
      {
        name:'3:00 am - 4:00 am', 
        status:'Deshabilitado'
      },
      
    ],
    
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
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [hour, setHour] = useState(new Date())
  
  
  console.log(hour)
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{fontFamily:'Montserrat'}}>
      <Box sx={{
          ...headerStyle,
          backgroundImage:`url(${FondoHorario})`,
        }}>
        <Box alignContent='center' sx={{textAlign: 'center', p:{xs:1,md:5,sm:2},marginTop:{xs:3,md:2,sm:1}}}>
        <div style={{justifyContent:'space-between'}}>
          <TextoPortada
            titulo={`Horario de la Canchita ${params.cancheroid}`}
            contenido={'Los mejores amigos los regala el futbol'}
            />
          </div>
        </Box>
      </Box>

      <Box>
        <TextoCentrado
        encabezado={''}
        titulo={'ATENCIÓN'}
        contenido={'Antes de elegir el horario ten en cuenta lo siguiente'}
        />
      </Box>
      <Box>
        <Box sx={{ p:4,textAlign: 'center',color:'gray',backgroundColor:'rgb(244, 229, 194,0.2)' }}>
          <Grid container >
            <Grid item xs={4}>
              <Grid item xs={12}>
              <QueryBuilderIcon sx={{color:'#33c9dc',width: {md:100,sm:75,xs:50}, height:{md:100,sm:75,xs:50}}}/>
              </Grid>
              <Grid item xs={12}>
              <Typography style={style.typography}>
                  Encuentra el horario perfecto para ti 
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
              <TimerOutlinedIcon sx={{color:'#f50057',width: {md:100,sm:75,xs:50}, height:{md:100,sm:75,xs:50}}} />
              </Grid>
              <Grid item xs={12}>
              <Typography style={style.typography}>
                  Actualiza la pagina si ya pasó la hora
              </Typography>
              </Grid>
            
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
              <DateRangeIcon sx={{color:'#ffc400',width: {md:100,sm:75,xs:50}, height:{md:100,sm:75,xs:50}}}/>
              </Grid>
              <Grid item xs={12}>
              <Typography style={style.typography}>
                  Selecciona la Fecha que deseas
              </Typography>
              </Grid>
            
            </Grid>
            
          </Grid>
          
        </Box>
        <Box sx={{ p:4,textAlign: 'center',backgroundImage:`url(${FondoHorario})`,marginTop:4}}>
          <Grid container justifyItems='center' alignContent='center' justifyContent='center' textAlign='center'>
          
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',borderRadius:50 ,maxWidth:1600 ,}}
      >
      
      
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          InputProps={{sx:{borderRadius:50,height:40,color:'grey','& .MuiSvgIcon-root':{}}}}
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        
          
      </LocalizationProvider>
    </Paper>
            
            
           
          </Grid>
        
        </Box>
        <Box >
        
        <>
        
      <Box>

      </Box>
      <Box sx={{ p:4,textAlign: 'center' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={8}  justifyContent='center' alignContent='center' alignItems='center' 
        >
          <Grid item xs={12}>
              <Typography style={{...style.typography,color:style.color.letraDark,fontSize:35,fontWeight:800}} >HORARIO</Typography>
            </Grid>
          <TableroDias rows={rows} columns={columns}/>
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
      
    </Box>
    
  );
}