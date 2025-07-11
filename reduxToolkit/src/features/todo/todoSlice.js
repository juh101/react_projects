import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}
function sayHello() {
    console.log("Hello, world!");
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //property: function reference
        // addTodo: sayHello,

        /* state here is my array of todos 
        action is a plain JavaScript object with a required type field and an optional payload.
        type: Describes what happened
        payload: Describes what data came with the action
        */
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            const arrayofTodos = [newTodo , ...state.todos]
            state.todos = arrayofTodos;
            console.log("Todo added:", newTodo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
            console.log("Todo removed:", id);

        }
    }

})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
// This file defines a Redux slice for managing todo items, including adding and removing todos with logging