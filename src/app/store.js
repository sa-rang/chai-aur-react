import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"

//Step 1
export const store = configureStore({

    //Step 5 : Register Reducer(s)
    reducer: todoReducer
})