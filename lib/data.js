import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiStripe,
  SiTypescript,
} from "react-icons/si";

import { Blocks, GanttChartIcon, Gem } from "lucide-react";

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sami Khan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+880 17802-77493",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sami999khan999@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Jan, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Pursuing",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Tangail Dhaka, Bangladesh",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "HSC",
        qualification: "High School Graduate",
        year: "18-19",
      },
      {
        university: "HABHIT",
        qualification: "Computer Science",
        year: "2020-current",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "HSC",
        role: "Student",
        year: "18-19",
      },
      {
        company: "HABHIT",
        role: "Computer Science",
        year: "2020-current",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3 />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "Clerk",
        icon: <PiUserCircleFill />,
      },
      {
        name: "Stripe",
        icon: <SiStripe />,
      },
    ],
  },

  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

export const servidesData = [
  {
    icon: <GanttChartIcon size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Crafting visually appealing and user-friendly interfaces that captivate and engage audiences.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Building robust and scalable web applications with modern technologies and best practices.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    description:
      "Creating powerful and efficient server-side solutions to support dynamic web experiences.",
  },
];

export const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Proxima",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Proxima",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Proxima",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Proxima",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ? ",
    link: "/",
    github: "/",
  },
];

export const reviewsData = [
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
