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
      <p className="mb-3">
        For the past few years, I’ve been working as a system engineer for a
        Japanese automation company. However, I’ve always had a passion for web
        development. Recently, I decided to follow my heart and make a career
        change to pursue my dream of becoming a web developer.
      </p>
      <p className="mb-3">
        I have always been fascinated by the power of technology and the endless
        possibilities it offers. As a self-taught web developer, I am constantly
        learning and expanding my skills, driven by my desire to create
        innovative and impactful solutions.
      </p>
      <p>
        I am excited to embark on this new journey and am confident that my
        experience as a system engineer, combined with my determination and
        passion for web development, will enable me to succeed in this new
        field.
      </p>
    </motion.section>
  );
}
