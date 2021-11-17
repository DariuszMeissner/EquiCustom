import React from 'react'
import { Button } from '../button/button'
import './overviewPanel.scss'


export const OverviewPanel = ({ handleClick, equipment }) => {

    return (

        <div className="overviewPanel">
            <h2>OverviewPanel</h2>
            <Button handleClick={handleClick} title='Full preview' />
        </div >

    )
}
