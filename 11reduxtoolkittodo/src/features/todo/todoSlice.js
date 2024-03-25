// reducers also called slice 
// 1.
import { createSlice, nanoid } from '@reduxjs/toolkit'

// 2. define initialState, also be define inside todoSlice 
const initialState = {
    todos: [{ id: 1, text: "hellow world" }]
    /*
    todos: [{id: '2',text: 'a'}, {id: '3',text: 'b'},....]
    */
}

// 4. creating function for understanding 
function sayHello() {
    console.log("hi there");
}
// 3. create reducer/slice 
const todoSlice = createSlice({
    name: 'todo',// giving name to this reducer
    initialState, // provide initial state
    reducers: { // actions
        // 5.
        greeting: sayHello,// passing refrence not calling function
        // is it long define function here 
        addTodo: (state, action) => {
            //state: it gives access of initial/previous state of "initialState" that will be changed soon. hand-to-hand situation.
            // action: use for passing value from here to "initialState"
            const todo = {
                id: nanoid(), // generate unique id by using nanoid
                text: action.payload // getting the data which we pass in dispatch, key name is 'text' that's why we are not writing "payload.text"
                // so now we got data from input field and its time to push into "store/initialState"
            }
            state.todos.push(todo)
            // we told him that update state of "initialState"
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { greeting, addTodo, removeTodo } = todoSlice.actions; // exporting the actions

export default todoSlice.reducer