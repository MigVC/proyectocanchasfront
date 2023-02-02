import { createTheme } from '@mui/material/styles';
export const style={
    linkDark:{
        textDecoration:"none", color:"black",flexGrow:1,fontFamily:'Montserrat'
    },
    link:{
        textDecoration:"none", color:"white",flexGrow:1,fontFamily:'Montserrat'
    },
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        alignItems:'center',
        width: 450,
        height: 450,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: 'white',
        bgcolor: 'background.paper',
        boxShadow: 24,
    },
    Fab:{
        position:'fixed',
        bottom:10,
        right:10,
        color: 'common.white',
        bgcolor: '#295F4E',
        '&:hover': {
        bgcolor: '#F4E5C2',
        },
    },
    typography:{
        fontFamily:'Montserrat'
    },
    color:{
        primary:'#295F4E',
        secondary:'#6DB193',
        letraDark:'#323232',
        alternate:'#F4E5C2',
        letra:'white',
        grey:'grey'
    },
    content: {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        top: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        zIndex: 'tooltip'
    },
    

}
export const buttonStyle={
    buttonRadius:{
            borderRadius: 5, 
            backgroundColor: style.color.primary, 
            '&:hover': {
                backgroundColor: style.color.alternate,
                color:style.color.primary,
                
            },
            ...style.typography,
    },
    button:{
            
            backgroundColor: style.color.primary, 
            '&:hover': {
                backgroundColor: style.color.alternate,
                color:style.color.primary,
                
            },
            ...style.typography,
    },
    buttonWhite:{
            
            backgroundColor: style.color.alternate, 
            color:style.color.primary,
            '&:hover': {
                backgroundColor: style.color.primary,
                color:style.color.alternate,
                
            },
            ...style.typography,
    }
   
}
export const headerStyle={
    position:'relative',
    backgroundColor:style.color.letraDark,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center', 
    backgroundSize:'cover',
    height:{xs:'30vh',md:'50vh'},
    display:'flex',
    justifyContent:'center'
   
}
export const themeTypography = createTheme();

themeTypography.typography.h1 = {
    ...style.typography,
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '2.3rem',
    },
    [themeTypography.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
    color:style.color.letraDark,fontWeight:800

};
themeTypography.typography.h2 = {
    ...style.typography,
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
        fontSize: '1.8rem',
    },
    [themeTypography.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    color:style.color.letraDark,fontWeight:800

};
themeTypography.typography.h3 = {
    ...style.typography,
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.3rem',
    },
    [themeTypography.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    color:'#295F4E' ,fontWeight:500,
  
  };
themeTypography.typography.h4 = {
    ...style.typography,
    fontSize: '0.919rem',
    '@media (min-width:600px)': {
        fontSize: '0.915rem',
    },
    [themeTypography.breakpoints.up('md')]: {
        fontSize: '0.98rem',
    },
    color:style.color.letraDark,fontWeight:300

};
themeTypography.typography.h5 = {
    ...style.typography,
    fontSize: '0.5rem',
    '@media (min-width:600px)': {
        fontSize: '0.8rem',
    },
    [themeTypography.breakpoints.up('md')]: {
        fontSize: '1.1rem',
    },
    color:'#323232',fontWeight:300

};
export const themeTypographyWhite = createTheme();

themeTypographyWhite.typography.h1 = {
    ...style.typography,
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '2.8rem',
    },
    [themeTypographyWhite.breakpoints.up('md')]: {
        fontSize: '3.5rem',
    },
    color:'white',fontWeight:800

};
themeTypographyWhite.typography.h2 = {
    fontSize: '2.3rem',
    ...style.typography,
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [themeTypographyWhite.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
  color:'white',fontWeight:700

};
themeTypographyWhite.typography.h3 = {
    ...style.typography,
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.3rem',
    },
    [themeTypographyWhite.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    color:style.color.primary ,fontWeight:500,
  
  };
  themeTypographyWhite.typography.h4 = {
    ...style.typography,
    fontSize: '0.919rem',
    '@media (min-width:600px)': {
        fontSize: '0.915rem',
    },
    [themeTypographyWhite.breakpoints.up('md')]: {
        fontSize: '0.98rem',
    },
    color:'white',fontWeight:300

};
themeTypographyWhite.typography.h5 = {
    ...style.typography,
    fontSize: '0.5rem',
    '@media (min-width:600px)': {
        fontSize: '0.8rem',
    },
    [themeTypographyWhite.breakpoints.up('md')]: {
        fontSize: '1.1rem',
    },
    color:style.color.letraDark,fontWeight:300

};
export const themeTypographyCard = createTheme();

themeTypographyCard.typography.h1 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.3rem',
    },
    [themeTypographyCard.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    color:'white',fontWeight:800
  
  };
  themeTypographyCard.typography.h4 = {
    fontSize: '0.919rem',
    '@media (min-width:600px)': {
      fontSize: '0.915rem',
    },
    [themeTypographyCard.breakpoints.up('md')]: {
      fontSize: '0.93rem',
    },
    color:'#323232',fontWeight:300
  
  };
  themeTypographyCard.typography.h3 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    [themeTypographyCard.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    color:'#F4E5C2' ,fontWeight:500,
  
  };

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