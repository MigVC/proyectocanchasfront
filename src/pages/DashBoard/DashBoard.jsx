import { Box } from '@mui/material'
import React from 'react'
import { SearchBar } from '../../components/SearchBar'
import { Feed } from '../../components/Feed'
import Chimpunes from '../../assets/images/Chimpunes.jpg'
import { TextoCentrado } from '../../components/TextoCentrado'

export const DashBoard = () => {
  return (
    <div className='background'>
    <Box>
      <Box sx={{
        position:'relative',
        backgroundImage:`url(${Chimpunes})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center', 
        backgroundSize:'cover',
        height:{xs:'30vh',md:'50vh'},
        display:'flex',
        justifyContent:'center'
        }}>
        <Box alignContent='center' sx={{textAlign: 'center', p:{xs:1,md:15},marginTop:{xs:10,md:0}}}>
          <div style={{justifyContent:'space-between'}}>
          <SearchBar/>
          </div>
        </Box>
      </Box>
      <Box justifyContent='space-between'  >
          <TextoCentrado 
          encabezado={'Todos los Resultados'} 
          titulo={'LAS MEJORES CANCHITAS EN CUSCO'} 
          contenido={'aquí tenemos solo calidad, recuerde verificar la ubicación y hora de la canchita que desea alquilar'}
          />
          <Feed/>
      </Box>
      
    </Box>
    </div>
  )
}
