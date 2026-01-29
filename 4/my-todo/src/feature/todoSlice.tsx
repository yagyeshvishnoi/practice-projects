import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoState{
    uid:string;
    text:string;
    fullfilled:boolean;
}
const initialState:todoState[] = [];
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo(state,action:PayloadAction<todoState>){
            state.push(action.payload);
        },
        todoCompleted(state, action: PayloadAction<string>) {
        const todo = state.find(t => t.uid === action.payload)
            if (todo) {
                todo.fullfilled = true
            }
        },
        todoUncompeleted(state,action:PayloadAction<string>){
        const todo = state.find(t => t.uid === action.payload)
            if (todo) {
                todo.fullfilled = false
            }
        },
        todoToggle(state,action:PayloadAction<string>){
        const todo = state.find(t => t.uid === action.payload)
            if (todo) {
                todo.fullfilled = !todo.fullfilled;
            }
        },
        todoDelete(state,action:PayloadAction<string>){
            return state.filter((todo:todoState,idx:number)=>{
                return  todo.uid !== action.payload;
            })
        }
        
    }
})
const todoReducer = todoSlice.reducer;
export default todoReducer;
export const {addTodo , todoCompleted , todoUncompeleted,todoToggle , todoDelete} = todoSlice.actions;