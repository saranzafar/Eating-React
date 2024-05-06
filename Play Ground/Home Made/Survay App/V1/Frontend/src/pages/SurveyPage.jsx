import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SurveyPage() {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedData.accessToken);

    return (
        <>
            <div className=' h-auto'>
                {/* {storedData} */}
                <section className="bg-gray-50">
                    <div className="mx-auto max-w-screen-xl px-4 py-2 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">Welcome to My
                                <strong className="font-extrabold text-primary-700 sm:block">Survey App!</strong>
                            </h1>
                            <p className="mt-4 sm:text-xl/relaxed">
                                Submint surveys on random, common, and interesting topics. Dive into my MERN-based platform to share insights. Join me in shaping conversations and uncovering trends with your engaging in this app.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <div
                                    className="block w-full rounded bg-primary-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring active:bg-primary-500 sm:w-auto"
                                    to="#"
                                >
                                    {!storedData && "Get Started"}
                                    {storedData && <Link to='/login'>Login</Link>}
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
        </>
    )
}

export default SurveyPage