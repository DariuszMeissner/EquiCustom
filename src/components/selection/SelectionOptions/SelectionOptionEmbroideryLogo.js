import React, { useState } from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'
import { SelectionOptionSelect } from './SelectionOptionSelect'
import { ButtonNextStep } from '../../button/ButtonNextStep'

export const SelectionOptionEmbroideryLogo = ({ colorEmbroidery, setColorLogo, colorLogo }) => {
    const [checked, setChecked] = useState(colorLogo)


    const handleChange = e => {
        setChecked(e.target.value)
        setColorLogo(e.target.value)
    }

    return (
        <div className="selectionOptions__box">
            <div className="selectionColor__select selectionOptions__item">
                <select value={checked} onChange={handleChange}>
                    {colorEmbroidery.map(props =>
                        <SelectionOptionSelect
                            key={props.name}
                            checked={checked}
                            onChange={handleChange}
                            {...props}
                            showTitle='showTitle'
                            setMark='setMark' />)}
                </select>
            </div>
            <div className="selectionOptions__navButton">
                <ButtonNextStep btnClass="btn navButton" title='back' id='7' />
            </div>
            <div className="selectionOptions__radio">
                {colorEmbroidery.map(({ name, value }) => <SelectionOptionColor key={name} name={name} value={value} onChange={handleChange} checked={checked} />)}
            </div>
        </div>
    )
}



//conect props and dispatch with store
function mapStateToProps({ colorLogo }) {
    return {
        colorLogo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptionEmbroideryLogo)