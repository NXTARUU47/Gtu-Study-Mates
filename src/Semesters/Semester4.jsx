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

  // ==========================================
  // SEMESTER 3 SUBJECTS + INDIVIDUAL LINKS
  // ==========================================

  const subjects = [
    {
      id: 1,
      name: "Operating System",
      code: "3130702",
      icon: <FaCode />,
      color: "indigo",

      materials: {
        syllabus:
          "https://drive.google.com/drive/folders/1749Un0BC-UTgJHCjUCwDajLeC7DyNcZE",
        papers:
          "https://drive.google.com/drive/folders/1F0umpnm4JlzA0TBHQg5gY87SydnmEQ02",
        solutions:
          "https://drive.google.com/drive/folders/1fHmIw0otbQuWbEllnxoMl8u-mYrl0LpB",
        imp: "https://drive.google.com/drive/folders/1QUT9ZoWvoB9yP3r6ZT8BTPxymorBQGmA",
        impQna:
          "https://drive.google.com/drive/folders/1cKiUNGadOOahE7S5z8NenbTSbu6VvjGy",
        ppt: "https://drive.google.com/drive/folders/1T5lTFV3m5W_z_qSVbp59SsyNdILBmp_T",
        book: "https://drive.google.com/drive/folders/1ebcpwOxVNKKF0uriAniRH1297sw_WLvB",
        notes:
          "https://drive.google.com/drive/folders/1SPXTdFkddq6Ox0bX47svxsdfX9FatKjq",
        lab: "https://drive.google.com/drive/folders/1vYNjn2QyvvQkWR4TUR4kWQ4PJbwLNdh3",
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
          "https://drive.google.com/drive/folders/1jRSSfb092YKrtJyCTzMZDSB_rKoIWy12",
        papers:
          "https://drive.google.com/drive/folders/1p2h6JsXAAuFi3SsgN1FX-A-A57SS6C27",
        solutions:
          "https://drive.google.com/drive/folders/1wa6_U7v24sPX_dyN_oe0Ow8i5vMd1p77",
        imp: "https://drive.google.com/drive/folders/1t7HcTs-Z1s_IRV-xz8REpz5wdHh2BZMx",
        impQna:
          "https://drive.google.com/drive/folders/1Cb3-5rbxUrLj8H-WdCq5F_QMG1Zr6lYr",
        ppt: "https://drive.google.com/drive/folders/1sAX10h6qVv8IaJaX866Imtg8rWKP4HfM",
        book: "https://drive.google.com/drive/folders/1gkve11Qj3Lv6b28Q410netjHz1w83fGd",
        notes:
          "https://drive.google.com/drive/folders/15FbKiBmPDLg8WwMeo3wsB9BFR4Mnplhu",
        lab: "https://drive.google.com/drive/folders/11YYOuaCQcywbll1z0I0byR4emv1v_RM8",
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
          "https://youtube.com/playlist?list=PLNiD0MJqUzyH_-yB1f3kfrKve9snu72bB",

        syllabus:
          "https://drive.google.com/drive/folders/1Zh7ILGJO2z3jKkbBqVdq51-HmD9KQMKx",

        papers:
          "https://drive.google.com/drive/folders/15WvMNVEhKUt53j_UXg6jNAvPthk88zKi",

        solutions:
          "https://drive.google.com/drive/folders/1tZXpeRPerxuncPPCo0M1OwvNq-2z8x32",

        imp: "https://drive.google.com/drive/folders/1Zmul0KRFI-AL4RwBkgU3rReMLCHdBcps",

        mimp: "https://drive.google.com/drive/folders/1X3u3xjoY8VOUN-GS9ClGCimSHQuuq2qR",

        ppt: "https://drive.google.com/drive/folders/1rdHPgOIczmkTU4py1lYhM0_VkCGJTKHH",

        book: "https://drive.google.com/drive/folders/1gsYhcAnsxl1ODt1Nud_HVgXhOHYQ8JVd",

        notes:
          "https://drive.google.com/drive/folders/1ZsTjdeBBr8rveywfHv91NycE6_jgmYWK",

        lab: "https://drive.google.com/drive/folders/1ASNqGd7g27ZjaKE1Wo8ia4U4pmoEpu5k",
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
          "https://drive.google.com/drive/folders/1WxQgCaUSUmvrJoHzIKuBBEJ-X35oeoR9",

        papers:
          "https://drive.google.com/drive/folders/1zr1pFvymYkOGQFod75cG18-bCAeHbPFd",

        book: "https://drive.google.com/drive/folders/1uwU7SfcytTjxpqtGSB9hb0mbuGqfC_u8",

        notes:
          "https://drive.google.com/drive/folders/10kKYxr6wbUQSd5D5EVSnWooZzhMj9-H9",

        // No links provided yet
        solutions: "#",
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
          "https://drive.google.com/drive/folders/1fYAtrRAE7N9nPBANIGcu_RN1OykxV2IR",

        papers:
          "https://drive.google.com/drive/folders/1L4FR3g3ggBAHdyaeENGWerQiHWrSHbXZ",

        solutions:
          "https://drive.google.com/drive/folders/1ptNH4Uk0tMxeVmHYk4ZFNuLrr1QvtjI7",

        imp: "https://drive.google.com/drive/folders/1ny6ry2CUXRcJmya3b6t37qpEjerTIuIq",

        impQna:
          "https://drive.google.com/drive/folders/1MAK173sFBkdCEKT3q0pOkyzhOd5zS0nJ",

        ppt: "https://drive.google.com/drive/folders/1namZKAD5FoUkyf7OTa7xlVZ18-j3KFW5",

        book: "https://drive.google.com/drive/folders/1udweaPUMxfTE9oXgAz4OqJ1sYLMcuqca",

        notes:
          "https://drive.google.com/drive/folders/1-RBJAZrU89sKYgdGEDgxnwj7Ownrn08H",

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
          "https://drive.google.com/drive/folders/1fYAtrRAE7N9nPBANIGcu_RN1OykxV2IR",

        papers:
          "https://drive.google.com/drive/folders/1L4FR3g3ggBAHdyaeENGWerQiHWrSHbXZ",

        solutions:
          "https://drive.google.com/drive/folders/1ptNH4Uk0tMxeVmHYk4ZFNuLrr1QvtjI7",

        imp: "https://drive.google.com/drive/folders/1ny6ry2CUXRcJmya3b6t37qpEjerTIuIq",

        impQna:
          "https://drive.google.com/drive/folders/1MAK173sFBkdCEKT3q0pOkyzhOd5zS0nJ",

        ppt: "https://drive.google.com/drive/folders/1namZKAD5FoUkyf7OTa7xlVZ18-j3KFW5",

        book: "https://drive.google.com/drive/folders/1udweaPUMxfTE9oXgAz4OqJ1sYLMcuqca",

        notes:
          "https://drive.google.com/drive/folders/1-RBJAZrU89sKYgdGEDgxnwj7Ownrn08H",

        lab: "#",
      },
    },
    
  ];

  // ==========================================
  // MATERIAL CARD INFORMATION
  // ==========================================

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

  // ==========================================
  // COLORS
  // ==========================================

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
        {/* ==========================================
            SUBJECT LIST
        ========================================== */}

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

            {/* SUBJECT CARDS */}

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

        {/* ==========================================
            SELECTED SUBJECT
        ========================================== */}

        {selectedSubject && (
          <>
            {/* BACK BUTTON */}

            <button
              onClick={() => setSelectedSubject(null)}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition"
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
  )
}

export default Semester4;
