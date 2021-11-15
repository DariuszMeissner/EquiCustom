import React from 'react'
import { Nav } from './Nav'
import { NavLogo } from './NavLogo'
import './nav.scss'



export const NavContainer = ({ equipment }) => {
    return (
        <nav className="nav">
            <div className="nav__box nav__box--menu">
                <Nav equipment={equipment} />
            </div>
            <div className="nav__box nav__box--logo">
                <NavLogo />
            </div>
        </nav>
    )
}
