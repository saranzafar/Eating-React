import React, { useState, useEffect, Children } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ cildren, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //1.
        // if (authStatus == true) navigate('/')
        // else if (authStatus == false) navigate('/login')
        
        //2. alternative
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return (
        loader ? (<h1>Loading....</h1>): <>{cildren}</>
    )
}

