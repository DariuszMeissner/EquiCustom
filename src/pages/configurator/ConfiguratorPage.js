import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavBar } from '../../components/layout/navigation/NavBar'
import * as actions from '../../redux/actions'

const ConfiguratorPage = (props) => {

    useEffect(() => {
        props.startLoadingColors()
        props.startLoadingEquipment()
    }, [])

    return (
        <div>
            {props.equipment.forEach(el=> console.log(el))}
            <NavBar />
        </div>
    )
}




//conect props and dispatch with store
function mapStateToProps({colors,equipment}) {
    return {
        colors,
        equipment
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage)