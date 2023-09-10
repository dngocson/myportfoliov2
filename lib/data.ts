import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project6 from "@/public/project6.webp";
import project1 from "@/public/project1.webp";
import project4 from "@/public/project4.webp";
import project2 from "@/public/project2.webp";

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
    title: "HCM International University / IU-VNU",
    location: "Automation Control",
    description:
      "I graduated from HCM International University in 2020 with a degree in Automation Control.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Instrumentation Engineer",
    location: "Azbil Viet Nam",
    description:
      "At Azbil Vietnam, I acquired the skills to work with various automation systems, conduct comprehensive testing, and manage documentation related to these systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - April 2023",
  },
  {
    title: "Front-end Developer",
    location: "Self-taught",
    description:
      "After resigning from my previous role, I have dedicated my efforts towards becoming a front-end web developer, with a particular focus on ReactJs and NextJs.",
    icon: React.createElement(FaReact),
    date: "April 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Trà sữa Top One",
    description:
      "This is the website of a milk tea cafeteria, built with ReactJs, Tailwind CSS, and Supabase database.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Redux",
      "React Query",
      "React Hook Form",
      "Supabase",
    ],
    imageUrl: project6,
    sourceUrl: "https://github.com/dngocson/toponeCoffee",
    deployUrl: "https://trasuatopone.online/",
  },
  {
    title: "My Shop",
    description:
      "An e-commerce website, built with ReactJs, Tailwind CSS. Key features include  a dark mode with responsive design, user registration and authentication.",
    tags: ["React", "Tailwind", "Redux", "Firebase", "Leaflet library"],
    imageUrl: project1,
    sourceUrl: "https://github.com/dngocson/ProjectReact-1",
    deployUrl: "https://reactjs-project-450f5.web.app/",
  },
  {
    title: "Lucy Pet Care",
    description:
      "A simple landing page for a pet care center, build with ReactJs and Scss. It features a responsive design that looks great on any device.",
    tags: ["React", "Javascript", "Scss"],
    imageUrl: project4,
    sourceUrl: "https://github.com/dngocson/ProjectHTML2",
    deployUrl: "https://projecthtml2.netlify.app/",
  },
  {
    title: "Viet Nam Travel",
    description:
      "A simple landing page for a travel agent company, build with Html and Scss. It features a responsive design that looks great on any device.",
    tags: ["Html", "Javascript", "Scss", "leaftlet library"],
    imageUrl: project2,
    sourceUrl: "https://github.com/dngocson/ProjectHTML",
    deployUrl: "https://react-41f63.web.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "React Query",
  "Framer Motion",
  "Git",
] as const;
