import React from 'react'
import { Formik } from 'formik'
import { InfoRegistro } from './InfoRegistro'

export const FormCanchero = () => {
    return (
        <div className='container mx-0'>
            <div className='row d-flex align-items-center '>
                <div className='col-lg-5 col-sm-12  d-flex align-items-center banner vh-100'>
                    <InfoRegistro />
                </div>

                <div className='col-lg-7 col-sm-12 mt-4 animate__animated animate__fadeIn justify-content-center'>
                    <h4>Dueño de una cancha, registra tus datos...</h4>
                    <Formik
                        initialValues={{
                            dni: "",
                            nombres: "",
                            apellidos: "",
                            nacimiento: "",
                            sexoM: false,
                            sexoF: false,
                            sexoO: false,
                            telefono: "",
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
                                        <div className='my-2 col-lg-6 col-sm-12' style={{ "maxWidth": "30rem" }}>
                                            <label className='fw-bold fs-6' style={{ "fontFamily": "cambria" }}> DNI </label>
                                            <input
                                                name="dni"
                                                value={values.dni}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder='Ingresa tu dni'
                                                className='form-control border border-dark'
                                            />
                                        </div>

                                        <div className='my-2 col-lg-6 col-sm-12' style={{ "maxWidth": "30rem" }}>
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
                                    </div>

                                    <div className='row'>
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

                                        <div className='my-2 col-lg-5 col-sm-12'>
                                            <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Fecha de nacimiento </label>
                                            <input className='form-control border border-dark' type="date" onChange={handleChange} id="fechaInicio" name="fechaInicio" value={values.nacimiento} />
                                        </div>

                                    </div>

                                    <div className='row'>

                                        <div className='my-2 col-lg-6 col-sm-6'>
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

                                        <div className='my-2 col-lg-6 col-sm-6'>
                                            <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Teléfono </label>
                                            <input
                                                name="telefono"
                                                onChange={handleChange}
                                                type="text"
                                                className='form-control border border-dark'
                                                placeholder='Ingresa tu numero de telefono'
                                                value={values.telefono}
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-5 col-sm-6 my-2'>
                                            <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Avatar </label>
                                            <input
                                                onChange={(event) => {
                                                    setFieldValue("avatar", event.target.files[0])
                                                }}
                                                className='form-control border border-dark'
                                                type="file"
                                                accept='.png'
                                            />
                                        </div>

                                        <div className='col-lg-7 col-sm-6 my-2'>
                                            <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Correo </label>
                                            <input
                                                name="correo"
                                                onChange={handleChange}
                                                type="email"
                                                className='form-control border border-dark'
                                                placeholder='Ingresa tu correo electrónico'
                                                value={values.correo}
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-12 my-2'>
                                            <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Contraseña </label>
                                            <input
                                                name="contraseña"
                                                onChange={handleChange}
                                                type="text"
                                                className='form-control border border-dark'
                                                placeholder='Ingresa tu contraseña'
                                                value={values.contraseña}
                                            />
                                        </div>

                                        <div className='col-lg-6 col-sm-12 my-2'>
                                            <label className='fw-bold' style={{ "fontFamily": "cambria" }}>Confirmar contraseña </label>
                                            <input
                                                name="confirmacionContraseña"
                                                onChange={handleChange}
                                                type="text"
                                                className='form-control border border-dark'
                                                placeholder='Confirma tu contraseña'
                                                value={values.confirmacionContraseña}
                                            />
                                        </div>
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
