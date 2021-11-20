import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { ButtonNextStep } from '../../button/ButtonNextStep'
import { SelectionOptionSelect } from './SelectionOptionSelect'

const SelectionOptionCord = ({ color, setColorCord, colorCord }) => {
    const [checked, setChecked] = useState(colorCord)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setColorCord(value)
    }

    return (
        <div className="selectionOptions__box">
            <div className="selectionColor__select selectionOptions__item">
                <select value={checked} onChange={handleChange}>
                    {color.map(props =>
                        <SelectionOptionSelect
                            key={props.name}
                            checked={checked}
                            onChange={handleChange}
                            {...props}
                            showTitle='showTitle'
                            setMark='setMark' />)}
                </select>
            </div>

            <div className="selectionOptions__radio">
                {color.map(props => <SelectionOptionColor key={props.name} checked={checked} onChange={handleChange} {...props} />)}
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep btnClass="btn navButton" title='back' id='6' />
                <ButtonNextStep btnClass="btn navButton" title='next' id='8' />
            </div>
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