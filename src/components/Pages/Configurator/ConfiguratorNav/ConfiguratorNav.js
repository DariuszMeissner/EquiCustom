import React from 'react';
import { NavLink } from 'react-router-dom';
import { default as LogoSvg } from '../../../../assets/images/logo.svg';
import './ConfiguratorNav.scss'

export const ConfiguratorNav = ({ thisProduct }) => {
    const thisId = thisProduct.id
    const elements = thisProduct.elements.map(el =>
        <li key={el.id}>
            <NavLink
                to={`/products/configurator/${thisId}/options/${el.id}`}
                className={({ isActive }) => isActive ? 'active' : 'col-8'}>
                {el.name}
            </NavLink>
        </li>
    )

    return (
        <nav className='configurator-nav flex row col-8 bg-col-4'>
            <ul className='c-s-8 flex flex-justify-between'>
                {elements}
            </ul>
            <span className='c-s-4 flex flex-justify-end'>
                <img className='logo-equicustom' src={LogoSvg} alt='logo equicustom'></img>
            </span>
        </nav>
    );
};
