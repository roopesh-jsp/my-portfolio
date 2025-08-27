"use client";
import { navLinks, secondary } from "@/data/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Playwrite_ZA } from "next/font/google";
import { RiGeminiFill } from "react-icons/ri";

const playwrite = Playwrite_ZA({ subsets: ["latin"] });

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // ${ isScrolled ? "backdrop-blur-md bg-[rgba(25,25,27,0.75)] shadow-lg" : ""}
  return (
    <div
      className={`flex
  ${isScrolled ? " bg-[rgba(25,25,27,0.75)] shadow-lg" : ""}

      items-center justify-between lg:px-12 px-6 py-4 w-[100vw] sticky top-0 transition-all duration-500 ease-in-out z-20`}
    >
      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`${playwrite.className} text-xl text-stone-50`}
      >
        <Link href={"/"}>RJ</Link>
      </motion.h1>

      {/* Desktop Nav */}
      <div className="flex gap-10 items-center w-[60%] justify-between">
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((ele) => (
            <motion.div
              key={ele.label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative"
            >
              <Link
                href={ele.link}
                className="relative font-normal text-base group"
                style={{
                  color: pathname === ele.link ? secondary : "inherit",
                  fontWeight: 400,
                }}
              >
                {ele.label}
                {/* Animated underline */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] bg-[var(--secondary)]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Contact Us Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link
            href="/ai"
            className="ml-6 hidden md:flex md:items-center md:gap-2 px-6 py-2 text-sm rounded border border-solid border-white/40 font-normal transition-colors hover:bg-indigo-500 hover:text-white"
            style={{ color: "inherit", borderColor: "#ffffff66" }}
          >
            <span>Chat AI</span> <RiGeminiFill />
          </Link>
        </motion.div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden text-white"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <></> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer + Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              key="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 p-8 flex flex-col gap-6 md:hidden bg-[#19191B] z-40 shadow-xl"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-8 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={28} className="text-white" />
              </button>

              {navLinks.map((ele, i) => (
                <motion.div
                  key={ele.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Link
                    href={ele.link}
                    className="text-base font-normal transition-colors w-full text-center text-white"
                    style={{
                      color: pathname === ele.link ? secondary : "inherit",
                      fontWeight: 400,
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {ele.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Link
                  href="/ai"
                  className="mt-10 text-center px-6 py-2 flex items-center gap-2 rounded border border-solid border-[#ccc] text-sm font-normal transition-colors hover:bg-indigo-400 hover:text-white"
                  style={{ color: "inherit", borderColor: "#ccc" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Chat AI</span> <RiGeminiFill />
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
