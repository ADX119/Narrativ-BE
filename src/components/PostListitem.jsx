import { Link } from 'react-router-dom';
import Image from './Image'

function PostListitem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*Image*/}
      <div className="md:hidden xl:block xl:1/3">
        <Image src="postImg.jpeg"className="rounded-2xl object-cover" />
      </div>
      {/*details*/}
      <div className='flex flex-col gap-4 xl:2/3'>
        <Link to="/test" className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, praesentium!</Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span className=''>
                Written by
            </span>
            <Link className='text-blue-800'>Adi</Link>
            <span className=''>
                on
            </span>
            <Link className='text-blue-800'>Web design</Link>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nesciunt ipsum quibusdam recusandae tenetur dolores?
            Lorem, ipsum dolor.
        </p>
        <Link to="" className='underline text-blue-800 text-sm'>Read More</Link>
      </div>
    </div>
  );
}

export default PostListitem