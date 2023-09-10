"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import avatar1 from "@/public/png.png";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInview } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Intro() {
  const { ref } = useSectionInview("Home", 0.5);
  const { setActiveSection, activeSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-16 max-w-[50rem] scroll-mt-[100rem] "
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={avatar1}
              alt="Do Ngoc Son"
              width={192}
              height={192}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
      >
        Hello, my name is <span className="font-bold">Do Ngoc Son.</span> I'm a{" "}
        <span className="font-bold">self-taught</span> web developer with{" "}
        <span className="font-bold">a passion </span> for web development, and{" "}
        <span className="font-bold"> a love </span>for learning new things. I am
        currently focused on developing responsive{" "}
        <span className="font-bold"> front-end </span> web applications while
        also expanding my knowledge of{" "}
        <span className="font-bold"> back-end </span> technologies so that I can
        create more <span className="underline"> complete</span> and{" "}
        <span className="underline"> robust </span>
        applications.
      </motion.h1>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href={"#contact"}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="bg-gray-900 text-white group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-[102%] transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="bg-white px-7 py-3 dark:bg-white/10 dark:text-white/60 borderBlack group flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105  active:scale-[102%] transition"
        >
          My Cv
          <AiOutlineDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://github.com/dngocson"
          target="blank"
          className="bg-white focus:scale-110 dark:bg-white/10 dark:text-white/60  hover:scale-110 hover:text-gray-950 active:scale-[102%] transition p-4 borderBlack flex items-center text-[1.35rem] gap-2 rounded-full text-gray-700"
        >
          <FaGithubSquare />
        </a>

        <a
          href="https://www.linkedin.com/in/ng%E1%BB%8Dc-s%C6%A1n-%C4%91%E1%BB%97-4a2457247/"
          target="blank"
          className="bg-white focus:scale-110 dark:bg-white/10 dark:text-white/60  hover:scale-110 hover:text-gray-950 active:scale-[1.02] transition borderBlack p-4 flex items-center gap-2 text-[1.4rem] rounded-full text-gray-700"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
