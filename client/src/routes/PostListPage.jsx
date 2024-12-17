import React from 'react'
import PostList from "../components/PostList"
import SideMenu from '../components/SideMenu'
import { useState } from 'react';

function PostListPage() {
  const [open , setOpen] = useState(false);

  return (
    <div className=''>
      <h1 className='mb-8 text-2xl'>Developer</h1>
      <button onClick={()=>setOpen((prev)=>!prev)} className='bg-blue-800 mb-4 text-white text-sm rounded-2xl px-4 py-2 md:hidden'>
        { open ? "Close" : "Filter or Search"}
        </button>
      <div className='flex flex-col-reverse gap-8 md:flex-row '>
        <div className=''>
          <PostList/>
        </div>
        <div className={`${open ? "block" : "hidden"} md:block `}>
          <SideMenu/>
        </div>
      </div>

    </div>
  )
}

export default PostListPage