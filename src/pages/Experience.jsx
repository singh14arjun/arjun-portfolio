import React from "react";
import { MdWork } from "react-icons/md";

const expData = [
  {
    id: 1,
    dateOfJoin: "August 2024",
    dateOfCompleted: "Present",
    companyName: "Bepoj Technology",
    role: "React Developer",
    description: "Worked on more than 5 production-level projects",
  },
  {
    id: 2,
    dateOfJoin: "August 2024",
    dateOfCompleted: "August 2025",
    companyName: "Bepoj Technology",
    role: "React Developer",
    description: "Worked on more than 5 production-level projects",
  },
  {
    id: 3,
    dateOfJoin: "January 2024",
    dateOfCompleted: "August 2024",
    companyName: "Bepoj Technology",
    role: "Web Internship",
    description: "Built small frontend projects using HTML, CSS, and React",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pt-20">
      <div
        className="text-5xl pb-12 font-bold text-center 
                   bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 
                  bg-clip-text text-transparent w-fit mx-auto"
      >
        Work Experience
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div
          className="absolute left-4 top-0 h-full w-1 
    bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 
    shadow-[0_0_15px_#22d3ee]"
        ></div>

        {expData.map((exp) => (
          <div key={exp.id} className="flex gap-6 mb-12 relative">
            <div
              className={`z-10 flex items-center justify-center w-10 h-10 rounded-full text-white
          shadow-lg
          ${
            exp.dateOfCompleted === "Present"
              ? "bg-gradient-to-r from-gray-500 to-gray-700 shadow-[0_0_10px_gray]"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_12px_#22d3ee]"
          }`}
            >
              <MdWork />
            </div>

            <div
              className="bg-gradient-to-br from-gray-900 via-gray-950 to-black 
        p-6 rounded-xl w-full
        border border-blue-500/20
        hover:border-cyan-400
        hover:scale-[1.02]
        hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
        transition-all duration-300"
            >
              <span className="text-xs text-cyan-400">
                {exp.dateOfJoin} – {exp.dateOfCompleted}
              </span>

              <h3 className="text-lg font-semibold text-white mt-1">
                {exp.role}
              </h3>

              <h4 className="text-sm text-gray-400 mb-2">{exp.companyName}</h4>

              <p className="text-sm text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
