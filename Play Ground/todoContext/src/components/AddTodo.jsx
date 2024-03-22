import React, { useState } from 'react'
import { useTodo } from '../contexts'

function AddTodo() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="text-white w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-black/80 py-1.5"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-red-800 text-white shrink-0">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo