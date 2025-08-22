import React from "react";
import Image from "next/image";

import circles from "@/assests/circles.png";
import triangles from "@/assests/triangles.png";
import zigzag from "@/assests/zigzag.png";
import plus from "@/assests/plus.png";
import PinkOrangeGradientBg from "./PinkOrangeGrad";
import HeroImage from "./HeroImage";

// bg gradient -> bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]
function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row mb-10 items-center gap-10 justify-between px-6 md:px-16 py-16  text-white">
      {/* Left Content */}
      <div className="max-w-xl space-y-6 mb-[100px] lg:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold">
          Turning Ideas into <span className="text-indigo-400">Code</span>
        </h1>
        <p className="text-gray-300 text-lg w-full leading-relaxed">
          Hi, I am <span className="font-semibold">Roopesh</span> — a Fullstack
          developer who loves building real-world projects with the MERN stack,
          Next.js, exploring AI, and creating impactful digital experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg font-medium shadow-lg">
          My Projects
        </button>
      </div>

      {/* Right Content */}
      <div className="relative lg:mt-12 md:mt-0 w-[70%]  lg:w-[45%] mt-20">
        {/* Profile Image */}
        <HeroImage />
        {/* Decorative Shapes */}
        <Image
          src={zigzag}
          alt="circles"
          className="absolute top-[-20%] left-[-20%] w-10 md:w-19 lg:left-0 opacity-80"
        />
        <Image
          src={circles}
          alt="triangles"
          className="absolute top-[-20%] right-[-20%] lg:right-[-40px] w-10 opacity-80"
        />
        <Image
          src={triangles}
          alt="zigzag"
          className="absolute bottom-[-30%] left-[-20%] lg:left-3 w-14 opacity-80"
        />
        <Image
          src={plus}
          alt="plus"
          className="absolute bottom-[-20%] rotate-2 right-[-20%] md:w-14 lg:right-[0px] w-10 opacity-80"
        />
      </div>
    </section>
  );
}

export default Hero;
