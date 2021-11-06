import React from 'react'



const ProductPanel = ({ colorMaterial, colorBinding }) => {
    return (
        <div>
            <div style={{
                width: 100,
                height: 100,
                backgroundColor: !colorMaterial ? '#000' : colorMaterial
            }}
            ></div>
            <div style={{
                width: 100,
                height: 100,
                backgroundColor: !colorBinding ? '#000' : colorBinding
            }}
            ></div>
        </div>
    )
}

export default ProductPanel


