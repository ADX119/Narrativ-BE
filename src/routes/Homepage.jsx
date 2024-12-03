import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPost from "../components/FeaturedPost";

function Homepage() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/*BREADCRUMS*/}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/*INTRODUCTION*/}
      <div className="flex items-center justify-center">
        {/*title*/}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-6xl font-bold">
            Lorem ipsum, dolor sit amet consectetur
          </h1>
          <p className="mt-4 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          </p>
        </div>
        {/*animated button*/}
        <Link
          to="write"
          className="hidden md:block relative"
        >
          <svg
            className="text-lg tracking-widest animate-spin"
            viewBox="0 0 200 200"
            width="200"
            height="200"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150, 0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your Story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your Idea
              </textPath>
            </text>
          </svg>
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories/>
      {/*FEATURED POSTS*/}
      <FeaturedPost/>
      {/*POST LIST(INFINITE SCROLL)*/}
    </div>
  );
}

export default Homepage;
