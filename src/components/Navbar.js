import * as React from 'react'
import { Link } from 'gatsby'
import logo from "/static/logo.png"

import { navButton, navBar, logoButton, logoIcon } from '../styles/navbar.module.css'

const NavbarComponent = () => {
    return (
        <>
            <div className={navBar}>
                <Link className={logoButton} to="/"><img className={logoIcon} alt="logo" src={logo}></img></Link>
                {/* <Link className={navButton} to="/projects/">Projects</Link> */}
                <Link className={navButton} to="/blog/">Blog</Link>
                <a className={navButton} href={'/resume/Louie_Weng.pdf'} target="_blank" rel="noreferrer">Resume</a>
            </div>
        </>
    )
}

export default NavbarComponent