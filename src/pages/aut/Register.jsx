import React, { useState } from 'react'
import 'styles/styles.css';
import { Link } from "react-router-dom";
import AuthLayout from 'layouts/AuthLayout';
import 'react-bootstrap';
import 'bootstrap';
import { Axios } from 'axios';


function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmar, setConfirmar] = useState('')

    const registrar=async(e)=>{
        e.preventDefault()
        const NuevoRegistro={email,password,confirmar}
        const respuesta=await Axios.post('http://localhost:3000/api',NuevoRegistro)
        const mensaje=respuesta.data.mensaje
        alert(mensaje)
    }


    return (


        <div className="bg-primary">

            <div id="layoutAuthentication">

                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Crear cuenta</h3></div>
                                        <div className="card-body">
                                            <form onSubmit={registrar}>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" required id="inputEmail" type="email" autoComplete='off' onChange={e=>setEmail(e.target.value)} />
                                                    <label htmlFor="inputEmail">Email address</label>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floatingName mb-3 mb-md-0">
                                                            <input className="form-control" required id="inputPassword" type="password" autoComplete='off' onChange={e=>setPassword(e.target.value)} />
                                                            <label htmlFor="inputPassword">Contraseña</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" required id="inputPasswordConfirm" type="password" autoComplete='off' onChange={e=>setConfirmar(e.target.value)} />
                                                            <label htmlFor="inputPasswordConfirm">Confirmar contraseña</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid">
                                                        <Link className="btn btn-primary btn-block" to="/Index">Crear cuenta </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small">
                                                <Link to="/Index">¿Ya tiene una cuenta?Ingrese aquí </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <AuthLayout />
            </div>
        </div>
    );
}

export default Register;