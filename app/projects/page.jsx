"use client";

import { projectData } from "@/lib/data";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const uniqueCategory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <h2
          className="section-title mb-8 md:mb-16 text-center mx-auto"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 md:mb-48">
          <TabsList
            className="w-fit flex flex-col md:flex-row md:gap-20 mb-12 mx-auto md:border dark:border-none"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px]"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="text-lg md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent
                  value={category}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
