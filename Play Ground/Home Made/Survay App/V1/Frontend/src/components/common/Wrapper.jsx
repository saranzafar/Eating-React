import React from 'react'

function Wrapper({ children }) {
    return (
        <div className='w-full'>
            {children}
        </div>
    )
}

export default Wrapper