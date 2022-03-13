import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers/product-slice";
import optionSlice from "./reducers/options-slice";

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        options: optionSlice.reducer,
    }
})

export default store;