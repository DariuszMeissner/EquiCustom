import React, { useState, useEffect } from 'react'
import { SelectionTitle } from './SelectionTitle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import '../styles/selectionOptions.scss'
import { SelectionOptionColor } from './SelectionOptions/SelectionOptionColor';
import SelectionOptionEmbroidery  from './SelectionOptions/SelectionOptionEmbroidery';

const SelectionOptions = ({ title, name, color, colorEmbroidery, size, quilting, logoOrText, setColorMaterial, setColorBinding, setColorCord, setColorTape, setColorTopBinding, colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, setQuilt, choosedQuilt }) => {
    const [material, setMaterial] = useState(colorMaterial)
    const [binding, setBinding] = useState(colorBinding)
    const [cord, setCord] = useState(colorCord)
    const [tape, setTape] = useState(colorTape)
    const [topBinding, setTopBinding] = useState(colorTopBinding)
    const [localQuilt, setLocalQuilt] = useState(choosedQuilt)
    const [checked, setChecked] = useState('')

    useEffect(() => {
        name === 'material' && setColorMaterial(material)
        name === 'binding' && setColorBinding(binding)
        name === 'cord' && setColorCord(cord)
        name === 'tape' && setColorTape(tape)
        name === 'top-binding' && setColorTopBinding(topBinding)
        name === 'quilting' && setQuilt(localQuilt)

    }, [material, binding, cord, tape, topBinding, setColorMaterial, setColorBinding, setColorCord, setColorTape, setColorTopBinding, name, setQuilt, localQuilt])


    const handleChange = e => {
        const { value } = e.target

        setChecked(value)

        name === 'material' && setMaterial(value)
        name === 'binding' && setBinding(value)
        name === 'cord' && setCord(value)
        name === 'tape' && setTape(value)
        name === 'top-binding' && setTopBinding(value)
        name === 'quilting' && setLocalQuilt(value)
    }


    return (
        <section className="selectionOptions">
            <SelectionTitle title={title} />
            <div className="selectionOptions__menu">

                {color && color.map(props => <SelectionOptionColor key={props.id} nameItem={name} checked={checked} onChange={handleChange} {...props} />)}
                {size && size.map(props => <SelectionOptionColor key={props.name} nameItem={name} checked={checked} onChange={handleChange} {...props} />)}
                {quilting && quilting.map(props => <SelectionOptionColor key={props.name} nameItem={name} checked={checked} onChange={handleChange} {...props} />)}
                {logoOrText && <SelectionOptionEmbroidery logoOrText={logoOrText} colorEmbroidery={colorEmbroidery} />}

            </div>

        </section>
    )
}




//conect props and dispatch with store
function mapStateToProps({ colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, choosedQuilt }) {
    return {
        colorMaterial,
        colorBinding,
        colorCord,
        colorTape,
        colorTopBinding,
        choosedQuilt
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionOptions)
