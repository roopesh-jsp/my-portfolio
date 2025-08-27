"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; // Lucide spinner
import { FaReact } from "react-icons/fa"; // React logo

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#19191B] text-white gap-6">
      {/* Spinning Lucide Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="p-4 rounded-full bg-white/10"
      >
        <Loader2 size={40} className="text-indigo-500" />
      </motion.div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-lg tracking-wide text-stone-100"
      >
        Loading...
      </motion.p>
    </div>
  );
}
