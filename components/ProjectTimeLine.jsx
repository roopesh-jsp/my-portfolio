"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/data";
import { Nunito_Sans } from "next/font/google";
import { MdAdsClick } from "react-icons/md";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick the weights you need
});

const ProjectTimeline = () => {
  return (
    <div
      className={`w-full flex flex-col items-center py-10 ${nunito.className}`}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-white tracking-wide">
        <span className="text-indigo-400">Project</span> Timeline
      </h2>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full opacity-50 bg-[#5454D4]" />

        <div className="flex flex-col space-y-16">
          {projectsData.map((item, index) => {
            const isLeft = index % 2 === 0;

            // Local state per card
            const [rotate, setRotate] = useState({ x: 0, y: 0 });

            // Handle mouse movement for 3D tilt
            const handleMouseMove = (e) => {
              const card = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - card.left;
              const y = e.clientY - card.top;
              const centerX = card.width / 2;
              const centerY = card.height / 2;

              // Flip rotateX so top tilts inward, bottom tilts outward
              const rotateX = -((y - centerY) / centerY) * 10;
              const rotateY = ((x - centerX) / centerX) * 10;

              setRotate({ x: rotateX, y: rotateY });
            };

            const resetTilt = () => setRotate({ x: 0, y: 0 });

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center w-full px-5 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-stone-300 border-4 border-[#5454D4]" />

                {/* Card */}
                <Link href={`/projects/${index}`} className="w-full sm:w-5/12 ">
                  <motion.div
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: 1000,
                    }}
                    animate={{
                      rotateX: rotate.x,
                      rotateY: rotate.y,
                      scale: 1.05, // slight zoom on hover
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTilt}
                    className={`w-full bg-[#19191B]/50 relative backdrop-blur-2xl rounded-lg pb-5 shadow-md/40 shadow-[#5454D4] overflow-hidden cursor-pointer ${
                      isLeft ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="absolute bottom-3 right-4 text-xs flex gap-1 items-center opacity-50">
                      <MdAdsClick /> <span>Click</span>
                    </div>
                    {/* Image */}
                    <div className="w-full h-48 bg-gray-800 ">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 text-white relative ">
                      <p className="text-sm text-[#5454D4] font-semibold">
                        {item.date}
                      </p>
                      <h3 className="text-xl font-bold line-clamp-1z">
                        {item.title}
                      </h3>
                      <p className="text-md font-semibold">{item.company}</p>
                      <p className="text-sm mt-2 opacity-80 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
