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


export const Product = ({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText, isShow }) => {

    let fullColumn = {
        width: isShow ? '100%' : '70%',
    }

    let sizeProduct = {
        position: 'absolute',
        width: isShow ? '80vw' : '120vw',
        left: isShow ? '0' : '-60%',
    }

    let items = {
        marginTop: isShow ? '0' : '-30%',
    }

    return (
        <div className="product" style={fullColumn} >
            <div style={items}>
                <div className='horse'>
                    <img src={horseView} style={sizeProduct} alt='horse view' />
                </div>

                <div className="items-horse" >
                    {/* Material */}
                    <SvgMaterial style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorMaterial ? '#000' : colorMaterial }} />

                    {/* Quilts  */}
                    {choosedQuilt === 'romb' &&
                        <SvgQuiltingRomb style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorTape ? '#000' : colorTape }} />
                    }
                    {choosedQuilt === 'honeycomb' &&
                        <SvgQuiltinghoneyComb style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorTape ? '#000' : colorTape }} />
                    }


                    {/* Cord */}
                    <SvgCord style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorCord ? '#000' : colorCord }} />

                    {/* Top binding */}
                    <SvgTopBinding style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorTopBinding ? '#000' : colorTopBinding }} />

                    {/* Binding */}
                    <SvgBinding style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorBinding ? '#000' : colorBinding }} />

                    {/* Tape */}
                    <SvgTape style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: !colorTape ? '#000' : colorTape }} />
                    {/* logo or text*/}
                    {loadLogoOrText === 'logo' ?
                        <SvgLogo style={{ position: 'absolute', width: isShow ? '80vw' : '120vw', left: isShow ? '0' : '-60%', fill: colorLogo }} />
                        :
                        <h2 style={{ position: 'absolute', left: '0', top: '0',color: colorText }}>{textEmbroidery}</h2>
                    }

                </div>
            </div>

        </div>

    )
}