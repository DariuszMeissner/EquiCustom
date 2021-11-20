import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionSize = ({ size, setPadSize, padSize }) => {
    const [checked, setChecked] = useState(padSize)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setPadSize(value)
    }

    return (
        <div className="selectionOptions__box">
            <div className="selectionOptions__item">
                {size.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep title='next' id='2' />
            </div>
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setPadSize, padSize }) {
    return {
        setPadSize,
        padSize
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionSize)