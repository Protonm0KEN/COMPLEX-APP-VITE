import { combineReducers } from "redux";
import todoListSlice from "./slices/todoListSlice/todoListSlice";
import todoSlice from "./slices/todoSlice/todoSlice";
import todoGroupSlice from "./slices/todoGroupSlice/todoGroupSlice";

export const todoAppReducer = combineReducers({
    todo: todoSlice,
    todoList: todoListSlice,


    todoGroup: todoGroupSlice,
    todoGroups: todoGroupsSlice
})