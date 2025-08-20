import React from "react";
import Image from "next/image";

import me from "@/assests/me2.png";
import circles from "@/assests/circles.png";
import triangles from "@/assests/triangles.png";
import zigzag from "@/assests/zigzag.png";
import plus from "@/assests/plus.png";

// bg gradient -> bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]
function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center gap-10 justify-between px-6 md:px-16 py-16  text-white">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Turning Ideas into <span className="text-indigo-400">Code</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I am <span className="font-semibold">Roopesh</span> — a Fullstack
          developer who loves building real-world projects with the MERN stack,
          Next.js, exploring AI, and creating impactful digital experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg font-medium shadow-lg">
          My Projects
        </button>
      </div>

      {/* Right Content */}
      <div className="relative mt-12 md:mt-0 w-[70%]  lg:w-[45%]">
        {/* Profile Image */}
        <div className="relative flex items-center justify-center">
          {/* Rotated Background Box */}
          <div className="absolute w-[300px] h-[300px] bg-[#5454D4] rounded-2xl  rotate-45 z-0">
            {/* Profile Image */}
          </div>

          {/* White Rotated Border */}
          <div className="absolute w-[320px] h-[320px] border-2 rounded-xl border-white rotate-45 z-0"></div>
          <div className="relative z-10 overflow-hidden top-[-20px]  rounded-lg">
            <Image
              src={me}
              alt="Roopesh"
              width={320}
              height={380}
              className="object-cover"
            />
          </div>
        </div>

        {/* Decorative Shapes */}
        <Image
          src={zigzag}
          alt="circles"
          className="absolute top-[-20px] left-[-40px] w-19 opacity-80"
        />
        <Image
          src={circles}
          alt="triangles"
          className="absolute top-0 right-0 w-10 opacity-80"
        />
        <Image
          src={triangles}
          alt="zigzag"
          className="absolute bottom-[-50px] left-[20px] w-14 opacity-80"
        />
        <Image
          src={plus}
          alt="plus"
          className="absolute bottom-[-30px] rotate-2 right-[-30px] w-16 opacity-80"
        />
      </div>
    </section>
  );
}

export default Hero;
