import React from 'react'

export const SelectionOptionSelect = ({ name, value, checked, onChange, showTitle, setMark }) => {

    return (
        <option style={{backgroundColor:value}} className='selectColor__select' value={value}>
            {name}
        </option>
    )

}