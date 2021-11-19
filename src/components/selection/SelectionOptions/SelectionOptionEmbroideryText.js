import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'

const SelectionOptionEmbroideryText = ({ colorEmbroidery, setTextEmbroidery, textEmbroidery, setColorTextEmbroidery, colorText }) => {
    const [checked, setChecked] = useState(colorText)
    const [text, setText] = useState(textEmbroidery)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorTextEmbroidery(value)
    }
    const handleTextEmbroidery = e => {
        const { value, maxLength } = e.target
        const text = value.slice(0,maxLength)

        setText(text)
        setTextEmbroidery(text)
    }

    return (
        <div className="selectionOptions__text ">
            <div className="selectionOptions__item ">
                <input
                    type='text'
                    name='text'
                    value={text}
                    maxLength='3'
                    onChange={handleTextEmbroidery}
                />
            </div>
            <div className="d-flex"> 
                {colorEmbroidery.map(({ name, value }) => <SelectionOptionColor key={name} name={name} value={value} onChange={handleChange} checked={checked} />)}
            </div>
        </div>
    )
}


//conect props and dispatch with store
function mapStateToProps({ textEmbroidery, colorText }) {
    return {
        textEmbroidery,
        colorText,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionEmbroideryText)