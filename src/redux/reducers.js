import { combineReducers } from "redux"

const colors = function (state = [], action) {
    switch (action.type) {
        case 'LOAD_COLORS': return action.colors
        default: return state
    }
}

const equipment = function (state = [], action) {
    switch (action.type) {
        case 'LOAD_EQUIPMENT': return action.equipment
        default: return state
    }
}

const rootReducers = combineReducers({ colors, equipment })

export default rootReducers