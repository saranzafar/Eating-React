import React from 'react'

function Wrapper({ children }) {
    return (
        <div className='bg-gray-50 w-full max-w-7xl mx-auto px-4 '>
            {children}
        </div>
    )
}

export default Wrapper