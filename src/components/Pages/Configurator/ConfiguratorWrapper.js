import React from 'react';
import { ConfiguratorProduct } from './ConfiguratorProduct';
import { ConfiguratorSummary } from './ConfiguratorSummary';
import './ConfiguratorWrapper.scss'

export const ConfiguratorWrapper = ({ thisProduct, stateColors, productId }) => {

    return (
        <div className='row m-t-10'>
            <div className='c-s-8'>
                <ConfiguratorProduct thisProduct={thisProduct} stateColors={stateColors} />
            </div>
            <div className='c-s-4'>
                <ConfiguratorSummary thisProduct={thisProduct} stateColors={stateColors} productId={productId} />
            </div>
        </div>
    );
};
