import React from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import { Tablero } from '../components/Tablero';
import { Button, Grid, Paper, Stack, Table } from '@mui/material';
import { styled } from '@mui/system';
import { TableroDias } from '../components/TableroDias';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { TableActionsCanchero } from '../../../components/tableActions';

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
      width: 200,
      type: 'actions',
      headerName: 'Editar',
      actions:[TableActionsCanchero]      
  }
]

export const TableroCanchita = () => {
    const params= useParams();
    
  return (
    <Box sx={{flexGrow:1}}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={6} >
          <Item > <h1>Horario de la Canchita {params.cancheroid}</h1></Item>
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
      <Stack sx={{ p:8,textAlign: 'center', border: '1px dashed grey' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} 
        >
          <TableroDias rows={rows} columns={columns}/>
        </Grid>
        
      </Grid>
      </Stack>
    </Box>
    
  );
}