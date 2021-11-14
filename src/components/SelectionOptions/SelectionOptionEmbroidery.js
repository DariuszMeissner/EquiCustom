import React, { useState } from 'react'
import SelectionOptionEmbroideryLogo from './SelectionOptionEmbroideryLogo'
import SelectionOptionEmbroideryText from './SelectionOptionEmbroideryText'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'

const SelectionOptionEmbroidery = ({ logoOrText, colorEmbroidery, setLogoOrText, loadLogoOrText }) => {
    const [checked, setChecked] = useState(loadLogoOrText)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setLogoOrText(value)
    }

    return (
        <div>
            {logoOrText.map(({ name, value }) => {
                return (
                    <div className="selectionOptions__item" key={name}>
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
            {checked === 'logo' && <SelectionOptionEmbroideryLogo colorEmbroidery={colorEmbroidery} />}
            {checked === 'text' && <SelectionOptionEmbroideryText colorEmbroidery={colorEmbroidery} />}
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