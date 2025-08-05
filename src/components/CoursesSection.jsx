import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import courseimg from "../assets/course-img1.png";
import { Link } from "react-router-dom";

const categories = [
  "SAP Functional",
  "SAP Technical",
  "SAP Success Factor",
  "Data Science",
  "Python with Fast API",
  "VLSI",
];
// const selectedCategory = "SAP Technical"; // for default highlight

const courses = Array(6).fill({
  title: "SAP CPI",
  subtitle: "Cloud Platform Integration",
  description:
    "Master in SAP  Online Training & Certification – Complete Hands-on Course.",
  duration: "6 Months",
});

const CoursesSection = () => {
  const [active, setActive] = useState("SAP Technical");
  

  return (
    <section className="bg-[#f0f6ff] py-10 min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4">
        {/* Heading + Search */}
        <div className="mb-10 text-start">
          <h2 className="text-xl md:text-2xl font-semibold">
            Select your goal
          </h2>
          <p className="text-gray-600 text-sm">
            <span className="text-normal text-blue-600">100+</span> courses
            available for you
          </p>
          <div className="mt-4 flex border border-gray-300 rounded overflow-hidden shadow-sm">
            <button className="bg-white px-3 text-gray-500">
              <IoSearch />
            </button>
            <input
              type="text"
              placeholder="Type the course you’re looking for"
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-6 text-start">
          <h1 className="text-2xl font-semibold">Popular Courses</h1>
        </div>

        {/* Tabs */}
        <div className="mb-10 ">
          <div className="text-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 mb-8 md:mb-2 gap-6 rounded border transition border border-black mr-6 ${
                  active === cat
                    ? "bg-blue-600 text-white font-semibold "
                    : "bg-white text-gray-800 hover:bg-blue-100 "
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start text-start hover:shadow-xl hover:scale-[1.01] transition duration-600 ease-in-out"
            >
              <img
                src={courseimg}
                alt={course.title}
                className="rounded-md w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{course.subtitle}</p>
              <p className="text-sm text-gray-500 mb-2">{course.description}</p>
              <div className="bg-gray-300 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                📆 {course.duration}
              </div>
              <Link
                to="/courses"
                className="bg-blue-600 text-white text-center px-4 py-2 w-full rounded shadow hover:bg-blue-700"
              >
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>

        {/* All Courses Button */}
        <div className="mb-6 text-start mt-6">
          <Link to="/all-courses">
            <button className="px-6 py-2 w-full p-2 md:w-64 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              All Courses &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CoursesSection;
