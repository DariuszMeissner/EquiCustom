import React from 'react'
import { Button } from '../button/button'

export const OverviewPanel = ({ handleClick, equipment }) => {

    return (

        <div className="overviewPanel">

            {equipment.map(({ name }) => <h2 key={name}>{name}</h2>)}

            <div className="d-flex flex-column">
                <Button handleClick={handleClick} title='Full preview' />
                <Button handleClick={handleClick} title='Go to order' />
            </div>
        </div >

    )
}
