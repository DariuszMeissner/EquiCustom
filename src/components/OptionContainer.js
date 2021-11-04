import React from 'react'
import { OptionColors } from '../components/OptionColors'



const OptionContainer = ({ match, equipment, colors }) => {

    const { optionId } = match.params
    return (
        <section>
            
            {equipment.map(el => el.elements.map(({ id, title, color }) => {
                if (+optionId === +id) {
                    return color && <OptionColors key={id} title={title} colors={colors}/>
                }
            }))}

        </section>
    )
}


export default OptionContainer