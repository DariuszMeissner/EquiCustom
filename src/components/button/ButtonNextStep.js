import React from 'react'
import { Route } from 'react-router'
import { ReactComponent as IconNext } from '../../images/arrow-right-solid.svg'
import { ReactComponent as IconBack } from '../../images/arrow-left-solid.svg'


export const ButtonNextStep = ({ title, id, btnClass }) => {
    return (
        <>
            <Route render={({ history }) => (
                <button
                    className={btnClass}
                    type='button'
                    onClick={() => { history.push(`/configurator/${id}`) }}>
                    {title === 'back' && <IconBack className="btn__icon"/>}
                    {title === 'next' && <IconNext className="btn__icon"/>}
                </button>
            )} />
        </>
    )
}
