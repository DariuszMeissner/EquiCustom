import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'

const SelectionOptionBinding = ({ color, setColorBinding, colorBinding }) => {
    const [checked, setChecked] = useState(colorBinding)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorBinding(value)
    }

    return (
        <div>
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setColorBinding, colorBinding }) {
    return {
        setColorBinding,
        colorBinding
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionBinding)