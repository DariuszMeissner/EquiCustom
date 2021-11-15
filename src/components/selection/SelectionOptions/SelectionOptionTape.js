import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'

const SelectionOptionTape = ({ color, setColorTape, colorTape }) => {
    const [checked, setChecked] = useState(colorTape)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorTape(value)
    }

    return (
        <div>
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setColorTape, colorTape }) {
    return {
        setColorTape,
        colorTape
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionTape)