import { Box, List, ListItem, ListItemText, MenuItem, TextField } from '@mui/material'
import React from 'react'

const Valores = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


export const Feed = () => {
  return (
    <Box bgcolor='lightcyan' flex={3}>
      <List>
        <ListItem>
          <ListItemText>
          <TextField
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
      </List>
    </Box>
  )
}
