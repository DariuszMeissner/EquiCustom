import React from 'react';
import './ProductPageFeature.scss'

export const ProductPageFeature = ({ thisProduct }) => {

    const features = thisProduct.features.map(feature =>
        <>
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
        </>
    )

    return (
        <section className='features'>
            {features}
        </section>
    );
};
