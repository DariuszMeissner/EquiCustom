import React, {useState} from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../redux/actions'

export const SelectionOptionEmbroideryLogo = ({colorEmbroidery, setColorLogo, colorLogo}) => {
    const [checked, setChecked] = useState(colorLogo)


    const handleChange = e => {
        setChecked(e.target.value)
        setColorLogo(e.target.value)
    }

    return (
        <div className="selectionOptions__item">
            {colorEmbroidery.map(({name,value}) => <SelectionOptionColor key={name} name={name} value={value} onChange={handleChange} checked={checked}/>)}
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