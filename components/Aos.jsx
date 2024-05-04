"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  return null;
};
