import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'
import { SelectionOptionSelect } from './SelectionOptionSelect'

const SelectionOptionQuilt = ({ quilting, setQuilt, choosedQuilt }) => {
    const [checked, setChecked] = useState(choosedQuilt)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setQuilt(value)
    }

    return (
        <div className="selectionOptions__box">
            {/* On mobile */}
            <div className="selectionColor__select selectionOptions__item">
                <select value={checked} onChange={handleChange}>
                {quilting.map(props =>
                    <SelectionOptionSelect
                        key={props.name}
                        checked={checked}
                        onChange={handleChange}
                        {...props}
                        showTitle='showTitle'
                        setMark='setMark' />)}
                </select>
            </div>
            {/* On desktop */}
            <div className="selectionOptions__navButton">
                <ButtonNextStep btnClass="btn navButton" title='back' id='1' />
            </div>
            <div className="selectionOptions__radio">
                {quilting.map(props =>
                    <SelectionOptionColor
                        key={props.name}
                        checked={checked}
                        onChange={handleChange}
                        {...props}
                        showTitle='showTitle'
                        setMark='setMark' />)}
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep btnClass="btn navButton" title='next' id='3' />
            </div>
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ setQuilt, choosedQuilt }) {
    return {
        setQuilt,
        choosedQuilt
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionQuilt)