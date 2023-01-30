import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
      primary: {
        main: '#295F4E',
      },
      secondary: {
        main: '#6DB193',
      },
      textColor:{main:'#323232'},
      otherColor:{main:'#F4E5C2' },
      buttonColor:{main:teal[300] 
      },
      buttonColorHover:{main:teal[100] },
      iconNavbar:{main:"#fafafa"}
    },
    typography:['Montserrat']
  });


//NavBar
export const stylesNavBar= {
  root: {
    background: 'linear-gradient(45deg, #295F4E 40%, #6DB193 80%)',
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

