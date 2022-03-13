import React from 'react';
import './ProductPageFeature.scss'

export const ProductPageFeature = ({ thisProduct }) => {

    const features = thisProduct.features.map(feature =>
        <div key={feature.name} className="center m-r-3 m-l-3">
            <h4>{feature.name}</h4>
            <p>{feature.description}</p>
        </div>
    )

    return (
        <section className='product-features'>
            <h3 className='fs-5 center m-t-8 m-b-8'>Features</h3>
            <div className='flex'>
                {features}
            </div>
        </section>
    );
};
