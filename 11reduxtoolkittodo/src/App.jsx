import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todos'

function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      {/* here we just import and use components */}
      < AddTodo />
      < Todo />
    </>
  )
}

export default App
