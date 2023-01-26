import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./calculatorComponents/bodySlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

console.log(store.getState())

export default store;
