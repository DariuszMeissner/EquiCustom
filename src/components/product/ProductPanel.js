import React from 'react'
import { Button } from '../button/button'
import { OverviewPanel } from '../overview/OverviewPanel'
import { Product } from './Product'

const ProductPanel = ({ equipment, colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText, handleClick, isShow }) => {

    let isPreview = {
        height: isShow && '100vh'
    }

    return (
        <section className="productPanel" style={isPreview}>
            <div className="row g-0">
                <div className={"col-12" + " " + (isShow ? "col-md-12" : "col-md-8")}>
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
                <div className={"overviewPanel col-12" + " " + (isShow ? "" : "col-md-4")}>
                    {!isShow && <OverviewPanel handleClick={handleClick} equipment={equipment} />}

                </div>
            </div>

            {isShow &&
                <div>
                    <Button
                        btnClass="btn_ btn__second full"
                        title='Close'
                        handleClick={handleClick} />
                </div>}
        </section>
    )
}

export default ProductPanel


