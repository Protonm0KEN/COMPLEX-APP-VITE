import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoGroupSliceInintialState } from "./types/todoGroupSliceTypes";

const initialState: todoGroupSliceInintialState = {
    todoGroupName: "",
    todoGroupTodos: [],
    todoGroupId: Math.random().toString(16).slice(2),
    isTodoGroupShown: false
}

const todoGroupSlice = createSlice({
    name: "todoGroup",
    initialState,
    reducers: {
        setTodoGroupName: (state, action: PayloadAction<string>) => {
            state.todoGroupName = action.payload
        },
        updateTodoGroupId: (state, action: PayloadAction<string>) => {
            state.todoGroupId = action.payload
        }
    }
})
export const {setTodoGroupName, updateTodoGroupId} = todoGroupSlice.actions
export default todoGroupSlice.reducer