import React from 'react'
import PostListitem from './PostListitem'

function PostList() {
  return (
    <div className='flex flex-col gap-12 mb-8'>
        <PostListitem/>
        <PostListitem/>
        <PostListitem/>
        <PostListitem/>
        <PostListitem/>
        <PostListitem/>
        <PostListitem/>
        <PostListitem/>
    </div>
  )
}

export default PostList