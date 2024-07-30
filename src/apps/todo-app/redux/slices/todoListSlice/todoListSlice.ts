import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoListSliceInitialState } from "./types/todoListSliceTypes";
import { todoInterface } from "../todoSlice/types/todoSliceTypes";

const initialState: todoListSliceInitialState =  {
    todoList: []
}

const todoListSlice = createSlice({
    name: "todoListSlice",
    initialState,
    reducers: {
        addTodoToTodoList: (state, action: PayloadAction<todoInterface>) => {
            state.todoList.push(action.payload)
        }
    }
})
export const {addTodoToTodoList} = todoListSlice.actions
export default todoListSlice.reducer