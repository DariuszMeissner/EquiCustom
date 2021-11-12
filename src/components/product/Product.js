import React from 'react'
import { ReactComponent as SvgMaterial } from '../../images/material_pad.svg'
import { ReactComponent as SvgBinding } from '../../images/binding_pad.svg'
import { ReactComponent as SvgCord } from '../../images/cord_pad.svg'
import { ReactComponent as SvgTopBinding } from '../../images/topBinding_pad.svg'
import { ReactComponent as SvgTape } from '../../images/tape_pad.svg'
import { ReactComponent as SvgQuiltingRomb } from '../../images/quilting_romb_pad.svg'
import { ReactComponent as SvgQuiltinghoneyComb } from '../../images/quilting_honeyComb_pad.svg'


import '../../styles/product.scss'

export const Product = ({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt }) => {
    return (
        <div className="product">
            <SvgMaterial className="product__item" style={{ fill: !colorMaterial ? '#000' : colorMaterial }} />

            {choosedQuilt === 'romb' &&
                <SvgQuiltingRomb className="product__item" style={{ fill: !colorTape ? '#000' : colorTape }} />
            }
            {choosedQuilt === 'honeycomb' &&
                <SvgQuiltinghoneyComb className="product__item" style={{ fill: !colorTape ? '#000' : colorTape }} />
            }
            <SvgCord className="product__item" style={{ fill: !colorCord ? '#000' : colorCord }} />
            <SvgTopBinding className="product__item" style={{ fill: !colorTopBinding ? '#000' : colorTopBinding }} />
            <SvgBinding className="product__item" style={{ fill: !colorBinding ? '#000' : colorBinding }} />
            <SvgTape className="product__item" style={{ fill: !colorTape ? '#000' : colorTape }} />
            {loadLogoOrText === 'logo' ?
                <h2 >logo</h2>
                :
                <h2 >{textEmbroidery}</h2>
            }
        </div>
    )
}
