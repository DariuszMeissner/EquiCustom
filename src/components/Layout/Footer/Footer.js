import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export const Footer = () => {
    return (
        <footer className='footer bg-col-4 col-8 m-t-8'>
            <div className='container wrap fs-3 flex flex-justify-between p-4 p-t-1 p-b-1'>
                <div>2022 Dariusz Meissner. All Right Reserved.</div>
                <ul className='flex'>
                    <NavLink to="/" className={'link'}>Home</NavLink>
                    <NavLink to="/" className={'link'}>About us</NavLink>
                    <NavLink to="/" className={'link'}>Cotact us</NavLink>
                </ul>
            </div>
        </footer>
    )
}
