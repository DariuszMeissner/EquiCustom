import React from 'react';
import './Nav.scss'
import { default as LogoSvg } from '../../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <nav className='nav-main'>
                <div className='container wrap flex flex-justify-between p-t-3 p-b-3'>
                    <ul className='flex'>
                        <NavLink to="/" className={'link'}>Home</NavLink>
                        <NavLink to="/" className={'link'}>About us</NavLink>
                        <NavLink to="/" className={'link'}>Cotact us</NavLink>
                    </ul>
                    <span className='c-s-4 flex flex-justify-end'>
                        <img className='logo-equicustom' src={LogoSvg} alt='logo equicustom'></img>
                    </span>
                </div>
            </nav>
        </>
    )
};
