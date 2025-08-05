// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/GTR-Orginal-logo-.webp";
import courseCategories from "../data/courseCategories";

const Navbar = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.pathname]);
  

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#182261] text-white shadow-md">
      <div className="flex flex-wrap items-center justify-evenly px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <Link to="/all-courses">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                All Courses
              </button>
            </Link>

            <div className="fixed left-0 w-full bg-white text-black p-10 z-50 overflow-y-auto hidden group-hover:grid grid-cols-1 md:grid-cols-5 gap-8 shadow-2xl transition duration-50 ease-in-out">

              {courseCategories.map((category, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-blue-800 mb-4 uppercase text-xl">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.courses.map((course, i) => (
                      <li key={i}>
                        <Link
                          to={`/courses/${course.slug}`}
                          className="block text-sm uppercase bg-gray-100 px-3 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                        >
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="px-3 py-2 text-black focus:outline-none"
            />
            <button className="bg-white px-3 text-gray-500 hover:text-blue-800">
              <IoSearch />
            </button>
          </div>
        </nav>

        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <RxCross2 size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col px-6 pb-4 space-y-3 bg-[#1e2a6d]">
          <Link to="/all-courses" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            All Courses
          </Link>

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search Courses"
              className="px-3 py-2 text-black w-full focus:outline-none"
            />
            <button className="bg-white px-3 text-gray-500 hover:text-blue-800">
              <IoSearch />
            </button>
          </div>

          <Link to="/" className="hover:underline">Home</Link>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
