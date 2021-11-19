import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'

const SelectionOptionQuilt = ({ quilting, setQuilt, choosedQuilt}) => {
    const [checked, setChecked] = useState(choosedQuilt)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setQuilt(value)
    }

    return (
        <div className="selectionOptions__item">
            {quilting.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            <ButtonNextStep title='back' id='1' />
            <ButtonNextStep title='next' id='3' />
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setQuilt, choosedQuilt}) {
    return {
        setQuilt, 
        choosedQuilt
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionQuilt)