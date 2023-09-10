"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 dark:bg-gray-950 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl active:scale-105 transition-all rounded-full flex items-center hover:scale-[1.15] justify-center border border-opacity-40 border-white"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
