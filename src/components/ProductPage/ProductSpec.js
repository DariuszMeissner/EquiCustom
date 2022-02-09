import React from 'react';
import './ProductSpec.scss'

export const ProductSpec = ({ thisProduct }) => {
    return (
        <>
            {
                thisProduct &&
                <div>
                    <span>Material:</span>
                    <span>{thisProduct.look.material}</span>
                </div>

            }
        </>
    );
};
