import React from 'react'

export const OptionColors = ({ colors, title }) => {

    return (
        <>
            <h2>{title}</h2>

            {colors.map(({id, name, value }) =>
                <div
                    key={id}
                    style={{ backgroundColor: value, height: 100, width: 100 }}>
                    {name}
                </div>)}
        </>
    )
}
