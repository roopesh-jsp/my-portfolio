import dev1 from "@/assests/dev1.png";
import dev2 from "@/assests/dev2.png";
import db from "@/assests/db.png";
import ai from "@/assests/ai.png";
import tree from "@/assests/tree.png";
import layers from "@/assests/layers.png";
import p1 from "@/assests/p1.jpg";
import p2 from "@/assests/p2.png";
import p3 from "@/assests/p3.png";
import p4 from "@/assests/p4.png";
import p5 from "@/assests/p5.png";
import p6 from "@/assests/p6.png";
import p7 from "@/assests/p7.png";
import learnly from "@/assests/learnly.png";

export const talents = [
  {
    icon: dev1,
    bg: "bg-[rgba(84,84,212,0.1)]",
    shadow: "rgba(84,84,212,0.21)",
    title: "Frontend development",
    text: "Skilled in building responsive and interactive user interfaces using React, Next.js, and modern frontend technologies.",
  },
  {
    icon: dev2,
    bg: "bg-[rgba(254,220,90,0.1)]",
    shadow: "rgba(254,220,90,0.11)",
    title: "Backend development",
    text: "Experienced in creating scalable and secure RESTful APIs with Node.js, Express, and authentication mechanisms.",
  },
  {
    icon: ai,
    bg: "bg-[rgba(240,64,55,0.1)]",
    shadow: "rgba(240,64,55,0.17)",
    title: "LangChain Integration",
    text: "Hands-on with building Generative AI applications using LangChain, OpenAI APIs, and prompt engineering.",
  },
  {
    icon: tree,
    bg: "bg-[rgba(254,220,90,0.1)]",
    shadow: "rgba(254,220,90,0.11)",
    title: "DSA",
    text: "Strong grasp of Data Structures and Algorithms with daily problem-solving practice to write optimized solutions.",
  },
  {
    icon: layers,
    bg: "bg-[rgba(240,64,55,0.1)]",
    shadow: "rgba(240,64,55,0.17)",
    title: "Core Subjects",
    text: "Good knowledge of Computer Science fundamentals including OOPS, DBMS, OS, and Computer Networks.",
  },
  {
    icon: db,
    bg: "bg-[rgba(84,84,212,0.1)]",
    shadow: "rgba(84,84,212,0.21)",
    title: "Databases",
    text: "Proficient in working with both SQL and NoSQL databases such as MySQL and MongoDB.",
  },
];

