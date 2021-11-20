import React, { useState } from 'react'
import SelectionOptionEmbroideryLogo from './SelectionOptionEmbroideryLogo'
import SelectionOptionEmbroideryText from './SelectionOptionEmbroideryText'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionEmbroidery = ({ logoOrText, colorEmbroidery, setLogoOrText, loadLogoOrText }) => {
    const [checked, setChecked] = useState(loadLogoOrText)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setLogoOrText(value)
    }

    return (
        <div className="selectionOptions__embroidery">
            <div className="col-12 d-flex">
                {logoOrText.map(({ name, value }) => {
                    return (
                        <div className="selectionOptions" key={name}>
                            <label>
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
                    )
                }
                )}
            </div>
            <div className="col-12">
                {checked === 'logo' && <SelectionOptionEmbroideryLogo colorEmbroidery={colorEmbroidery} />}
                {checked === 'text' && <SelectionOptionEmbroideryText colorEmbroidery={colorEmbroidery} />}
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep title='back' id='7' />
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