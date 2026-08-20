import React from "react";
import { Link } from "react-router-dom";

// If your project already has these, keep these imports and delete the
// fallback components further below.
// import Header from "../components/Header";
// import Footer from "../components/Footer";

/**
 * NotFound (404) page for GTU Study Desk.
 *
 * Drop this file into: src/pages/NotFound.jsx
 * (adjust the import paths for Header/Footer to match your project structure)
 *
 * Uses only Tailwind utility classes so it inherits your existing theme
 * (blue/primary gradient, rounded-xl cards, shadow-sm, etc.). If your
 * tailwind.config.js already defines a `primary` color, this component
 * will automatically pick it up via the `primary` / `primary-dark` classes.
 * If it doesn't, swap `primary` below for your existing blue, e.g. `blue-600`.
 */

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Reuse your existing Header component */}
      {/* <Header /> */}

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Illustration */}
          <NotFoundIllustration className="mb-8 h-48 w-48 sm:h-56 sm:w-56" />

          {/* Big 404 */}
          <h1 className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-7xl font-extrabold leading-none tracking-tight text-transparent sm:text-8xl md:text-9xl">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg">
            Oops! The page you're looking for doesn't exist or may have been
            moved.
          </p>

          {/* Actions */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              to="#gtu-study-desk"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-md sm:text-base"
            >
              Back to Home
            </Link>

            <Link
              to="/gtu-study-desk/study-materials"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/5 sm:text-base"
            >
              Study Materials
            </Link>
          </div>
        </div>
      </main>

      {/* Reuse your existing Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

/**
 * Minimal, professional educational/tech illustration:
 * a study desk with a laptop showing a "broken page" icon, a stack of
 * books, and a notes card — built entirely from CSS-var-friendly Tailwind
 * gradient/blue tones so it matches the rest of the site.
 */
const NotFoundIllustration = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 240"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="ns-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="ns-blue-soft" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#DBEAFE" />
        <stop offset="100%" stopColor="#BFDBFE" />
      </linearGradient>
    </defs>

    {/* Soft background circle */}
    <circle cx="120" cy="120" r="110" fill="url(#ns-blue-soft)" opacity="0.5" />

    {/* Desk surface */}
    <rect x="30" y="168" width="180" height="10" rx="3" fill="#93C5FD" />

    {/* Laptop base */}
    <rect x="80" y="150" width="80" height="18" rx="3" fill="#1E3A8A" />
    {/* Laptop screen */}
    <rect
      x="86"
      y="90"
      width="68"
      height="60"
      rx="4"
      fill="url(#ns-blue)"
    />
    <rect x="92" y="96" width="56" height="42" rx="2" fill="#FFFFFF" />

    {/* Broken / empty webpage icon inside screen */}
    <path
      d="M108 106 L120 118 M120 106 L108 118"
      stroke="#1D4ED8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect x="98" y="126" width="44" height="4" rx="2" fill="#BFDBFE" />
    <rect x="98" y="133" width="30" height="4" rx="2" fill="#DBEAFE" />

    {/* Books stack */}
    <rect x="30" y="150" width="38" height="9" rx="2" fill="url(#ns-blue)" />
    <rect x="34" y="141" width="34" height="9" rx="2" fill="#60A5FA" />
    <rect x="30" y="132" width="30" height="9" rx="2" fill="#1D4ED8" />

    {/* Notes card */}
    <rect
      x="168"
      y="120"
      width="42"
      height="34"
      rx="3"
      fill="#FFFFFF"
      stroke="#93C5FD"
      strokeWidth="2"
    />
    <rect x="174" y="128" width="30" height="3" rx="1.5" fill="#93C5FD" />
    <rect x="174" y="135" width="24" height="3" rx="1.5" fill="#BFDBFE" />
    <rect x="174" y="142" width="18" height="3" rx="1.5" fill="#BFDBFE" />

    {/* Pencil */}
    <rect
      x="196"
      y="150"
      width="26"
      height="6"
      rx="3"
      transform="rotate(45 196 150)"
      fill="#1D4ED8"
    />
  </svg>
);

export default NotFound;
    