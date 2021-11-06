import { combineReducers } from "redux"


const equipment = function (state = [], action) {
    switch (action.type) {
        case 'LOAD_EQUIPMENT': return action.equipment
        default: return state
    }
}


const colorMaterial = function (state='', action) {
    switch (action.type) {
        case 'SET_COLOR_MATERIAL': return action.colorMaterial
        default: return state
    }
}

const colorBinding = function (state = '', action) {
    switch (action.type) {
        case 'SET_COLOR_BINDING': return action.colorBinding
        default: return state
    }
}



const rootReducers = combineReducers({ equipment, colorMaterial, colorBinding })

export default rootReducers