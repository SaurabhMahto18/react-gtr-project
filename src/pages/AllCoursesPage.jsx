import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../assets/course-img1.png"; 
import courseCategories from "../data/courseCategories";

const AllCoursesPage = () => {
  return (
    <section>
      <div className="max-w-[1360px] mx-auto px-4 py-10 ">
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-900">
          All Courses
        </h1>

        <div className="space-y-10">
          {courseCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {category.courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow hover:shadow-xl transition p-4 flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={course.thumbnail}
                        alt={course.name}
                        className="rounded-md h-48 w-full object-cover"
                      />
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        50% OFF
                      </span>
                    </div>

                    <div className="mt-4 flex-1 flex flex-col justify-between">
                      <span className="text-xs text-pink-700 bg-pink-100 px-2 py-0.5 rounded-full w-max mb-2">
                        {course.level}
                      </span>
                      <h3 className="font-bold text-lg mb-1">{course.name}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                        {course.description}
                      </p>
                      <div className="text-yellow-500 text-sm">
                        ★ {course.rating}
                      </div>
                      <div className="text-sm mt-1">
                        Instructor:{" "}
                        <span className="font-semibold">
                          {course.instructor}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                        <span>🕒 {course.hours} hours</span>
                        <span>👨‍🎓 {course.students}</span>
                        <span>📘 {course.modules} modules</span>
                      </div>

                      <div className="mt-3">
                        <span className="text-lg font-bold text-blue-800">
                          ₹{course.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400 line-through ml-2">
                          ₹{course.oldPrice.toLocaleString()}
                        </span>
                      </div>

                      <Link
                        to={`/courses/${course.slug}`}
                        className="mt-4 block bg-blue-600 text-white text-center rounded py-2 hover:bg-blue-700"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCoursesPage;
