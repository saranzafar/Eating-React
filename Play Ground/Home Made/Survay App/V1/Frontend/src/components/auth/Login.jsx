import { useState } from 'react'
import { ButtonSm, Input, Alert } from '../common';
import axios from 'axios';
import conf from '../../conf/conf';
import { sigin } from '../../store/features/authSlics';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [buttonAppearence, setButtonAppearence] = useState(false)
    const [alertAppearence, setAlertAppearence] = useState(false)
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setButtonAppearence(true)
        await axios.post(`${conf.databaseUrl}users/login`, formData)
            .then((response) => {
                Cookies.set('accessToken', response.data?.message?.accessToken, { expires: 1 });
                Cookies.set('refreshToken', response.data?.message?.refreshToken, { expires: 7 });
                setAlertAppearence(true)
                setAlertMessage({ color: "green", message: response.data.data })
                setButtonAppearence(false)
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 5000);
                dispatch(sigin(response.data.message.user))
                navigate("/home")
            })
            .catch((err) => {
                setAlertAppearence(true)
                setAlertMessage({ color: "red", message: err.message })
                setButtonAppearence(false)
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 10000);
            })
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login Account
                            </h1>
                            {alertAppearence ? (
                                <Alert
                                    message={`${alertMessage.message}`}
                                    color={`${alertMessage.color}`} />
                            ) : null}
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                                <div>
                                    <Input
                                        type={'email'}
                                        value={formData.email}
                                        onChange={(value) => handleChange('email', value)}
                                    />
                                </div>
                                <div>
                                    <Input
                                        type={'password'}
                                        value={formData.password}
                                        onChange={(value) => handleChange('password', value)}
                                        eye
                                    />
                                </div>

                                <ButtonSm
                                    text="Login"
                                    type='submit'
                                    loadingText={buttonAppearence}
                                    className='text-white'
                                />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Not have an account?
                                    <Link
                                        to="/signup"
                                        className="pl-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Signup here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login