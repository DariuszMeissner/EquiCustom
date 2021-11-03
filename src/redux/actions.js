import { database } from '../api/firebaseConfig'


export function startLoadingColors() {
    return (dispatch) => {
        return database
        .ref('colors')
        .once('value')
        .then((snapshot) => {
            let colors = []
            snapshot.forEach( el =>  {
                colors.push(el.val())
            })
            dispatch(loadColors(colors))
        })
        .catch(err => console.log(err))
    }
}

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




export function loadColors(colors) {
    return {
        type: 'LOAD_COLORS',
        colors
    }
}

export function loadEquipment(equipment) {
    return {
        type: 'LOAD_EQUIPMENT',
        equipment
    }
}