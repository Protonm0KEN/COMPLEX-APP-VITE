import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoSliceInitialState } from "./types/todoSliceTypes";
import { todoGroupInterface } from "../todoGroupSlice/types/todoGroupSliceTypes";
import { todoStepInterface } from "../todoStep/types/todoStepSliceTypes";

const DateObj = new Date()
const todoFormatedDateOfCreation = `${DateObj.getDate()}.${DateObj.getMonth() < 10 ? `0${DateObj.getMonth() + 1}` : DateObj.getMonth()}.${DateObj.getFullYear()}`
const todoFormatedTimeOfCreation = `${DateObj.getHours()}:${DateObj.getMinutes() < 10 ? `0${DateObj.getMinutes()}` : DateObj.getMinutes()}`
const initialState: todoSliceInitialState = {
    //todo general
    todoName: "",
    todoContent: "",
    todoId: Math.random().toString(16).slice(2),
    //todo time
    todoDateOfCreation: todoFormatedDateOfCreation,
    todoTimeOfCreation: todoFormatedTimeOfCreation,
    todoGroupName: "",

    //todo steps
    todoSteps: [],
    todoDateOfFinishing: "",
    todoTimeOfFinishing: "",
    todoState: "active"
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {

        //todo general
        setTodoName: (state, action: PayloadAction<string>) => {
            state.todoName = action.payload
        },
        setTodoContent: (state, action: PayloadAction<string>) => {
            state.todoContent = action.payload
        },
        updateTodoId: (state, action: PayloadAction<string>) => {
            state.todoId = action.payload
        },

        //todo time
        //Updating time after creation a todo
        updateTodoTimeOfCreation: (state, action: PayloadAction<string>) => {
            state.todoTimeOfCreation = action.payload
        },
        updateTodoDateOfCreation: (state, action: PayloadAction<string>) => {
            state.todoDateOfCreation = action.payload
        },
        //setting Finishing times
        setTodoDateOfFinishing: (state, action: PayloadAction<string>) => {
            state.todoDateOfFinishing = action.payload
        },
        setTodoTimeOfFinishing: (state, action: PayloadAction<string>) => {
            state.todoTimeOfFinishing = action.payload
        },

        //todo group
        addTodoToTodoGroup: (state, action: PayloadAction<todoGroupInterface>) => {
            state.todoGroupName = action.payload.todoGroupName
        },

        //todo steps
        addStepToTodoSteps: (state, action: PayloadAction<todoStepInterface>) => {
            state.todoSteps.push(action.payload)
        } ,
        updateTodoSteps: (state, action: PayloadAction<[]>) => {
            state.todoSteps = action.payload
        }
    }
})
export const {

    setTodoName,
    setTodoContent,
    updateTodoId,

    updateTodoTimeOfCreation,
    updateTodoDateOfCreation,
    setTodoDateOfFinishing,
    setTodoTimeOfFinishing,

    addTodoToTodoGroup,
    addStepToTodoSteps,
    updateTodoSteps
} = todoSlice.actions
export default todoSlice.reducer