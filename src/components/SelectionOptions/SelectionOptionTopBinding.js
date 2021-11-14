import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'

const SelectionOptionTopBinding = ({ color, setColorTopBinding, colorTopBinding }) => {
    const [checked, setChecked] = useState(colorTopBinding)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorTopBinding(value)
    }

    return (
        <div>
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setColorTopBinding, colorTopBinding }) {
    return {
        setColorTopBinding,
        colorTopBinding
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionTopBinding)