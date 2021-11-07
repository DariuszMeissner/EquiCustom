import React, { useState, useEffect } from 'react'
import { SelectionTitle } from './SelectionTitle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'

const SelectionOptions = ({ title, name, color, setColorMaterial, setColorBinding, colorMaterial, colorBinding }) => {
    const [material, setMaterial] = useState(colorMaterial)
    const [binding, setBinding] = useState(colorBinding)
    const [checked, setChecked] = useState('')

    useEffect(() => {
        name === 'material' && setColorMaterial(material)
        name === 'binding' && setColorBinding(binding)

    }, [material, binding, setColorMaterial, setColorBinding, name])


    const handleChange = e => {
        const { value } = e.target

        setChecked(value)

        name === 'material' && setMaterial(value)
        name === 'binding' && setBinding(value)
    }


    return (
        <>
            <SelectionTitle title={title} />
            <form>
                {color && color.map(({ id, name, value }) =>
                    <div key={id}>
                        <label >
                            <input
                                type='radio'
                                id={name}
                                name={name}
                                value={value}
                                checked={checked === value ? true : false}
                                onChange={handleChange}
                            />
                            {name}
                        </label>
                    </div>
                )}
            </form>
        </>
    )
}




//conect props and dispatch with store
function mapStateToProps({ colorMaterial, colorBinding }) {
    return {
        colorMaterial,
        colorBinding
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptions)
