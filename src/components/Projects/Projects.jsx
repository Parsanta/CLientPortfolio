import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Data from "./Data";
import ban from "../../assets/ban.svg";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="Project"
      className="section relative flex flex-col justify-center"
      style={{ backgroundImage: `url(${ban})`, padding: "10px 0" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-500 font-nunito text-center">
          Projects I have worked on
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Default to 1 slide for mobile
          spaceBetween={-40} // Adjust spacing between slides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="w-full max-w-5xl h-80 relative mx-auto"
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slides on large screens
              spaceBetween: -40,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {Data.map((project, index) => (
            <SwiperSlide
              key={project.id}
              className="flex items-center justify-center rounded-lg shadow-lg transition-transform transform"
              style={{
                transform: 'scale(0.25)', // Scale down the side slides
                backgroundColor: activeIndex === index
                  ? '#2196F3' // Steel Blue for active slide
                  : '#E0F7FA', // Light Blue for inactive slides
              }}
            >
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col justify-center items-center rounded-md overflow-hidden p-2"
                style={{ display: "flex", textDecoration: "none" }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-4/5 rounded-lg"
                />
                <div className="mt-2 text-center">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">
                    {project.description}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev text-white text-3xl font-bold absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10">
            &#8249;
          </div>
          <div className="swiper-button-next text-white text-3xl font-bold absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10">
            &#8250;
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
