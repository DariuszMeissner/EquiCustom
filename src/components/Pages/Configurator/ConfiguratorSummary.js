import React from 'react'
import { Button } from '../../UI/button/Button'
import './ConfiguratorSummary.scss'

export const ConfiguratorSummary = ({ thisProduct, stateColors, productId }) => {

    return (
        <section className='configurator-summary'>
            <h2 className='fs-8 center uppercase'>{thisProduct.name}</h2>
            <span className='block center m-t-2'>Price: {thisProduct.orgPrice}Eur</span>
            <div className='summary'>
                <h3 className='uppercase m-t-12 m-b-2'>Summary</h3>
                <ul className='list-properties'>
                    <li>Material: {stateColors.material}</li>
                    <li>Top binding: {stateColors.topBinding}</li>
                    <li>Binding: {stateColors.binding}</li>
                    <li>Tape: {stateColors.tape}</li>
                    <li>Cord: {stateColors.cord}</li>
                    <li>Embroidery: {stateColors.embroidery}</li>
                </ul>
            </div>
            <Button
                name='Close'
                redirect={`/products/${productId}`}
                classList='btn-close-configuration uppercase center col-8' />
        </section>
    )
}
