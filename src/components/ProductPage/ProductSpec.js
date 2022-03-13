import React from 'react';
import './ProductSpec.scss'

export const ProductSpec = ({ thisProduct }) => {

    const specificationItems = () => {
        let arrayItems = []
        for (const [key, value] of Object.entries(thisProduct.look)) {
            arrayItems.push(
                <li key={key}>
                    <span>{key}:&nbsp;</span>
                    <span>{value}</span>
                </li>
            )
        }
        return arrayItems
    }

    return (
        <>
            {
                thisProduct &&
                <ul className='product-spec'>
                    {specificationItems()}
                </ul>

            }
        </>
    );
};
