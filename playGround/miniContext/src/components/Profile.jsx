import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div>Please Login</div>
    return <p>Welcome {user.name} </p>
}

export default Profile