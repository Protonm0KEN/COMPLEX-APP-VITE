import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoGroupsSliceInitialState } from "./types/todoGroupsSliceTypes";
import { todoGroupInterface } from "../todoGroupSlice/types/todoGroupSliceTypes";

const initialState: todoGroupsSliceInitialState = {
    todoGroups: []
}

const todoGroupsSlice = createSlice({
    name: "todoGroups",
    initialState,
    reducers: {
        addTodoGroupToTodoGroups: (state, action: PayloadAction<todoGroupInterface>) => {
            state.todoGroups.push(action.payload)
        }
    }
})

export const {} = todoGroupsSlice.actions
export default todoGroupsSlice.reducer