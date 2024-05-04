import { Briefcase, GraduationCap } from "lucide-react";

import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { infoData, qualificationData, skillData } from "@/lib/data";

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="">
      <div className="container mx-auto space-y-10 md:space-y-20">
        {/* Section Title */}
        <h2
          className="section-title xl:mb-16 text-center mx-auto"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div
          className="flex flex-col xl:flex-row"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="hidden xl:flex flex-1 relative">
            {/* Developer Image */}
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            {/* Tabs */}
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid md:grid-cols-3 md:max-w[520px] xl:border dark:border-none">
                {/* Tab Triggers */}
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center md:text-left">
                    {/* Content for Personal Info Tab */}
                    <h3 className="h3 mb-4">Unmatched Service Quality.</h3>

                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in creating intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>

                    {/* Info Data */}
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Language Skill */}
                    <div className="space-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <p>
                        Bangla <span className="text-primary"> | </span> English
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Content for Qualification Tab */}
                <TabsContent value="qualification">
                  <div className="space-y-8">
                    <h3 className="h3 text-center md:text-left">My Journey</h3>
                    {/* experience and endcation */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      {/* <div className="space-y-8">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>

                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div> */}
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary pb-2">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>

                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Content for Skills Tab */}
                <TabsContent value="skills">
                  <div className="text-center md:text-left">
                    <h3 className="h3 mb-8">Tools, That I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills */}
                      <div className="mb-16 grid grid-cols-3 md:grid-cols-5 gap-y-6 text-xl antialiased">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div className="space-y-1" key={index}>
                                <div className="flex flex-col items-center text-2xl md:text-4xl text-primary">
                                  {item.icon}
                                </div>

                                <div className="text-secondary dark:text-secondary-foreground  text-base  text-center">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {/* tools */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2 md:text-left">
                          Tools
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        <div className="flex gap-x-8 justify-center md:justify-start ">
                          {getData(skillData, "tools").data.map(
                            (item, index) => {
                              const { imgPath } = item;

                              return (
                                <div>
                                  <Image
                                    src={imgPath}
                                    alt=""
                                    width={48}
                                    height={48}
                                    priority
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
