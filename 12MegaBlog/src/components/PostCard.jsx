import React from 'react'
import appwriteSercice from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

    return (
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <link to={`/post/${$id}`}></link>
            <div className='w-full justify-content-center  mb-4'>
                <img src={appwriteSercice.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
            </div>
            <h2
                className='text-xl font-bold'
            >{title}</h2>
        </div>
    )
}

export default PostCard