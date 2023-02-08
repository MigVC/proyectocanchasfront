import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TableroHorarioDia } from './TableroHorarioDia';
import dayjs from 'dayjs';
import { HorarioContext } from '../../../../context/HorarioContext';


function TabPanel(props) {
  const { habilitado,row,columns, value, index} = props;
  const { setHorario, fecha } = useContext(HorarioContext);
  console.log(fecha)
  console.log(new Date() )
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
   >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {habilitado==='usuario'?
          <>
          {
            (new Date(fecha)).toDateString=== (new Date()).toDateString 
            ?
            <TableroHorarioDia data={row} columns={columns}/>
            :
            <div>
              egag
            </div>

          }
          </>
          :
          <TableroHorarioDia data={row} columns={columns}/>}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const TableroDias = ({habilitado,rows,setDia,dia,columns}) => {
  const { setHorario, fecha } = useContext(HorarioContext);
  const Fecha=new Date(fecha)
    const handleChange = (event, newValue) => {
    if(newValue<dia){
      const losdias=dia-newValue
      setHorario(new Date(Fecha.setDate(Fecha.getDate()-losdias)))
    }
    else{
      const losdias=newValue-dia
      setHorario(new Date(Fecha.setDate(Fecha.getDate()+losdias)))
    }
    setDia(newValue);
    
    
  };
  
  return (
    <>
    <Box
      sx={{ maxWidth: { xs: 400, sm: 650,md:600 },bgcolor: 'background.paper',}}
    >
      <Tabs
        orientation='horizontal'
        variant="scrollable"
        scrollButtons="auto"
        value={(new Date(fecha).getDay()-1)===-1? 6: (new Date(fecha).getDay()-1)}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{  borderColor: 'divider' }}
      >
        {
        rows.map((value,index)=>(
         <Tab key={value.id} label={value.id}  /> 
        ))
      }
      </Tabs>

      {
        rows.map((row,index)=>(<TabPanel habilitado={habilitado} columns={columns} row={row} key={row.id} value={dia} index={index}/>))
      }
      
    </Box>
    </>
  )
}
