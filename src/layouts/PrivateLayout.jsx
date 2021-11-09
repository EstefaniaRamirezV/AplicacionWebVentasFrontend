import React from 'react'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'


const PrivateLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div>
                <Sidebar />
                <div>
                    <main>{children}</main>
                </div>
                
                <Footer /> 
            </div>           
        </div>
    )
}

export default PrivateLayout
