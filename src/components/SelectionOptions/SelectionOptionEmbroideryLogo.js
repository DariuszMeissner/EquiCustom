import React, {useState} from 'react'
import { SelectionOptionColor } from './SelectionOptionColor'

export const SelectionOptionEmbroideryLogo = ({colorEmbroidery}) => {
    const [checked, setChecked] = useState(false)

    const handleChange = e => {
        setChecked(e.target.value)
    }

    return (
        <div>
            {colorEmbroidery.map(({name,value}) => <SelectionOptionColor key={name} name={name} value={value} onChange={handleChange} checked={checked}/>)}
        </div>
    )
}
