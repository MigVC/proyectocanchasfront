import React from 'react';

export const PieHome = () => {
  return (
    <div className='text-center colorprim p-5'>
      <div className='mx-3 animate__animated animate__fadeIn'>
        <div className='d-flex justify-content-center mt-5'>

          <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://www.google.com/'> <ion-icon name="logo-facebook" color="light" size="large"></ion-icon> </a>

          <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://www.google.com/'> <ion-icon name="logo-whatsapp" color="light" size="large"></ion-icon></a>

          <a className='mx-3' target="_blank" rel="noreferrer noopener" href='https://www.google.com/'><ion-icon name="logo-instagram" color="light" size="large"></ion-icon></a>

        </div>
      </div>

      <div className='my-3'>
        <span className='text-light'>  © Elaborado en 2023 </span>
      </div>
    </div>
  )
}
