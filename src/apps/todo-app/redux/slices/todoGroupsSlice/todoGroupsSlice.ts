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
        },
        replaceTodoGroupInTodoGroups: (state, action: PayloadAction<{ todoGroupId: string, todoGroup: todoGroupInterface }>) => {
            const thisTodoGroup = state.todoGroups.find((todoGroup) => todoGroup.todoGroupId === action.payload.todoGroupId)
            if (thisTodoGroup) {
                const indexOfTodoGroup = state.todoGroups.indexOf(thisTodoGroup)
                state.todoGroups[indexOfTodoGroup] = action.payload.todoGroup
            }
        },
    }
})

export const { addTodoGroupToTodoGroups, replaceTodoGroupInTodoGroups } = todoGroupsSlice.actions
export default todoGroupsSlice.reducer