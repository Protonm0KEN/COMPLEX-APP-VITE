import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoListSliceInitialState } from "./types/todoListSliceTypes";
import { todoInterface } from "../todoSlice/types/todoSliceTypes";

const initialState: todoListSliceInitialState = {
    todoList: []
}

const todoListSlice = createSlice({
    name: "todoListSlice",
    initialState,
    reducers: {
        addTodoToTodoList: (state, action: PayloadAction<todoInterface>) => {
            state.todoList.push(action.payload)
        },
        replaceTodoInTodoList: (state, action: PayloadAction<{todoId: string, newTodo: todoInterface}>) => {
            const todoToReplace = state.todoList.find((todo) => todo.todoId === action.payload.todoId)
            const indexOfTodoToReplace = state.todoList.indexOf(todoToReplace)
            state.todoList[indexOfTodoToReplace] = action.payload.newTodo
        },
        deleteTodoFromTodoList: (state, action: PayloadAction<{todoId: string}>) => {
            state.todoList = state.todoList.filter((todo) => todo.todoId !== action.payload.todoId)
        }
    }
})
export const { addTodoToTodoList, replaceTodoInTodoList, deleteTodoFromTodoList } = todoListSlice.actions
export default todoListSlice.reducer