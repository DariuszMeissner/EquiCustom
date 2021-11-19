import React from 'react'
import SelectionOptions from '../SelectionOptions/SelectionOptions'


const SelectionPanel = ({ match, equipment }) => {
    const { optionId } = match.params
    return (
        <section className="selectionPanel col-12 col-md-8 d-flex justify-content-center">
            {equipment.map(el => el.elements.map(props => {
                if (+optionId === +props.id) {
                    return <SelectionOptions key={props.id} {...props} />
                }
            }))}

        </section>
    )
}

export default SelectionPanel




