"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { socialLinks } from "@/data/constants";

function ContactPg() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // reset form (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-transparent text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-3"
      >
        Get In <span className="text-[#5454D4]">Touch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-300 mb-8 text-center max-w-xl"
      >
        Whether you want to collaborate on a project, discuss opportunities, or
        just say hello — I’d love to hear from you.
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-10 px-10 w-[80%] mx-auto items-center justify-between">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full max-w-lg bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl shadow-md shadow-indigo-400/10 p-8"
        >
          <div className="mb-4">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-[#5454D4]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-[#5454D4]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-[#5454D4]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#5454D4] hover:bg-[#4040B3] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send Message <Send size={18} />
          </button>
        </motion.form>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col gap-4 mt-10 w-full max-w-md"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3 rounded-lg border border-gray-600 bg-transparent text-gray-300 hover:border-[#5454D4] hover:text-[#5454D4] transition-colors"
            >
              {/* Left side: Icon + Name */}
              <div className="flex items-center gap-3">
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </div>

              {/* Right side: the actual link text */}
              <span className="text-sm truncate max-w-[200px] text-gray-400 hover:text-[#5454D4]">
                {link.href.replace("https://", "").replace("mailto:", "")}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPg;
