import React, { useState, useEffect } from 'react'
import { SelectionTitle } from './SelectionTitle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions'
import SelectionOptionEmbroidery from './SelectionOptionEmbroidery';
import SelectionOptionSize from './SelectionOptionSize';
import SelectionOptionQuilt from './SelectionOptionQuilt';
import SelectioOptionMaterial from './SelectioOptionMaterial';
import SelectionOptionBinding from './SelectionOptionBinding';
import SelectionOptionTopBinding from './SelectionOptionTopBinding';
import SelectionOptionTape from './SelectionOptionTape';
import SelectionOptionCord from './SelectionOptionCord';

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


    return (
        <section className="selectionOptions d-flex flex-column align-content-center">
            <SelectionTitle title={title} />
            <div className="selectionOptions__menu">
                {/* Options of elements saddle pads */}

                {/* Size */}
                {size && <SelectionOptionSize size={size} />}

                {/* Quilt */}
                {quilting && <SelectionOptionQuilt quilting={quilting} />}

                {/* Material */}
                {name === 'material' && <SelectioOptionMaterial color={color} />}

                {/* Binding */}
                {name === 'binding' && <SelectionOptionBinding color={color} />}

                {/* TopBinding */}
                {name === 'top-binding' && <SelectionOptionTopBinding color={color} />}

                {/* Tape*/}
                {name === 'tape' && <SelectionOptionTape color={color} />}

                {/* Cord*/}
                {name === 'cord' && <SelectionOptionCord color={color} />}

                {/* Logo or Tex Embroidery */}
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
