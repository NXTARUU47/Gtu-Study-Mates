import React, { useState } from "react";
import {
  FaDatabase,
  FaCode,
  FaMicrochip,
  FaDesktop,
  FaGlobe,
  FaCalculator,
  FaFileAlt,
  FaFilePdf,
  FaLightbulb,
  FaQuestionCircle,
  FaStar,
  FaChalkboard,
  FaBook,
  FaFlask,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function Semester4() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const subjects = [
    {
      id: 1,
      name: "Operating System",
      code: "3130702",
      icon: <FaCode />,
      color: "indigo",

      materials: {
        syllabus:
          "https://drive.google.com/drive/folders/1NO63wf6glr1hhx4eHUFpjvLMTpYtWPgn",
        papers:
          "https://drive.google.com/drive/folders/1V72A0dS1NvC3P6ym1HDq8E-TtaN-saQs",
        solutions:
          "https://drive.google.com/drive/folders/1qNAD8ZdcAFcuErLWt5ObhHDbomtGMYcG",
        imp: "https://drive.google.com/drive/folders/1pyzQ2KA8arBLrMlUp1hblzSxV31Bz-0S",
        impQna:
          "https://drive.google.com/drive/folders/1pyzQ2KA8arBLrMlUp1hblzSxV31Bz-0S",
        ppt: "https://drive.google.com/drive/folders/1AWap0AMh7KOUz0joMcnCBcmLKRjbJZNr",
        book: "https://drive.google.com/drive/folders/1f4o1G7XzHSO3s5laFs5WtyzMok2KtEuW",
        notes: "#",
        lab: "https://drive.google.com/drive/folders/1HY9Ci_K2hxnnvVUCgvtTAR4t_zphmS0G",
      },
    },
    {
      id: 2,
      name: "OOP-I (Java)",
      code: "3130703",
      icon: <FaDatabase />,
      color: "teal",
      materials: {
        syllabus:
          "https://drive.google.com/drive/folders/1jbf-b5JDk5Sql2P0vQxwe5vU2mIH68gz",
        papers:
          "https://drive.google.com/drive/folders/1PD_-lDJ-j1JStXi7lwgP8bQ8uGWUQhSe",
        solutions:
          "https://drive.google.com/drive/folders/1hk7G7FrRJ25WOUv8gzt26AvUuz6fSCVK",
        imp: "https://drive.google.com/drive/folders/1eCFojVbFH1uOkgWe1P1KBeUetOx6eMBE",
        impQna:
          "https://drive.google.com/drive/folders/1w75KdqKyCFdnAJ-Z-cfKnFXrVi5IU1YA",
        ppt: "https://drive.google.com/drive/folders/1_KJVuw9eKVPIQU6qC5neviEnV2OgSofN",
        book: "https://drive.google.com/drive/folders/13fI7xqApTA6XJzPe-kZg6ysdCG_Duuil",
        notes:
          "https://drive.google.com/drive/folders/1x1ydwgBVgdg9DZd2UVVh8ofqlAUA1G3a",
        lab: "https://drive.google.com/drive/folders/1qfAec0A94dyKAGkwSGwRXQM88bnNW1vE",
      },
    },
    {
      id: 3,
      name: "COA - Computer Organization & Architecture",
      code: "3130702",
      icon: <FaCode />,
      color: "indigo",

      materials: {
        youtube:
          "https://youtube.com/playlist?list=PLNiD0MJqUzyFUWvkquMNIckIrLIh4RuTf",

        syllabus:
          "https://drive.google.com/drive/folders/18Jsm7lP8Rl9J8YVBtPMnt-F_7VMWq5AY",

        papers:
          "https://drive.google.com/drive/folders/1VfmXtbYY7c0kdLkyQy7J-B7yia3hglcR",

        solutions:
          "https://drive.google.com/drive/folders/1nf0Qneo3EdNAUlNQXiRJTdHgBlt4iCoA",

        imp: "https://drive.google.com/drive/folders/1zYN4ZEyMW8Oh9hAvyzwxOwNNI-za-pJ5",

        mimp: "https://drive.google.com/drive/folders/1zYN4ZEyMW8Oh9hAvyzwxOwNNI-za-pJ5",

        ppt: "https://drive.google.com/drive/folders/1SQfEnLDkwk1kNEw5SiGo5j3ogrVZtEYC",

        book: "https://drive.google.com/drive/folders/1hIN3TWFUq4x0bDlHAQD3hjRe4MAvjFDI",

        notes:
          "https://drive.google.com/drive/folders/1EMhZoCeClm3qsdOPGnepu4jptDI2J3le",

        lab: "https://drive.google.com/drive/folders/1FT5HcqNKiSKzIA-X1UmljL_uvsAeqEr6",
      },
    },
    {
      id: 4,
      name: "DM - Discrete Mathematics",
      code: "3130703",
      icon: <FaDatabase />,
      color: "teal",

      materials: {
        syllabus:
          "https://drive.google.com/drive/folders/1b_vVWxeBa_pmJFgAQaa6I4yJXcaSSbcI",

        papers:
          "https://drive.google.com/drive/folders/1IhVJerRZInaAdRpGyN0OWFOfypyYMDKT",

        book: "https://drive.google.com/drive/folders/1jhdrCv-kXQ7UYWX2y1FztlMZloHupndf",

        notes:
          "https://drive.google.com/drive/folders/1F2F4_PegmDqb8cEVwW12f61OWWGNkM4m",
        solutions:
          "https://youtube.com/playlist?list=PLNiD0MJqUzyF3tPWHknwMGn1OTb4ba6Ji",
        imp: "#",
        mimp: "#",
        ppt: "#",
        lab: "#",
        youtube: "#",
      },
    },
    {
      id: 5,
      name: "DE 1B - Design Engineering 1B",
      code: "3130706",
      icon: <FaGlobe />,
      color: "blue",
      materials: {
        syllabus:
          "https://drive.google.com/drive/folders/1AJHp0sEq--82N2-ZXWiBi69oc8xq4y8t",
        papers: "#",
        solutions: "#",
        imp: "#",
        impQna: "#",
        ppt: "#",
        book: "#",
        notes: "#",
        lab: "#",
      },
    },
    {
      id: 6,
      name: "PEM - Principles of Economics & Management",
      code: "3130706",
      icon: <FaGlobe />,
      color: "blue",

      materials: {
        syllabus:
          "https://drive.google.com/drive/folders/1hT4j4s026tdNfTW3x3BWiFA73oh8YPIK",

        papers:
          "https://drive.google.com/drive/folders/1mBUq3kiEzl7Vj1IV2F1Jgbwdn4zJh4S9",

        solutions:
          "https://drive.google.com/drive/folders/14Drq5Bidg-YqaSlVo6UrT6J6mnRSpCCW",

        imp: "https://drive.google.com/drive/folders/1EuvO5bnYnI_bZJnVbZyN_sw4z9WokyF2",

        impQna:
          "https://drive.google.com/drive/folders/1UmGOPsbcF4fwOD9E_u14jrIRluyE2pO5",

        ppt: "https://drive.google.com/drive/folders/1CvqpJ4YGEjC8KulyBogersoAyXLBwz7C",

        book: "https://drive.google.com/drive/folders/1zuzgyuNr4ujpzzmXxaWc53wru47H-Smw",

        notes:
          "https://drive.google.com/drive/folders/1M-DSWbNEu1qNqLQTNqdtuQ9GsFHChGz8",

        lab: "https://drive.google.com/drive/folders/1zenSuZYviRs4peo-ydxuSlZcsymwhWrs",
      },
    },
  ];

  const materialTypes = [
    {
      key: "syllabus",
      title: "Syllabus",
      icon: <FaFileAlt />,
      color: "indigo",
    },

    {
      key: "papers",
      title: "GTU Papers",
      icon: <FaFilePdf />,
      color: "teal",
    },

    {
      key: "solutions",
      title: "Paper Solutions",
      icon: <FaFileAlt />,
      color: "violet",
    },

    {
      key: "imp",
      title: "IMP",
      icon: <FaLightbulb />,
      color: "amber",
    },

    {
      key: "impQna",
      title: "IMP QNA",
      icon: <FaQuestionCircle />,
      color: "blue",
    },

    {
      key: "ppt",
      title: "PPT PDFs",
      icon: <FaChalkboard />,
      color: "indigo",
    },

    {
      key: "book",
      title: "GTU Book",
      icon: <FaBook />,
      color: "teal",
    },

    {
      key: "notes",
      title: "Study Notes",
      icon: <FaBook />,
      color: "violet",
    },

    {
      key: "lab",
      title: "Lab Manual",
      icon: <FaFlask />,
      color: "amber",
    },
  ];

  const colorStyles = {
    indigo: {
      icon: "bg-indigo-100 text-indigo-600",
      border: "hover:border-indigo-200",
      button:
        "bg-indigo-50 text-indigo-600 hover:bg-indigo-500 hover:text-white",
    },

    teal: {
      icon: "bg-teal-100 text-teal-600",
      border: "hover:border-teal-200",
      button: "bg-teal-50 text-teal-600 hover:bg-teal-500 hover:text-white",
    },

    violet: {
      icon: "bg-violet-100 text-violet-600",
      border: "hover:border-violet-200",
      button:
        "bg-violet-50 text-violet-600 hover:bg-violet-500 hover:text-white",
    },

    amber: {
      icon: "bg-amber-100 text-amber-600",
      border: "hover:border-amber-200",
      button: "bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white",
    },

    blue: {
      icon: "bg-blue-100 text-blue-600",
      border: "hover:border-blue-200",
      button: "bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white",
    },

    rose: {
      icon: "bg-rose-100 text-rose-600",
      border: "hover:border-rose-200",
      button: "bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white",
    },
  };

  return (
    <section
      id="semester-4"
      className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto">
        {!selectedSubject && (
          <>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
                📘 Semester 4
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
                Semester 4
                <span className="block bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
                  Subjects
                </span>
              </h2>

              <p className="mt-5 text-slate-500 leading-relaxed">
                Select a subject to access syllabus, GTU papers, notes, books,
                important questions and other study materials.
              </p>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => {
                const styles = colorStyles[subject.color];
                return (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject)}
                    className={`group text-left bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${styles.border}`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 ${styles.icon}`}
                      >
                        {subject.icon}
                      </div>

                      <FaArrowRight className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold text-slate-800">
                      {subject.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Subject Code: {subject.code}
                    </p>
                    <div
                      className={`mt-5 inline-flex px-4 py-2 rounded-lg text-sm font-semibold transition-all ${styles.button}`}
                    >
                      View Materials
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {selectedSubject && (
          <>
            <button
              onClick={() => setSelectedSubject(null)}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition cursor-pointer"
            >
              <FaArrowLeft />
              Back to Subjects
            </button>

            {/* SUBJECT HEADER */}

            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
                📚 Semester 4
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
                {selectedSubject.name}
              </h2>

              <p className="mt-3 text-slate-500">
                Subject Code: {selectedSubject.code}
              </p>

              <p className="mt-4 text-slate-500">
                Select the resource you want to view or download.
              </p>
            </div>

            {/* MATERIAL CARDS */}

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialTypes.map((material) => {
                const styles = colorStyles[material.color];

                // Get LINK for selected subject
                const link = selectedSubject.materials[material.key];

                return (
                  <a
                    key={material.key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${styles.border}`}
                  >
                    {/* ICON */}

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${styles.icon}`}
                    >
                      {material.icon}
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-5 text-lg font-bold text-slate-800">
                      {material.title}
                    </h3>

                    {/* BUTTON */}

                    <div
                      className={`mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${styles.button}`}
                    >
                      View / Download
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Semester4;
