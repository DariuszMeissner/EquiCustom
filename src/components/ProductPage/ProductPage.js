import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { ProductPageFeature } from './ProductPageFeature'
import './ProductPage.scss'

export const ProductPage = () => {
    const { productId } = useParams();
    const products = useSelector(state => state.product.listing)
    const thisProduct = products.find(product => product.id === +productId)

    return (
        <> {

            thisProduct &&

            <section className='productPage row'>
                <div className='c-s-12 c-l-6'>
                    <img src={thisProduct.thumb} alt={thisProduct.name} />
                </div>
                <div className='c-s-12 c-l-6'>
                    <h2>{thisProduct.name}</h2>
                    <span>{thisProduct.orgPrice} Eur</span>
                    <p>{thisProduct.descriprion}</p>
                    <Link to={`/products/configurator/${productId}`}>Customize</Link>
                </div>
                <ProductPageFeature thisProduct={thisProduct} />
            </section>
        }
        </>
    );
};
