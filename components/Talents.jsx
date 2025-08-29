"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { talents } from "@/data/data";
import { useIsMobile } from "@/hooks/useIsMobile";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Talents() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
        My <span className="text-indigo-400">Superpowers</span>
      </h2>

      {/* ✅ Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20">
        {talents.map((talent, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-transparent transition-all duration-300 ease-in-out"
          >
            <div
              className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${talent.bg}`}
            >
              <Image
                src={talent.icon}
                width={35}
                height={35}
                alt={talent.title}
                className="w-8"
              />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${nunito.className}`}>
              {talent.title}
            </h3>
            <p
              className={`text-gray-400 text-md font-extralight ${nunito.className}`}
            >
              {talent.text}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Mobile Accordion */}
      <div className="block md:hidden max-w-lg mx-auto px-6 space-y-4">
        {talents.map((talent, index) => (
          <div
            key={index}
            className="p-2 rounded-2xl border border-transparent transition-all duration-300 ease-in-out mobile-shadow"
            style={{
              boxShadow: `0 3px 7px -1px ${talent.shadow}`,
            }}
          >
            {/* Accordion Header */}
            <button
              className="w-full flex items-center justify-between p-4 focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${talent.bg}`}
                >
                  <Image
                    src={talent.icon}
                    width={28}
                    height={28}
                    alt={talent.title}
                    className="w-6"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${nunito.className}`}>
                  {talent.title}
                </h3>
              </div>
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gray-400" size={20} />
              </motion.div>
            </button>

            {/* Accordion Content */}
            <motion.div
              initial={false}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p
                className={`text-gray-400 text-sm p-4 pt-0 text-left ${nunito.className}`}
              >
                {talent.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
