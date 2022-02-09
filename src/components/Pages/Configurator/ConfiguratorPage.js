import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { optionActions } from '../../../store/reducers/options-slice';
import { ConfiguratorWrapper } from './ConfiguratorWrapper';
import { ConfiguratorNav } from './ConfiguratorNav/ConfiguratorNav'
import './ConfiguratorPage.scss';

export const ConfiguratorPage = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const products = useSelector(state => state.product.listing)
    const thisProduct = products.find(product => product.id === +productId)
    const stateColors = useSelector(state => state.options)


    useEffect(() => {
        thisProduct && dispatch(optionActions.colorMaterial(thisProduct.look.material))
        thisProduct && dispatch(optionActions.colorBinding(thisProduct.look.binding))
        thisProduct && dispatch(optionActions.colorTopBinding(thisProduct.look.topBinding))
        thisProduct && dispatch(optionActions.colorTape(thisProduct.look.tape))
        thisProduct && dispatch(optionActions.colorCord(thisProduct.look.cord))
        thisProduct && dispatch(optionActions.colorEmbroidery(thisProduct.look.embroidery))
    }, [])

    return (
        <section>
            {
                thisProduct
                &&
                <>
                    <ConfiguratorNav thisProduct={thisProduct} />
                    <ConfiguratorWrapper thisProduct={thisProduct} stateColors={stateColors} />
                    <Outlet />
                </>
            }
        </section>
    );
};
