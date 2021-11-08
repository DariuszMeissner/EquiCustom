import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.scss'



export const Nav = ({ equipment }) => {
    return (
            <ul className="nav__menu">
                {equipment.map(item => item.elements.map(({ id, name }) => {
                    return (
                        <li className="nav__item" key={id}><Link className='nav__link' to={`/configurator/${id}`}>{name}</Link></li>
                    )
                }))}
            </ul>
    )
}
