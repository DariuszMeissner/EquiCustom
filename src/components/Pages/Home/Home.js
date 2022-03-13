import React from 'react';
import { ProductListing } from '../../Listing/ProductListing';
import './Home.scss';

export const Home = () => {
    return (
        <div className='container'>
            <ProductListing />
        </div>
    )
};
