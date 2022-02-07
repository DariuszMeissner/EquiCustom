import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: []
    },
    reducers: {
        replaceData(state, action) {
            state.product = action.payload.category;
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;