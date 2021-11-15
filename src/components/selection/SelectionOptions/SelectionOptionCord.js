import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'

const SelectionOptionCord = ({ color, setColorCord, colorCord }) => {
    const [checked, setChecked] = useState(colorCord)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorCord(value)
    }

    return (
        <div>
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setColorCord, colorCord }) {
    return {
        setColorCord,
        colorCord
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionCord)