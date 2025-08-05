import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/test-thumbnail1.jpg";
import img2 from "../assets/test-thumbnail2.jpg";
import img3 from "../assets/test-thumbnail3.jpg";
import img4 from "../assets/test-thumbnail4.jpg";

const images = [img1, img2, img3, img4];

const testimonials = [
  {
    quote:
      "My time in Simplilearn's program was results-oriented. It allowed me to kickstart my journey into data science through hands-on projects and live classes led by industry experts.",
    name: "Ronald Flores",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQG48yIlHCBXoQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676044589928?e=2147483647&v=beta&t=ba_XuXz3wY-bS9O5qoDgc7gKwJCTr3HRsFwdhjXJhio",
    position: "V.I.P. End User Support Specialist",
    company: "Sony Pictures Entertainment",
  },
  {
    quote:
      "Simplilearn imparts excellent training. The trainers are domain experts & eager to share their knowledge and experience.",
    name: "Mazen Ahmed",
    image:
      "https://assets.datacamp.com/users/avatars/001/189/228/original/timo-grossenbacher-2-small.jpg?1687955298",
    position: "Solutions Project Manager",
    company: "Philips Healthcare",
  },
  
];

const AlumniSection = () => {
  const imageSwiperRef = useRef(null);
  const testimonialSwiperRef = useRef(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-[1360px] mx-auto px-4">
        {/* Header & Image Swiper */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Text Content */}
          <div className="w-full text-center md:w-1/2 md:text-start order-1 md:order-2 mt-4 md:mt-8">
            <p className="text-xl font-medium">Hear It</p>
            <p className="text-3xl font-semibold text-blue-800">
              from our Alumni
            </p>

            <div className="mt-8">
              <p className="text-4xl text-blue-600 font-bold">10,000+</p>
              <p className="text-2xl font-medium">Students Trained</p>
            </div>

            <div className="mt-4">
              <p className="text-4xl text-blue-600 font-bold">9,200+</p>
              <p className="text-2xl font-medium">Facilitated Placements</p>
            </div>
          </div>

          {/* Image Swiper */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            {/* Arrows */}
            <div className="hidden md:flex absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
              <FaArrowLeft
                size={24}
                onClick={() => imageSwiperRef.current?.slidePrev()}
              />
            </div>
            <div className="hidden md:flex absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
              <FaArrowRight
                size={24}
                onClick={() => imageSwiperRef.current?.slideNext()}
              />
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop
              speed={1200}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full aspect-[9/16] overflow-hidden rounded-xl shadow-md">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Arrows */}
            <div className="flex  justify-center gap-6 mt-4 md:hidden">
              <button onClick={() => imageSwiperRef.current?.slidePrev()}>
                <FaArrowLeft size={20} />
              </button>
              <button onClick={() => imageSwiperRef.current?.slideNext()}>
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Swiper */}
        <div className="relative">
          {/* Desktop Arrows */}
          <div className="hidden md:flex absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
            <FaArrowLeft
              size={24}
              onClick={() => testimonialSwiperRef.current?.slidePrev()}
            />
          </div>
          <div className="hidden md:flex absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
            <FaArrowRight
              size={24}
              onClick={() => testimonialSwiperRef.current?.slideNext()}
            />
          </div>

          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            speed={1500}
            spaceBetween={30}
            loop
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            onSwiper={(swiper) => (testimonialSwiperRef.current = swiper)}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col justify-between h-[20rem] md:h-[14rem] border shadow-md border-b-4 border-b-blue-600 p-6 rounded-md bg-white">
                  <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto pt-4">
                    <img
                      src={item.image || "https://via.placeholder.com/80"}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <p className="text-blue-800 font-semibold">
                        - {item.name}
                      </p>
                      <p>
                        {item.position} -{" "}
                        <span className="font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Mobile Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:hidden">
            <button onClick={() => testimonialSwiperRef.current?.slidePrev()}>
              <FaArrowLeft size={20} />
            </button>
            <button onClick={() => testimonialSwiperRef.current?.slideNext()}>
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
