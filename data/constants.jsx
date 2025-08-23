import { Home, Contact, File, Mail } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/roopesh-jsp",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rupesh13/",
    icon: <FaLinkedin />,
  },
  { name: "Mail", href: "mailto:rupzkumar5@gmail.com", icon: <FaEnvelope /> },
];
