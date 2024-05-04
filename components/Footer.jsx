import { contactDetails } from "@/lib/data";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-between">
          <div>
            <Socials
              containerStyles="flex gap-x-6"
              iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary duration-200"
            />
          </div>

          <div
            className="flex gap-6 border border-primary/20 dark:border-background p-6 rounded-xl max-sm:hidden"
            data-aos="fade-left"
            data-aos-delay={400}
          >
            {contactDetails.map((item, index) => (
              <div className="text-primary flex items-center justify-center gap-2">
                <item.icon size={20} className="dark:text-white/70" />
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-muted-foreground text-sm md:text-lg">
            Copyright ©️ {new Date().getFullYear()} Sami Khan. All rights
            resurved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
