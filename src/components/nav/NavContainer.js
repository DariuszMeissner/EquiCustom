import React from 'react'
import { Nav } from './Nav'
import { NavLogo } from './NavLogo'


export const NavContainer = ({ equipment }) => {
    return (
        <nav className="nav__box container-fluid">
            <div className="row flex-column-reverse flex-md-row p-2 mb-2">
                <div className="col-12 col-md-8 d-flex align-items-center">
                    <Nav equipment={equipment} />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-end p-2 mb-2">
                    <NavLogo />
                </div>
            </div>
        </nav>
    )
}
