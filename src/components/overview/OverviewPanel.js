import React from 'react'
import { Button } from '../button/button'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './overviewPanel.scss'
import { SummaryPage } from '../../pages/summary/summaryPage';

export const OverviewPanel = ({ handleClick }) => {




    return (

        <BrowserRouter>
            <div className="overviewPanel">
                <h2>OverviewPanel</h2>
                <Button handleClick={handleClick} title='Full preview' />
                
                {/* <Link to="/summary-page"> <Button title='Go to order' /></Link>

                <Route path="/summary-page">
                    <SummaryPage />
                </Route> */}

            </div >

        </BrowserRouter>

    )
}
