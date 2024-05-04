import Cta from "@/components/Cta";
import Form from "@/components/Form";
import { MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 pt-12 md:h-[400px] mb-6 xl:mb-24">
          <div className="felx flex-col justify-center">
            <div
              className="flex items-center gap-x-4 text-primary text-lg mb-4"
              data-aos="fade-right"
            >
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello👋
            </div>
            <h1
              className="h1 max-w-md mb-8"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              Let's Work Togather
            </h1>
            <p
              className="subtitle max-w-[400px]"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facere provident similique.
            </p>
          </div>

          <div
            className="hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"
            data-aos="fade-left"
            data-aos-delay={100}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-between mb-24 md:mb-32">
          <div className="flex flex-col gap-y-4 text-base md:text-lg md:w-2/6 max-h-fit">
            <div
              className="flex flex-col gap-2 bg-tertiary dark:bg-secondary/40 w-full rounded-sm px-6 py-5"
              data-aos="fade-right"
            >
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                You can Email Me Here
              </p>
              <div className="flex flex-row items-center gap-2">
                <div>Sami999khan999@gmail.com</div>
              </div>
            </div>
            <div
              className="flex flex-col  gap-x-8 bg-tertiary dark:bg-secondary/40 w-full rounded-sm px-6 py-5"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Location
              </p>
              <div className="flex flex-row items-center gap-2">
                <div>Tangail, Dhaka</div>
              </div>
            </div>
            <div
              className="flex flex-col gap-x-8 bg-tertiary dark:bg-secondary/40 w-full rounded-sm px-6 py-5"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Give Me a Call
              </p>
              <div className="flex flex-row items-center gap-2">
                <div>01780277493</div>
              </div>
            </div>
          </div>

          <Form />
        </div>
      </div>

      <Cta />
    </section>
  );
};

export default Contact;
