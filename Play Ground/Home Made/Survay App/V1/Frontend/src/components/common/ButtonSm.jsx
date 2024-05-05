import React from 'react'
import { Button, Spinner } from "flowbite-react";
import { Loader } from './index';

function ButtonSm({
    type = 'button',
    className = '',
    text = 'Button',
    loadingText = true,
    ...props
}) {
    return (
        <>
            {loadingText ? (
                <div className="w-full bg-primary-600 rounded-lg flex justify-center">
                    <div className='mr-14'>
                        <Loader width={100} color="white" />
                    </div>
                </div>
            ) : (
                <div>
                    <button
                        type="submit"
                        className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${className}`}> {text}
                    </button >
                </div >
            )}
        </>
    )
}

export default ButtonSm

