import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { Feed } from './components/Feed';
import Chimpunes from '../../../assets/images/Chimpunes.jpg';
import { TextoCentrado } from '../../../components/common/TextoCentrado';
import { headerStyle } from '../../../theme/style';
import { useCanchaSearch } from '../../../hooks/useCanchaSearch';
import { PieHome } from '../../../components/layouts/PieHome';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
export const DashBoard = () => {
  const { canchaList } = useCanchaSearch();
  const [canchaFiltered, setCanchaFiltered] = useState([]);
  const [term, setTerm] = useState('');
  
  useEffect(() => {
    if (term.length === 0) {
      return setCanchaFiltered([]);
    }
    console.log(isNaN(Number(term)));
    setCanchaFiltered(
      canchaList.filter(
        (cancha) =>
          cancha.nombre.toLocaleLowerCase().includes(term.toLocaleLowerCase()) |
          cancha.description
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()) |
          cancha.ubicacion
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()) |
          cancha.description
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()) |
          cancha.description
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()) |
          cancha.precioHora
            .toString()
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()) |
          cancha.cantAparcamiento
            .toString()
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase())
      )
    );
  }, [term]);

  return (
    <div className='background'>
      <Box >
        <Box
          sx={{
            backgroundImage: `url(${Chimpunes})`,
            ...headerStyle,
          }}
        >
          <Box
            alignContent='center'
            sx={{
              textAlign: 'center',
              p: { xs: 1, md: 15 },
              marginY: { xs: 10, md: 0 },
            }}
          >
            <div style={{ justifyContent: 'space-between' }}>
              <SearchBar searcher={(text) => setTerm(text)} />
            </div>
          </Box>
        </Box>
        <Box justifyContent='space-between'>
          <TextoCentrado
            encabezado={'Todos los Resultados'}
            titulo={'LAS MEJORES CANCHITAS EN CUSCO'}
            contenido={
              'aquí tenemos solo calidad, recuerde verificar la ubicación y hora de la canchita que desea alquilar'
            }
          />
          {(term.length === 0 ? canchaList : canchaFiltered).length===0?
          <>
          <Box sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <SentimentVeryDissatisfiedIcon sx={{width:50,height:50,color:'gray'}}/>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:-4}}>
            <TextoCentrado contenido={'No se encontraron Canchitas'} />
          </Box>
          </>
          :
          <Feed canchaList={term.length === 0 ? canchaList : canchaFiltered} />}
          
        </Box>
      </Box>
      <PieHome/>
    </div>
  );
};
