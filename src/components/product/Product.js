import React from 'react'
import { ReactComponent as SvgMaterial } from '../../images/material_pad.svg'
import { ReactComponent as SvgBinding } from '../../images/binding_pad.svg'
import { ReactComponent as SvgCord } from '../../images/cord_pad.svg'
import { ReactComponent as SvgTopBinding } from '../../images/topBinding_pad.svg'
import { ReactComponent as SvgTape } from '../../images/tape_pad.svg'
import { ReactComponent as SvgQuiltingRomb } from '../../images/quilting_romb_pad.svg'
import { ReactComponent as SvgQuiltinghoneyComb } from '../../images/quilting_honeyComb_pad.svg'
import { ReactComponent as SvgLogo } from '../../images/logo_pad.svg'
import horseView from '../../images/horse_view.png'


export const Product = ({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText, isShow }) => {

    let fullColumn = {
        width: isShow ? '100%' : '70%',
    }

    // let sizeProduct = {
    //     position: 'absolute',
    //     width: isShow ? '80vw' : '120vw',
    //     left: isShow ? '0' : '60%',
    // }

    // let items = {
    //     marginTop: isShow ? '0' : '0%',
    // }

    return (

        <div className="product" style={fullColumn} >

            <div className="product__positions">
                <img src={horseView} className={(isShow ? 'fullView__horse' : 'product__horse')} />
                <div className="product__items">
                    <div className={(isShow ? "fullView__layers" : "product__layers")}>
                        <SvgMaterial className="product__element" style={{ fill: !colorMaterial ? '#000' : colorMaterial }} />

                        {choosedQuilt === 'romb' &&
                            <SvgQuiltingRomb className="product__element" style={{ fill: 'gray' }} />
                        }
                        {choosedQuilt === 'honeycomb' &&
                            <SvgQuiltinghoneyComb className="product__element" style={{ fill: 'gray' }} />
                        }

                        <SvgCord className="product__element" style={{ fill: !colorCord ? '#000' : colorCord }} />


                        <SvgTopBinding className="product__element" style={{ fill: !colorTopBinding ? '#000' : colorTopBinding }} />


                        <SvgBinding className="product__element" style={{ fill: !colorBinding ? '#000' : colorBinding }} />


                        <SvgTape className="product__element" style={{ fill: !colorTape ? '#000' : colorTape }} />

                        {loadLogoOrText === 'logo' ?
                            <SvgLogo className="product__element" style={{ fill: colorLogo }} />
                            :
                            <h2 className={(isShow ? "fullView__text" : "product__text")} style={{ color: colorText }}>{textEmbroidery}</h2>
                        }
                    </div>

                </div>

            </div>


        </div>

    )
}