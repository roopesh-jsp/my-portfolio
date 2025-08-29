"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { Experience } from "@/data/data";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#19191B] py-12 px-6 text-stone-50">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        My <span className="text-[#5454D4]">Experience</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {Experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            id={index + ""}
            className="scroll-mt-[200px] bg-[#1d1d1f] p-6 md:p-8 rounded-2xl border border-[#5454D4]/20 shadow-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(84, 84, 212, 0.4)",
            }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between md:mb-4 mb-2">
              <div className="flex items-center gap-3">
                <Briefcase className="text-[#5454D4]" size={26} />
                <h2 className="text-xl font-semibold">
                  {exp.role} –{" "}
                  <span className="text-indigo-400">{exp.company}</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FaCalendarAlt className="text-[#5454D4]" />
                <span>{exp.duration}</span>
              </div>
            </div>
            {/* Location + Timeline */}
            <p className="text-sm opacity-90 mb-4">
              {exp.location} • {exp.timeline}
            </p>

            {/* Details */}
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
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
