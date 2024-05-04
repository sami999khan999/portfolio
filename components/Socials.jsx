"use client";

import Link from "next/link";

import { icons } from "@/lib/data";

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div
      className={`${containerStyles}`}
      data-aos="fade-right"
      data-aos-delay={400}
    >
      {icons.map((icon) => {
        return (
          <Link href={icon.path}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
