import React, { useState } from 'react';
import './ConfiguratorOptions.scss'

export const ConfiguratorOptions = (props) => {
    const thisQuilting = props.thisProduct.elements.find(element => element.name === 'quilting');
    const thisMaterial = props.thisProduct.elements.find(element => element.name === 'material');
    const thisBinding = props.thisProduct.elements.find(element => element.name === 'binding');
    const thisTopBinding = props.thisProduct.elements.find(element => element.name === 'top-binding');
    const thisTape = props.thisProduct.elements.find(element => element.name === 'tape');
    const thisCord = props.thisProduct.elements.find(element => element.name === 'cord');
    const thisEmbroidery = props.thisProduct.elements.find(element => element.name === 'embroidery');

    const [checked, setChecked] = useState('#000')
    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
    }

    return (
        <>
            {thisMaterial && props.thisProduct.colors.map(color =>
                <span>
                    <label>{color.name}</label>
                    <input type='radio'
                        value={color.value}
                        onChange={handleChange}
                        checked={checked === color.value ? true : false}
                    />
                </span>
            )}
        </>
    );
};
