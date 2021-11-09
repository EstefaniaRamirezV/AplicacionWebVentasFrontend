import React from 'react'
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import 'react-bootstrap';
import {Form} from 'react-bootstrap';
import 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/styles.css';
import {useState} from 'react';
import Axios from 'axios';


const RegistroProducto = () => {

    const [idProduct_add, set_idProduct_add] = useState(0);
    const [description_add, set_description_add] =  useState("");
    const [unit_cost_add, set_unit_cost_add] = useState(0);
    const [state_add, set_state_add] = useState("true");
  

    
  
    const add_product_db = () => {
      console.log(idProduct_add + description_add + unit_cost_add + state_add)
      Axios.post('http://localhost:3001/api/v1/product/add',{
        idProduct: idProduct_add,
        description: description_add,
        unit_cost: unit_cost_add,
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
                                <div className="well form-horizontal " action=" " method="post"  id="contact_form">                        
                                    <div className="container-fluid "   styles="position:-ms-page;">
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-primary me-md-2" type="button">Productos Registrados</button>
                                            <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-home"></span>
                                            Inicio</button>
                                        </div>
                                    </div>
                                    <div><legend><center><h2>Registro Productos  MTG3</h2></center></legend>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>                                       
                                    </div> 
                                    <center>
                                        <div clasNames="form-group ">
                                            <label className="col-md-4 control-label">ID</label>  
                                            <div className="col-md-4 inputGroupContainer">
                                                <div className="input-group">
                                                    
                                                    <input  name="first_name" placeholder="NUMERO ID" className="form-control"  type="number" onChange = {(e) =>{set_idProduct_add(e.target.value);}} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label className="col-md-4 control-label" >NOMBRE PRODUCTO</label> 
                                            <div className="col-md-4 inputGroupContainer">
                                                <div className="input-group">
                                                    
                                                    <input name="last_name" placeholder="NOMBRE PRODUCTO" className="form-control"  type="text" onChange = {(e) =>{set_description_add(e.target.value);}} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label className="col-md-4 control-label">VALOR UNITARIO</label>  
                                            <div className="col-md-4 inputGroupContainer">
                                                <div className="input-group">
                                                    
                                                    <input  name="user_name" placeholder="$ $ $" className="form-control"  type="number" onChange = {(e) =>{set_unit_cost_add(e.target.value);}} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                            <Form.Group className="mb-3" controlId="formBasicUnitCost">
                                                            <Form.Check
                                                            inline
                                                            label = "Disponible"
                                                            name = "estado"
                                                            type = "radio"
                                                            id = '1'
                                                            onChange = {(e) =>{
                                                                set_state_add("true");
                                                            }}/>            

                                                            <Form.Check
                                                                inline
                                                                label = "Agotado"
                                                                name = "estado"
                                                                type = "radio"
                                                                id = '0'
                                                                onChange = {(e) =>{
                                                                set_state_add("false");
                                                            }}/>            
                                            </Form.Group>
                                    </center>    
                                    <br></br>                  
                                    <center>
                                        <div>
                                            <button type='submit' onClick='clear' class="btn btn-danger">CANCELAR</button>
                                            <button type = 'submit' onClick = {add_product_db} class="btn btn-success">AGREGAR</button>
                                        </div>    
                                    </center> 
                                    <ToastContainer position="top-center" autoClose={5000} />                       
                                </div>
                            </main>
                        <Footer />
                    </div>                            
            </div>
            
    </div>
    );
}

export default RegistroProducto;      