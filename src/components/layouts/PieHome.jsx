import React from 'react';
import { contributors } from '../../data/Contributors';
import { CardContrib } from './CardContrib';



export const PieHome = () => {
  return (
    <div className='text-center colorprim p-1'>
      <div className='mx-3 animate__animated animate__fadeIn'>
        <div className='row d-flex justify-content-center mt-3'>
          {
            contributors.map((contributor) => (
              <div className='col-lg-2 col-md-4 col-sm-6' key={contributor.correo}>
                <CardContrib values={contributor}  />
              </div>

            ))
          }


        </div>

        <div className='text-light d-flex justify-content-center mt-5'>
          Canchitas Cusco

        </div>
      </div>

      <div className='my-3'>
        <span className='text-light'>  © Elaborado en 2023 </span>
      </div>
    </div>
  )
}
