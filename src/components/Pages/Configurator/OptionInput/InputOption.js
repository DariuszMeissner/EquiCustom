import React from 'react';
import './InputOption.scss'

export const InputOption = ({ colorOption, stateColors, optionId, setOptions }) => {
    return (
        <label className='input-option-container flex flex-column-s flex-align-center'>
            <input
                className='block'
                type="radio"
                value={colorOption.name}
                name={optionId}
                onChange={e => setOptions(e, optionId)}
                checked={stateColors === colorOption.name}
            />
            <span className='checkmark m-b-2' style={{ backgroundColor: colorOption.value }}></span>
            <span className='uppercase-s'>{colorOption.name}</span>
        </label>
    );
};
