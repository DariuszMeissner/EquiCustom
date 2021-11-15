import React, { useState } from 'react'
import { Button } from '../button/button'
import { OverviewPanel } from '../overview/OverviewPanel'
import { Product } from './Product'
import './productPanel.scss'

const ProductPanel = ({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText, handleClick, isShow }) => {
    

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
                colorLogo={colorLogo}
                colorText={colorText}
                isShow={isShow}
            />
            {!isShow && <OverviewPanel handleClick={handleClick} />}
            {isShow &&
                <div>
                    <Button 
                    title='Close full preview'
                    position='absolute' 
                    handleClick={handleClick} />
                </div>}
        </section>
    )
}

export default ProductPanel


