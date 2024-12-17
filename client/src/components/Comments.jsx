import React from 'react'
import SingleComment from "./SingleComment"

function Comments() {
  return (
    <div className='flex flex-col gap-8 lg:w-3/4'>
        <h1 className='text-xl text-gray-500 underline font-semibold'>
            Comments
        </h1>
        <div className='flex items-center justify-between gap-8 w-full'>
          <textarea placeholder='Write a Comment...' className='w-full p-4 rounded-xl'/>  
          <button className='bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>Send</button>
        </div>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>
        <SingleComment/>

    </div>
  )
}

export default Comments