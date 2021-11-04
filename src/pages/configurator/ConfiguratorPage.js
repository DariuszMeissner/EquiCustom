import React, { useEffect } from 'react'
import { NavBar } from '../../components/NavBar'
import OptionContainer from '../../components/OptionContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'

const ConfiguratorPage = ({ startLoadingColors, startLoadingEquipment, equipment, colors }) => {

    useEffect(() => {
        startLoadingColors()
    }, [startLoadingColors])

    useEffect(() => {
        startLoadingEquipment()
    }, [startLoadingEquipment])




    return (
        <BrowserRouter>
            <>
                <NavBar equipment={equipment} />
                <Switch>
                    <Route
                        exact path='/configurator/:optionId'
                        render={({match})=> <OptionContainer  match={match} equipment={equipment} colors={colors}/>}
                    />
                </Switch>
            </>

        </BrowserRouter>
    )
}




//conect props and dispatch with store
function mapStateToProps({ colors, equipment }) {
    return {
        colors,
        equipment
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage)