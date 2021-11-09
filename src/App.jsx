
import 'styles/styles.css';
import Index from 'pages/Index';
import PrivateRoute from 'components/PrivateRoute';
import {BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import Register from 'pages/aut/Register';
import Password from 'pages/aut/Password';
import MaestroProductos from 'pages/admin/MaestroProductos';
import MaestroUsuario from 'pages/admin/MaestroUsuario';
import MaestroVentas from 'pages/admin/MaestroVentas';
import MenuPrincipal from 'pages/admin/MenuPrincipal';
import RegistroProducto from 'pages/admin/RegistroProducto';
import RegistroVentas from 'pages/admin/RegistroVentas';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <PrivateRoute path="/admin/RegistroProducto">
              <RegistroProducto />    
          </PrivateRoute> 
        
          <PrivateRoute path="/admin/RegistroVentas">
            <RegistroVentas />
          </PrivateRoute>PrivatePrivate

          <PrivateRoute path="/admin/MaestroUsuario">
            <MaestroUsuario />
          </PrivateRoute> 

          <PrivateRoute path="/admin/MaestroProductos">
            <MaestroProductos />
          </PrivateRoute>
          
          <PrivateRoute path="/admin/MaestroVentas">
            <MaestroVentas />
          </PrivateRoute>          

          <PrivateRoute path="/admin/MenuPrincipal">
            <MenuPrincipal />
          </PrivateRoute>

          <Route path="/aut/Password">
            <Password />
          </Route>

          <Route path="/aut/Register">
            <Register />
          </Route>

          <Route path="/">
            <Index />
          </Route> 



        </Switch>
      </Router>
    </div>
  );
}

export default App;
