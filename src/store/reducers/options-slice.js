import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
    name: "options",
    initialState: {
        material: 'red',
        binding: 'black',
        topBinding: 'black',
        tape: 'red',
        cord: 'white',
        embroidery: 'white'

    },
    reducers: {
        colorMaterial(state, action) {
            state.material = action.payload;
        },
        colorBinding(state, action) {
            state.binding = action.payload;
        },
        colorTopBinding(state, action) {
            state.topBinding = action.payload;
        },
        colorTape(state, action) {
            state.tape = action.payload;
        },
        colorCord(state, action) {
            state.cord = action.payload;
        },
        colorEmbroidery(state, action) {
            state.embroidery = action.payload;
        },

    }
})

export const optionActions = optionSlice.actions;
export default optionSlice;