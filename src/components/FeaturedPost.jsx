import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom';

function FeaturedPost() {
  return (
    <div className=" mt-8 flex flex-col lg:flex-row gap-8">
      {/*First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/*details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/*title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempore?
        </Link>
      </div>
      {/*Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*Second */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
        <Image src="featured2.jpeg" className="rounded-3xl object-cover w-1/3"/>
        {/*details and title*/}
        <div className='w-2/3'></div>

        </div>
        {/*Third */}
        <div className='lg:h-1/3 flex justify-between gap-4'>

        </div>
        {/*Fourth */}
        <div className='lg:h-1/3 flex justify-between gap-4'>

        </div>
        {/*Other Posts */}
      </div>
    </div>
  );
}

export default FeaturedPost