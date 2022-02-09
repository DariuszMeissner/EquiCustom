import React from 'react';
import './ProductPageFeature.scss'

export const ProductPageFeature = ({ thisProduct }) => {

    const features = thisProduct.features.map(feature =>
        <div key={feature.name}>
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
        </div>
    )

    return (
        <section className='features'>
            {features}
        </section>
    );
};
