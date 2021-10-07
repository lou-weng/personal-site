import * as React from 'react'
import { Link } from 'gatsby'

import { navButton, navBar, navContainer } from '../styles/navbar.module.css'

const NavbarComponent = () => {
    return (
        <>
            <div className={navBar}>
                <Link className={navButton} to="/projects/">Projects</Link>
                <Link className={navButton} to="/blog/">Blog</Link>
            </div>
        </>
    )
}

export default NavbarComponent