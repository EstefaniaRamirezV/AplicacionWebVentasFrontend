import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = (props) => {

    const user = 1;

    if (!user) return < Redirect to="/Index" />


    return (
        <div>
          <Route {...props} />  
        </div>
    )
}

export default PrivateRoute
