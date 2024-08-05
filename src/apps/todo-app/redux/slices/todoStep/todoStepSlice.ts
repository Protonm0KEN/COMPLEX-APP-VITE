import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoStepInitialState } from "./types/todoStepSliceTypes";
const initialState: todoStepInitialState = {
    isStepDone: false,
    stepId: Math.random().toString(16).slice(2),
    stepTitle: ""
}
const todoStepSlice = createSlice({
    name: "todoStep",
    initialState,
    reducers: {
        setStepTitle: (state, action: PayloadAction<string>) => {
            state.stepTitle = action.payload
        },
        setStepId: (state, action: PayloadAction<string>) => {
            state.stepId = action.payload
        }
    }
})
export const {setStepTitle, setStepId} = todoStepSlice.actions
export default todoStepSlice.reducer