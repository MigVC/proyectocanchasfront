import { TextField } from '@mui/material';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import { useCanchaSearch } from '../../../../hooks/useCanchaSearch';

export const SearchBar = ({ searcher }) => {
  const [value, setValue] = React.useState(dayjs().toDate());
  const { timeSearch, setTimeSearch } = useCanchaSearch();
  return (
    <div>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 50,
          maxWidth: 1600,
        }}
      >
        <IconButton sx={{ p: '10px' }} aria-label='menu'>
          {/* <MenuIcon /> */}
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1,minWidth:20 }}
          placeholder='Busca tus canchitas'
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => searcher(e.target.value)}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
        
        <Divider sx={{ m: 0.5 }} orientation='vertical' />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            InputProps={{
              sx: {
                borderRadius: 50,
                height: 40,
                color: 'grey',
                '& .MuiSvgIcon-root': {},
              },
            }}
            value={value}
            minDate={dayjs('2017-01-01')}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Divider
            sx={{ color: 'black', height: 28, m: 0.5 }}
            orientation='vertical'
          />
          <TimePicker
            InputProps={{
              sx: {
                borderRadius: 50,
                height: 40,
                color: 'grey',
                '& .MuiSvgIcon-root': {},
              },
            }}
            value={timeSearch}
            minTime={dayjs().hour('20:00')}
            maxTime={dayjs().hour('21:00')}
            onChange={(newValue) => setTimeSearch(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Paper>
    </div>
  );
};
