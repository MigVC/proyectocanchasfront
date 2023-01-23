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


//NavBar
export const stylesNavBar= {
  root: {
    background: 'linear-gradient(45deg, #30c444 40%, #70bc1c 80%)',
    color: 'white',
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  background: {
    background: 'linear-gradient(0deg, #dcedc8 1%, #0000 1%, #dcedc8 90%)',
    color: 'white',
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  titleBackGround: {
    background: 'linear-gradient(70deg,#dcedc8 1%, #0000 35%, #dcedc8 90%)',
    // color: 'white',
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  sideBar: {
    background: 'linear-gradient(90deg, #dcedc8 20%, #0000 90%)',
    // color: 'white',
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  
};

