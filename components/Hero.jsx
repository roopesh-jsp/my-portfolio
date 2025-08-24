import React from "react";
import Image from "next/image";

import circles from "@/assests/circles.png";
import triangles from "@/assests/triangles.png";
import zigzag from "@/assests/zigzag.png";
import plus from "@/assests/plus.png";
import PinkOrangeGradientBg from "./PinkOrangeGrad";
import HeroImage from "./HeroImage";
import Link from "next/link";
import { socialLinks } from "@/data/constants";

// bg gradient -> bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]
function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row mb-10 lg:mt-10 items-center gap-10 justify-between px-6 md:px-16 py-16  text-white ">
      {/* Left Content */}
      <div className="max-w-xl space-y-6 mb-[20px] lg:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold">
          Turning Ideas into <span className="text-indigo-400">Code</span>
        </h1>
        <p className="text-gray-300 text-lg w-full leading-relaxed">
          Hi, I am{" "}
          <span className="font-bold text-indigo-400">
            Roopesh Kumar Jonnakuti
          </span>{" "}
          — a Fullstack developer who loves building real-world projects with
          the MERN stack, Next.js, exploring AI, and creating impactful digital
          experiences.
        </p>
        <div className="flex flex-col w-fit  gap-5">
          <div className="flex gap-5 items-center">
            <button className="mt-2 lg:mt-6 px-6 py-3 cursor-pointer bg-indigo-500 hover:bg-indigo-600 transition rounded-lg font-medium shadow-lg">
              <Link href={"/projects"}>My Projects</Link>
            </button>
            <button className="mt-2 lg:mt-6 px-6 py-3 cursor-pointer bg-stone-100 hover:bg-stone-300 text-black transition rounded-lg font-medium shadow-lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
          </div>
          <div className="flex gap-5 text-xl ml-1 ">
            {socialLinks.slice(0, 3).map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-stone-300 transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative lg:mt-12 md:mt-0 w-[70%]  lg:w-[45%] mt-20 ">
        {/* Profile Image */}
        <HeroImage />
        {/* Decorative Shapes */}
        <Image
          src={zigzag}
          alt="circles"
          className="absolute top-[-20%] left-[-20%] w-10 md:w-19 lg:left-0 opacity-60"
        />
        <Image
          src={circles}
          alt="triangles"
          className="absolute top-[-20%] right-[-20%] lg:right-[-40px] w-10 opacity-60"
        />
        <Image
          src={triangles}
          alt="zigzag"
          className="absolute bottom-[-30%] left-[-20%] lg:left-3 w-14 opacity-60"
        />
        <Image
          src={plus}
          alt="plus"
          className="absolute bottom-[-20%] rotate-2 right-[-20%] md:w-14 lg:right-[0px] w-10 opacity-60"
        />
      </div>
    </section>
  );
}

export default Hero;
