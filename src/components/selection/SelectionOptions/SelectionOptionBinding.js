import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionBinding = ({ color, setColorBinding, colorBinding }) => {
    const [checked, setChecked] = useState(colorBinding)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorBinding(value)
    }

    return (
        <div className="selectionOptions__item">
            {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            <ButtonNextStep title='back' id='3' />
            <ButtonNextStep title='next' id='5' />
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