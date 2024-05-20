import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/index'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

function App() {
  const [todos, settodos] = useState([])

  const addTodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    settodos((prev) => prev.map((prevTodo) =>
      prevTodo.id === id ?
        { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('Todos'))
    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {/* <div className="bg-[#172842] min-h-screen py-8"> */}
      <div
        className="min-h-screen py-8 bg-cover flex flex-col justify-between"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/5827836/pexels-photo-5827836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-3 text-black bg-opacity-50 backdrop-blur-lg backdrop-filter bg-gray-200">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">My Personal Todo...</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <ListTodos todo={todo} />
              </div>
            ))}
          </div>
        </div>
        <div className=' mt-40'>
          <p className='text-white pl-4'>Developed By<a href="https://saranzafar.github.io" target='_blank'
              className='hover:text-blue-700 hover:underline pl-1'
            > Saran Zafar</a></p>
          <p className='text-white pl-4'>Copyright © saranzafar 2024 | All Rights Reserver</p>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
