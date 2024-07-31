"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hook";
export default function About() {
  const { ref } = useSectionInview("About");
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 scroll-mt-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-balance">
        For the past year, I have been working as a front-end web developer
        specializing in ReactJS. This role has allowed me to delve into
        React&apos;s core features and work extensively with its ecosystem. I
        have a good grasp of Git, am familiar with Git flow and Git conventions,
        and have experience with the Scrum and Agile frameworks. I am proficient
        in English and can effectively communicate in the language, whether it’s
        writing detailed reports, participating in discussions, or giving
        presentations.
      </p>
      <p className="mb-3 text-balance">
        The power of technology and its endless possibilities have always
        fascinated me. My passion for web development drives me to continually
        learn and enhance my skills. I am motivated by my desire to create
        innovative and impactful solutions.
      </p>
      <p className="text-balance">
        As I embark on this exciting journey, I am confident that my experience,
        coupled with my determination and passion for web development, will pave
        the way for my success.
      </p>
    </motion.section>
  );
}
