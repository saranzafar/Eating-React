import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonSm, Input } from '../common';

function Login() {
    const [value, setValue] = useState("");


    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login Account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/">
                                <div>
                                    <Input
                                        type={'email'}
                                        data={setValue}
                                    />
                                </div>
                                <div>
                                    <Input
                                        type={'password'}
                                        data={setValue}
                                        eye
                                    />
                                </div>

                                <ButtonSm
                                    text="Login"
                                    type='submit'
                                />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account?
                                    <a
                                        href="/signup"
                                        className="pl-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Signup here
                                    </a>
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