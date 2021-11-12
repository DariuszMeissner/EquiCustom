import { combineReducers } from "redux"


const equipment = function (state = [], action) {
    switch (action.type) {
        case 'LOAD_EQUIPMENT': return action.equipment
        default: return state
    }
}


const colorMaterial = function (state = '', action) {
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

const colorCord = function (state = '', action) {
    switch (action.type) {
        case 'SET_COLOR_CORD': return action.colorCord
        default: return state
    }
}

const colorTape = function (state = '', action) {
    switch (action.type) {
        case 'SET_COLOR_TAPE': return action.colorTape
        default: return state
    }
}

const colorTopBinding = function (state = '', action) {
    switch (action.type) {
        case 'SET_COLOR_TOPBINDING': return action.colorTopBinding
        default: return state
    }
}

const textEmbroidery = function (state = '', action) {
    switch (action.type) {
        case 'SET_TEXT_EMBROIDERY': return action.textEmbroidery
        default: return state
    }
}

const loadLogoOrText = function (state = 'logo', action) {
    switch (action.type) {
        case 'SET_LOGO_OR_TEXT': return action.loadLogoOrText
        default: return state
    }
}

const choosedQuilt = function (state= 'romb', action) {
    switch(action.type) {
        case 'SET_QUILT': return action.choosedQuilt
        default: return state
    }
}



const rootReducers = combineReducers({ equipment, colorMaterial, colorBinding, colorCord, colorTape, colorTopBinding, textEmbroidery, loadLogoOrText, choosedQuilt })

export default rootReducers