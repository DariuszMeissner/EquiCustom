import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionMaterial = ({ color, setColorMaterial, colorMaterial }) => {
    const [checked, setChecked] = useState(colorMaterial)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorMaterial(value)
    }

    return (
        <div className="selectionOptions__item">
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            <ButtonNextStep title='back' id='2' />
            <ButtonNextStep title='next' id='4' />
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