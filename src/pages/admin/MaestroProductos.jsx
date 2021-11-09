import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table,Col, Row } from 'react-bootstrap';
import 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Tooltip} from '@material-ui/core';


function MaestroProductos() {


    const [idProduct_update, set_idProduct_update] = useState(0);
    const [description_update, set_description_update] = useState("");
    const [unit_cost_update, set_unit_cost_update] = useState(0);
    const [state_update, set_state_update] = useState("true");
    const [id_update, set_id_update] = useState(0);

    const [products, set_products] = useState([])

    useEffect(() => {
        Axios.get('https://mtg3.herokuapp.com/api/v1/product/list').then((res) => {
            console.log(res.data.products)
            set_products(res.data.products)
        });
    }, [])



    const delete_product = (_id) => {
        Axios.delete('https://mtg3.herokuapp.com/api/v1/product/delete/' + _id)
        toast.warn('Eliminado')
    }

    const update_product = (_id) => {
        Axios.put('https://mtg3.herokuapp.com/api/v1/product/update', {
            _id: _id,
            idProduct: idProduct_update,
            description: description_update,
            unit_cost: unit_cost_update,
            state: state_update
        })
        toast.success('Actualizado');
    }


    return (
        <div>
            <div className="sb-nav-fixed">
                <Navbar />
                <div id="layoutSidenav">
                    <Sidebar />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-2">Maestro productos</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="index.html">Menu principal</a></li>
                                    <li className="breadcrumb-item active">Maestro productos</li>
                                </ol>

                                <div className="card mb-2">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1"></i>
                                        Productos
                                    </div>
                                    <div className="card-body">
                                        <hr />
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Codigo Producto</th>
                                                    <th>Descripcion</th>
                                                    <th>Costo por Unidad</th>
                                                    <th>Estado</th>
                                                    <th>Actualizar</th>
                                                    <th>Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products.map((value, key) =>
                                                        <tr>
                                                            <td>
                                                                {key}
                                                            </td>
                                                            <td>
                                                                {value.idProduct}
                                                            </td>
                                                            <td>
                                                                {value.description}
                                                            </td>
                                                            <td>
                                                                {value.unit_cost}
                                                            </td>
                                                            <td>
                                                                {value.state.toString()}
                                                            </td>
                                                            <Tooltip title=" Editar Producto"> 
                                                            <td>
                                                                <Button type="button" className="btn btn-secondary" onClick={
                                                                    () => {
                                                                    set_id_update(value._id);
                                                                    set_idProduct_update(value.idProduct);
                                                                    set_description_update(value.description);
                                                                    set_unit_cost_update(value.unit_cost);
                                                                    set_state_update(value.state.toString());

                                                                    document.getElementById('idProduct_update').defaultValue = value.idProduct;
                                                                    document.getElementById('description_update').defaultValue = value.description;
                                                                    document.getElementById('unit_cost_update').defaultValue = value.unit_cost;

                                                                    }}>Editar
                                                                </Button>
                                                            </td>
                                                            </Tooltip>
                                                            <Tooltip  title= "Eliminar Venta" arrow placement='right-start' >
                                                            <td>
                                                                <Button type="button" className="btn btn-secondary" onClick={() => delete_product(value._id)}> Eliminar</Button>
                                                            </td>
                                                            </Tooltip>
                                                            <ToastContainer position="top-center" autoClose={3000} /> 
                                                        </tr>
                                                    )
                                                }
                                                
                                            </tbody>
                                        </Table>
                                        <hr />
                                        <Form>
                                            <Row className="mb-3">    
                                            <Form.Group  as ={Col} className="mb-2" controlId="formBasicidProduct">
                                                <Form.Label>Codigo Producto</Form.Label>
                                                <Form.Control disable='true' id='idProduct_update' type="number"  onChange={
                                                    (e) => {
                                                        set_idProduct_update(e.target.value);
                                                    }} required />
                                            </Form.Group>

                                            <Form.Group as ={Col} className="mb-2" controlId="formBasicDescription">
                                                <Form.Label>Descripcion</Form.Label>
                                                <Form.Control id='description_update' type="text"  onChange={
                                                    (e) => {
                                                        set_description_update(e.target.value);
                                                    }
                                                } required/>
                                            </Form.Group>
                                            </Row>    
                                            <Form.Group as ={Col} className="mb-2" controlId="formBasicUnitCost">
                                                <Form.Label>Costo por unidad</Form.Label>
                                                <Form.Control id='unit_cost_update' type="number"  onChange={
                                                    (e) => {
                                                        set_unit_cost_update(e.target.value);
                                                    }
                                                }  required/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicState">
                                                <Form.Check
                                                    inline
                                                    label="Disponible"
                                                    name="estado"
                                                    type="radio"
                                                    id='1'
                                                    onChange={(e) => {
                                                        set_state_update("true");
                                                    }}  />

                                                <Form.Check
                                                    inline
                                                    label="Agotado"
                                                    name="estado"
                                                    type="radio"
                                                    id='0'
                                                    onChange={(e) => {
                                                        set_state_update("false");
                                                    }} />
                                            </Form.Group>

                                            <Button  type='submit' variant="warning" onClick={() => {update_product(id_update)}}>
                                                Actualizar
                                            </Button>
                                        </Form> 
                                        <ToastContainer position="top-center" autoClose={5000} />                                  
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MaestroProductos;