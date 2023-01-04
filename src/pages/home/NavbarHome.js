import React from 'react'
import { NavLink } from 'react-router-dom'
import { Login } from '../Login'

export const NavbarHome = () => {
    return (
        <div className='navbar navbar-dark navbar-expand-lg navHome'>
            <button
                className='navbar-toggler'
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
            >
                <span className='navbar-toggler-icon'></span>

            </button>
            <div className='px-5 navbar-brand row collapse navbar-collapse' id="menu">
                <div className='fs-6 col-md-5 col-sm-12'>
                <NavLink className="nav-item nav-link text-light fw-bold" to="/">
                <span className='mx-2'>
                            Logo
                        </span>
                </NavLink>
                        
                </div>


            </div>


            <div className='collapse navbar-collapse justify-content-end' id="menu">
                <ul className='navbar-nav'>
                    <li className='nav-item px-5'>
                        <NavLink
                            className="nav-item nav-link text-light fw-bold"
                            to="/register"
                        >
                            Regístrate
                        </NavLink>
                    </li>
                    <li className='nav-item px-5'>
                    <button
                            type='button'
                            className="btn btn-info fw-bold px-3 rounded-pill bg-light text-success nav-item nav-link "
                            data-bs-toggle="modal" data-bs-target="#idlogin"
                        >
                            Iniciar Sesión
                        </button>
                        <Login id={`idlogin`} />
                        
                    </li>
                </ul>
            </div>

        </div>
    )
}
