import React from 'react';
import './InputOption.scss'

export const InputOption = ({ colorOption, stateColors, optionId, setOptions }) => {
    return (
        <span key={colorOption.id}>
            <label>{colorOption.name}</label>
            <input
                type="radio"
                value={colorOption.name}
                name={optionId}
                onChange={e => setOptions(e, optionId)}
                checked={stateColors.material === colorOption.name}
            />
        </span>
    );
};
