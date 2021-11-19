import React from 'react'
import { Route } from 'react-router'


export const ButtonNextStep = ({title, id}) => {
    return (
        <>
            <Route render={({ history }) => (
                <button
                    type='button'
                    onClick={() => { history.push(`/configurator/${id}`) }}
                >
                    {title}
                </button>
            )} />
        </>
    )
}
