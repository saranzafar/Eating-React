import React from 'react'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Todos from './Todos'

function Addtodo() {
    const value = useSelector((state) => state.inputTaskValue)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handelChange = (e) => {
        dispatch(updateTodo(e.target.value))
    }
    const handelEnterKey = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(value))
        }
    }

    return (
        <>
            <input
                type="text"
                value={value}
                placeholder="Enter task"
                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                onChange={handelChange}
                onKeyDown={handelEnterKey}
            />

            <button onClick={() => dispatch(addTodo(value))}>AddTodo</button>
            <div>
                {todos.length ? (
                    todos.map(todo => <Todos key={todo.id} {...todo} />)
                ) : (
                    <h3>No todos...</h3>
                )}
            </div>
        </>
    )
}

export default Addtodo