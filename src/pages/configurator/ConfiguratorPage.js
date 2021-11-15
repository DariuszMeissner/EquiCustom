import React, { useEffect, useState } from 'react'
import SelectionPanel from '../../components/selection/selection-panel/SelectionPanel';
import ProductPanel from '../../components/product/ProductPanel';
import { NavContainer } from '../../components/nav/NavContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions'
import './configuratorPage.scss'

const ConfiguratorPage = ({
    startLoadingEquipment,
    equipment,
    colorMaterial,
    colorBinding,
    colorCord,
    colorTape,
    colorTopBinding,
    textEmbroidery,
    loadLogoOrText,
    choosedQuilt,
    colorText,
    colorLogo

}) => {

    const [isShow, setIsShow] = useState(false)
    const handleClickFullPreview = () => {
        setIsShow(prev => !prev)
        console.log(isShow)
    }

    useEffect(() => {
        startLoadingEquipment()
    }, [startLoadingEquipment])

    return (
        <BrowserRouter>
            <div className="configurator">
                {!isShow && <NavContainer equipment={equipment} />}
                <ProductPanel
                    colorMaterial={colorMaterial}
                    colorBinding={colorBinding}
                    colorCord={colorCord}
                    colorTape={colorTape}
                    colorTopBinding={colorTopBinding}
                    textEmbroidery={textEmbroidery}
                    loadLogoOrText={loadLogoOrText}
                    choosedQuilt={choosedQuilt}
                    colorText={colorText}
                    colorLogo={colorLogo}
                    handleClick={handleClickFullPreview}
                    isShow={isShow}
                />
                <Switch>
                    <Route
                        exact path='/configurator/:optionId'
                        render={({ match }) => !isShow && <SelectionPanel colorBinding={colorBinding} colorMaterial={colorMaterial} match={match} equipment={equipment} />}
                    />
                </Switch>
            </div>

        </BrowserRouter>
    )
}


//conect props and dispatch with store
function mapStateToProps({ equipment, colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt, colorLogo, colorText }) {
    return {
        equipment,
        colorMaterial,
        colorBinding,
        colorCord,
        colorTape,
        colorTopBinding,
        textEmbroidery,
        loadLogoOrText,
        choosedQuilt,
        colorLogo,
        colorText
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage)