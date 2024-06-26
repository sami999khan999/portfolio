import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import { Github, Link2Icon } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-transparent dark:bg-secondary/40 md:bg-work_Project_bg_light xl:bg-[110%] md:dark:bg-work_Project_bg_dark">
          <div className="w-[15.4rem] h-[13rem]  md:w-[20rem] md:h-[15rem] flex items-center justify-center absolute top-14 overflow-hidden rounded-t-xl shadow-xl shadow-gray-200 dark:shadow-gray-800">
            <Image
              className=" object-fill"
              src={project.image}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt=""
              property
            />
          </div>

          <div className="flex gap-2">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-3 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1 ">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
