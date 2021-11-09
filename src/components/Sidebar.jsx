import React from 'react'
import {Link} from "react-router-dom";
import 'react-bootstrap';
import 'bootstrap';

const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">
                            <h3>M T G3</h3>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <Link className="nav-link" to="/admin/MenuPrincipal">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Menú principal
                        </Link>

                        <div className="sb-sidenav-menu-heading"></div>
                        <div className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseVentas" aria-expanded="false" aria-controls="collapseVentas">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Módulo ventas
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className="collapse" id="collapseVentas" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/admin/RegistroVentas">Registro ventas</Link>
                                <Link className="nav-link" to="/admin/MaestroVentas">Maestro ventas</Link>                        
                            </nav>
                        </div>                   
                    
                        <div className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductos" aria-expanded="false" aria-controls="collapseProductos">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Módulo productos
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className="collapse" id="collapseProductos" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/admin/RegistroProducto">Registro productos</Link>
                                <Link className="nav-link" to="/admin/MaestroProductos">Maestro productos</Link>
                            </nav>
                        </div>

                        <div className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsuarios" aria-expanded="false" aria-controls="collapseUsuarios">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Módulo usuarios
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className="collapse" id="collapseUsuarios" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/admin/MaestroUsuario">Maestro usuarios</Link>
                            </nav>
                        </div>
                        <br/>
                        <br/>
                        <div className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseCerrar" aria-expanded="true" aria-controls="collapseCerrar">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            SALIR
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </div>
                        <div className="collapse" id="collapseCerrar" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="close">Cerrar</Link>
                            </nav>
                        </div>

                    </div>
                </div>
{/*                 <div className="sb-sidenav-footer">
                    <div className="small">Conectado como:</div>
                        
                </div> */}
            </nav>
        </div>
    )
}

export default Sidebar





