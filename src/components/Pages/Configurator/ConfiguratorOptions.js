import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { optionActions } from '../../../store/reducers/options-slice';
import './ConfiguratorOptions.scss'
import { InputOption } from './OptionInput/InputOption';

export const ConfiguratorOptions = () => {
    const dispatch = useDispatch();
    const { optionId } = useParams();
    const { productId } = useParams();
    const products = useSelector(state => state.product.listing)
    const thisProduct = products.find(product => product.id === +productId)
    const stateColors = useSelector(state => state.options)

    const setOptions = (e, optionId) => {
        const { value } = e.target
        switch (optionId) {
            case "0":
                return dispatch(optionActions.colorMaterial(value))
            case "1":
                return dispatch(optionActions.colorBinding(value));
            case "2":
                return dispatch(optionActions.colorTopBinding(value));
            case "3":
                return dispatch(optionActions.colorTape(value));
            case "4":
                return dispatch(optionActions.colorCord(value));
            case "5":
                return dispatch(optionActions.colorEmbroidery(value));
            default:
                console.log('Coś poszło nie tak!');
        }
    }

    return (
        <div>
            {thisProduct &&
                thisProduct.elements.map(el =>
                    (el.name === 'material' && +el.id === +optionId) &&
                    el.colors.map(colorOption =>
                        <InputOption
                            colorOption={colorOption}
                            stateColors={stateColors}
                            optionId={optionId}
                            setOptions={setOptions}
                        />
                    )

                )
            }
        </div>
    );
};
