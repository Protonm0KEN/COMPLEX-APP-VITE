import { createSlice } from "@reduxjs/toolkit";
import { newTodoSliceInitialState } from "./types/newTodoSliceTypes";

const DateObj = new Date()
const newTodoFormatedDate = `${DateObj.getDate()}.${DateObj.getMonth() < 10 ? `0${DateObj.getMonth()}` : DateObj.getMonth()}.${DateObj.getFullYear()}`
const newTodoFormatedTime = `${DateObj.getHours()}:${DateObj.getMinutes() < 10 ? `0${DateObj.getMinutes()}` : DateObj.getMinutes()}`
const initialState: newTodoSliceInitialState = {
    //newTodo general
    newTodoName: "",
    newTodoContent: "",
    newTodoId: Math.random().toString(16).slice(2),
    //newTodo time
    newTodoDateOfCreation: newTodoFormatedDate,
    newTodoTimeOfCreation: newTodoFormatedTime
}

const newTodoSlice = createSlice({
    name: "newTodo",
    initialState: initialState,
    reducers: {

    }
})
export const {} = newTodoSlice.actions
export default newTodoSlice.reducer