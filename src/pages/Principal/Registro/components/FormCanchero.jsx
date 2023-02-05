import React from 'react'
import { Field, Formik } from 'formik'

import { publicRequest } from '../../../../api/apiRequest'
import swal from "sweetalert"

export const FormCanchero = () => {
    return (

        <div className='animate__animated animate__fadeIn justify-content-center'>

            <Formik
                initialValues={{
                    dni: "",
                    nombres: "",
                    apellidos: "",
                    nacimiento: "",
                    sexoM: false,
                    sexoF: false,
                    sexoO: false,
                    sexo: "M",
                    telefono: "",
                    avatar: "https://previews.123rf.com/images/sirup/sirup1608/sirup160800050/61971886-avatar-abstracto-del-vector-de-cabeza-humana-con-vista-de-perfil-y-bal%C3%B3n-de-f%C3%BAtbol-en-el-medio-sobre.jpg",
                    correo: "",
                    password: "",
                    passwordConfirmation: "",
                    "nombre": "",
                    "description": "",
                    "ubicacion": "",
                    "estado": "opened",
                    "cantAparcamiento": 0
                }}

                onSubmit={async (values, actions) => {
                    values.sexo = values.sexoM ? "M" : values.sexoF ? "F" : "otro"
                    try {
                        const response = await publicRequest.post("/auth/canchero/signup", values)
                        console.log(response)
                        swal({
                            title: "Cancha registrada",
                            icon: "success",
                            buttons: "OK"
                        })
                        actions.resetForm()
                    } catch (error) {
                        swal({
                            title: "Error",
                            icon: "error",
                            text: "Todos los campos son obligatorios",
                            buttons: "OK"
                        })
                    }
                }}
            >
                {
                    ({ handleChange, handleSubmit, values, setFieldValue, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className="text-center">
                            <div className='row'>
                                <div className='my-2 col-lg-6 col-sm-12' >
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

                                <div className='my-2 col-lg-6 col-sm-12' >
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
                                <div className='my-2 col-lg-7 col-sm-12' >
                                    <label className='fw-bold fs-6' style={{ "fontFamily": "cambria" }}> Apellidos </label>
                                    <input
                                        name="apellidos"
                                        value={values.apellidos}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='Ingresa tus apellidos'
                                        className='form-control border border-dark '
                                    />
                                </div>

                                <div className='my-2 col-lg-5 col-sm-12'>
                                    <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Fecha de nacimiento </label>
                                    <input className='form-control border border-dark' type="date" onChange={handleChange} id="nacimineto" name="nacimiento" value={values.nacimiento} />
                                </div>

                            </div>

                            <div className='row'>

                                <div className='my-2 col-lg-6 col-sm-6'>
                                    <label className='fw-bold text-center' style={{ "fontFamily": "cambria" }}> Sexo </label>
                                    <div className='d-flex align-items-center btn-group d-flex justify-content-center' role="group">
                                        <div className='form-check'>
                                            <input onChange={handleChange} name="sexo" className="btn-check" id="sexoM" type="radio" />
                                            <label className="mx-2 btn btn-outline-success fw-bold" htmlFor="sexoM" >Masculino</label>
                                        </div>
                                        <div className='form-check'>
                                            <input onChange={handleChange} name="sexo" className="btn-check" id="sexoF" type="radio" />
                                            <label className="mx-2 btn btn-outline-success fw-bold" htmlFor="sexoF">Femenino</label>
                                        </div>
                                        <div className='form-check'>
                                            <input onChange={handleChange} name="sexo" className="btn-check" id="sexoO" type="radio" />
                                            <label className="mx-2 btn btn-outline-success fw-bold" htmlFor="sexoO">Otro</label>
                                        </div>





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
                                <div className='col-lg-6 col-sm-6 my-2'>
                                    <label className='fw-bold fs-6' style={{ "fontFamily": "cambria" }}> Nombre de la cancha </label>
                                    <input
                                        name="nombre"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='Ingresa nombre de la cancha'
                                        className='form-control border border-dark '
                                    />
                                </div>

                                <div className='col-lg-6 col-sm-6 my-2'>
                                    <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Correo electrónico </label>
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
                                <div className='col-lg-5 col-sm-6 my-2'>
                                    <label className='fw-bold'> Descripción de la cancha </label>

                                    <Field as="textarea" name="description" className="form-select border border-dark" onChange={handleChange} value={values.description}>

                                    </Field>
                                </div>

                                <div className='col-lg-7 col-sm-6 my-2'>
                                    <label className='fw-bold' style={{ "fontFamily": "cambria" }}> Ubicación </label>
                                    <input
                                        name="ubicacion"
                                        onChange={handleChange}
                                        type="text"
                                        className='form-control border border-dark'
                                        placeholder='Ingresa tu correo electrónico'
                                        value={values.ubicacion}
                                    />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-4 col-sm-12 my-2'>
                                    <label className='fw-bold' style={{ "fontFamily": "cambria" }}> password </label>
                                    <input
                                        name="password"
                                        onChange={handleChange}
                                        type="text"
                                        className='form-control border border-dark'
                                        placeholder='Ingresa tu password'
                                        value={values.password}
                                    />
                                </div>

                                <div className='col-lg-4 col-sm-12 my-2'>
                                    <label className='fw-bold' style={{ "fontFamily": "cambria" }}>Confirmar password </label>
                                    <input
                                        name="passwordConfirmation"
                                        onChange={handleChange}
                                        type="text"
                                        className='form-control border border-dark'
                                        placeholder='Confirma tu password'
                                        value={values.passwordConfirmation}
                                    />
                                </div>
                                <div className='col-lg-4 col-sm-12 my-2'>
                                    <label className='fw-bold' style={{ "fontFamily": "cambria" }}>Espacios para vehiculos </label>
                                    <input
                                        name="cantAparcamiento"
                                        onChange={handleChange}
                                        type="number"
                                        className='form-control border border-dark'
                                        placeholder='Nro de lugares de estacionamiento'
                                        value={values.cantAparcamiento}
                                    />
                                </div>
                            </div>

                            <button type='submit' className='btn btn-success my-3' disabled={isSubmitting}> {isSubmitting ? "Registrando ..." : "Registrarse"} </button>

                        </form>
                    )
                }
            </Formik>
        </div>
    )
}
