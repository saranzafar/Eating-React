import React, { useState } from 'react'
import { CheckCircle, X } from 'lucide-react'

function Alert({ message = "Everything Is Ok", color = "green"}) {
    const [deleteAlert, setDeleteAlert] = useState(true);
    const handelClick = () => {
        setDeleteAlert(false);
    };

    return (
        <>
            {deleteAlert ? (
                <div className={`rounded-md border-l-4 ${color === 'red' ? 'border-red-500' : 'border-green-500'} p-4 ${color === 'red' ? 'bg-red-100' : 'bg-green-100'} p-4`}>
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <CheckCircle className={`h-6 w-6 ${color === 'red' ? 'text-red-600' : 'text-green-600'}`} />
                        </div >
                        <div>
                            <p className={`text-sm font-medium ${color === 'red' ? 'text-red-600' : 'text-green-600'}`}>
                                {message}
                            </p>
                        </div>
                        <div>
                            <X
                                onClick={handelClick}
                                className={`h-6 w-6 cursor-pointer ${color === 'red' ? 'text-red-600' : 'text-green-600'}`} />
                        </div>
                    </div >
                </div >
            ) : (
                null
            )}
        </>
    );
}


export default Alert
