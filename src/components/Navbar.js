import * as React from 'react'
import { Link } from 'gatsby'
import logo from "/static/logo.png"

import { navButton, navBar, logoButton, logoIcon } from '../styles/navbar.module.css'

const NavbarComponent = () => {
    return (
        <>
            <div className={navBar}>
                <Link className={logoButton} to="/"><img className={logoIcon} alt="logo" src={logo}></img></Link>
                <Link className={navButton} to="/projects/">Projects</Link>
                <Link className={navButton} to="/blog/">Blog</Link>
                <Link className={navButton} to="/resume/">Resume</Link>
            </div>
        </>
    )
}

export default NavbarComponent