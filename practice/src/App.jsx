import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

    return (
        <>
            <h1>redux toolkit</h1>
            {/* here we just import and use components */}
            < AddTodo />
            < Todo />
        </>
    )
}

export default App
