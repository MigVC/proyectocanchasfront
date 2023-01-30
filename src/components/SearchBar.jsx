import { Box, Grid, List, ListItem, ListItemText, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { stylesNavBar } from '../context/theme';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export const SearchBar = () => {
  const [value, setValue] = React.useState(dayjs().toDate());
  const [timePickerValue, setTimePickerValue] = React.useState(dayjs('2022-04-07'));

  return (
    <div >
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',borderRadius:50 ,maxWidth:1600 ,}}
      >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{  m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
      <Divider sx={{  m: 0.5 }} orientation="vertical" />
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
        <Divider sx={{ color:'black', height: 28, m: 0.5 }} orientation="vertical" />
          <TimePicker
            InputProps={{sx:{borderRadius:50,height:40,color:'grey','& .MuiSvgIcon-root':{}}}}
            value={timePickerValue}
            minTime={dayjs().hour('20:00')}
            maxTime={dayjs().hour('21:00')}
            onChange={(newValue) => setTimePickerValue(newValue)}
            renderInput={(params) => <TextField style={{borderRadius:59,backGround:'black'}} {...params} />}
          />
      </LocalizationProvider>
    </Paper>
    </div>
  )
}
