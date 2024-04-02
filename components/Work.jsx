"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/word/1.png",
    category: "react js",
    name: "Proxima",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim explicabo est voluptatum? Expedita quisquam, doloremque adipisci dignissimos exercitationem ratione!",
  },
  {
    image: "/word/2.png",
    category: "react js",
    name: "Proxima",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim explicabo est voluptatum? Expedita quisquam, doloremque adipisci dignissimos exercitationem ratione!",
  },
  {
    image: "/word/3.png",
    category: "react js",
    name: "Proxima",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim explicabo est voluptatum? Expedita quisquam, doloremque adipisci dignissimos exercitationem ratione!",
  },
  {
    image: "/word/4.png",
    category: "react js",
    name: "Proxima",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim explicabo est voluptatum? Expedita quisquam, doloremque adipisci dignissimos exercitationem ratione!",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 md:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto md:mx-0 text-center md:text-left mb-12 md:h-[400px] flex flex-col justify-center items-center md:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            ducimus.
          </p>

          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div>
          <Swiper>
            {projectData.slice(0, 4).map((project, index) => {
              return <SwiperSlide key={index}> </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
