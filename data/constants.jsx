import { Home, Contact, File, Mail, Computer } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export const bg = "#19191B";
export const secondary = "#5454D4";

// nav links
export const navLinks = [
  {
    label: "Home",
    link: "/",
    icon: Home,
  },
  {
    label: "Contact",
    link: "/contact",
    icon: Contact,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: File,
  },
  {
    label: "Experience",
    link: "/experience",
    icon: Computer,
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/roopesh-jsp",
    icon: <FaGithub />,
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/roopeshrj",
    icon: <SiLeetcode />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rupesh13",
    icon: <FaLinkedin />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917036311198",
    icons: <FaWhatsapp />,
  },
  { name: "Mail", href: "mailto:rupzkumar5@gmail.com", icon: <FaEnvelope /> },
];
