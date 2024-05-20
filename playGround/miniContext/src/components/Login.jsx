import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault()
        setUser(userName, password)
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your name' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login