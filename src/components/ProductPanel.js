import React from 'react'
import { OverviewPanel } from './OverviewPanel'
import { Product } from './Product'
import '../styles/productPanel.scss'

const ProductPanel = ({ colorMaterial, colorBinding }) => {
    return (
        <section className="productPanel">
            <Product colorMaterial={colorMaterial} colorBinding={colorBinding}/>
            <OverviewPanel />
        </section>
    )
}

export default ProductPanel


