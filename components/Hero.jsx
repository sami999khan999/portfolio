import { RiArrowDownSLine } from "react-icons/ri";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-12 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto ">
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

              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mt-12"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light w-[500px] h-[500px]"></div>
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
