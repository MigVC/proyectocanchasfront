import React from 'react'
import { Link } from 'react-router-dom'

import { PieHome } from './PieHome'

export const HomeScreen = () => {
  return (
    <div className='banner'>

      <div className='header d-flex align-items-center'>
        <div className='col-md-6 offset-md-3 '>
          <div className='text-center '>
            <h1 className='text-center font-weight-bold '> CANCHITAS CUSCO</h1>
            <div className='px-5 py-3' style={{"background":"var(--primary)"}}>
            <h1 className='text-center text-light '> Encuentra una cancha al instante </h1>
            <p className="fs-5 text-light" >
              Busca entre diferentes canchas, filtra por ubicación, tamaño, puntaje y escoge la que mejor se acomode a tu disponibilidad de tiempo.
            </p>
            </div>
            

            <Link to="/canchitas" className='btn btn-success border-3 text-success fs-5 mt-5 rounded-pill' style={{"background":"var(--alternate)"}}>
              Ver listado de canchas
            </Link>
          </div>
        </div>
      </div>

      <div className='row m-0 text-center d-flex justify-content-center w-100 py-5' style={{ "background": "var(--alternate)" }}>
        <div className='col-lg-5 col-sm-12 mx-3 my-1 p-4 rounded-3' data-aos="fade-up">
          <h4 >¿Eres dueño de una cancha?</h4>
          <p>
            ¡Crea una cuenta completamente gratis y registra tu cancha en nuestra aplicación web para que todo el mundo la vea! <br />
            También puedes contratar el paquete premium que te dara acceso a distintas funcionalidades que te ayduarán a gestionar mejor tu negocio.
          </p>
        </div>

        <div className='col-lg-5 col-sm-12 mx-3 my-1 p-4 rounded-3 ' data-aos="fade-up">
          <h4 > ¿Estas buscando una cancha? </h4>
          <p >
            ¡Busca la cancha que mejor se acomode a lo que estas buscando! <br />
            Puedes filtrar por lugar, dia y hora. Convoca a toda tu mancha y ya no te quedes con las ganas de esa pichanga con tus patas.
          </p>
        </div>

        <div className='col-12'>
          <p className='fs-5 mt-4'>
            Regístrate ahora y accede a nuestros beneficios
          </p>

          <Link to="/registroAd" className='btn btn-outline-success border-3   fs-5 mt-3'>
            Regístrarse
          </Link>

        </div>
      </div>
      <div className='row m-0 text-center text-light ' style={{"fontFamily":"montserrat"}}>
        <div className='col-12 my-5'>
          <h1 > ¿Qué nos caracteriza? </h1>
          <div className='container'>
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
              <div className='col-lg-6 col-sm-12 p-4'>
                <ion-icon name="star-half-outline" data-aos="zoom-in"></ion-icon><br />
                <b className="fs-4">Escoge entre las canchas mejor puntuadas</b><br />
                <span> Puedes calificar las canchas y filtrar entre las mejores. </span>
              </div>
              <div className='col-lg-6 col-sm-12 p-4'>
                <ion-icon name="clipboard-outline" data-aos="zoom-in"></ion-icon><br />
                <b className="fs-4"> Organiza tus horarios</b><br />
                <span> Accde a premium y obten funcionalidades únicas. </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='row m-0' style={{ "background": "var(--alternate)" }}>

        <div className='col-lg-8 px-5 py-5 '>        
          <span className='fs-3 frase'>
          Ningún jugador es tan bueno como todos juntos... Que ruede el balón!!!
          </span> <br/>
          <span className='text-muted'>
            Siguenos en nuestras redes sociales y participa de sorteos increibles, pasa la voz a todo tu team...
          </span>
        </div>
        <div className='col-lg-4 d-flex align-items-end px-5'>
          <i className="fa-regular fa-futbol pelota"></i>
        </div>
      </div>

      <PieHome />
    </div>
  )
}
