import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'react-bootstrap';
import 'bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/styles.css';


 
 const MenuPrincipal = () => {
     return (

    <div className="sb-nav-fixed">
        <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Menú principal</h1>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p>El software MTG3 está diseñado para realizar el seguimiento de las ventas de sus productos y/o servicios.</p>
                                    </div>
                                </div>
                                <div className="row">                    
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-warning text-white mb-4">
                                            <div className="card-body">Módulo de ventas</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <div className="small text-white stretched-link" href="#">Ver detalles</div>
                                                <div className="small text-white"><i className="fas fa-angle-right"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-success text-white mb-4">
                                            <div className="card-body">Módulo de productos</div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <div className="small text-white stretched-link" href="#">Ver detalles</div>
                                                <div className="small text-white"><i className="fas fa-angle-right"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-danger text-white mb-4">
                                            <div className="card-body">Módulo de usuarios</div>
                                            <div clasNames="card-footer d-flex align-items-center justify-content-between">
                                                <div className="small text-white stretched-link" href="#">Ver detalles</div>
                                                <div className="small text-white"><i className="fas fa-angle-right"/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="card mb-4">
                                        </div>                           
                                    </div>
                                </div>
                            </div>
                        </main>
                    <Footer />                    
                    </div>
            </div>
    </div>                
    );
}

export default MenuPrincipal; 