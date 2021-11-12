import { database } from '../api/firebaseConfig'


export function startLoadingEquipment() {
    return (dispatch) => {
        return database
            .ref('equipment')
            .once('value')
            .then((snapshot) => {
                let equipment = []
                snapshot.forEach(el => {
                    equipment.push(el.val())
                })
                dispatch(loadEquipment(equipment))
            })
            .catch(err => console.log(err))
    }
}


export function setColorMaterial(colorMaterial) {
    return {
        type: 'SET_COLOR_MATERIAL',
        colorMaterial
    }
}

export function setColorBinding(colorBinding) {
    return {
        type: 'SET_COLOR_BINDING',
        colorBinding
    }
}

export function setColorCord(colorCord) {
    return {
        type: 'SET_COLOR_CORD',
        colorCord
    }
}

export function setColorTape(colorTape) {
    return {
        type: 'SET_COLOR_TAPE',
        colorTape
    }
}


export function setColorTopBinding(colorTopBinding) {
    return {
        type: 'SET_COLOR_TOPBINDING',
        colorTopBinding
    }
}

export function setTextEmbroidery(textEmbroidery) {
    return {
        type: 'SET_TEXT_EMBROIDERY',
        textEmbroidery
    }
}

export function setLogoOrText(loadLogoOrText) {
    return {
        type: 'SET_LOGO_OR_TEXT',
        loadLogoOrText
    }
}

export function setQuilt(choosedQuilt) {
    return {
        type: 'SET_QUILT',
        choosedQuilt
    }
}

export function loadEquipment(equipment) {
    return {
        type: 'LOAD_EQUIPMENT',
        equipment
    }
}