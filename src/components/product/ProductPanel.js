import React from 'react'
import { OverviewPanel } from '../OverviewPanel'
import { Product } from './Product'
import '../../styles/productPanel.scss'

const ProductPanel = ({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt }) => {
    return (
        <section className="productPanel">
            <Product
                colorMaterial={colorMaterial}
                colorBinding={colorBinding}
                colorCord={colorCord}
                colorTape={colorTape}
                colorTopBinding={colorTopBinding}
                textEmbroidery={textEmbroidery}
                loadLogoOrText={loadLogoOrText}
                choosedQuilt={choosedQuilt}
            />
            <OverviewPanel />
        </section>
    )
}

export default ProductPanel


