import { configureStore } from "@reduxjs/toolkit";
import counterReducer,{ counterSlice } from "../feature/counter/counterSlice";
import { CounterRed } from "../feature/counterReducer/counterRed";

export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        counterRed:CounterRed,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch