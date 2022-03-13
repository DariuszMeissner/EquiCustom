import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        listing: ['']
    },
    reducers: {
        replaceData(state, action) {
            state.listing = action.payload.listing;
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;