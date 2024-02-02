"use client";
import React from "react";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { companyProjectData } from "@/lib/data";
type TProjectProps = (typeof companyProjectData)[number];
const CompanyProject = ({ id, title, desciption }: TProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="mb-12"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      ref={ref}
    >
      <div className=" text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {desciption.map((el, i) => (
          <p key={i} className="w-ful text-balance max-w-[50%] mx-auto pt-4">
            {el}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyProject;
