import React from "react";

function Semester8() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-8">
      
      {/* Semester 8 Information */}
      <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-1">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-7">
          Semester 8 - Internship / Project
        </h1>

        <div className="text-blue-950 text-base leading-7">
          <p className="mb-1">
            Semester 8 of GTU Computer Engineering is fully dedicated to the{" "}
            <strong>Internship or Final Year Project.</strong>
          </p>

          <p className="mb-1">
            There are no regular academic subjects, exams, or study materials
            in this semester.
          </p>

          <p className="mb-1">Students are expected to focus on:</p>

          <ul className="list-disc pl-10 space-y-1 mb-3">
            <li>
              Completing a meaningful{" "}
              <strong>industry internship</strong> or developing a{" "}
              <strong>final year project</strong>
            </li>

            <li>
              Preparing <strong>project reports</strong> and attending the{" "}
              <strong>viva</strong>
            </li>

            <li>
              Learning and applying technical &amp; soft skills gained
              throughout previous semesters
            </li>
          </ul>

          <p>
            You can use the resources from earlier semesters and external
            platforms to build an impressive project.
          </p>
        </div>
      </section>

      {/* Congratulations Section */}
      <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-7">
          Congratulations on Reaching Semester 8!
        </h2>

        <div className="text-blue-950 text-base leading-7">
          <p className="mb-1">
            You’ve come a long way — from the very first semester to this final
            stage of your academic journey.
          </p>

          <p className="mb-1">
            Semester 8 marks the beginning of your transition from a student to
            a professional. It's time to apply your knowledge, showcase your
            skills, and build something you can be proud of.
          </p>

          <p className="font-bold text-gray-900">
            Best of luck for your project, viva, and future career ahead!
          </p>

          <p className="italic text-blue-600 mt-1">
            “The future belongs to those who believe in the beauty of their
            dreams.”
          </p>
        </div>
      </section>

    </div>
  );
}

export default Semester8;