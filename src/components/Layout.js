import * as React from 'react'
import NavbarComponent from './Navbar'

const Layout = ({ children }) => {
    return(
        <>
            <NavbarComponent></NavbarComponent>
            { children }
        </>
    )
}

export default Layout