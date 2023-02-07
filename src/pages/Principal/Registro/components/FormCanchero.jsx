import React from 'react'
import { Field, Formik } from 'formik'

import { publicRequest } from '../../../../api/apiRequest'
import swal from "sweetalert"
import { Grid, TextField } from '@mui/material'

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
                            <Grid container spacing={2} p={4}>
                                <Grid item xs={6} >
                                    <TextField
                                        fullWidth
                                        name="dni"
                                        value={values.dni}
                                        onChange={handleChange}
                                        type="text"
                                        label='DNI'
                                        placeholder='Ingresa tu DNI'
                                    />
                                    
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        fullWidth
                                        name="nombres"
                                        value={values.nombres}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='Ingresa tus nombres'
                                        label='Nombres'
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        fullWidth
                                        name="apellidos"
                                        value={values.apellidos}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='Ingresa tus apellidos'
                                        label='Apellidos'
                                    />
                                </Grid>

                                <Grid item xs={6} >
                                    <TextField 
                                        fullWidth
                                        type="date" 
                                        onChange={handleChange} 
                                        id="nacimineto" 
                                        name="nacimiento" 
                                        value={values.nacimiento} 
                                        placeholder='Fecha de nacimiento'
                                        // label='Fecha de nacimiento'
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <label className='text-center' style={{ "fontFamily": "Montserrat" }}> Sexo </label>
                                    <Grid container >
                                        <Grid item xs={4} >
                                            <input onChange={handleChange} name="sexo" className="btn-check" id="sexoM" type="radio" />
                                            <label className="btn btn-outline-success fw-bold" htmlFor="sexoM" >Masculino</label>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <input onChange={handleChange} name="sexo" className="btn-check" id="sexoF" type="radio" />
                                            <label className="btn btn-outline-success fw-bold" htmlFor="sexoF">Femenino</label>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <input onChange={handleChange} name="sexo" className="btn-check" id="sexoO" type="radio" />
                                            <label className="btn btn-outline-success fw-bold" htmlFor="sexoO">Otro</label>
                                        </Grid>
                                        </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        name="telefono"
                                        onChange={handleChange}
                                        type="text"
                                        className='form-control border border-dark'
                                        placeholder='Ingresa tu numero de telefono'
                                        value={values.telefono}
                                        label='Teléfono'
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="nombre"
                                        fullWidth
                                        value={values.nombre}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='Ingresa nombre de la cancha'
                                        label='Nombre de la canchita'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="correo"
                                        onChange={handleChange}
                                        type="email"
                                        placeholder='Ingresa tu correo electrónico'
                                        value={values.correo}
                                        label='Correo electrónico'
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="password"
                                        fullWidth
                                        label='Contraseña'
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='Ingresa tu password'
                                        value={values.password}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        name="passwordConfirmation"
                                        fullWidth
                                        onChange={handleChange}
                                        type="text"
                                        label='Confirmar Contraseña '
                                        placeholder='Confirmar Contraseña'
                                        value={values.passwordConfirmation}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="ubicacion"
                                        onChange={handleChange}
                                        type="text"
                                        label='Ubicación'
                                        placeholder='Ingresa tu correo electrónico'
                                        value={values.ubicacion}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        name="description"
                                        fullWidth
                                        label='Descripción de la canchita'
                                        onChange={handleChange} 
                                        value={values.description}
                                        multiline
                                        rows={2}
                                    />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="cantAparcamiento"
                                        onChange={handleChange}
                                        type="number"
                                        label='Espacios para vehiculos'
                                        placeholder='Espacios para vehiculos'
                                        value={values.cantAparcamiento}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <button type='submit' className='btn btn-success ' disabled={isSubmitting}> {isSubmitting ? "Registrando ..." : "Registrarse"} </button>
                                </Grid>
                            </Grid>
                            

                            

                        </form>
                    )
                }
            </Formik>
        </div>
    )
}
