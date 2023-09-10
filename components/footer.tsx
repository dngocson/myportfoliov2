import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">&copy; Do Ngoc Son,</small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        <span>
          built with React & Next.js (App Router & Server Actions), Typescript,
          TailwindCss, Frammer Motion, React Email & Resend, Vercel hosting.
        </span>
      </p>
    </footer>
  );
}
