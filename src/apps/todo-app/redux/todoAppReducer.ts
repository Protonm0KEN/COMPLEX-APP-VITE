import { combineReducers } from "redux";
import todoListSlice from "./slices/todoListSlice/todoListSlice";
import newTodoSlice from "./slices/newTodoSlice/newTodoSlice";

export const todoAppReducer = combineReducers({
    newTodo: newTodoSlice,
    todoList: todoListSlice,
})