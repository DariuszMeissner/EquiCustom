import React from 'react'
import { Button } from '../button/button'

export const OverviewPanel = ({ handleClick, equipment }) => {

    return (
        <>
            <div className="productInfo">
                {equipment.map(({ name }) => <h2 className="productInfo__title" key={name}>{name}</h2>)}
            </div>
            <div className="d-flex flex-column">
                <Button btnClass="btn_ btn__second" handleClick={handleClick} title='Full preview' />
                <Button btnClass="btn_ btn__order" title='Go to order' />
            </div>
        </>


    )
}
