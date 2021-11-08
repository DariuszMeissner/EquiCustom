import React from 'react'
import SelectionOptions from './SelectionOptions'
import '../styles/selectionPanel.scss'


const SelectionPanel = ({ match, equipment }) => {


    const { optionId } = match.params
    return (
        <section className="selectionPanel">
            {equipment.map(el => el.elements.map(({ id, title, color, name }) => {
                if (+optionId === +id) {
                    return <SelectionOptions color={color} name={name} key={id} title={title} />
                }
            }))}

        </section>
    )
}

export default SelectionPanel




