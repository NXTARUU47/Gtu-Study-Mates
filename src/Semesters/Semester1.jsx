import React from "react";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Semester1() {
  return (
    <section className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition"
        >
          <FaArrowLeft />
          Back
        </Link>

        {/* Coming Soon Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-sm p-10 sm:p-16 text-center">

          {/* Icon */}
          <div className="mx-auto w-20 h-20 rounded-3xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-3xl">
            <FaClock />
          </div>

          {/* Title */}
          <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold text-slate-800">
            Semester 1
          </h1>

          {/* Message */}
          <p className="mt-4 text-xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
            Content Uploaded Soon
          </p>

          <p className="mt-4 max-w-xl mx-auto text-slate-500 leading-relaxed">
            Semester 1 study materials are currently being prepared.
            Syllabus, GTU papers, notes, books and other useful resources
            will be uploaded soon.
          </p>

          {/* Status */}
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-50 text-amber-600 font-semibold">
            🚧 Uploading Soon...
          </div>

        </div>
      </div>
    </section>
  );
}

export default Semester1;