import * as React from 'react'
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'
import HeadComponent from './Head'

import { contentContainer, mainNav } from '../styles/layout.module.css'

const Layout = ({ children }) => {
    return(
        <>  
            <HeadComponent></HeadComponent>
            <NavbarComponent className={mainNav}></NavbarComponent>
            <div className={ contentContainer }>
                { children }
            </div>
            <FooterComponent></FooterComponent>
        </>
    )
}

export default Layout