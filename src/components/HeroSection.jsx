import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import slide1 from "../assets/hero-bg1.jpg";
import slide2 from "../assets/hero-bg2.jfif";
import slide3 from "../assets/hero-bg3.jpg";
import slide4 from "../assets/Form.webp";

const images = [slide1, slide2, slide3, slide4];

const HeroSection = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      
        {/* Custom Next Arrow */}
        <div
          onClick={() => swiperRef?.slideNext()}
          className="custom-next cursor-pointer absolute right-4 top-1/2 z-10 transform -translate-y-1/2"
        >
          <div className="text-xl p-2 rounded-full shadow bg-gray-300 hover:bg-blue-600 transition">
            <IoArrowForwardOutline color="white" />
          </div>
        </div>

        {/* Background Image Slider */}
        <div className="absolute inset-0 -z-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            loop
            onSwiper={setSwiperRef} // capture swiper instance
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
     

      {/* Content Area */}
      <div className="max-w-[1360px] mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-white text-start space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950">
            Get Certified. Go Ahead.
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />

              <PhoneInput
                country={"in"}
                enableSearch={true}
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                  padding: "1.2rem 2.8rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  borderRight: "0.8px solid #d1d5db",
                  borderRadius: "0.25rem 0 0 0.25rem",
                }}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  className=" w-[45%] bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 rounded shadow hover:shadow-xl"
                >
                  Book a Free Demo
                </button>
                <button className="w-[45%] bg-gradient-to-b from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded shadow hover:shadow-xl">
                  View all Courses
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
