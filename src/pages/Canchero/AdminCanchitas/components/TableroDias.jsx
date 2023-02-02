import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TableroHorarioDia } from './TableroHorarioDia';


function TabPanel(props) {
  const { row,columns, value, index} = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
   >
      {value === index && (
        <Box sx={{ p: 3 }}>
         
          <TableroHorarioDia data={row} columns={columns}/>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const TableroDias = ({rows,columns}) => {
  const [value, setValue] = React.useState(1);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <Box
      
      sx={{ maxWidth: { xs: 500, sm: 750 },bgcolor: 'background.paper',}}
    >
      
      <Tabs
        orientation='horizontal'
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderColor: 'divider' }}
      >
        {
        rows.map((value,index)=>(
         <Tab key={value.id} label={value.id}  /> 
        ))
      }
        
      </Tabs>
      
      {
        rows.map((row,index)=>(<TabPanel columns={columns} row={row} key={row.id} value={value} index={index}/>))
      }
      
      
    </Box>
    
    </>
  )
}
