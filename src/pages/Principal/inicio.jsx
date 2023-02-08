import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { TextoCentrado } from '../../components/common/TextoCentrado'
import { TextoInfo } from '../../components/common/TextoInfo'
import { TextoPortada } from '../../components/common/TextoPortada'
import { TextoPortadaBlack } from '../../components/common/TextoPortadaBlack'
import { TextoPrincipal } from '../../components/common/TextoPrincipal'
import { PieHome } from '../../components/layouts/PieHome'
import WifiIcon from '@mui/icons-material/Wifi';
import FondoPrincipal2 from '../../assets/images/FondoPrincipal2.jpg'
export const HomeScreen = () => {
  return (
    <div className='banner'>
      
      <div className='header  row m-0 d-flex align-items-center'>
        
        <div >
          <div className='col-12'>
          <TextoPrincipal
            titulo={'CANCHITAS CUSCO'}
            encabezado={'Encuentra una cancha al instante'}
            contenido={'Busca entre diferentes canchas, filtra por ubicación, tamaño, puntaje y escoge la que mejor se acomode a tu disponibilidad de tiempo.'}
            button={'Ver listado de canchas'}
            />
            
          </div>
        </div>
      </div>

      <div className='row m-0 text-center d-flex justify-content-center w-100 py-4' style={{ "background": "var(--letra)" }}>
        <div className='col-lg-5 col-sm-12 mx-3 my-1 rounded-3' data-aos="fade-up">
          <TextoInfo
          titulo={'¿Eres dueño de una cancha?'}
          contenido={'¡Crea una cuenta completamente gratis y registra tu cancha en nuestra web para que todo el mundo la vea!'}
          pie={'También puedes contratar el paquete premium que te dara acceso a distintas funcionalidades que te ayduarán a gestionar mejor tu negocio.'}
          />
          
        </div>

        <div className='col-lg-5 col-sm-12 mx-3 my-1  rounded-3 ' data-aos="fade-up">
        <TextoInfo
          titulo={'¿Estas buscando una cancha?'}
          contenido={'¡Encuentra la cancha que mejor se acomode a lo que estas buscando!'}
          pie={'Puedes filtrar por lugar, dia y hora. Convoca a toda tu mancha y ya no te quedes con las ganas de esa pichanga con tus patas.'}
          />
          
        </div>

        <div className='col-12'>
          <TextoPortadaBlack
          titulo={'Regístrate ahora y accede a nuestros beneficios'}
          contenido={'¡No lo dudes más!'}
          button={'Registrarse'}
          page={'/registro'}
          l
          />
          

        </div>
      </div>
      <Box style={{backgroundImage:`url(${FondoPrincipal2}`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
      <div className='row m-0 text-center text-light ' style={{"fontFamily":"montserrat"}}>
          <div className='col-12 '>
            <div className='container my-5'>
            <Box >
            <TextoPortada
              titulo={'¿Qué nos caracteriza?'}
            />
            </Box>
              <div className='row'>
                <div className='col-lg-6 col-sm-12 p-4'>
                  <ion-icon name="wifi-outline" data-aos="zoom-in"></ion-icon><br />
                  <b className="fs-4">Reserva online</b><br />
                  <span>Selecciona una cancha, escoge la hora y reserva al instante.</span>
                </div>
                <div className='col-lg-6 col-sm-12 p-4'>
                  <ion-icon name="search-circle-outline" data-aos="zoom-in"></ion-icon><br />
                  <b className="fs-4">Busca entre cientos de canchas</b><br />
                  <span> Encuentra tu cancha favorita y que mejor se adapte a lo que estas buscando. </span>
                </div>
                <div className='col-lg-6 col-sm-12 p-4 '>
                  <ion-icon name="star-half-outline" data-aos="zoom-in"></ion-icon><br />
                  <b className="fs-4">Escoge entre las canchas mejor puntuadas</b><br />
                  <span> Puedes calificar las canchas y filtrar entre las mejores. </span>
                </div>
                <div className='col-lg-6 col-sm-12 p-4 '>
                  <ion-icon name="clipboard-outline" data-aos="zoom-in"></ion-icon><br />
                  <b className="fs-4"> Organiza tus horarios como tu desees</b><br />
                  <span> Accede a premium y obten funcionalidades únicas. </span>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </Box>
      <div className='row m-0 ' style={{ "background": "var(--letra)" }}>
      <TextoInfo

          titulo={'Ningún jugador es tan bueno como todos juntos... Que ruede el balón!!!'}
          contenido={'Siguenos en nuestras redes sociales y participa de sorteos increibles, pasa la voz a todo tu team...'}
        />
        
        <div className='col-lg-4 d-flex align-items-end px-5'>
          <i className="fa-regular fa-futbol pelota"></i>
        </div>
      </div>

      <PieHome seccion={true} />
    </div>
  )
}
