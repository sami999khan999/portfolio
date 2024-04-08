"use client";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

import { projectData } from "@/lib/data";

const Work = () => {
  return (
    <section className="relative ">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="max-w-[350px] mx-auto md:mx-0 text-center md:text-left mb-12 md:h-[400px] flex flex-col justify-center items-center md:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Explore some of the innovative projects I have been working on
            recently.
          </p>

          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="md:max-w-[1000px] md:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
