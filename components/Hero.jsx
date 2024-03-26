import { RiArrowDownSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12 xl:py-12 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto ">
        <div className="flex justify-between gap-x-8  ">
          <div>text</div>
          <div>image</div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
