"use client";
import { motion } from "framer-motion";

const GradientBoxes = () => {
  return (
    // Add this wrapper with a 'relative' class
    <div className="relative w-full h-full">
      {/* Top-Left Gradient Box */}
      <motion.div
        className="absolute z-0 w-[460px] h-[1200px]"
        style={{
          background: "linear-gradient(54deg, #5454D4 42%, #5454D4 100%)",
          transform: "rotate(-54deg) translate(-50%, -50%)",
          opacity: 0.07,
          borderRadius: "233.5px",
          left: "30%",
          top: "0px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />

      {/* Top-Right Gradient Box */}
      <motion.div
        className="absolute z-0 w-[460px] h-[1200px]"
        style={{
          background: "linear-gradient(54deg, #5454D4 42%, #5454D4 100%)",
          transform: "rotate(54deg) translate(50%, -50%)",
          opacity: 0.07,
          borderRadius: "233.5px",
          right: "0%",
          top: "-25%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default GradientBoxes;
