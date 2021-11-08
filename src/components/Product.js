import React from 'react'
import { ReactComponent as SvgMaterial } from '../images/material.svg'
import { ReactComponent as SvgBinding } from '../images/binding.svg'
import '../styles/product.scss'

export const Product = ({ colorMaterial, colorBinding }) => {
    return (
        <div className="product">
            <SvgMaterial className="product__item" style={{ fill: !colorMaterial ? '#000' : colorMaterial }} />
            <SvgBinding className="product__item" style={{ fill: !colorBinding ? '#000' : colorBinding }} />
        </div>
    )
}
