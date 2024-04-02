import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{ id: 1, text: 'Say Hello' }],
    inputTaskValue: "",
    selectedEditTask: undefined
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.inputTaskValue = action.payload
        },
        editTodo: (state, action) => {
            const currentTask = {
                id: action.payload.id,
                text: action.payload.text
            }
            state.inputTaskValue = currentTask.text
            state.selectedEditTask = currentTask
        }
    }
})

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer

