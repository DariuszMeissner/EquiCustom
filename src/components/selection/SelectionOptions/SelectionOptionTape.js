import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionTape = ({ color, setColorTape, colorTape }) => {
    const [checked, setChecked] = useState(colorTape)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorTape(value)
    }

    return (
        <div className="selectionOptions__box">
            <div className="selectionOptions__item">
                {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep title='back' id='5' />
                <ButtonNextStep title='next' id='7' />
            </div>
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