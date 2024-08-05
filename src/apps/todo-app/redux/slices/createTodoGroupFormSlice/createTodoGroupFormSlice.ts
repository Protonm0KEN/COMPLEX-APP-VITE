import { createSlice } from "@reduxjs/toolkit";
import { createTodoGroupFormSliceInitialState } from "./types/createTodoGroupFormSliceTypes";

const initialState: createTodoGroupFormSliceInitialState = {
    isCreateTodoGroupFormOpen: false
}

const createTodoGroupFormSlice = createSlice({
    name: "createTodoGroupForm",
    initialState,
    reducers: {
        changeIsCreateTodoGroupFormOpen: (state) => {
            state.isCreateTodoGroupFormOpen = !state.isCreateTodoGroupFormOpen
        }
    }
})
export const {changeIsCreateTodoGroupFormOpen} = createTodoGroupFormSlice.actions
export default createTodoGroupFormSlice.reducer