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

export const talents = [
  {
    icon: dev1,
    color: "bg-[rgba(84,84,212,0.1)]",
    title: "Frontend development",
    text: "Skilled in building responsive and interactive user interfaces using React, Next.js, and modern frontend technologies.",
  },
  {
    icon: dev2,
    title: "Backend development",
    color: "bg-[rgba(254,220,90,0.1)]",

    text: "Experienced in creating scalable and secure RESTful APIs with Node.js, Express, and authentication mechanisms.",
  },
  {
    icon: ai,
    title: "LangChain Integration",

    color: "bg-[rgba(240,64,55,0.1)]",

    text: "Hands-on with building Generative AI applications using LangChain, OpenAI APIs, and prompt engineering.",
  },
  {
    icon: tree,
    title: "DSA",
    color: "bg-[rgba(254,220,90,0.1)]",

    text: "Strong grasp of Data Structures and Algorithms with daily problem-solving practice to write optimized solutions.",
  },
  {
    icon: layers,
    color: "bg-[rgba(240,64,55,0.1)]",

    title: "Core Subjects",
    text: "Good knowledge of Computer Science fundamentals including OOPS, DBMS, OS, and Computer Networks.",
  },

  {
    icon: db,

    color: "bg-[rgba(84,84,212,0.1)]",

    title: "Databases",
    text: "Proficient in working with both SQL and NoSQL databases such as MySQL and MongoDB.",
  },
];

export const projectsData = [
  {
    date: "May 2025",
    title: "AI Chatbot with LangChain",
    company: "AI/ML Project",
    description:
      "Created an AI-powered chatbot using LangChain, Hugging Face, and FastAPI to handle natural conversations and knowledge queries.",
    img: p1,
  },
  {
    date: "Jul 2025",
    title: "E-Commerce Platform",
    company: "Personal Project",
    description:
      "Built a full-stack MERN e-commerce platform with Razorpay integration for secure payments and an admin dashboard for order management.",
    img: p1, // Replace with project image
    sourceCode: "https://github.com/yourusername/ecommerce",
    liveDemo: "https://ecommerce-demo.vercel.app",
    techStack: ["React", "Node.js", "MongoDB", "Razorpay"],
  },
  {
    date: "Jul 2025",
    title: "Doctor Appointment",
    company: "MERN project",
    description:
      "A doctor appointment booking application with three interfaces: users, doctors, and admin. Users can book and cancel appointments, while doctors can view and manage their scheduled appointments. The admin interface allows for adding or removing doctors and making them available for bookings. Users receive email notifications regarding their bookings, and missed appointment alerts are sent if they fail to attend.",
    img: p5, // Replace with project image
    sourceCode: "https://github.com/yourusername/ecommerce",
    liveDemo: "https://ecommerce-demo.vercel.app",
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
    date: "Jul 2025",
    title: "Quiz App",
    company: "Personal Project",
    description:
      "An interactive quiz application built with React and powered by an external API for dynamic question generation. The app features a scoring system where users earn +1 for each correct answer, lose -1 for incorrect answers, and receive 0 for unattempted questions. It includes a clean home screen, a modal confirmation for quiz submission, and a detailed results page highlighting correct and wrong answers. The UI is designed to provide immediate feedback and enhance the learning experience. This project demonstrates strong skills in React state management, conditional rendering, and user interaction handling.",
    img: p4, // Replace with project image
    sourceCode: "https://github.com/yourusername/ecommerce",
    liveDemo: "https://ecommerce-demo.vercel.app",
    techStack: ["React"],
  },
  {
    date: "Nov 2024",
    title: "Strides 2k25 Event Registration Platform",
    company: "React Project",
    description:
      "A technical event registration platform built with ReactJS for Strides 2k25. The application was used by 4,000+ students to seamlessly register for multiple events, significantly reducing manual paperwork by 75% and improving the overall registration experience. The system provided a simple, responsive, and scalable solution for handling large-scale signups efficiently.",
    sourceCode: "https://github.com/roopesh-jsp/Food-order-full-stack-website",
    liveDemo: "https://food-order-app-3pw0.onrender.com/",
    techStack: ["React"],
    img: p3,
  },
];
