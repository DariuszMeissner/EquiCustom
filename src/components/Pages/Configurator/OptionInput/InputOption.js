import React from 'react';
import './InputOption.scss'

export const InputOption = ({ colorOption, stateColors, optionId, setOptions }) => {
    return (
        <label className='container'>{colorOption.name}
            <input
                className='block'
                type="radio"
                value={colorOption.name}
                name={optionId}
                onChange={e => setOptions(e, optionId)}
                checked={stateColors === colorOption.name}
            />
            <span className='checkmark' style={{ backgroundColor: colorOption.value }}></span>
        </label>
    );
};
