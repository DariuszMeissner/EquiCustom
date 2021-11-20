import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionTopBinding = ({ color, setColorTopBinding, colorTopBinding }) => {
    const [checked, setChecked] = useState(colorTopBinding)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorTopBinding(value)
    }

    return (
        <div className="selectionOptions__box">
            <div className="selectionOptions__item">
                {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep title='back' id='4' />
                <ButtonNextStep title='next' id='6' />
            </div>
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