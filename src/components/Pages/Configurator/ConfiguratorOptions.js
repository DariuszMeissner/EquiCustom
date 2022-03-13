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
        <div className='row'>

            <div className='c-s-8 flex'>
                <div className='configurator-options'>

                    {thisProduct &&
                        thisProduct.elements.map(el =>
                            (el.name === 'material' && +el.id === +optionId) &&
                            <div className='flex flex-column flex-align-center'>
                                <h3 className='m-b-8 fs-8'>{el.title}</h3>
                                <div className='flex'>
                                    {el.colors.map(colorOption =>
                                        <InputOption
                                            key={colorOption.id}
                                            colorOption={colorOption}
                                            stateColors={stateColors.material}
                                            optionId={optionId}
                                            setOptions={setOptions}
                                        />
                                    )}
                                </div>
                            </div>)
                    }
                    {thisProduct &&
                        thisProduct.elements.map(el =>
                            (el.name === 'binding' && +el.id === +optionId) &&
                            <div className='flex flex-column flex-align-center'>
                                <h3 className='m-b-8 fs-8'>{el.title}</h3>
                                <div className='flex'>
                                    {el.colors.map(colorOption =>
                                        <InputOption
                                            key={colorOption.id}
                                            colorOption={colorOption}
                                            stateColors={stateColors.binding}
                                            optionId={optionId}
                                            setOptions={setOptions}
                                        />
                                    )}
                                </div>
                            </div>)
                    }
                    {thisProduct &&
                        thisProduct.elements.map(el =>
                            (el.name === 'top-binding' && +el.id === +optionId) &&
                            <div className='flex flex-column flex-align-center'>
                                <h3 className='m-b-8 fs-8'>{el.title}</h3>
                                <div className='flex'>
                                    {el.colors.map(colorOption =>
                                        <InputOption
                                            key={colorOption.id}
                                            colorOption={colorOption}
                                            stateColors={stateColors.topBinding}
                                            optionId={optionId}
                                            setOptions={setOptions}
                                        />
                                    )}
                                </div>
                            </div>)
                    }
                    {thisProduct &&
                        thisProduct.elements.map(el =>
                            (el.name === 'tape' && +el.id === +optionId) &&
                            <div className='flex flex-column flex-align-center'>
                                <h3 className='m-b-8 fs-8'>{el.title}</h3>
                                <div className='flex'>
                                    {el.colors.map(colorOption =>
                                        <InputOption
                                            key={colorOption.id}
                                            colorOption={colorOption}
                                            stateColors={stateColors.tape}
                                            optionId={optionId}
                                            setOptions={setOptions}
                                        />
                                    )}
                                </div>
                            </div>)
                    }
                    {thisProduct &&
                        thisProduct.elements.map(el =>
                            (el.name === 'cord' && +el.id === +optionId) &&
                            <div className='flex flex-column flex-align-center'>
                                <h3 className='m-b-8 fs-8'>{el.title}</h3>
                                <div className='flex'>
                                    {el.colors.map(colorOption =>
                                        <InputOption
                                            key={colorOption.id}
                                            colorOption={colorOption}
                                            stateColors={stateColors.cord}
                                            optionId={optionId}
                                            setOptions={setOptions}
                                        />
                                    )}
                                </div>
                            </div>)
                    }
                    {thisProduct &&
                        thisProduct.elements.map(el =>
                            (el.name === 'embroidery' && +el.id === +optionId) &&
                            <div className='flex flex-column flex-align-center'>
                                <h3 className='m-b-8 fs-8'>{el.title}</h3>
                                <div className='flex'>
                                    {el.colors.map(colorOption =>
                                        <InputOption
                                            key={colorOption.id}
                                            colorOption={colorOption}
                                            stateColors={stateColors.embroidery}
                                            optionId={optionId}
                                            setOptions={setOptions}
                                        />
                                    )}
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};
