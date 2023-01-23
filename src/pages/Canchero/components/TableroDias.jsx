import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TableroHorarioDia } from './TableroHorarioDia';


function TabPanel(props) {
  const { children,columns, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
         
          <TableroHorarioDia data={children} columns={columns}/>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.object,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export const TableroDias = ({rows,columns}) => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <Box
      
      sx={{ bgcolor: 'background.paper',}}
    >
      
      <Tabs
        orientation='horizontal'
        // variant="scrollable"
        scrollButtons="auto"
        centered
        value={value}
        
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {
        rows.map((value,index)=>(
         <Tab key={value.id} label={value.id} {...a11yProps(index)}  /> 
        ))
      }
        
      </Tabs>
      
      {
        rows.map((row,index)=>(<TabPanel columns={columns} key={row.id} value={value} index={index}>
        {rows[index]}
        
        </TabPanel>))
      }
      
      
    </Box>
    
    </>
  )
}
