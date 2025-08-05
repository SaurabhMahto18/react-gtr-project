import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import courseCategories from "../data/courseCategories";
import ModulesAccordion from "../components/ModulesAccordion";
import couseImg1 from "../assets/course-img1.png";

import hpLogo from "../assets/hp.jpg";
import pwcLogo from "../assets/pwc.webp";
import samsungLogo from "../assets/samsung.jpg";
import teslaLogo from "../assets/Tesla.svg";
import cognizantLogo from "../assets/Cognizant.jpg";

const company = [
  { name: "hp", logo: hpLogo },
  { name: "pwc", logo: pwcLogo },
  { name: "samsung", logo: samsungLogo },
  { name: "tesla", logo: teslaLogo },
  { name: "cognizant", logo: cognizantLogo },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/test-thumbnail1.jpg";
import img2 from "../assets/test-thumbnail2.jpg";
import img3 from "../assets/test-thumbnail3.jpg";
import img4 from "../assets/test-thumbnail4.jpg";

import img5 from "../assets/test-thumbnail1.jpg";
import img6 from "../assets/test-thumbnail2.jpg";
import img7 from "../assets/test-thumbnail3.jpg";
import img8 from "../assets/test-thumbnail4.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const CourseDetail = () => {
  const { slug } = useParams();

  const course = courseCategories
    .flatMap((c) => c.courses)
    .find((c) => c.slug === slug);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!course) return <div className="text-center p-10">Course Not Found</div>;

  return (
    <div className=" text-gray-800">
      {/* Header */}
      <div className="bg-blue-950 p-16">
        <div className="max-w-[1360px] bg-white rounded-2xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-around gap-8 items-center">
          {/* Text Block */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800">
              {course.name}
            </h1>
            <p className="text-gray-600 text-xl md:text-lg">
              {course.description}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xl font-medium">
              <span>⭐ {course.rating}</span>
              <span>{course.hours} hrs of content</span>
              <a href="#" download className="text-blue-400 underline">
                Download Brochure
              </a>
            </div>
            <div className="flex gap-8 items-center">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Enroll Now
              </button>
              <div className="">
                <span className="text-xl font-bold text-blue-800">
                  ₹{course.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  ₹{course.oldPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={couseImg1}
              alt="Course"
              className="w-full max-w-[36rem] h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* What You'll Learn Section */}
      <section className="max-w-[1360px] mx-auto py-12">
        <div className="flex justify-around">
          <div className="w-full">
            <h2 className="text-2xl text-start font-semibold mb-4 text-blue-900">
              What you'll learn
            </h2>

            <ModulesAccordion modules={course.modulesData} />
          </div>

          {/* Right - Promo Box */}
          <div className=" mt-8">
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-6 rounded-2xl shadow-md space-y-4 text-start">
              <h3 className="text-xl font-semibold uppercase">
                Online Training
              </h3>
              <h2 className="text-3xl font-extrabold">{course.name}</h2>
              <p className="uppercase">
                Transition to it | Upskill <br />
                Yourself | Secure Your Future
              </p>
              <p className="bg-gradient-to-b from-gray-200 to-gray-400 text-blue-800 inline-block px-4 py-1 font-semibold rounded-lg text-xl">
                100% Placement Assistance
              </p>
              <ul className="text-md space-y-2 pt-2 list-disc ml-4">
                <li> EMI Option Available</li>
                <li> Personalized Coaching</li>
                <li> 24 Hours Mentor Support</li>
                <li> Get Certificate</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-8 px-4">
          <div className="max-w-[1360px] bg-white mx-auto py-6 px-6 mb-12 rounded-2xl shadow-md flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">
                We are <br />
                widely accredited
              </h3>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-36 mr-12">
              {company.map((compan) => (
                <img
                  key={compan.name}
                  src={compan.logo}
                  alt={compan.name}
                  className="h-12 w-auto object-contain bg-white"
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="bg-blue-950 w-full h-[650px]">
        <div className="max-w-[1360px] items-center mx-auto">
          <h1 className="font-bold text-center text-3xl text-white p-6">
            Student Video Testimonial
          </h1>

          <div>
            <h2 className="text-gray-50 text-center text-xl">
              Watch heartfelt testimonials from our students, sharing their
              firsthand <br />
              experiences and success stories about their transformative
              journeys at our institution.
            </h2>
          </div>

          <div className="w-full max-w-4xl mt-12 mx-auto">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop
              speed={1200}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full aspect-[9/16] overflow-hidden rounded-xl shadow">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
