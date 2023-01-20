
import React from 'react'
import { NavLink } from 'react-router-dom'


export const InfoRegistro = () => {
    return (
        <div className='container mx-0'>
            <div className='row '>
                <div className='col-lg-12 col-sm-6'>
                    <h4>¿Qué estás buscando en nuestra aplicación? </h4>
                    <p>
                        Si eres dueño de una cancha, puedes registrar tu negocio en nuestra página completamente gratis.
                    </p>
                    <p>
                        Si eres un deportista buscando un lugar donde jugar con tus amigos, regístrate y reserva ahora mismo la cancha que mejor se acomode a lo que estas buscando.
                    </p>
                </div>

                <div className='col-lg-12 col-sm-6 p-4' >
                    <div className='my-2'>
                        <NavLink
                            className={({ isActive }) => "btn btn-outline-success w-100 " + (isActive ? "active" : "")}
                            to="/registroAd"
                        >
                            Dueño
                        </NavLink>
                    </div>
                    <div className='my-2'>
                        <NavLink
                            className={({ isActive }) => "btn btn-outline-success w-100 " + (isActive ? "active" : "")}
                            to="/registroDep">
                            Deportista
                        </NavLink>
                    </div>



                </div>

            </div>
        </div>
    )
}
