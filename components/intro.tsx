"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import avatar1 from "@/public/png.png";
export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] ">
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
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
      >
        Hello, my name is <span className="font-bold">Do Ngoc Son.</span> I'm a{" "}
        <span className="font-bold">self-taught</span> web developer with{" "}
        <span className="font-bold">a passion </span> for web development, and{" "}
        <span className="font-bold"> a love </span>for learning new things. I
        enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
    </section>
  );
}
