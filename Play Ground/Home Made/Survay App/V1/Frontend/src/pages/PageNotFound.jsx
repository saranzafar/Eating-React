import React from 'react';
import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
    const error = useRouteError();

    // Check if error exists before accessing its properties
    const errorMessage = error ? (error.statusText || error.message) : "Unknown error";

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops!</h1>
                <p className="text-lg text-gray-600 mb-4">Sorry, This Page is not found.</p>
                <p className="text-sm text-gray-600 mb-8">
                    <i>{errorMessage}</i>
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-primary-700 text-white py-2 px-4 rounded hover:bg-primary-600 focus:outline-none focus:bg-blue-600"
                >
                    Reload Page
                </button>
            </div>
        </div>
    );
}
