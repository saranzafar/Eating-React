import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import conf from '../conf/conf';
import { logout } from '../store/features/authSlics';
import { Wrapper } from '../components/common';


function LandingPage() {
    const dispatch = useDispatch()
    const storedData = JSON.parse(sessionStorage.getItem("userData"))?.name


    const handelLogout = async () => {
        await axios.post(`${conf.databaseUrl}users/logout`, {}, {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
        })
            .then(() => {
                sessionStorage.clear()
                Cookies.remove("accessToken")
                Cookies.remove("refreshToken")
                dispatch(logout())
                window.location.reload()
            })
    }
    return (
        <>
            < Wrapper >
                <div className='mt-10'>
                    <section className="">
                        <div className="mx-auto max-w-screen-xl px-4 py-2 lg:flex lg:items-center">
                            <div className="mx-auto max-w-xl text-center">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">Welcome to My
                                    <strong className="font-extrabold text-primary-700 sm:block">Survey App!</strong>
                                </h1>
                                {storedData && <p className="mt-4 sm:text-xl/relaxed">
                                    Submint surveys on random, common, and interesting topics. Dive into my MERN-based platform to share insights. Join me in shaping conversations and uncovering trends with your engaging in this app.Click here to
                                    <span
                                        className=' text-blue-600 cursor-pointer hover:underline pl-2 font-bold'
                                        onClick={handelLogout}
                                    >Logout</span>
                                </p>}
                                {!storedData && <p className="mt-4 sm:text-xl/relaxed">Please login or signup to fill the survey.</p>}

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <div
                                        className="block w-full rounded bg-primary-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring active:bg-primary-500 sm:w-auto"
                                        to="#"
                                    >
                                        {storedData && <Link to={"/home"}>Get Start</Link>}
                                        {!storedData && <Link to='/login'>Login</Link>}
                                    </div>
                                    <div
                                        className="block w-full rounded px-12 py-3 text-sm font-medium text-primary-600 shadow hover:text-primary-700 focus:outline-none focus:ring active:text-primary-500 sm:w-auto"
                                    >
                                        {storedData && <Link
                                            to="https://github.com/saranzafar/Eating-React/tree/main/Play%20Ground/Home%20Made/Survay%20App/V1"
                                            target='_blank'
                                        >Source Code</Link>}
                                        {!storedData && <Link to='/signup'>Signup</Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Wrapper >
        </>

    )
}

export default LandingPage