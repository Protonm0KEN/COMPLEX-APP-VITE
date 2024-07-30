import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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

        //newTodo general
        setNewTodoName: (state, action: PayloadAction<string>) => {
            state.newTodoName = action.payload
        },
        setNewTodoContent: (state, action: PayloadAction<string>) => {
            state.newTodoContent = action.payload
        },
        updateNewTodoId: (state, action: PayloadAction<string>) => {
            state.newTodoId = action.payload
        },

        //newTodo time
        //Updating time after creation a newTodo
        updateNewTodoTimeOfCreation: (state, action: PayloadAction<string>) => {
            state.newTodoTimeOfCreation = action.payload
        },
        updateNewTodoDateOfCreation: (state, action: PayloadAction<string>) => {
            state.newTodoDateOfCreation = action.payload
        },
        //setting Finishing times
        setNewTodoDateOfFinishing: (state, action: PayloadAction<string>) => {
            state.newTodoDateOfFinishing = action.payload
        },
        setNewTodoTimeOfFinishing: (state, action: PayloadAction<string>) => {
            state.newTodoTimeOfFinishing = action.payload
        },

        //newTodo group
        setNewTodoGroupName: (state, action: PayloadAction<string>) => {
            state.newTodoGroupName = action.payload
        },
        setNewTodoGroupId: (state, action: PayloadAction<string>) => {
            state.newTodoGroupId = action.payload
        }
    }
})
export const { 

    setNewTodoName,
    setNewTodoContent,
    updateNewTodoId,

    updateNewTodoTimeOfCreation,
    updateNewTodoDateOfCreation,
    setNewTodoDateOfFinishing,
    setNewTodoTimeOfFinishing,

    setNewTodoGroupName,
    setNewTodoGroupId
} = newTodoSlice.actions
export default newTodoSlice.reducer