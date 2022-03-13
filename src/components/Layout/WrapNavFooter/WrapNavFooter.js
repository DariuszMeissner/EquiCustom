import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import './WrapNavFooter.scss'

export const WrapNavFooter = () => {
    return (
        <div >
            <Nav />
            <div className='container wrap'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
