import React from 'react';
import { NavLink } from 'react-router-dom';
import './ConfiguratorNav.scss'

export const ConfiguratorNav = ({ thisProduct }) => {
    const thisId = thisProduct.id
    const elements = thisProduct.elements.map(el =>
        <li key={el.id}>
            <NavLink to={`/products/configurator/${thisId}/options/${el.id}`}>{el.name}</NavLink>
        </li>
    )

    return (
        <nav>
            <ul className='flex flex-justify-between'>
                {elements}
            </ul>
        </nav>
    );
};
