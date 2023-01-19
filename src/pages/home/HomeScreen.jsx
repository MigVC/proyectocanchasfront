import React from 'react'
import { Navbar } from '../../components/Navbar'
import { NavbarHome } from './NavbarHome'
import { PieHome } from './PieHome'

export const HomeScreen = () => {
  return (
    <div className='banner'>
      

      <div className='py-5 px-lg-5 px-md-3 px-1'>
        <div className='py-5 text-light text-center'>
          <h1 className='p-5'> Encuentra una cancha al instante </h1>
          <p>
            Busca entre diferentes canchas, filtra por ubicación, tamaño, puntaje y escoge la que mejor se acomode a tu disponibilidad de tiempo.
          </p>
          
          <a href="/canchitas" role="button" className='btn btn-outline-info text-light border border-info border-4 fs-5 mt-5'>
            Ver listado de canchas
          </a>
        </div>
      </div>

      <div className='container'>
        <div className='row text-light text-center'>
          <div className='col-6'>
            <h4>¿Eres dueño de una cancha?</h4>
            <p>
              ¡Crea una cuenta completamente gratis y registra tu cancha en nuestra aplicación web para que todo el mundo la vea! <br />
              También puedes contratar el paquete premium que te dara acceso a distintas funcionalidades que te ayduarán a gestionar mejor tu negocio.
            </p>
          </div>

          <div className='col-6'>
            <h4> ¿Estas buscando una cancha? </h4>
            <p>
              ¡Busca la cancha que mejor se acomode a lo que estas buscando! <br />
              También al registrarte puedes reservar y calificar las canchas que visites.
            </p>
          </div>

          <div className='col-12'>
            <p>
              Regístrate ahora y accede a nuestros beneficios
            </p>
            <button className='btn btn-outline-info text-light border border-info border-4 fs-5 mt-5'>
              Registrarse
            </button>
          </div>
        </div>
      </div>
      <PieHome />
    </div>
  )
}
