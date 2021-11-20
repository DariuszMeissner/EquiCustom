import React, { useState } from 'react'
import SelectionOptionEmbroideryLogo from './SelectionOptionEmbroideryLogo'
import SelectionOptionEmbroideryText from './SelectionOptionEmbroideryText'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'
import { SelectionOptionSelect } from './SelectionOptionSelect'

const SelectionOptionEmbroidery = ({ logoOrText, colorEmbroidery, setLogoOrText, loadLogoOrText }) => {
    const [checked, setChecked] = useState(loadLogoOrText)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setLogoOrText(value)
    }

    return (
        <div className="selectionOptions__embroidery">
            {/* Select on mobile */}
            <div className="selectionColor__select selectionOptions__item">
                <select value={checked} onChange={handleChange}>
                    {logoOrText.map(props =>
                        <SelectionOptionSelect
                            key={props.name}
                            checked={checked}
                            onChange={handleChange}
                            {...props}
                            showTitle='showTitle'
                            setMark='setMark' />)}
                </select>
            </div>
            {/* Radio on desktop */}
            
            <div className="col-12 d-flex justify-content-center">
                {logoOrText.map(({ name, value }) => {
                    return (
                        <div className="selectionColor__radio" key={name}>
                            <label className="container">
                                <input
                                    type='radio'
                                    id={name}
                                    name={name}
                                    value={value}
                                    checked={checked === value ? true : false}
                                    onChange={handleChange}
                                />
                                <span className="checkmark"></span>
                                <span className="selectionColor__title showTitle">{name}</span>
                            </label>

                        </div>
                    )
                }
                )}
            </div>
            <div className="col-12">
                {checked === 'logo' && <SelectionOptionEmbroideryLogo colorEmbroidery={colorEmbroidery} />}
                {checked === 'text' && <SelectionOptionEmbroideryText colorEmbroidery={colorEmbroidery} />}
            </div>
        </div>
    )
}


//conect props and dispatch with store
function mapStateToProps({ setLogoOrText, loadLogoOrText }) {
    return {
        setLogoOrText,
        loadLogoOrText,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionEmbroidery)