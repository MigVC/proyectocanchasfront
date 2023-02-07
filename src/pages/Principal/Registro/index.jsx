import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { style } from '../../../theme/style'
import { FormCanchero } from './components/FormCanchero'
import Registro from '../../../assets/images/Registro.jpg'
import { TextoPortada } from '../../../components/common/TextoPortada'
export const InfoRegistro = () => {
    return (
        <div >
            <Box sx={{alignItems:'center' ,textAlign:'center', alignContent:'center'}}>
            <Grid container >
                <Grid item xs={12} md={6} p={4} sx={{backgroundColor:style.color.letraDark,backgroundImage:`url(${Registro})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <Typography my={'30%'} sx={{fontFamily:style.typography,color:style.color.letra,fontSize:29,fontWeight:600}}>
                    Si eres dueño de una cancha, puedes registrar tu negocio en nuestra página completamente gratis.
                </Typography>
                <TextoPortada>
                    
                </TextoPortada>
                </Grid>
                <Grid item xs={12} md={6} >
                <FormCanchero />
                </Grid>
            </Grid>
            </Box>
            
                 
        </div>
    )
}
