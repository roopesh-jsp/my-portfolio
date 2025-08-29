"use client";
import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Experience } from "@/data/data";
import { motion } from "framer-motion";

const ExperienceLinks = () => {
  return (
    <div className="flex flex-wrap gap-10 items-start justify-center px-5 my-10">
      {Experience.map((exp, index) => (
        <motion.div
          key={index}
          className="flex w-72 h-24 rounded-xl overflow-hidden border border-[#5454D4]/40 hover:border-[#5454D4] transition-all group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href={`/experience#${index + ""}`}
            className="flex w-full h-full"
          >
            {/* Left Icon Section */}
            <div className="flex items-center justify-center w-1/4 h-full bg-[#5454D4] group-hover:bg-white transition-colors duration-200 ease-in">
              <Briefcase
                className="text-stone-200 group-hover:text-[#5454D4] transition-colors"
                size={26}
              />
            </div>

            {/* Right Text Section */}
            <div className="flex flex-col gap-1 justify-center px-4 w-3/4">
              <p className="text-stone-50 text-md font-medium group-hover:text-indigo-400 leading-tight transition-colors duration-200 ease-in">
                {exp.role}
              </p>
              <p className="text-xs text-stone-50/70">{exp.company}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceLinks;
