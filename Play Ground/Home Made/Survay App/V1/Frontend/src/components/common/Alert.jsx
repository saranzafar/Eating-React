import React, { useState } from 'react'
import { CheckCircle, X } from 'lucide-react'

function Success({ message = "Everything Is", color = "green" }) {
    const [deleteAlert, setDeleteAlert] = useState(true)
    const handelClick = () => {
        setDeleteAlert(false)
    }
    return (
        <>
            {deleteAlert ? (
                <div className={`rounded-md border-l-4 border-${color}-500$  bg-${color}-100 p-4`}>
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <CheckCircle className={`h-6 w-6 text-${color}-600`} />
                        </div >
                        <div>
                            <p className={`text-sm font-medium text-${color}-600`}>
                                {message}
                            </p>
                        </div>
                        <div>
                            <X
                                onClick={handelClick}
                                className={`h-6 w-6 cursor-pointer text-${color}-600`} />
                        </div>
                    </div >
                </div >
            ) : (
                null
            )}

        </>
    )
}

export default Success
