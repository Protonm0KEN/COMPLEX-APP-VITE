import { createSlice } from "@reduxjs/toolkit";
import { createTodoFormSliceInitialState } from "./types/createTodoFormSliceTypes";

const initialState: createTodoFormSliceInitialState = {
    isCreateTodoFormOpen: false
}

const createTodoFormSlice = createSlice({
    name: "createTodoForm",
    initialState,
    reducers: {
        changeIsCreateTodoFormOpen: (state) => {
            state.isCreateTodoFormOpen = !state.isCreateTodoFormOpen
        }
    }
})
export const {changeIsCreateTodoFormOpen} = createTodoFormSlice.actions
export default createTodoFormSlice.reducer