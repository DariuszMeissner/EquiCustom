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



    return (

        <div className={(isShow ? ' fullView__product' : 'product')} >

            <div className={(isShow ? ' fullView__positions' : "product__positions")}>
                <div className={(isShow ? ' fullView__horse' : 'product__horse focus')}></div>
                <img src={horseView} className={(isShow ? ' fullView__horse' : 'product__horse')} />
                <div className={(isShow ? ' fullView__items' : 'product__items')}>
                    <div className={(isShow ? " fullView__layers" : "product__layers")}>
                        <SvgMaterial className={isShow ? "fullView__element" : "product__element"} style={{ fill: !colorMaterial ? '#000' : colorMaterial }} />

                        {choosedQuilt === 'romb' &&
                            <SvgQuiltingRomb className={isShow ? "fullView__element" : "product__element"} style={{ fill: 'gray' }} />
                        }
                        {choosedQuilt === 'honeycomb' &&
                            <SvgQuiltinghoneyComb className={isShow ? "fullView__element" : "product__element"} style={{ fill: 'gray' }} />
                        }

                        <SvgCord className={isShow ? "fullView__element" : "product__element"} style={{ fill: !colorCord ? '#000' : colorCord }} />


                        <SvgTopBinding className={isShow ? "fullView__element" : "product__element"} style={{ fill: !colorTopBinding ? '#000' : colorTopBinding }} />


                        <SvgBinding className={isShow ? "fullView__element" : "product__element"} style={{ fill: !colorBinding ? '#000' : colorBinding }} />


                        <SvgTape className={isShow ? "fullView__element" : "product__element"} style={{ fill: !colorTape ? '#000' : colorTape }} />

                        {loadLogoOrText === 'logo' ?
                            <SvgLogo className={isShow ? "fullView__element" : "product__element"} style={{ fill: colorLogo }} />
                            :
                            <h2 className={(isShow ? " fullView__text" : "product__text")} style={{ color: colorText }}>{textEmbroidery}</h2>
                        }
                    </div>

                </div>

            </div>


        </div>

    )
}