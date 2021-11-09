import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'styles/styles.css';
import 'react-bootstrap';
import 'bootstrap';
import { Form, Button, Table, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Tooltip} from '@material-ui/core';



const MaestroVentas = () => {




    const [idSales_update, set_idSales_update] = useState(0);
    const [idProduct_update, set_idProduct_update] = useState(0);
    const [description_update, set_description_update] = useState("");
    const [cantidad_update, set_cantidad_update] = useState(0);
    const [unit_cost_update, set_unit_cost_update] = useState(0);
    const [total_cost_update, set_total_cost_update] = useState(0);
    const [fecha_update, set_fecha_update] = useState(0);
    const [idUsers_update, set_idUsers_update] = useState(0);
    const [nombreCliente_update, set_nombreCliente_update] = useState("");
    const [nombreVendedor_update, set_nombreVendedor_update] = useState("");
    const [state_update, set_state_update] = useState("Entregado");
    const [id_update, set_id_update] = useState(0);

    const [sales, set_sales] = useState([])

    useEffect(() => {
        Axios.get('https://mtg3.herokuapp.com/api/v1/sales/list').then((res) => {
            console.log(res.data.sales)
            set_sales(res.data.sales)
        });
    }, [])



    const delete_sales = (_id) => {
        Axios.delete('https://mtg3.herokuapp.com/api/v1/sales/delete/' + _id)
        toast.warn('Eliminado')
    }

    const update_sales = (_id) => {
        Axios.put('https://mtg3.herokuapp.com/api/v1/sales/update', {
            _id: _id,
            idSales: idSales_update,
            idProduct: idProduct_update,
            description: description_update,
            cantidad: cantidad_update,
            unit_cost: unit_cost_update,
            total_cost: total_cost_update,
            fecha: fecha_update,
            idUsers: idUsers_update,
            nombreCliente: nombreCliente_update,
            nombreVendedor: nombreVendedor_update,
            state: state_update
        }) 
        toast.success('Actualizado');
    }


    return (

        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-2">Maestro ventas</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="index.html">Menu principal</a></li>
                                <li className="breadcrumb-item active">Maestro ventas</li>
                            </ol>
                            <div className="card mb-2">
                                <div className="card-body">
                                    <p>En este módulo puede visualizar, buscar y actualizar las ventas.</p>
                                </div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-header">
                                    <i className="fas fa-table me-1"></i>
                                    Ventas
                                </div>
                                <div className="card-body">
                                    <hr />
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>No Venta</th>
                                                <th>Codigo Producto</th>
                                                <th>Descripcion</th>
                                                <th>Cantidad</th>
                                                <th>Costo por Unidad</th>
                                                <th>Total Venta</th>
                                                <th>Fecha</th>
                                                <th>Id Cliente</th>
                                                <th>Nombre Cliente</th>
                                                <th>Nombre Vendedor</th>
                                                <th>Estado</th>
                                                <th>Actualizar</th>
                                                <th>Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                sales.map((value, key) =>
                                                    <tr>
                                                        <td>
                                                            {key}
                                                        </td>
                                                        <td>
                                                            {value.idSales}
                                                        </td>
                                                        <td>
                                                            {value.idProduct}
                                                        </td>
                                                        <td>
                                                            {value.description}
                                                        </td>
                                                        <td>
                                                            {value.cantidad}
                                                        </td>
                                                        <td>
                                                            {value.unit_cost}
                                                        </td>
                                                        <td>
                                                            {value.total_cost}
                                                        </td>
                                                        <td>
                                                            {value.fecha}
                                                        </td>
                                                        <td>
                                                            {value.idUsers}
                                                        </td>
                                                        <td>
                                                            {value.nombreCliente}
                                                        </td>
                                                        <td>
                                                            {value.nombreVendedor}
                                                        </td>
                                                        <td>
                                                            {value.state.toString()}
                                                        </td>
                                                        <Tooltip title=" Editar Venta"> 
                                                        <td>                                                        
                                                            <Button  type="button" className="btn btn-secondary"  onClick={
                                                                () => {
                                                                set_id_update(value._id);
                                                                set_idSales_update(value.idSales)
                                                                set_idProduct_update(value.idProduct)
                                                                set_description_update(value.description);
                                                                set_cantidad_update(value.cantidad)
                                                                set_unit_cost_update(value.unit_cost);
                                                                set_total_cost_update(value.total_cost);
                                                                set_fecha_update(value.fecha);
                                                                set_idUsers_update(value.idUsers);
                                                                set_nombreCliente_update(value.set_nombreCliente);
                                                                set_nombreVendedor_update(value.nombreVendedor)
                                                                set_state_update(value.state.toString());

                                                                document.getElementById('idSales_update').defaultValue = value.idSales;
                                                                document.getElementById('idProduct_update').defaultValue = value.idProduct;
                                                                document.getElementById('description_update').defaultValue = value.description;
                                                                document.getElementById('cantidad_update').defaultValue = value.cantidad;
                                                                document.getElementById('unit_cost_update').defaultValue = value.unit_cost;
                                                                document.getElementById('total_cost_update').defaultValue = value.total_cost;
                                                                document.getElementById('fecha_update').defaultValue = value.fecha;
                                                                document.getElementById('idUsers_update').defaultValue = value.idUsers;
                                                                document.getElementById('nombreCliente_update').defaultValue = value.nombreCliente;
                                                                document.getElementById('nombreVendedor_update').defaultValue = value.nombreVendedor;

                                                                }}>Editar
                                                            </Button>
                                                        </td>
                                                        </Tooltip>
                                                        <Tooltip  title= "Eliminar Venta" arrow placement='right-start' >
                                                        <td>
                                                            <Button  type="submit" className="btn btn-secondary"  onClick={() => delete_sales(value._id)}> Eliminar</Button>
                                                        </td>
                                                        </Tooltip>
                                                        <ToastContainer position="top-center" autoClose={1000} />  
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                    <hr />
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} className="mb-3" controlId="formBasicFecha">
                                                <Form.Label>Fecha</Form.Label>
                                                <Form.Control disable='true' id='fecha_update' type="" onChange={
                                                    (e) => {
                                                        set_fecha_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>
                                            <Form.Group as={Col} className="mb-3" controlId="formBasicidUser">
                                                <Form.Label>Codigo Cliente</Form.Label>
                                                <Form.Control disable='true' id='idUsers_update' type="number" onChange={
                                                    (e) => {
                                                        set_idUsers_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>
                                            <Form.Group as={Col} className="mb-3" controlId="formBasicnombreCliente">
                                                <Form.Label>Nombre Cliente</Form.Label>
                                                <Form.Control disable='true' id='nombreCliente_update' type="text" onChange={
                                                    (e) => {
                                                        set_nombreCliente_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>
                                            <Form.Group as={Col} className="mb-3" controlId="formBasicnombreVendedor">
                                                <Form.Label>NombreVendedor</Form.Label>
                                                <Form.Control disable='true' id='nombreVendedor_update' type="text" onChange={
                                                    (e) => {
                                                        set_nombreVendedor_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicidSales">
                                                <Form.Label>No de Venta</Form.Label>
                                                <Form.Control disable='true' id='idSales_update' type="number" onChange={
                                                    (e) => {
                                                        set_idSales_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicidProduct">
                                                <Form.Label>Codigo Producto</Form.Label>
                                                <Form.Control disable='true' id='idProduct_update' type="number" onChange={
                                                    (e) => {
                                                        set_idProduct_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicDescription">
                                                <Form.Label>Descripcion</Form.Label>
                                                <Form.Control id='description_update' type="text"  onChange={
                                                    (e) => {
                                                        set_description_update(e.target.value);
                                                    }
                                                } required/>
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} className="mb-3" controlId="formBasicCantidad">
                                                <Form.Label>Cantidad</Form.Label>
                                                <Form.Control disable='true' id='cantidad_update' type="number" onChange={
                                                    (e) => {
                                                        set_cantidad_update(e.target.value);
                                                    }} required/>
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicUnitCost">
                                                <Form.Label>Costo por unidad</Form.Label>
                                                <Form.Control id='unit_cost_update' type="number"  onChange={
                                                    (e) => {
                                                        set_unit_cost_update(e.target.value);
                                                    }
                                                } required/>
                                            </Form.Group>
                                            <Form.Group as={Col} className="mb-3" controlId="formBasicTotalCost">
                                                <Form.Label>Costo Total</Form.Label>
                                                <Form.Control id='total_cost_update' type="number" onChange={(e) => {set_total_cost_update(e.target.value); }} required/>
                                               
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mb-3" controlId="formBasicState">
                                            <Form.Check
                                                inline
                                                label="En proceso"
                                                name="estado"
                                                type="radio"
                                                id='1'
                                                onChange={(e) => {
                                                    set_state_update("En Proceso");
                                                }} />

                                            <Form.Check
                                                inline
                                                label="Entregado"
                                                name="estado"
                                                type="radio"
                                                id='0'
                                                onChange={(e) => {
                                                    set_state_update("Entregado");
                                                }} />
                                            <Form.Check
                                                inline
                                                label="Cancelado"
                                                name="estado"
                                                type="radio"
                                                id='0'
                                                onChange={(e) => {
                                                    set_state_update("Cancelado");
                                                }} />                                               
                                        </Form.Group>

                                        <Button type= 'submit' variant="warning" onClick={() => {update_sales(id_update)}}>
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


    );
}

export default MaestroVentas;