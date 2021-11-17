import React from 'react'
import { Button } from '../button/button'
import { OverviewPanel } from '../overview/OverviewPanel'
import { Product } from './Product'

const ProductPanel = ({ equipment, colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText, handleClick, isShow }) => {

    let isPreview = {
        height: isShow && '100vh'
    }

    return (
        <section className="" style={isPreview}>
            <div className="">
                <div className="">
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
                </div>
                <div className="">
                    {!isShow && <OverviewPanel handleClick={handleClick} equipment={equipment} />}

                </div>
            </div>

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


