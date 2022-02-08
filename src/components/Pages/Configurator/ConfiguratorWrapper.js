import React from 'react';
import './ConfiguratorWrapper.scss'

export const ConfiguratorWrapper = ({ thisProduct }) => {
    const thisBinding = thisProduct.layersImg.find(layer => layer.name === 'binding')
    const thisCord = thisProduct.layersImg.find(layer => layer.name === 'cord')
    const thisLogo = thisProduct.layersImg.find(layer => layer.name === 'logo')
    const thisMaterial = thisProduct.layersImg.find(layer => layer.name === 'material')
    const thisTape = thisProduct.layersImg.find(layer => layer.name === 'tape')
    const thisTopBinding = thisProduct.layersImg.find(layer => layer.name === 'topBinding')
    const thisQuilting = thisProduct.layersImg.find(layer => layer.name === 'quilting').options.find(el => el.name === 'romb')

    return (
        <div className='pos-relative size'>
            <img className='layer' src={thisMaterial.url} alt="a" />
            <img className='layer' src={thisQuilting.url} alt="a" />
            <img className='layer' src={thisCord.url} alt="a" />
            <img className='layer' src={thisBinding.url} alt="a" />
            <img className='layer' src={thisTopBinding.url} alt="a" />
            <img className='layer' src={thisLogo.url} alt="a" />
            <img className='layer' src={thisTape.url} alt="a" />
        </div>
    );
};
