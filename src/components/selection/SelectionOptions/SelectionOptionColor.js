import React from 'react'

export const SelectionOptionColor = ({ name, value, checked, onChange, showTitle, setMark }) => {

    let bgNoCord = {
        background: value,
        border: '2px solid #000'
    }
    let bgColorLinear = {
        backgroundImage: `linear-gradient(35deg,  ${value} 0%, ${value} 50%, #fff 100%)`,
    }

    return (
        <>
            {/* On desktop */}
            <div className="selectionColor__item" >
                <label className="container">
                    <input
                        type='radio'
                        id={name}
                        name={name}
                        value={value}
                        checked={checked === value ? true : false}
                        onChange={onChange}
                    />
                    <span style={name === 'no-cord' ? bgNoCord : bgColorLinear}
                        className={"checkmark " + setMark}></span>
                    <span className={"selectionColor__title " + showTitle}>{name}</span>
                </label>
            </div>
        </>
    )

}