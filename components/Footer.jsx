import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary duration-200"
          />

          <div className="text-muted-foreground">
            Copuright &copy; Sami Khan. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
