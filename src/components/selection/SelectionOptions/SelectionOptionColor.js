import React from 'react'

export const SelectionOptionColor = ({ name, value, checked, onChange }) => {
    return (
        <div className="selectionColor" >
            <label className="container">
                <input
                    type='radio'
                    id={name}
                    name={name}
                    value={value}
                    checked={checked === value ? true : false}
                    onChange={onChange}
                />
                <span style={{backgroundColor: value}} className="checkmark"></span>
                <span className="selectionColor__title">{name}</span>
            </label>
        </div>
    )

}