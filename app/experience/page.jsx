"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { Experience } from "@/data/data";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#19191B] py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold  mb-10 text-center"
      >
        My <span className="text-[#5454D4]"> Experience</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {Experience.map((exp, index) => (
          <motion.div
            key={index}
            id={`${exp.company}-${exp.role}`.toLowerCase().replace(/\s+/g, "-")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className=" backdrop-blur-2xl rounded-xl  shadow-md/40 shadow-[#5454D4] p-6"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between md:mb-4 mb-2">
              <div className="flex items-center gap-3">
                <Briefcase className="text-[#5454D4]" size={26} />
                <h2 className="text-xl font-semibold text-stone-50">
                  {exp.role} –{" "}
                  <span className="text-indigo-400">{exp.company}</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-stone-50 text-sm">
                <FaCalendarAlt className="text-[#5454D4]" />
                <span>{exp.duration}</span>
              </div>
            </div>
            {/* Location + Timeline */}
            <p className="text-sm text-stone-50 mb-4 opacity-90">
              {exp.location} • {exp.timeline}
            </p>

            {/* Details */}
            <ul className="list-disc list-inside space-y-2 text-stone-50 text-sm leading-relaxed">
              {exp.details.map((detail, i) => (
                <li key={i} className="hover:text-indigo-400 transition-colors">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
