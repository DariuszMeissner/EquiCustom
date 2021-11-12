import React from 'react'
import SelectionOptions from './SelectionOptions'
import '../styles/selectionPanel.scss'


const SelectionPanel = ({ match, equipment }) => {


    const { optionId } = match.params
    return (
        <section className="selectionPanel">
            {equipment.map(el => el.elements.map(props => {
                if (+optionId === +props.id) {
                    return <SelectionOptions key={props.id} {...props} />
                }
            }))}

        </section>
    )
}

export default SelectionPanel




