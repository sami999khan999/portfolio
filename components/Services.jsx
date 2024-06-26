import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { servidesData } from "@/lib/data";

const Services = () => {
  return (
    <section className="md:pb-16">
      <div className="container mx-auto">
        <h2
          className="section-title mb-12 xl:mb-24 text-center mx-auto"
          data-aos="fade-up"
        >
          My Services
        </h2>
        {/* gird item */}
        <div
          className="grid md:grid-cols-3 justify-center gap-y-12 md:gap-y-24 md:gap-x-8"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          {servidesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
