import React from 'react'
import { useDispatch } from 'react-redux'
import { editTodo, removeTodo } from '../features/todo/todoSlice';

const Todos = ({ id, text }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div
                onClick={() => dispatch(editTodo({ id, text }))}
            >
                {text}
            </div>
            <button onClick={() => dispatch(removeTodo(id))} >Delete</button>
        </div>
    )
}

export default Todos