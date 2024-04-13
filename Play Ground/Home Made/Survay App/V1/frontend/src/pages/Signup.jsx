import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components'

function Signup() {
    const [value, setValue] = useState("");

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create Account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/">
                                <div>
                                    <Input
                                        type={'text'}
                                        label={'name'}
                                        data={setValue}
                                    />
                                </div>
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

                                <Button
                                    text="Create an Account"
                                    type='submit'
                                />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup