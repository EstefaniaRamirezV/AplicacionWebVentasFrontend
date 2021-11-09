import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/styles.css';
import {ToastContainer, toast} from 'react-toastify';
import { Form, Button, Table, Row,Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Tooltip} from '@material-ui/core';


 


const MaestroUsuario = () => {

    const [idUsers_add, set_idUsers_add] = useState(0);
    const [nombre_add, set_nombre_add] =  useState("");
    const [apellido_add, set_apellido_add] =  useState("");
    const [email_add, set_email_add] = useState("");
    const [password_add, set_password_add] = useState("");
    const [rol_add, set_rol_add] = useState("");
    const [state_add, set_state_add] = useState("Pendiente");
  
    const [idUsers_update, set_idUsers_update] = useState(0);
    const [nombre_update, set_nombre_update] =  useState("");
    const [apellido_update, set_apellido_update] =  useState("");
    const [email_update, set_email_update] = useState("");
    const [password_update, set_password_update] = useState("");
    const [rol_update, set_rol_update] = useState("");
    const [state_update, set_state_update] = useState("Pendiente");
    const [id_update, set_id_update] = useState(0);
  
  
    const [users, set_users] = useState([])

   

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/users/list').then((res) =>{
          console.log(res.data.users)
          set_users(res.data.users)
        });
       }, [])
     
   
     const add_users_db = () => {
       console.log(idUsers_add + nombre_add + apellido_add + email_add + password_add + rol_add + state_add)
       Axios.post('http://localhost:3001/api/v1/users/add',{
         idUsers: idUsers_add,
         nombre: nombre_add,
         apellido: apellido_add,
         email: email_add,
         password: password_add,
         rol: rol_add,
         state: state_add
       });
       toast.success('Usuario Agregado');
     }
   
     const delete_users = (_id) => {
       Axios.delete('http://localhost:3001/api/v1/users/delete/' + _id)
       toast.warn('Eliminado')
     }
   
     const update_users = (_id) => {
       Axios.put('http://localhost:3001/api/v1/users/update',{
         _id: _id,
         idUsers: idUsers_update,
         nombre: nombre_update,
         apellido: apellido_update,
         email: email_update,
         password: password_update,
         rol: rol_update,
         state: state_update
       })
       toast.success('Actualizado');
     }



    return (

    <div className="sb-nav-fixed">
         <Navbar/>
        <div id="layoutSidenav">
            <Sidebar/>    
            <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1 class="mt-4">Maestro Usuarios</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><a href="index.html">Menu principal</a></li>
                                <li class="breadcrumb-item active">Maestro Usuarios</li>
                            </ol>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <p>En este módulo puede visualizar, buscar y actualizar los usuarios del programa.</p>
                                </div>
                            </div>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    Usuarios
                                </div>
                                <div class="card-body">

                                    <div id="datatablesSimple">
                                        <thead>
                                            <tr>
                                                <th>Codigo Usuario</th>
                                                <th>Nombre</th>
                                                <th>Apellido</th>
                                                <th>Correo Electrónico</th>
                                                <th>Contraseña</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>

                                            <tr> 
                                                <td>
                                                    <input  type="number" id="idUsuario"  onChange={(e) => { set_idUsers_add(e.target.value); }} required />
                                                </td>

                                                <td>
                                                    <input  type="text" id="nombre"  onChange={(e) => { set_nombre_add(e.target.value); }} required />
                                                </td>

                                                <td>
                                                    <input  type="text" id="apellido"  onChange={(e) => { set_apellido_add(e.target.value); }} required />
                                                </td>

                                                <td>
                                                    <input  type="text" id="email"  onChange={(e) => {set_email_add(e.target.value); }} required/>
                                                </td>
                                                <td>
                                                    <input  type="text"  onChange={(e) => { set_password_add(e.target.value); }} required/>
                                                </td>                                            
                                                <td>
                                                    <input  type="text" onChange={(e) => { set_rol_add(e.target.value); }} required/>
                                                </td>  
                                                <Form.Group className="mb-3" controlId="formBasicUnitCost">
                                                    <Form.Check
                                                    inline
                                                    label = "Pendiente"
                                                    name = "estado"
                                                    type = "radio"
                                                    id = '1'
                                                    onChange = {(e) =>{
                                                        set_state_add("Pendiente");
                                                    }}/>            

                                                    <Form.Check
                                                        inline
                                                        label = "Autorizado"
                                                        name = "estado"
                                                        type = "radio"
                                                        id = '0'
                                                        onChange = {(e) =>{
                                                        set_state_add("Autorizado");
                                                    }}/>

                                                    <Form.Check
                                                        inline
                                                        label = "Bloqueado"
                                                        name = "estado"
                                                        type = "radio"
                                                        id = '0'
                                                        onChange = {(e) =>{
                                                        set_state_add("Bloqueado");
                                                    }}/>

                                                </Form.Group>                                      
                                            </tr>
                                            <div>
                                                <button  type ='submit' class="btn btn-success" onClick={add_users_db} >Agregar Usuario</button>
                                            </div>

                                            <hr/>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th>Codigo Usuario</th>
                                                <th>Nombre</th>
                                                <th>Apellido</th>
                                                <th>Correo Electronico</th>
                                                <th>Contraseña</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Actualizar</th>
                                                <th>Eliminar</th>              
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                users.map((value, key) =>
                                                    <tr>
                                                    <td>
                                                        {key}
                                                    </td>
                                                    <td>
                                                        {value.idUsers}
                                                    </td>
                                                    <td>
                                                    {value.nombre}
                                                    </td>
                                                    <td>
                                                        {value.apellido}
                                                    </td>
                                                    <td>
                                                    {value.email}
                                                    </td>
                                                    <td>
                                                    {value.password}
                                                    </td>
                                                    <td>
                                                    {value.rol}
                                                    </td>
                                                    <td>
                                                    {value.state.toString()}
                                                    </td>
                                                    <Tooltip title=" Editar Usuario"> 
                                                    <td>
                                                    <Button type="button" className="btn btn-secondary" onClick ={
                                                        () => {
                                                        set_id_update(value._id);
                                                        set_idUsers_update(value.idUsers);
                                                        set_nombre_update(value.nombre);
                                                        set_apellido_update(value.apellido);
                                                        set_email_update(value.email);
                                                        set_password_update(value.password);
                                                        set_rol_update(value.rol);
                                                        set_state_update(value.state.toString());

                                                        document.getElementById('idUsers_update').defaultValue=value.idUsers;
                                                        document.getElementById('nombre_update').defaultValue=value.nombre;
                                                        document.getElementById('apellido_update').defaultValue=value.apellido;
                                                        document.getElementById('email_update').defaultValue=value.email;
                                                        document.getElementById('password_update').defaultValue=value.password;
                                                        document.getElementById('rol_update').defaultValue=value.rol;
                                                        
                                                        }}>Editar
                                                    </Button>                                                       
                                                    </td>
                                                    </Tooltip>
                                                    <Tooltip  title= "Eliminar usuario" arrow placement='right-start' >
                                                    <td>
                                                    <Button type="button" className="btn btn-secondary" onClick={() => delete_users(value._id)}> Eliminar</Button>
                                                    </td> 
                                                    </Tooltip>
                                                    <ToastContainer position="top-center" autoClose={1000} />                                                                                                         
                                                    </tr>
                                                )
                                                }


                                            </tbody>
                                        </Table>

                                                <hr/>
                                        <Form>
                                            <Row className="mb-3">
                                                <Form.Group   as={Col} className="mb-3" controlId="formBasicidUsers">
                                                    <Form.Label>Codigo del usuario</Form.Label>
                                                    <Form.Control disable='true' id='idUsers_update' type="number" placeholder=" Ingrese el codigo del usuario" onChange = {
                                                    (e) =>{
                                                        set_idUsers_update(e.target.value);
                                                    } } required/>            
                                                </Form.Group>

                                                <Form.Group as={Col}  className="mb-3" controlId="formBasicNombre">
                                                    <Form.Label>Nombre Usuario</Form.Label>
                                                    <Form.Control id='nombre_update' type="text" placeholder=" Ingrese el nombre del usuario" onChange = {
                                                    (e) =>{
                                                        set_nombre_update(e.target.value);
                                                    }
                                                    } required/>            
                                                </Form.Group>

                                                <Form.Group as={Col}  className="mb-3" controlId="formBasicApellido">
                                                    <Form.Label>Apellido Usuario</Form.Label>
                                                    <Form.Control id='apellido_update' type="text" placeholder=" Ingrese el apellido del usuario" onChange = {
                                                    (e) =>{
                                                        set_apellido_update(e.target.value);
                                                    }
                                                    } required/>            
                                                </Form.Group>

                                                <Form.Group as={Col}  className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control id = 'email_update' type="text" placeholder=" Ingrese el email" onChange = {
                                                    (e) =>{
                                                        set_email_update(e.target.value);
                                                    }
                                                    } required/>            
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Group  as={Col} className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control id = 'password_update' type="text" placeholder=" Ingrese el password" onChange = {
                                                    (e) =>{
                                                        set_password_update(e.target.value);
                                                    }
                                                    } required/>            
                                                </Form.Group>

                                                <Form.Group  as={Col} className="mb-3" controlId="formBasicRol">
                                                    <Form.Label>Rol</Form.Label>
                                                    <Form.Control id = 'rol_update' type="text" placeholder=" Ingrese el rol" onChange = {
                                                    (e) =>{
                                                        set_rol_update(e.target.value);
                                                    }
                                                    } required/>            
                                                </Form.Group> 
                                                    
                                                <Form.Group className="mb-3" controlId="formBasicUnitCost2">
                                                    <Form.Check
                                                    inline
                                                    label = "Pendiente"
                                                    name = "estado"
                                                    type = "radio"
                                                    id = '1'
                                                    onChange = {(e) =>{
                                                        set_state_update("Pendiente");
                                                    }}/>            

                                                    <Form.Check
                                                        inline
                                                        label = "Autorizado"
                                                        name = "estado"
                                                        type = "radio"
                                                        id = '0'
                                                        onChange = {(e) =>{
                                                        set_state_update("Autorizado");
                                                    }}/>

                                                    <Form.Check
                                                        inline
                                                        label = "Bloqueado"
                                                        name = "estado"
                                                        type = "radio"
                                                        id = '0'
                                                        onChange = {(e) =>{
                                                        set_state_update("Bloqueado");
                                                    }}/>            
                                                </Form.Group> 
                                            </Row>
                                            <Button type='submit' variant="warning"  onClick = {
                                                ()=>{

                                                
                                                update_users(id_update)}} >
                                                Actualizar
                                            </Button>
                                        </Form>
                                    </div> 
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

export default MaestroUsuario;  