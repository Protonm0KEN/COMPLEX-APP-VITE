import { configureStore } from "@reduxjs/toolkit";
import { todoAppReducer } from "../../apps/todo-app/redux/todoAppReducer";
export const store = configureStore({
    reducer: {
        todoAppReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch