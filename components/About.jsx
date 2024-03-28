import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const infoData = [
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

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "HSC",
        qualification: "",
        year: "18-19",
      },
      {
        university: "Haji Abul Hossain Institute of Technology (HABHIT)",
        qualification: "Computer Science",
        year: "2020-current",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        university: "HSC",
        qualification: "",
        year: "18-19",
      },
      {
        university: "Haji Abul Hossain Institute of Technology (HABHIT)",
        qualification: "Computer Science",
        year: "2020-current",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
      },
      {
        name: "Node.js, Express, MongoDB, Firebase, Clerk, Stripe",
      },
    ],
  },

  {
    title: "tools",
    data: [
      {
        name: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
      },
      {
        name: "Node.js, Express, MongoDB, Firebase, Clerk, Stripe",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imPath: "/about/vscode.svg",
      },
      {
        imPath: "/about/figma.svg",
      },
      {
        imPath: "/about/notion.svg",
      },
      {
        imPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-32 ">
      <div className="container mx-auto space-y-20">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row ">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">Personal</TabsContent>
                <TabsContent value="qualification">qualification</TabsContent>
                <TabsContent value="skills">skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
