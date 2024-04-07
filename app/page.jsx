import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-56">
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
