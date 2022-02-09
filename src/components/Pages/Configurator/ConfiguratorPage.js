import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { ConfiguratorWrapper } from './ConfiguratorWrapper';
import { ConfiguratorNav } from './ConfiguratorNav/ConfiguratorNav'
import './ConfiguratorPage.scss';

export const ConfiguratorPage = () => {
    const { productId } = useParams();
    const products = useSelector(state => state.product.listing)
    const thisProduct = products.find(product => product.id === +productId)

    const stateColors = useSelector(state => state.options)

    return (
        <section>
            {
                thisProduct
                &&
                <>
                    <ConfiguratorNav thisProduct={thisProduct} />
                    <ConfiguratorWrapper thisProduct={thisProduct} stateColors={stateColors}/>
                    <Outlet />
                </>
            }
        </section>
    );
};
