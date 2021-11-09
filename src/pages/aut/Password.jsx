import React from 'react'
import 'styles/styles.css';
import {Link} from "react-router-dom";
import AuthLayout from 'layouts/AuthLayout';
import 'react-bootstrap';
import 'bootstrap';



const Password = () => {
    return (

    <div className="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Reestablecer contraseña</h3></div>
                                    <div className="card-body">
                                        <div className="small mb-3 text-muted">Ingrese su correo electrónico y le enviaremos un enlace para reestablecer su contraseña</div>
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email"  />
                                                <label htmlFor="inputEmail">Correo electrónico</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" to="/Index">Regresar a página de ingreso </Link>
                                                <Link className="btn btn-primary" to="/Index">Reestablecer contraseña </Link>
                                                {/*<a class="small" href="Index">Regresar a página de ingreso</a>
                                                <a class="btn btn-primary" href="Index">Reestablecer contraseña</a> */}
                                                
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <Link className="small" to="/Register">Regresar a página de ingreso </Link>            
                                        {/* <div class="small"><a href="Register">Crear una nueva cuenta</a></div> */}
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

export default Password;      