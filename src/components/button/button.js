import React from 'react'

export const Button = ({ title, handleClick, btnClass }) => {
   
    return (
        <>
            <button className={btnClass} onClick={handleClick}>
                {title}
            </button>
        </>
    )
}
