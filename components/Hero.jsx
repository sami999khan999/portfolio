import {
  RiArrowDownSLine,
  RiBriefcase5Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className=" h-[88vh] md:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold md-4 text-primary tracking-[4px]">
              Web Developer
            </div>

            <h1 className="h1 mb-4">Hello, my name is Munum Khan Sami</h1>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>

              <a
                href="/resume/SAMI-KHAN-MERN-Stack-Developer-Resume.pdf"
                download="Sami-Khan-Resume.pdf"
              >
                <Button variant="secondary" className="gap-x-2">
                  Resume <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mt-12"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[40%] -left-[5rem]"
              icon={<RiBriefcase5Fill />}
              endCountNum={3}
              badgeText="Years in Web Tech"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={26}
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8
              "
              icon={<RiTeamFill />}
              endCountNum={13}
              badgeText="Worked With"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
