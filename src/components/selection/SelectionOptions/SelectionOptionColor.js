import React from 'react'

export const SelectionOptionColor = ({ name, value, checked, onChange }) => {
    return (
        <div className="selectionOptions__item" >
            <label>
                <input
                    type='radio'
                    id={name}
                    name={name}
                    value={value}
                    checked={checked === value ? true : false}
                    onChange={onChange}
                />
                {name}
            </label>
        </div>
    )

}