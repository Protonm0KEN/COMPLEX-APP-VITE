import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoSliceInitialState } from "./types/todoSliceTypes";
import { todoGroupInterface } from "../todoGroupSlice/types/todoGroupSliceTypes";

const DateObj = new Date()
const todoFormatedDate = `${DateObj.getDate()}.${DateObj.getMonth() < 10 ? `0${DateObj.getMonth()}` : DateObj.getMonth()}.${DateObj.getFullYear()}`
const todoFormatedTime = `${DateObj.getHours()}:${DateObj.getMinutes() < 10 ? `0${DateObj.getMinutes()}` : DateObj.getMinutes()}`
const initialState: todoSliceInitialState = {
    //todo general
    todoName: "",
    todoContent: "",
    todoId: Math.random().toString(16).slice(2),
    //todo time
    todoDateOfCreation: todoFormatedDate,
    todoTimeOfCreation: todoFormatedTime,
    todoGroup: {
        todoGroupName: "",
        todoGroupId: ""
    }
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
            state.todoGroup.todoGroupName = action.payload.todoGroupName
            state.todoGroup.todoGroupId = action.payload.todoGroupId
        },
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

    addTodoToTodoGroup
} = todoSlice.actions
export default todoSlice.reducer