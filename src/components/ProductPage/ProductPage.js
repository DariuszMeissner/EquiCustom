import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { ProductPageFeature } from './ProductPageFeature'
import './ProductPage.scss'
import { ProductSpec } from './ProductSpec';
import { Button } from '../UI/button/Button';

export const ProductPage = () => {
    const { productId } = useParams();
    const products = useSelector(state => state.product.listing)
    const thisProduct = products.find(product => product.id === +productId)

    return (
        <> {

            thisProduct &&

            <section className='product-page row m-t-4'>
                <div className='c-s-12 c-l-6 p-l-0-s'>
                    <img src={thisProduct.thumb} alt={thisProduct.name} />
                </div>
                <div className='c-s-12 c-l-6 p-r-0-s'>

                    <div className='flex flex-justify-between m-b-8'>
                        <h2 className='fs-6'>{`${thisProduct.name} ${thisProduct.look.material}`}</h2>
                        <span className='fs-6'>{thisProduct.orgPrice} Eur</span>
                    </div>

                    <p className='m-b-8'>{thisProduct.descriprion}</p>
                    <ProductSpec thisProduct={thisProduct} />

                    <div className='flex flex-justify-center m-t-8'>
                        <Button
                            name='Customize'
                            redirect={`/products/configurator/${productId}/options/${productId}`}
                            classList='btn-customize inline-block center col-8 bg-col-10 p-6 p-t-1 p-b-1' />
                    </div>
                </div>
                <ProductPageFeature thisProduct={thisProduct} />
            </section>
        }
        </>
    );
};
