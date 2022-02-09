import React from 'react';
import { Outlet } from 'react-router-dom';
import './Nav.scss'

export const Nav = () => {
    return (
        <>
            <h1>nav</h1>
            <Outlet />
        </>);
};
