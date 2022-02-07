import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers/product-slice";

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    }
})



export default store;