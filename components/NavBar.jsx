"use client";
import { navLinks } from "@/data/constants";
import { secondary } from "@/data/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // For active link (Next.js 13+)
import GradientBackground from "./GradientBox";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // 👉 true if scrolled at least 1 full viewport
      if (scrollTop >= 150) {
        console.log("scrolled");

        setIsScrolled(true);
      } else {
        console.log("not");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex ${
        isScrolled ? "bg-[rgba(25,25,27,0.95)] " : ""
      } items-center justify-between px-8 py-4 w-[100vw] sticky top-0  z-20`}
    >
      {/* <GradientBackground /> */}
      <h1 className="text-lg font-semibold tracking-tight">Enver</h1>

      {/* Desktop Nav */}
      <div className="flex gap-10 items-center w-[60%] justify-between">
        {" "}
        <nav className="hidden  md:flex gap-8 items-center">
          {navLinks.map((ele) => (
            <Link
              key={ele.label}
              href={ele.link}
              className="transition-colors font-normal text-base"
              style={{
                color:
                  pathname === ele.link
                    ? secondary // active page
                    : "inherit",
                fontWeight: 400,
              }}
              onMouseEnter={(e) => (e.target.style.color = secondary)}
              onMouseLeave={(e) => {
                if (pathname === ele.link) return;
                e.target.style.color = "";
              }}
            >
              {ele.label}
            </Link>
          ))}
        </nav>
        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="ml-6 hidden md:flex px-6 py-2 text-sm rounded border border-solid border-white/40 font-normal transition-colors hover:bg-[var(--secondary)] hover:text-white"
          style={{
            color: "inherit",
            borderColor: "#ffffff66",
          }}
          onMouseEnter={(e) => (e.target.style.background = secondary)}
          onMouseLeave={(e) => (e.target.style.background = "")}
        >
          Chat Ai ✨
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden text-white"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <></> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="fixed top-0 right-0  h-full p-8 flex flex-col gap-6 md:hidden  bg-[#19191B] z-30"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-8 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((ele) => (
              <Link
                key={ele.label}
                href={ele.link}
                className="text-base font-normal transition-colors w-full text-center"
                style={{
                  color: pathname === ele.link ? secondary : "inherit",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => (e.target.style.color = secondary)}
                onMouseLeave={(e) => {
                  if (pathname === ele.link) return;
                  e.target.style.color = "";
                }}
                onClick={() => setMenuOpen(false)}
              >
                {ele.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-10 text-center px-6 py-2 rounded border border-solid border-[#ccc] text-sm font-normal transition-colors hover:bg-[var(--secondary)] hover:text-white"
              style={{
                color: "inherit",
                borderColor: "#ccc",
              }}
              onMouseEnter={(e) => (e.target.style.background = secondary)}
              onMouseLeave={(e) => (e.target.style.background = "")}
              onClick={() => setMenuOpen(false)}
            >
              Chat Ai ✨
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
