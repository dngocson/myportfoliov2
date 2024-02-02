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
    date: "March 2020 - August 2021",
  },
  {
    title: "Front-end Engineer",
    location: "Azbil Viet Nam",
    description:
      "Thanks to the support and opportunities provided by my department, I have been able to dedicate my efforts towards becoming a front-end web developer, specializing in ReactJs and NextJs",
    icon: React.createElement(FaReact),
    date: "August 2021 - June 2023",
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
    title: "Project and Workload Management Application",
    desciption: [
      "In today’s fast-paced business environment, effective project and workload management is crucial. Recognizing this need, we developed an internal tool that revolutionizes the way to manage projects and employee workloads",
      "Project and Workload Management Application is an internal tool designed to streamline project management and employee workload registration. Built with React, Redux, React-Hook-Form, and Rechart, it provides real-time visibility into projects and workloads, promoting efficiency and productivity within teams.",
    ],
  },
  {
    id: 2,
    title: "Azbil HomePage",
    desciption: [
      "In today’s fast-paced business environment, effective project and workload management is crucial. Recognizing this need, we developed an internal tool that revolutionizes the way to manage projects and employee workloads",
      "Project and Workload Management Application is an internal tool designed to streamline project management and employee workload registration. Built with React, Redux, React-Hook-Form, and Rechart, it provides real-time visibility into projects and workloads, promoting efficiency and productivity within teams.",
    ],
  },
];
