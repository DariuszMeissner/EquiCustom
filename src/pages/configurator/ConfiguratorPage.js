import React, { useEffect } from 'react'
import SelectionPanel from '../../components/SelectionPanel';
import ProductPanel from '../../components/ProductPanel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'
import '../../styles/configuratorPage.scss'
import { NavContainer } from '../../components/NavContainer';


const ConfiguratorPage = ({ startLoadingEquipment, equipment, colorMaterial, colorBinding }) => {

    useEffect(() => {
        startLoadingEquipment()
    }, [startLoadingEquipment])




    return (
        <BrowserRouter>
            <div className="configurator">
                <NavContainer equipment={equipment} />
                <ProductPanel colorMaterial={colorMaterial} colorBinding={colorBinding} />
                <Switch>
                    <Route
                        exact path='/configurator/:optionId'
                        render={({ match }) => <SelectionPanel colorBinding={colorBinding} colorMaterial={colorMaterial} match={match} equipment={equipment} />}
                    />
                </Switch>
            </div>

        </BrowserRouter>
    )
}


//conect props and dispatch with store
function mapStateToProps({ equipment, colorMaterial, colorBinding }) {
    return {
        equipment,
        colorMaterial,
        colorBinding
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage)