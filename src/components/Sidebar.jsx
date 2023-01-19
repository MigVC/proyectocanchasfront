import { Box, List, ListItem, ListItemText, MenuItem, TextField } from '@mui/material'
import React from 'react'


 const Valores = [
  {
    value: 'USD',
    label: 'Canchita',
  },
  {
    value: 'EUR',
    label: 'Canchita2',
  },
  {
    value: 'BTC',
    label: 'Canchita3',
  },
  {
    value: 'JPY',
    label: 'Canchita4',
  },
];
export const Sidebar = () => {
  return (
    <Box bgcolor='grey' flex={1}>
      <Box component="span" sx={{ p:2,textAlign: 'center', border: '1px dashed grey' }}>
      <h1>Filtros</h1>
      </Box>
      <List >
        <ListItem>
          <ListItemText  >
          <TextField fullWidth 
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {Valores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField >
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
          <TextField fullWidth
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {Valores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
          <TextField fullWidth
          type='date'
        >
          
        </TextField>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
          <TextField fullWidth
          type='time'
        >
          
        </TextField>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  )
}
