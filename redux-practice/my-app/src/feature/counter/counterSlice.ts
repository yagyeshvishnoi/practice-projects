import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounteState{
    value:number;
    loading:boolean;
}
const initialState:CounteState = {
    value:0,
    loading:false
}
export const increaseTime = createAsyncThunk<number, number>(
  'counter/increaseByTime',
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return amount
  }
)

export const counterSlice = createSlice({
    name:'counter',
    initialState,

    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
        ,incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value+=action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(increaseTime.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(increaseTime.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value+=action.payload
            state.loading = false;
        })
    },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer