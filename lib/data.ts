import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Portfolio from "@/public/Portfolio.png";
import discord from "@/public/private-discord.png";
import innovate from "@/public/innovate-3d.png";
import tracker from "@/public/mental-tracker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Machine Learning Intern",
    location: "Pune, IN",
    description:
      "I built an entire Machine Learning model from scratch. Worked using various Python3 libraries like numpy , pandas, seaborn, matplotlib and plotly.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 – July 2023",
  },
  {
    title: "Upcoming",
    location: "",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "I worked building a fully responsive Next.js portfolio. It has a dark mode toggle and a contact form. It's hosted on Vercel.",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "Framer Motion",
      "Tailwind CSS",
      "Sanity.io",
      "Vercel",
      "Git",
    ],
    imageUrl: Portfolio,
  },
  {
    title: "Discord Clone",
    description:
      "Built a fully responsive Discord clone. It is a platform specially designed for gamers to create game rooms and servers.",
    tags: [
      "Next.js",
      "React",
      " Socket.io",
      "Prisma",
      "Tailwind CSS",
      "MySQL",
      "Git",
    ],
    imageUrl: discord,
  },
  {
    title: "AI Mental Fitness Tracker",
    description:
      "I made this project in an internship under IBM SkillBuild. This is an AI machine specifically made for Mental Fitness Tracking.",
    tags: ["Python3", "Jupyter Notebook", "Kaggle", "Git"],
    imageUrl: tracker,
  },
  {
    title: "INNOVATE 3D",
    description:
      "Built a social media website aiming 3D model creators. Used and managed Firebase for authentication and as database.",
    tags: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Blender",
      "Git",
    ],
    imageUrl: innovate,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Flutter",
  "Compose",
  "Javascript",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Java",
  "Python",
] as const;
