"use client";
import React from "react";
import { useParams } from "next/navigation";
import { projectsData } from "@/data/data";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { motion } from "framer-motion";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const ProjectPage = () => {
  const { id } = useParams(); // get dynamic id from URL
  const project = projectsData[parseInt(id)];

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div
      className={`${nunito.className} w-full min-h-screen flex flex-col items-center text-white px-5 md:px-20 py-10`}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-extrabold tracking-wider mb-6 text-[#5454D4]"
      >
        {project.title}
      </motion.h1>

      {/* Date + Company */}
      <p className="text-md text-gray-300 mb-5">
        <span className="text-[#5454D4] font-semibold">{project.date}</span> ·{" "}
        {project.company}
      </p>

      {/* Image */}
      <div className="w-full md:w-3/4 lg:w-2/3 mb-8 rounded-xl overflow-hidden shadow-lg shadow-[#5454D4]/40">
        <Image
          src={project.img}
          alt={project.title}
          width={900}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg leading-relaxed mb-6 text-gray-200"
      >
        {project.description}
      </motion.p>

      {/* Tech Stack */}
      {project.techStack && (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Tech Stack:</h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#19191B]/60 backdrop-blur-md border border-[#5454D4] rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-6 mt-8">
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#5454D4] hover:bg-[#3f3fa8] rounded-lg text-white font-semibold transition"
          >
            Source Code
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
