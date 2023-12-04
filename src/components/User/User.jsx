import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='h-1/2 flex justify-center items-center'>
            <div> User:{userid}</div>
        </div>
    )
}

export default User