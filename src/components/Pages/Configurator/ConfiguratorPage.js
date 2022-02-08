import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ConfiguratorPage.scss'
import { ConfiguratorWrapper } from './ConfiguratorWrapper';

export const ConfiguratorPage = () => {
    const { productId } = useParams();
    const products = useSelector(state => state.product.listing)
    const thisProduct = products.find(product => product.id === +productId)

    return (
        <section>
            {thisProduct && <ConfiguratorWrapper thisProduct={thisProduct} />}
        </section>
    );
};
