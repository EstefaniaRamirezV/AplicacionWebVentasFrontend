import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'react-bootstrap';
import {Form} from 'react-bootstrap';
import 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/styles.css';
import {useState} from 'react';
import Axios from 'axios';

 

const RegistroVentas = () => {

    const [idSales_add, set_idSales_add] = useState(0);
    const [idProduct_add, set_idProduct_add] = useState(0);
    const [description_add, set_description_add] = useState("");
    const [cantidad_add, set_cantidad_add] = useState(0);
    const [unit_cost_add, set_unit_cost_add] = useState(0);
    const [total_cost_add, set_total_cost_add] = useState(0);
    const [fecha_add, set_fecha_add] = useState(Date);
    const [idUsers_add, set_idUsers_add] = useState(0);
    const [nombreCliente_add, set_nombreCliente_add] = useState("");
    const [nombreVendedor_add, set_nombreVendedor_add] = useState("");
    const [state_add, set_state_add] = useState("Entregao");


    const add_sales_db = () => {
        console.log(idSales_add + idProduct_add + description_add + cantidad_add + unit_cost_add + total_cost_add + fecha_add + idUsers_add + nombreCliente_add + nombreVendedor_add + state_add)
        Axios.post('http://localhost:3001/api/v1/sales/add', {
            idSales: idSales_add,
            idProduct: idProduct_add,
            description: description_add,
            cantidad: cantidad_add,
            unit_cost: unit_cost_add,
            total_cost: total_cost_add,
            fecha: fecha_add,
            idUsers: idUsers_add,
            nombreCliente: nombreCliente_add,
            nombreVendedor: nombreVendedor_add,
            state: state_add
        });
        toast.success('Producto Agregado');
    }



    return (

    <div className="sb-nav-fixed">
        <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>
                    <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid px-4">
                                    <h1 className="mt-4">Registro ventas</h1>
                                    <ol className="breadcrumb mb-4">
                                        <li className="breadcrumb-item"><div href="index.html">Menu principal</div></li>
                                        <li className="breadcrumb-item active">Maestro ventas</li>
                                    </ol>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <p>En este módulo puede registrar ventas.</p>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table me-1"></i>
                                            Ventas 
                                        </div>
                                        
                                        <div type='submit' className="card-body">
            

                                            <div  id="datatablesSimple" > 

                                                <div className="row">
                                                    <div className="col">
                                                    
                                                    <input type="date" className="form-control" placeholder="Fecha" aria-label="Fecha" onChange={(e) => { set_fecha_add(e.target.value); }} required/>
                                                    </div>
                                                    <div class="col">
                                                        
                                                    <input type="text" className="form-control" placeholder="Id Venta" aria-label="Id Venta" onChange={(e) => { set_idSales_add(e.target.value); }} required/>
                                                    </div>
                                                </div>
                                             </div>   
                                                <br></br>


                                            <table className= "table  table-bordered" >

                                                <thead>
                                                    <tr>
                                                        <th>ID producto</th>
                                                        <th>Descripcion</th>
                                                        <th>Cantidad</th>
                                                        <th>Valor Unitario</th>                           
                                                    </tr>
                                                </thead>
                                            

                                                
                                                <tbody>

                                                    <tr>
                                                        <td>
                                                            <input className="dataTable-input" type="text" onChange={(e) => { set_idProduct_add(e.target.value); }} required/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="text" onChange={(e) => { set_description_add(e.target.value); }} required/>
                                                        </td>                                            
                                                        <td>
                                                            <input className="dataTable-input" type="number" onChange={(e) => { set_cantidad_add(e.target.value); }} required/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="number" onChange={(e) => { set_unit_cost_add(e.target.value); }} required/>
                                                        </td>                                            
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <input className="dataTable-input" type="text"/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="text"/>
                                                        </td>                                            
                                                        <td>
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>                                            
                                                    </tr>

                                                    <tr>
                                                        <td />                  
                                                        <td />

                                                        <th>
                                                            TOTAL
                                                        </th>
                                                        <td>
                                                            <input className="dataTable-input" type="number" onChange={(e) => { set_total_cost_add(e.target.value); }} required/>
                                                        </td>                                            
                                                    </tr>                                                                                            
                                                </tbody>                                                                       
                                            </table> 
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"  id="basic-addon1">Documento Cliente</span>
                                                <input type="number" className="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="basic-addon1" onChange={(e) => { set_idUsers_add(e.target.value); }} required/>                            
                                                <span class="input-group-text" id="basic-addon2">Nombre</span>
                                                <input type="text" className="form-control" placeholder="Nombre Cliente" aria-label="Nombre Cliente" aria-describedby="basic-addon2" onChange={(e) => { set_nombreCliente_add(e.target.value); }} required/>
                                            </div>                                           
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">Vendedor</span>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={(e) => { set_nombreVendedor_add(e.target.value); }} required/>
                                            </div>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicUnitCost">
                                                        <Form.Check
                                                            inline
                                                            label="En proceso"
                                                            name="estado"
                                                            type="radio"
                                                            id='1'
                                                            onChange={(e) => {
                                                                set_state_add("En Proceso");
                                                            }} />

                                                        <Form.Check
                                                            inline
                                                            label="Entregado"
                                                            name="estado"
                                                            type="radio"
                                                            id='0'
                                                            onChange={(e) => {
                                                                set_state_add("Entregado");
                                                            }} />

                                                        <Form.Check
                                                            inline
                                                            label="Cancelado"
                                                            name="estado"
                                                            type="radio"
                                                            id='0'
                                                            onChange={(e) => {
                                                                set_state_add("Cancelado");
                                                            }} />
                                                    </Form.Group>
                                                </td>                                                                                           
                                                                                             
                                            <div><button  onClick={add_sales_db}  type="submit" className="btn btn-success">Agregar Ventas</button></div> 
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

export default RegistroVentas;     
