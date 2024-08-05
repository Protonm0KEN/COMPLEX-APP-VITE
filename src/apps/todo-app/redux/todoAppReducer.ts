import { combineReducers } from "redux";
import todoListSlice from "./slices/todoListSlice/todoListSlice";
import todoSlice from "./slices/todoSlice/todoSlice";
import todoGroupSlice from "./slices/todoGroupSlice/todoGroupSlice";
import todoGroupsSlice from "./slices/todoGroupsSlice/todoGroupsSlice";
import todoStepSlice from "./slices/todoStep/todoStepSlice";
import createTodoFormSlice from "./slices/createTodoFormSlice/createTodoFormSlice";
import createTodoGroupFormSlice from "./slices/createTodoGroupFormSlice/createTodoGroupFormSlice";

export const todoAppReducer = combineReducers({
    todo: todoSlice,
    todoList: todoListSlice,


    todoGroup: todoGroupSlice,
    todoGroups: todoGroupsSlice,

    todoStep: todoStepSlice,
    createTodoForm: createTodoFormSlice,
    createTodoGroupForm: createTodoGroupFormSlice
})