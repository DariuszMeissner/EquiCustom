import React from 'react'
import './ConfiguratorProduct.scss'

export const ConfiguratorProduct = ({ thisProduct, stateColors }) => {
    const thisBinding = thisProduct.layersImg.find(layer => layer.name === 'binding')
    const thisCord = thisProduct.layersImg.find(layer => layer.name === 'cord')
    const thisLogo = thisProduct.layersImg.find(layer => layer.name === 'logo')
    const thisMaterial = thisProduct.layersImg.find(layer => layer.name === 'material')
    const thisTape = thisProduct.layersImg.find(layer => layer.name === 'tape')
    const thisTopBinding = thisProduct.layersImg.find(layer => layer.name === 'topBinding')

    return (
        <div className='product-wrapper'>
            <div className='pos-relative size'>
                <img className={'layer ' + stateColors.material} src={thisMaterial.url} alt="material" />
                <img className={'layer ' + stateColors.cord} src={thisCord.url} alt="cord" />
                <img className={'layer ' + stateColors.binding} src={thisBinding.url} alt="binding" />
                <img className={'layer ' + stateColors.topBinding} src={thisTopBinding.url} alt="top binding" />
                <img className={'layer ' + stateColors.embroidery} src={thisLogo.url} alt="logo" />
                <img className={'layer ' + stateColors.tape} src={thisTape.url} alt="tape" />
            </div>
        </div>
    )
}
