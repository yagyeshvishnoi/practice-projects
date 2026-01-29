import { createAction, createAsyncThunk, createReducer, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number;
    loading:boolean;
}
export const incReducer = createAction('edededed')
export const decReducer = createAction('countRed/decReducer')
export const initialState:CounterState = {
    value:0,
    loading:false
}



export const countRedAsync = createAsyncThunk("countRed/Aysnc",async(amount:number)=>{
    const response =  await new Promise((res)=>setTimeout(res,2000));
    return amount;
})

export const CounterRed = createReducer(initialState,
    (builder)=>{
        builder.addCase(incReducer,(state,action)=>{
            state.value+=2;
        })
        .addCase(decReducer,(state,action)=>{
            state.value+=2;
        })  
        .addAsyncThunk(countRedAsync,{
            pending:(state,action)=>{
                state.loading = true;
            },
            fulfilled:(state,action:PayloadAction<number>)=>{
                state.loading = false;
                state.value += action.payload;
            }
        })
    }
)
console.log(incReducer)