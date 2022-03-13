import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'

export const Button = ({ name, redirect, classList }) => {
    let styleCss = [
        'btn',
        classList
    ]

    return (
        <NavLink to={redirect}
            className={styleCss.join(' ')}>
            {name}
        </NavLink>
    )
}
