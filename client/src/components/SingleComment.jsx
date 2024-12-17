import React from 'react'
import Image from './Image'

function SingleComment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex items-center gap-4 '>
        <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
        <span className='font-medium'>Adi</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      <div className='mt-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt, veniam architecto mollitia tenetur alias iste rem doloribus ex voluptates.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia praesentium deserunt reprehenderit harum eos doloremque cum sunt, laudantium corporis!
        </p>

      </div>

    </div>
  )
}

export default SingleComment