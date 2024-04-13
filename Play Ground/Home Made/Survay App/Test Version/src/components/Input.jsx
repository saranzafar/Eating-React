import React, { useState } from 'react';

function Input({ data, type, eye, label, ...props }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const capitalizedLabel = label ? label.charAt(0).toUpperCase() + label.slice(1) : type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{capitalizedLabel}</label>
                <input
                    type={showPassword ? 'text' : type}
                    id={props.id}
                    name={props.name || type}
                    placeholder={`Enter Your ${capitalizedLabel}`}
                    onChange={(e) => data(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...props}
                />
                {eye && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-0 flex items-center px-2 text-gray-800 dark:text-white focus:outline-none"
                        style={{ top: '36px' }}
                    >
                        {showPassword ? (
                            <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>


                        ) : (
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Input;
