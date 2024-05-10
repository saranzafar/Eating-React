import React from 'react'

function Wrapper({ children }) {
    return (
        <div className='w-full vh-100 '>
            {children}
        </div>
    )
}

export default Wrapper