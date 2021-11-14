import React, {useState} from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'

const SelectionOptionSize = ({size, setPadSize, padSize}) => {
    const [checked, setChecked] = useState(padSize)

    const handleChange = e => {
        const { value } = e.target
        setChecked(value)
        setPadSize(value)
    }

    return (
        <div>
            {size.map(props => <SelectionOptionColor key={props.name}  checked={checked} onChange={handleChange} {...props} />)}
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