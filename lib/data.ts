import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project6 from "@/public/project6.webp";
import project1 from "@/public/project1.webp";
import project4 from "@/public/project4.webp";
import project2 from "@/public/project2.webp";

type TExperience = {
  title: string;
  location: string;
  description: string;
  icon: JSX.Element;
  date: string;
  position?: string; // This property is now optional
};

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: TExperience[] = [
  {
    title: "HCM International University / IU-VNU",
    location: "Automation Control",
    description:
      "I graduated from HCM International University in 2020 with a degree in Automation Control.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2020",
  },
  {
    title: "Instrumentation Engineer",
    location: "Azbil Viet Nam",
    description:
      "At Azbil Vietnam, I acquired the skills to work with various automation systems, conduct comprehensive testing, and manage documentation.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2020 - December 2022",
  },
  {
    title: "FPT Academy",
    location: "React course",
    description:
      "I took the Front-end Web Development course at FPT Academy. In this course, I learned the basics of ReactJs, NextJs, and other web development technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2023 - April 2024",
  },
  {
    title: "Front-end Developer",
    location: "FPT Software",
    description:
      "I am currently working as a front-end developer at FPT Software. I am responsible for developing and maintaining the user interface of web applications.",
    icon: React.createElement(FaReact),
    date: "April 2024 - Now",
  },
];

export const projectsData = [
  {
    title: "TopOne milktea",
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
    title: "TopOne milktea - Back-end",
    description:
      "Key features include JWT authentication and verification, image upload, CRUD operations for Users and Administrators.",
    tags: ["Nodejs", "Express", "Typescript", "MongoDb", "Cloudinary"],
    imageUrl: project6,
    sourceUrl: "https://github.com/dngocson/trasuatoponev2-backend",
    deployUrl:
      "https://documenter.getpostman.com/view/29306286/2s9YeD9tUB#ea11ee04-40f1-4736-ac61-104884525eff",
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
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "Nextjs",
  "Tailwind",
  "Redux",
  "React Query",
  "React-hook-form",
  "Framer Motion",
  "NodeJs",
  "MongoDB",
  "MySQL",
  "Git",
] as const;

export const companyProjectData = [
  {
    id: 1,
    title: "Impacto",
    desciption: [
      "Designging a website that provides assessment solutions for a company's Sustainable Development Goals (SDGs) involves detailing the structure, content and design element.",
      "My responsibilities : Creating highly responsive UI components using React, managing form handling and validation, executing data visualization, collaborating with the back-end team for RESTful API integration, and ensuring the quality of the UI.",
      "Technologies: Nextjs, Mantine, Typescript, and Rechart, TailwindCss, ReactQuery, Axios",
    ],
  },
];
