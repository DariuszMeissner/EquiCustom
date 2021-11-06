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


export function loadEquipment(equipment) {
    return {
        type: 'LOAD_EQUIPMENT',
        equipment
    }
}