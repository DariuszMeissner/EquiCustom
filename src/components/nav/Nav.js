import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as SvgIcon } from '../../images/circle-solid.svg'

export const Nav = ({ equipment }) => {

    const location = useLocation();

    return (
        <ul className="nav">
            {equipment.map(item => item.elements.map(({ id, name }) => {
                return (
                    <li className="d-flex justify-content-center align-content-center" key={id}>
                        {console.log(location.pathname)}
                        <NavLink
                            className={'nav__link ' + ((name === 'size' && location.pathname === '/') ? ' tip' : 'hideTip' ) }
                            activeClassName="active"
                            to={`/configurator/${id}`}>

                            <SvgIcon className='nav__circle' />
                            <span className='nav__item'>{name}</span>
                        </NavLink>
                    </li>
                )
            }))}
        </ul>
    )
}
