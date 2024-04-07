"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thomas",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam mollitia eius!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Richard Thomas",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam mollitia eius!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Richard Thomas",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam mollitia eius!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Richard Thomas",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam mollitia eius!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Richard Thomas",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam mollitia eius!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Richard Thomas",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam mollitia eius!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 md:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}

        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />

                      <div>
                        <CardTitle>{item.name}</CardTitle>
                        <p>{item.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground ">
                    {item.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
