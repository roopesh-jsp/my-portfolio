"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navLinks, socialLinks } from "@/data/constants";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  const hideFooterRoutes = ["/ai"];

  const shouldHideFooter = hideFooterRoutes.includes(pathname);
  return (
    <div>
      {shouldHideFooter ? null : (
        <>
          <footer className="w-full bg-[#19191B]  border-gray-800 text-gray-300 py-6 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
              {/* Left - Navigation Links */}
              <div className="flex gap-6 text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right - Social Icons */}
              <div className="flex gap-5 text-xl">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom small text */}
            <p className="text-center text-xs text-gray-500 mt-4">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default Footer;
