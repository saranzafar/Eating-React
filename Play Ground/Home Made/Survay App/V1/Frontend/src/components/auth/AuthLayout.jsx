import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../common'
import Cookies from 'js-cookie'


function AuthLayout({ children }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const token = Cookies.get("accessToken")

    useEffect(() => {
        if (token) {
            navigate('/home')
        } else if (!token) {
            navigate('/')
        }
        setLoader(false)
    }, [navigate, token])
    return loader ?
        <div className='w-100 vh-100 flex justify-center '>
            <Loader />
        </div>
        : <>{children}</>
}

export default AuthLayout