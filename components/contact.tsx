"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hook";
export default function Contact() {
  const { ref } = useSectionInview("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-20 sm:28 w-[min(100%,38rem)] text-center"
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:dngocson12@gmail.com">
          dngocson12@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col" action="">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Your email"
          required
        />
        <textarea
          className="h-52 my-3 px-4 borderBlack rounded-lg p-4"
          placeholder="Your message"
        />
        <button
          className="h-[3rem] focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-[102%] group w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane
            className={`text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1`}
          />
        </button>
      </form>
    </motion.section>
  );
}
