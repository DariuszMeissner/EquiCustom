import React, { useState } from 'react'
import { SelectionOptionEmbroideryLogo } from './SelectionOptionEmbroideryLogo'
import  SelectionOptionEmbroideryText  from './SelectionOptionEmbroideryText'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'

const SelectionOptionEmbroidery = ({ logoOrText, colorEmbroidery, setLogoOrText, loadLogoOrText }) => {
    const [checked, setChecked] = useState(loadLogoOrText)
    
    const handleChange = e => {
        const {value} = e.target
        setChecked(value)
        setLogoOrText(value)
    }

    return (
        <div>
            {logoOrText.map(el => {
                return (
                    <div className="selectionOptions__item" key={el.name}>
                        <label>
                            <input
                                type='radio'
                                id={el.name}
                                name={el.name}
                                value={el.value}
                                checked={checked === el.value ? true : false}
                                onChange={handleChange}
                            />
                            {el.name}
                        </label>

                    </div>
                )
            }
            )}
            {checked === 'logo' && <SelectionOptionEmbroideryLogo colorEmbroidery={colorEmbroidery}/>}
            {checked === 'text' && <SelectionOptionEmbroideryText colorEmbroidery={colorEmbroidery}/>}
        </div>
    )
}


//conect props and dispatch with store
function mapStateToProps({ setLogoOrText, loadLogoOrText }) {
    return {
        setLogoOrText,
        loadLogoOrText
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionEmbroidery)