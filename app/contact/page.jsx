"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { socialLinks } from "@/data/constants";

function ContactPg() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isValidPhone = (value) => /^[6-9]\d{9}$/.test(value); // Indian phone numbers

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const { name, contact, message } = formData;

    // 🔴 Empty field check
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError("All fields are required");
      return;
    }

    const emailValid = isValidEmail(contact);
    const phoneValid = isValidPhone(contact);

    if (!emailValid && !phoneValid) {
      setError("Please enter a valid Email or Phone number");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          contactType: emailValid ? "email" : "phone",
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSuccess("Message sent successfully 🚀");
      setFormData({ name: "", contact: "", message: "" });
    } catch (err) {
      setError(err.message || "Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-3 text-center"
      >
        Get In <span className="text-[#5454D4]">Touch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-base sm:text-lg text-gray-300 mb-8 text-center max-w-xl px-2"
      >
        Whether you want to collaborate on a project, discuss opportunities, or
        just say hello — I’d love to hear from you.
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl items-center justify-between">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full max-w-lg bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl shadow-md shadow-indigo-400/10 p-6 sm:p-8"
        >
          <div className="mb-4">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              disabled={loading}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-[#5454D4]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">contact - email/phone</label>
            <input
              type="text"
              name="contact"
              disabled={loading}
              placeholder="Your email/phone"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-[#5454D4]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={4}
              disabled={loading}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-[#5454D4]"
            ></textarea>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-lg transition-colors
    ${
      loading
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-[#5454D4] hover:bg-[#4040B3]"
    }`}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={18} />}
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col gap-4 mt-6 lg:mt-10 w-full max-w-md px-2"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-1 px-5 py-3 rounded-lg border border-gray-600 bg-transparent text-gray-300 hover:border-[#5454D4] hover:text-[#5454D4] transition-colors"
            >
              {/* Top row: icon + name */}
              <div className="flex items-center gap-3">
                {link.icon}
                <span className="font-medium text-sm sm:text-base">
                  {link.name}
                </span>
              </div>

              {/* Bottom row: actual link */}
              <span className="text-xs sm:text-sm text-gray-400 hover:text-[#5454D4] break-all">
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
