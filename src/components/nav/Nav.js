import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as SvgIcon } from '../../images/circle-solid.svg'

export const Nav = ({ equipment }) => {

    return (
        <ul className="nav">
            {equipment.map(item => item.elements.map(({ id, name }) => {
                return (
                    <li key={id}>
                        <NavLink
                            className='nav__link'
                            activeClassName="active"
                            to={`/configurator/${id}`}>

                            <div className='nav__circle'>
                                <SvgIcon />
                            </div>
                            <span className='nav__item'>{name}</span>
                        </NavLink>
                    </li>
                )
            }))}
        </ul>
    )
}