export const projectsData = [
  {
    date: "Sep 2025",
    title: "Learnly",
    sourceCode: "https://github.com/roopesh-jsp/Learnly",
    liveDemo: "https://learnlyrj.vercel.app/",
    techStack: [
      "Next js",
      "Typescript",
      "Auth js",
      "Tailwind css",
      "Prisma ORM",
      "PostgreSQL",
      "Gemini",
    ],
    company: "Next js",
    img: learnly,
    description:
      "Learnly is an AI-powered full-stack application that I’ve been building for about one and a half months, with the goal of solving a common problem many of us face when starting a new technology, preparing for an exam, or studying a new subject—we often don’t know exactly what to cover, what the subtopics are, or how to structure our learning. Normally, this process involves several scattered steps like researching, listing topics, and tracking progress, which can be time-consuming and unorganized, so I wanted to bring all of these steps into one place. With Learnly, you can create roadmaps for your learning goals, track your progress, use AI-powered quizzes to test your knowledge, and even download printable worksheets for offline study. One of the most exciting features is the ability to share roadmaps—friends or classmates can clone your roadmap, and whenever you update it, the changes automatically reflect in their copy as well, making collaborative learning much easier. This feature is also highly beneficial for online tutors and instructors, who can create and share exclusive roadmaps with their students. Another advantage is flexibility, as roadmaps can be created entirely by AI, manually, or through a combination of both. In short, Learnly is designed to make structured, collaborative, and intelligent learning simple and accessible.",
  },
  {
    date: "Jul 2025",
    title: "short-notes maker",
    company: "Hugging Face",
    description:
      "Developed an AI-powered notes generator using Streamlit, LangChain, and Hugging Face. Designed for students, it creates concise, structured, and multilingual notes on any topic. Implemented dynamic prompt engineering with user-controlled tone, format, number of points, and language to ensure personalized and high-quality outputs.",

    img: p6,
    sourceCode:
      "https://github.com/roopesh-jsp/Ai-chatbot/tree/main/short-notes%20maker",
    liveDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:7339569980557971456/",
    techStack: ["Fast APi", "Hugging face", "Streamlit"],
  },
  {
    date: "Jun 2025",
    title: "E-Commerce Platform",
    company: "Freelance Project",
    description:
      "A freelance B2B project built with the MERN stack featuring OTP-based login via MSG91 and Razorpay payment integration. The system allows image uploads to a local file system, as most content is static. Includes an auto-scrolling banners feature on the homepage and a full admin panel with CRUD functionality for products and banners. Also implemented a coupon management system with two discount types: flat amount and percentage-based discounts.",

    img: p7,
    sourceCode: "https://github.com/Vardhan-IMMIDI/chipdeal",
    // liveDemo: "https://ecommerce-demo.vercel.app",
    techStack: ["React", "Node.js", "MongoDB", "Razorpay"],
  },
  {
    date: "May 2025",
    title: "Doctor Appointment",
    company: "MERN project",
    description:
      "A doctor appointment booking application with three interfaces: users, doctors, and admin. Users can book and cancel appointments, while doctors can view and manage their scheduled appointments. The admin interface allows for adding or removing doctors and making them available for bookings. Users receive email notifications regarding their bookings, and missed appointment alerts are sent if they fail to attend.",
    img: p5,
    sourceCode: "https://github.com/roopesh-jsp/doctor-appointment-node-js-",
    // liveDemo: "https://ecommerce-demo.vercel.app",
    techStack: ["React", "Node.js", "MongoDB", "Node Mailer", "Corn Jobs"],
  },
  {
    date: "Jan 2025",
    title: "MERN Food Ordering Platform",
    company: "MERN Project",
    description:
      "A fullstack food ordering platform built with the MERN stack. The application supports two types of logins: user and admin. Users can browse the menu, place orders, and track their order status, while admins have complete control to manage categories, add/edit/delete items, customize the menu, and monitor all orders in real time. Admins can also update the progress of orders. The project leverages React for the frontend, Express.js for the backend, MongoDB for data storage, and JSON Web Tokens (JWT) for secure authentication.",
    sourceCode: "https://github.com/roopesh-jsp/Food-order-full-stack-website",
    liveDemo: "https://food-order-app-3pw0.onrender.com/",
    techStack: ["React", "Node.js", "MongoDB"],
    img: p2,
  },
  {
    date: "Dec 2024",
    title: "Quiz App",
    company: "Personal Project",
    description:
      "An interactive quiz application built with React and powered by an external API for dynamic question generation. The app features a scoring system where users earn +1 for each correct answer, lose -1 for incorrect answers, and receive 0 for unattempted questions. It includes a clean home screen, a modal confirmation for quiz submission, and a detailed results page highlighting correct and wrong answers. The UI is designed to provide immediate feedback and enhance the learning experience. This project demonstrates strong skills in React state management, conditional rendering, and user interaction handling.",
    img: p4,
    sourceCode:
      "https://github.com/roopesh-jsp/reactApps/tree/main/Quiz%20testline%20assignment",
    // liveDemo: "https://ecommerce-demo.vercel.app",
    techStack: ["React"],
  },
  {
    date: "Nov 2024",
    title: "Strides 2k25 Event Registration Platform",
    company: "React Project",
    description:
      "A technical event registration platform built with ReactJS for Strides 2k25. The application was used by 4,000+ students to seamlessly register for multiple events, significantly reducing manual paperwork by 75% and improving the overall registration experience. The system provided a simple, responsive, and scalable solution for handling large-scale signups efficiently.",
    sourceCode: "https://github.com/roopesh-jsp/strides2k25",
    liveDemo: "https://eartifact.vercel.app/",
    techStack: ["React"],
    img: p3,
  },
];

export const Experience = [
  {
    company: "Bluestocks Fintech",
    role: "SDE Intern",
    location: "Remote",
    duration: "Feb 2025 – Apr 2025",
    timeline: "2 Months",
    details: [
      "Collaborated in a team of 8 to develop a fully functional IPO investment platform using React, Node.js, and Bootstrap, delivered within 1 month.",
      "Designed and implemented REST APIs in Node.js to manage dynamic data flow and optimize backend performance.",
      "Integrated JWT-based authentication for secure user access.",
      "Gained hands-on experience with stock market technologies and contributed to fintech solutions related to IPOs and investment platforms.",
    ],
  },
  {
    company: "Across The Globe",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "Jun 2025 – Present",
    timeline: "6 Months",
    details: [
      "Contributing to the development of an enterprise-level web application with a scalable architecture.",
      "Built a Chrome extension to automate the hiring process on LinkedIn and Naukri, streamlining recruitment workflows.",
      "Implemented frontend features and optimized UI components for better usability and performance.",
      "Collaborated with a cross-functional team on large-scale development workflows and feature delivery.",
    ],
  },
];
