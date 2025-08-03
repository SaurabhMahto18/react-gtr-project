import React, { useState } from "react";
import logo from "./assets/GTR-Orginal-logo-.webp";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#182261] text-white shadow-md">

      <div className=" flex items-center justify-evenly px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              All Courses
            </button>
          </a>
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
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">FAQs</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>

        

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between">
          <button onClick={toggleMenu}>
            {isOpen ? <RxCross2 size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-3 bg-[#1e2a6d]">
          <a href="#">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              All Courses
            </button>
          </a>
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="px-3 py-2 text-black w-full focus:outline-none"
            />
            <button className="bg-white px-3 text-gray-500 hover:text-blue-800">
              <IoSearch />
            </button>
          </div>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
