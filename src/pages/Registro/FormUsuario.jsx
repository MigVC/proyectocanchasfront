import React from 'react'
import { Formik } from 'formik'
import { InfoRegistro } from './InfoRegistro'

export const FormUsuario = () => {
    return (
        <div className='container mx-0'>
            <div className='row d-flex align-items-center'>
                <div className='col-lg-5 col-sm-12 banner d-flex align-items-center vh-100'>
                    <InfoRegistro />
                </div>

                <div className='col-lg-7 col-sm-12 my-3 animate__animated animate__fadeIn justify-content-center'>
                    <h4>Deportista, registra tus datos...</h4>
                    <Formik
                        initialValues={{
                            nombres: "",
                            apellidos: "",
                            sexoM: false,
                            sexoF: false,
                            sexoO: false,
                            avatar: "",
                            correo: "",
                            contraseña: "",
                            confirmacionContraseña: ""
                        }}

                        onSubmit={async (values, actions) => {

                        }}
                    >
                        {
                            ({ handleChange, handleSubmit, values, setFieldValue, isSubmitting }) => (
                                <form onSubmit={handleSubmit} className="text-center">
                                    <div className='row'>
                                        <div className='my-2 col-lg-5 col-sm-12' style={{ "maxWidth": "30rem" }}>
                                            <label className='fw-bold fs-6' style={{ "fontFamily": "cambria" }}> Nombres </label>
                                            <input
                                                name="nombres"
                                                value={values.nombres}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder='Ingresa tus nombres'
                                                className='form-control border border-dark '
                                            />
                                        </div>

                                        <div className='my-2 col-lg-7 col-sm-12' style={{ "maxWidth": "30rem" }}>
                                            <label className='fw-bold fs-6' style={{ "fontFamily": "cambria" }}> Apellidos </label>
                                            <input
                                                name="nombres"
                                                value={values.apellidos}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder='Ingresa tus apellidos'
                                                className='form-control border border-dark '
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-12 my-2'>
                                            <label className='fw-bold text-center' style={{ "fontFamily": "cambria" }}> Sexo </label>
                                            <div className='d-flex align-items-center btn-group d-flex justify-content-center' role="group">
                                                <input onChange={handleChange} name="sexo" className="btn-check" id="sexoM" type="radio" />
                                                <label className="mx-2 btn btn-outline-primary fw-bold" htmlFor="sexoM" >Masculino</label>

                                                <input onChange={handleChange} name="sexo" className="btn-check" id="sexoF" type="radio" />
                                                <label className="mx-2 btn btn-outline-primary fw-bold" htmlFor="sexoF">Femenino</label>

                                                <input onChange={handleChange} name="sexo" className="btn-check" id="sexoO" type="radio" />
                                                <label className="mx-2 btn btn-outline-primary fw-bold" htmlFor="sexoO">Otro</label>
                                            </div>
                                        </div>


                                        <div className='my-2 col-lg-6 col-sm-12'>
                                            <label className='fw-bold'> Avatar </label>
                                            <input
                                                onChange={(event) => {
                                                    setFieldValue("avatar", event.target.files[0])
                                                }}
                                                className='form-control border border-dark'
                                                type="file"
                                                accept='.png'
                                            />
                                        </div>
                                    </div>


                                    <div className='my-2'>
                                        <label className='fw-bold'> Correo </label>
                                        <input
                                            name="correo"
                                            onChange={handleChange}
                                            type="email"
                                            className='form-control border border-dark'
                                            value={values.correo}
                                        />
                                    </div>

                                    <div className='my-2'>
                                        <label className='fw-bold'> Contraseña </label>
                                        <input
                                            name="contraseña"
                                            onChange={handleChange}
                                            type="text"
                                            className='form-control border border-dark'
                                            value={values.contraseña}
                                        />
                                    </div>

                                    <div className='my-2'>
                                        <label className='fw-bold'>Confirmar contraseña </label>
                                        <input
                                            name="confirmacionContraseña"
                                            onChange={handleChange}
                                            type="text"
                                            className='form-control border border-dark'
                                            value={values.confirmacionContraseña}
                                        />
                                    </div>

                                    <button type='submit' className='btn btn-primary my-3 colorprim' disabled={isSubmitting}> {isSubmitting ? "Registrando ..." : "Registrarse"} </button>

                                </form>
                            )
                        }


                    </Formik>
                </div>
            </div>

        </div>



    )
}
