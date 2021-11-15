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
import './product.scss'


export const Product = ({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText }) => {
    return (
        <div className="product">
            {/* Layers of product */}

            <img style={{width:'150%'}}src={horseView} alt='horse view' />
            {/* Material */}
            <SvgMaterial className="product__item" style={{ fill: !colorMaterial ? '#000' : colorMaterial }} />


            {/* Quilts  */}
            {choosedQuilt === 'romb' &&
                <SvgQuiltingRomb className="product__item" style={{ fill: !colorTape ? '#000' : colorTape }} />
            }
            {choosedQuilt === 'honeycomb' &&
                <SvgQuiltinghoneyComb className="product__item" style={{ fill: !colorTape ? '#000' : colorTape }} />
            }

            {/* logo or text*/}
            {loadLogoOrText === 'logo' ?
                <SvgLogo className="product__item" style={{ fill: colorLogo }} />
                :
                <h2 style={{ color: colorText }}>{textEmbroidery}</h2>
            }

            {/* Cord */}
            <SvgCord className="product__item" style={{ fill: !colorCord ? '#000' : colorCord }} />

            {/* Top binding */}
            <SvgTopBinding className="product__item" style={{ fill: !colorTopBinding ? '#000' : colorTopBinding }} />

            {/* Binding */}
            <SvgBinding className="product__item" style={{ fill: !colorBinding ? '#000' : colorBinding }} />

            {/* Tape */}
            <SvgTape className="product__item" style={{ fill: !colorTape ? '#000' : colorTape }} />

        </div>
    )
}