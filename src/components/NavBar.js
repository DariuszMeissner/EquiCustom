import React from 'react'
import { Link } from 'react-router-dom'



export const NavBar = ({ equipment }) => {
    return (
        <nav>
            <ul>

                {equipment.map(item => item.elements.map(({ id, name }) => {
                    return (
                        <li key={id}><Link to={`/configurator/${id}`}>{name}</Link></li>
                    )
                }))}
            </ul>
        </nav>
    )
}
