import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductListing'

export const ProductListing = () => {
    const products = useSelector(state => state.product.listing)

    const productsData = products.map((product, index) =>
        product &&
        <div key={index} className='c-s-12 c-m-6 c-l-3'>
            <img src={product.thumb} alt={product.name} />
            <Link to={`/products/configurator/${product.id}/options/${product.id}`}>Customize</Link>
            <h3>{`${product.name} ${product.look.material}`}</h3>
            <Link to={`/products/${product.id}`}>See product</Link>
        </div>
    )

    return (
        <section className='listing row'>
            {productsData}
        </section>
    );
};
