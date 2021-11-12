import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'

const SelectionOptionEmbroideryText = ({ colorEmbroidery, setTextEmbroidery }) => {
    const [checked, setChecked] = useState(false)
    const [text, setText] = useState('')

    const handleChange = e => {
        setChecked(e.target.value)
    }
    const handleTextEmbroidery = e => {
        const { value } = e.target
        setText(value)
        setTextEmbroidery(value)
    }

    return (
        <div>
            <input
                type='text'
                name='text'
                value={text}
                onChange={handleTextEmbroidery}
            />
            {/* {colorEmbroidery.map(({ name, value }) => <SelectionOptionColor key={name} name={name} value={value} onChange={handleChange} checked={checked} />)} */}
        </div>
    )
}


//conect props and dispatch with store
function mapStateToProps({ textEmbroidery }) {
    return {
        textEmbroidery
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionEmbroideryText)