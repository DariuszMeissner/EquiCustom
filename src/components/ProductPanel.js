import React from 'react'
import { ReactComponent as SvgMaterial } from '../images/material.svg'
import { ReactComponent as SvgBinding } from '../images/binding.svg'

const ProductPanel = ({ colorMaterial, colorBinding }) => {
    return (
        <div style={{ position: 'relative' }}>
            <SvgBinding style={{ position: 'absolute', bottom: 1, left: -1, fill: !colorBinding ? '#000' : colorBinding }} />
            <SvgMaterial style={{ fill: !colorMaterial ? '#000' : colorMaterial }} />
        </div>
    )
}

export default ProductPanel


