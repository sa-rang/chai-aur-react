import { createSlice, nanoid } from "@reduxjs/toolkit";

//Step 2
const initialState = {
    todos: [{ id: 1, text: "text something " }]
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((each) => each.id !== action.payload)
        }
    }
})

//Step3 : export reducers // like actions in Pinia
export const { addTodo, removeTodo } = todoSlice.actions

//Step 4 export whole reducer to be used in registering Reducre in store
export default todoSlice.reducer

