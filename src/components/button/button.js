import React from 'react'

export const Button = ({title, handleClick, position}) => {
    let style = {
        position: position,
        top: 100,
        right: 100
    }
    return (
        <>
            <button style={style} onClick={handleClick}>
                <span>{title}</span>    
            </button>   
        </>
    )
}
