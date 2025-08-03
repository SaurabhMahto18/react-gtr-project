import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import img1 from "./assets/test-thumbnail1.jpg";
import img2 from "./assets/test-thumbnail2.jpg";
import img3 from "./assets/test-thumbnail3.jpg";
import img4 from "./assets/test-thumbnail4.jpg";

const images = [img1, img2, img3];

const testimonials = [
  {
    quote:
      "My time in Simplilearn's program was results-oriented. It allowed me to kickstart my journey into data science through hands-on projects and live classes led by industry experts. Thanks to all the instructors and support staff.",
    name: "Ronald Flores",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQG48yIlHCBXoQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676044589928?e=2147483647&v=beta&t=ba_XuXz3wY-bS9O5qoDgc7gKwJCTr3HRsFwdhjXJhio",
    position: "V.I.P. End User Support Specialist",
    company: "Sony Pictures Entertainment",
  },
  {
    quote:
      "Simplilearn imparts excellent training, beneficial for both the career and personal life. The trainers are domain experts & eager to share their knowledge and experience.",
    name: "Mazen Ahmed",
    image:
      "https://assets.datacamp.com/users/avatars/001/189/228/original/timo-grossenbacher-2-small.jpg?1687955298",
    position: "Solutions Project Manager",
    company: "Philips Healthcare",
  },
  {
    quote:
      "Enrolling at GTR was the best decision I made for my career. The mentorship, real-world projects, and career guidance helped me transition from a marketing background to a full-fledged software developer.",
    name: "Samantha Lee",
    image:
      "https://thumbs.dreamstime.com/b/student-woman-thinking-open-books-pondering-girl-glasses-learning-exam-studying-looking-up-over-gray-background-57489975.jpg",
    company: "TechNova Inc.",
    position: "Frontend Developer",
  },
  {
    quote:
      "GTR’s Data Science program didn’t just teach me how to code — it taught me how to think like a problem solver. From Python and SQL to machine learning, I gained the skills that landed me my first data science role, even without a tech degree.",
    name: "Rajiv Mehra",
    image:
      "https://allofinsta.com/wp-content/uploads/2024/09/Boy-medical-student-dp-idea-for-Insta.webp",
    company: "InnoData Analytics",
    position: "Data Scientist",
  },
  {
    quote:
      "The career support at GTR exceeded my expectations. Resume reviews, mock interviews, and personal mentorship gave me the edge I needed. Within a month of graduation, I received offers from three different companies.",
    name: "Elena Garcia",
    image:
      "https://media.istockphoto.com/id/524897008/photo/happy-young-indian-girl-college-graduate.jpg?s=612x612&w=0&k=20&c=J20bxGQDGlYtU0zgKyytQu9hXmNsaaHbdFKk8YpnXsI=",
    company: "BrightApps",
    position: "Software Engineer",
  },
  {
    quote:
      "Before GTR, I was stuck in a job with no growth. Their Full Stack Web Development bootcamp was intense but incredibly rewarding. The live sessions, capstone project, and 24/7 support made all the difference. Now I work at a company I used to dream of.",
    name: "David Kim",
    image:
      "https://media.gettyimages.com/id/896458302/photo/young-man-graduating-from-high-school-or-university.jpg?s=612x612&w=gi&k=20&c=ngE5OArd1vZxA162B4aq2ktLgJxEo9TxNw5MRV8ZU08=",
    company: "CodeSprint",
    position: "Full Stack Developer",
  },
  {
    quote:
      "What stood out to me at GTR was the emphasis on practical learning. We didn’t just learn concepts—we built real applications and deployed them. That hands-on experience was exactly what recruiters were looking for.",
    name: "Fatima Al-Rashid",
    image:
      "https://imgcdn.stablediffusionweb.com/2024/11/22/22707987-a7f1-46d6-8ca3-526b7e25b896.jpg",
    company: "NextGenTech",
    position: "Junior Backend Engineer",
  },
];

const AlumniSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1360px] mx-auto px-4">
        {/* Header & Stats */}
        <div className="mb-10 flex justify-between">
          <div className="text-left mt-24 flex flex-col">
            <p className="text-xl font-medium">Hear It</p>
            <p className="text-3xl font-semibold text-blue-800">
              from our Alumni
            </p>
            <div className="text-start mt-12">
              <p className="text-4xl text-blue-600 font-bold">10,000+</p>
              <p className="text-2xl font-medium">Students Trained</p>
            </div>
            <div className="text-start mt-4">
              <p className="text-4xl text-blue-600 font-bold">9,200+</p>
              <p className="text-2xl font-medium">Facilitated Placements</p>
            </div>
          </div>
          
            
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-[300px] aspect-[9/16] overflow-hidden rounded-xl shadow"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Swiper Testimonials */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{delay:3000}}
          speed={1500}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
          }}
          loop
        >
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
            (_, i) => (
              <SwiperSlide key={i}>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.slice(i * 2, i * 2 + 2).map((item, j) => (
                    <div
                      key={j}
                      className="flex flex-col justify-between h-full border shadow-md border-b-4 border-b-blue-600 p-6 rounded-md bg-white"
                    >
                      <p className="text-gray-700 italic mb-4">
                        "{item.quote}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto pt-4 ">
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
                            <span className="font-semibold">
                              {item.company}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

    </section>
  );
};

export default AlumniSection;
