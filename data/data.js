import dev1 from "@/assests/dev1.png";
import dev2 from "@/assests/dev2.png";
import db from "@/assests/db.png";
import ai from "@/assests/ai.png";
import tree from "@/assests/tree.png";
import layers from "@/assests/layers.png";

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
