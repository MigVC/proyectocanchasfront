import React from 'react'
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
        light: "skyblue"
      },
      secondary: {
        main: '#f44336',
      },
      otherColor:{main:teal[500] },
      buttonColor:{main:teal[300] 
      },
      buttonColorHover:{main:teal[100] },
      iconNavbar:{main:"#fafafa"}
    },
  });

