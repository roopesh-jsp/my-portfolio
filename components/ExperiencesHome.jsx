"use client";
import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Experience } from "@/data/data";

const ExperienceLinks = () => {
  return (
    <div className="flex flex-wrap gap-10 items-start justify-center px-5 my-10">
      {Experience.map((exp, index) => (
        <Link
          key={index}
          href={`/experience#${index + ""}`}
          className="flex w-72 h-24 rounded-xl overflow-hidden border border-[#5454D4]/40 hover:border-[#5454D4] transition-all group"
        >
          {/* Left Icon Section */}
          <div className="flex items-center justify-center w-1/4 h-full bg-white group-hover:bg-[#5454D4] transition-colors duration-200 ease-in">
            <Briefcase
              className="text-[#5454D4]  group-hover:text-stone-200 transition-colors"
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
      ))}
    </div>
  );
};

export default ExperienceLinks;
