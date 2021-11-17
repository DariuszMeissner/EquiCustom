import React from 'react'
import { Button } from '../button/button'

export const OverviewPanel = ({ handleClick, equipment }) => {

    return (

        <div className="overviewPanel">
            <h2>OverviewPanel</h2>
            <Button handleClick={handleClick} title='Full preview' />
        </div >

    )
}
