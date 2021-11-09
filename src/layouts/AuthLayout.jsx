import React from 'react'
import Footer from 'components/Footer'



const AuthLayout = ({children}) => {
    return (
        <div>
            
            <div>
                
                <div>
                    <main>{children}</main>
                </div>
                
                <Footer /> 
            </div>           
        </div>
    );    
}

export default AuthLayout
