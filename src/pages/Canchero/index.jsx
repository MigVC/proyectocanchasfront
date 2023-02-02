import React from 'react'
import { Box,Grid} from '@mui/material'
import { CardCanchas } from '../../components/layouts/CardCanchas';
import FondoCanchero from '../../assets/images/FondoCanchero.jpg'
import { TextoCentrado } from '../../components/common/TextoCentrado'
import { ButtonAgregar } from '../../components/common/ButtonAgregar';
import { TextoPortada } from '../../components/common/TextoPortada';
import { headerStyle } from '../../theme/style';
import { canchasMock } from '../../data/canchasMock';

export const DashBoardCanchero = () => {
  const Datacanchitas=[
    {
    name:'Juega Todo',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MQiGvTuFBYLKKzAk6obwiImrQKrbJT6wXZsgO2egRX31zUTPrm3aPtmj5TDVTR03tLk&usqp=CAU",
    id:'1',
    
    },
    {
    name:'Fubolero',
    image:"https://elcomercio.pe/resizer/85mMZONoevBOy5n7-dpBRTG0reQ=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/43YD4AODEFET5PU7CLWFQHLDUU.jpg",
    id:'2',
    
    },
    {
    name:'Juega Todo',
    image:"https://donpotrero.com/img/posts/2/medidas_lg.jpg",
    id:'134624',
    
    },
    {
    name:'Fubolero',
    image:"data:image/jpeg;base64,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",
    id:'7',
    
    },
    
  ]
  return (
    <Box>
      <Box sx={{
          ...headerStyle,
          backgroundImage:`url(${FondoCanchero})`,
        }}>
        <Box alignContent='center' sx={{textAlign: 'center', p:{xs:1,md:5,sm:2},marginTop:{xs:3,md:2,sm:1}}}>
        <div style={{justifyContent:'space-between'}}>
          <TextoPortada 
            titulo={'!Bienvenido Canchero!'}
            contenido={'Aquí podras encontrar todas tus canchas y modificar tus horarios'}
            button={'Ver perfil'}
            page={'perfil'}
            />
          </div>
        </Box>
      </Box>
      <Box>
        <Box >
          <TextoCentrado encabezado={'Todas tus Canchitas'} titulo={'EN UN SOLO LUGAR'} contenido={'recuerda verificar tus horarios y cambiar el estado cuando hagan una reserva'}/>
          <Box  flex={3} sx={{marginX:{md:4,xs:3}}}>
            <Grid sx={{ flexGrow: 1 }} container>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={3}>
                {canchasMock.map((value, index) => (
                  <Grid key={value.id} item>
                    <CardCanchas
                  image={value.image}
                  nombre={value.nombre}
                  description={value.description}
                  ubicacion={value.ubicacion}
                  estado={value.estado}
                  owner={value.owner}
                  calificacion={value.calificacion}
                  isValid={value.isValid}
                  precioHora={value.precioHora}
                  button={'Ver'}
                  link={'/canchero/canchita/'}
                  id={index}
                />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            </Grid>
          </Box>
        </Box>
        <ButtonAgregar/>
      </Box>
      
    </Box>
  )
}
