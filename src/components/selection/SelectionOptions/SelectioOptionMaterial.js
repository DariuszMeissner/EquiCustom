import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'

const SelectionOptionMaterial = ({ color, setColorMaterial, colorMaterial }) => {
    const [checked, setChecked] = useState(colorMaterial)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorMaterial(value)
    }

    return (
        <div>
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({setColorMaterial, colorMaterial }) {
    return {
        setColorMaterial, 
        colorMaterial
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionMaterial)