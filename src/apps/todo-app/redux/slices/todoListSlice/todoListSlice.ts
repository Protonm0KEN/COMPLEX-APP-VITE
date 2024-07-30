import { createSlice } from "@reduxjs/toolkit";
import { todoListSliceInitialState } from "./types/todoListSliceTypes";

const initialState: todoListSliceInitialState =  {
    todoList: []
}

const todoListSlice = createSlice({
    name: "todoListSlice",
    initialState,
    reducers: {
        
    }
})
export const {} = todoListSlice.actions
export default todoListSlice.reducer