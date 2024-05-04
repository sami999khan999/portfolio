"use client";

import { faqs } from "@/lib/data";
import { Plus, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { BsStars } from "react-icons/bs";
import Link from "next/link";

const Cta = () => {
  const [currentActive, setCurrentActive] = useState(0);

  const handleChange = (index) => {
    setCurrentActive(index);
    console.log(currentActive);
  };

  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div
        className="container flex flex-col items-center justify-center mb-6"
        data-aos="fade-up"
      >
        <h2 className="section-title mb-4">Latest Project</h2>
        <p className="subtitle mb-8 text-center">
          Explore some of the innovative projects I have been working on
          recently.
        </p>
      </div>

      <div className="container flex flex-col md:flex-row items-center md:items-start gap-8">
        <div
          className="bg-white dark:bg-secondary w-full md:w-2/3 rounded-2xl p-4 md:p-8"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          {faqs.map((item, index) => (
            <div className="p-2" data-aos="fade-right" data-aos-delay={200}>
              <div
                key={index}
                className="bg-gray-50 dark:bg-background/30 p-4 flex flex-col gap-3 rounded-xl"
                onClick={() => handleChange(index)}
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-lg md:text-xl dark:text-gray-300">
                    {item.question}
                  </h5>
                  <div>
                    <Plus size={16} color="white" />
                  </div>
                </div>
                <div
                  className={`text-gray-400 transition-all duration-300 ${
                    currentActive === index
                      ? " opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className=" bg-white dark:bg-secondary md:w-1/3 p-9  rounded-2xl"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <div className="mb-8 bg-primary w-16 h-16 flex items-center justify-center rounded-sm">
            <BsStars size={34} />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-gray-500 dark:text-gray-300">
              Still have any questions?
            </h3>
            <p className="text-[15px] text-gray-400 dark:text-gray-300">
              If you still have any questions or need further clarification,
              feel free to reach out to me. I`m here to help and provide
              assistance in any way I can.
            </p>
            <Button>
              <Link href={"/contact"}>Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
