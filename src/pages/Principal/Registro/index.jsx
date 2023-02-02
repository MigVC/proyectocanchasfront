import React from 'react'
import { FormCanchero } from './components/FormCanchero'

export const InfoRegistro = () => {
    return (
        <div className='d-flex justify-content-center px-5'>
            <div className='row d-flex align-items-center '>
                <div className='col-lg-6 col-sm-12 px-4 py-3 '>
                    <p className='fs-4' style={{"fontFamily":"montserrat"}}>
                        Si eres dueño de una cancha, puedes registrar tu negocio en nuestra página completamente gratis.
                    </p>
                </div>
                <div className='col-lg-6 col-sm-12 px-4 py-3 '>
                    <FormCanchero />
                </div>
            </div>
            </div>
    )
}
