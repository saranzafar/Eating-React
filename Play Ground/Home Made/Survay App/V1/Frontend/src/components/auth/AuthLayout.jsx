import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../common'
import Cookies from 'js-cookie'


function AuthLayout({ path, children }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const token = Cookies.get("accessToken")
    const checkAdmin = JSON.parse(sessionStorage.getItem("userData"))?.role
    useEffect(() => {
        if (checkAdmin == true && path == "/admin" && token) {
            navigate("/admin")
        }
        else if ((path == "/admin" && checkAdmin == false && token)) {
            navigate("/home")
        } else if (path == "/admin" && checkAdmin == false && !token) {
            navigate('/signup')
        }
        setLoader(false)
    }, [path, navigate, token, checkAdmin])
    return loader ?
        <div className='w-100 vh-100 flex justify-center '>
            <Loader />
        </div>
        : <>{children}</>
}

export default AuthLayout