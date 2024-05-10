import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonSm, Input } from '../common';
import axios from 'axios';
import conf from '../../conf/conf';
import { Alert } from '../common';

function Signup() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [buttonAppearence, setButtonAppearence] = useState(false)
    const [alertAppearence, setAlertAppearence] = useState(false)
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" })
    const navigate = useNavigate()

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setButtonAppearence(true)
        await axios.post(`${conf.databaseUrl}users/register`, formData)
            .then((response) => {
                console.log("response.data = ", response.data);
                setAlertAppearence(true)
                setAlertMessage({ color: "green", message: response.data.data })
                setButtonAppearence(false)
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 5000);
                navigate("/login") //redirection
            })
            .catch((err) => {
                setAlertAppearence(true)
                console.log("Error = ", err.message);
                setAlertMessage({ color: "red", message: err.message })
                setButtonAppearence(false)
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 5000);
            })
    };



    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create Account
                            </h1>
                            {alertAppearence ? (
                                <Alert
                                    message={`${alertMessage.message}`}
                                    color={`${alertMessage.color}`} />
                            ) : null}
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <Input
                                        type={'text'}
                                        label={'name'}
                                        value={formData.name}
                                        onChange={(value) => handleChange('name', value)}
                                    />
                                </div>
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
                                    text="Create Account"
                                    type='submit'
                                    loadingText={buttonAppearence}
                                    className='text-white'
                                />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
