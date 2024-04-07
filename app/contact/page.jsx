import Form from "@/components/Form";
import { MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen mb-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 pt-12 md:h-[400px] mb-6 xl:mb-24">
          <div className="felx flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Togather</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              facere provident similique.
            </p>
          </div>

          <div className="hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        <div className="grid md:grid-cols-2 mb-24 md:mb-32">
          <div className="flex flex-col gap-y-4 md:gap14 mb-12 xl:mb-24 text-base md:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>Sami999khan999@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>Tangail, Dhaka</div>
            </div>
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>01780277493</div>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
