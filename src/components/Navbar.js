import * as React from 'react'
import { Link } from 'gatsby'

import { navButton } from '../styles/navbar.module.css'

const NavbarComponent = () => {
    return (
        <>
            <Link className={navButton} to="/projects/">Projects</Link>
            <Link className={navButton} to="/blog/">Blog</Link>
        </>
    )
}

export default NavbarComponent