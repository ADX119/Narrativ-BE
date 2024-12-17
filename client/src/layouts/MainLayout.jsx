import React from 'react'
import Navbar from '../components/Navbar';
import {Outlet} from "react-router-dom"

function MainLayout() {
  return (
    <div className="w-full h-screen px-4 md:px-8 lg:px-16 2xl:px-64 bg-[#EAEAEA]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout