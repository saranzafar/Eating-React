import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import UpdateTodo from './UpdateTodo'


function Todo() {
    const todos = useSelector((state) => state.todos)
    // so "todos" comes from "initialState"
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>
            <ul >
                {todos.map((todo) => (
                    <li
                        key={todo.id}>
                        <div >{todo.text}</div>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Del</button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Todo