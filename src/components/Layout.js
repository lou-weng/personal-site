import * as React from 'react'
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'
import HeadComponent from './Head'

import { contentContainer, bodyContainer, mainNav } from '../styles/layout.module.css'

const Layout = ({ children }) => {
    return(
        <>  
            <HeadComponent></HeadComponent>
            <NavbarComponent className={mainNav}></NavbarComponent>
            <div className={bodyContainer}>
                <div className={ contentContainer }>
                    { children }
                </div>
                <FooterComponent></FooterComponent>
            </div>
        </>
    )
}

export default Layout