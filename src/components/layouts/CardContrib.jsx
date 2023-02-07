import React from 'react'

export const CardContrib = (values) => {
    const value = values.values
    return (
        <div className="card text-center cardCont mb-2" >
            <img src={value.imagen} className="card-img-top imageCont mt-3" alt={value.imagen} />
            <div className="card-body">
                <h5 className="card-title textCont">{value.nombre}</h5>
                <p className='my-1 text-info textCont' > {value.correo} </p>
                <a className='mx-1 ' target="_blank" rel="noreferrer noopener" href={value.github}><ion-icon color="light" size="small" name="logo-github"></ion-icon></a>
                <a className='mx-1' target="_blank" rel="noreferrer noopener" href={value.github}><ion-icon color="light" size="small" name="logo-linkedin"></ion-icon></a>
                <a className='mx-1' target="_blank" rel="noreferrer noopener" href={value.whatsapp}><ion-icon color="light" size="small" name="logo-whatsapp"></ion-icon></a>
            </div>
        </div>
  )
}
