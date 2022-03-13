import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductListing'
import { ProductListingHero } from './ProductListingHero';
import { Button } from '../UI/button/Button'

export const ProductListing = () => {
    const products = useSelector(state => state.product.listing)

    const productsData = products.map((product, index) =>
        product &&
        <div key={index} className='c-s-12 c-m-6 c-l-3 center'>
            <img src={product.thumb} alt={product.name} />
            <h3>{`${product.name} ${product.look.material}`}</h3>
            <h4 className='fs-3'>price:&nbsp;{`${product.orgPrice}`} Eur</h4>
            <div className='flex flex-column flex-align-center m-t-4'>
                <Button
                    name='See product'
                    redirect={`/products/${product.id}`}
                    classList='btn-see-product inline-block center col-8 bg-col-4 p-6 p-t-1 p-b-1 m-b-3' />
                <Button
                    name='Customize'
                    redirect={`/products/configurator/${product.id}/options/${product.id}`}
                    classList='btn-customize inline-block center col-8 bg-col-10 p-6 p-t-1 p-b-1' />
            </div>
        </div>
    )

    return (
        <>
            <ProductListingHero />
            <section className='listing row'>
                {productsData}
            </section>
        </>
    );
};
