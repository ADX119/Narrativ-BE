import { useUser } from '@clerk/clerk-react'
import React from 'react'
import "react-quill/dist/quill.snow.css"
import ReactQuill from 'react-quill-new';

function Write() {
  const {isLoaded , isSignedIn} = useUser();

  if(!isLoaded){
    return <div className=''>Loading...</div>
  }
  if(isLoaded && !isSignedIn){
    return <div className=''>You Should Log In</div>
  }

  return (
    <div className="h-[cal(100vh-64px)] md:h-[cal(100vh-80px)] flex flex-col gap-6">
      {/*because the screen height is 64 and 80 respectively according to the screen*/}
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover Image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Story..."
        />
        <div className="flex items-center gap-4 ">
          <label htmlFor="" className="text-sm">
            Choose a Category
          </label>
          <select
            className="p-2 rounded-xl bg-white shadow-sm"
            name="Cat"
            id=""
          >
            <option value="general">General</option>
            <option value="webdesign">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="search">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-sm"
          name="desc"
          placeholder="A short Description.."
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-sm"
        />
        <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>Send</button>
      </form>
    </div>
  );
}

export default Write