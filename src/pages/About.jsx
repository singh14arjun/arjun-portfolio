import React from "react";
import photo from "../assets/arjun_photo.png";
import { GoDownload } from "react-icons/go";
import { IoArrowForwardSharp } from "react-icons/io5";

export const About = () => {
  return (
    <section
      id="about"
      className=" flex items-center justify-center transition-colors duration-300 pt-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
        border border-cyan-400 text-cyan-300
        bg-cyan-400/10 backdrop-blur-md
        shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            <span className="relative flex h-3 w-3">
              <span
                className="absolute inline-flex h-full w-full rounded-full 
            bg-cyan-400 opacity-75 animate-ping"
              ></span>
              <span
                className="relative inline-flex h-3 w-3 rounded-full 
            bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
              ></span>
            </span>

            <span className="text-sm font-medium tracking-wide">
              Available for new projects
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, I'm Arjun,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Full Stack Java Developer
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Specialized in building high-performance, scalable web applications
            with cutting-edge technologies. Expert in React, Next.js,
            TypeScript, and modern UI frameworks.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects">
              <button
                className="flex items-center gap-2 
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
          text-white px-6 py-3 rounded-lg
          shadow-[0_0_15px_#22d3ee]
          hover:shadow-[0_0_30px_#22d3ee]
          transition duration-300"
              >
                View Projects <IoArrowForwardSharp />
              </button>
            </a>

            <a href="/Arjun (1).pdf" download="Arjun (1).pdf">
              <button
                className="flex items-center gap-2 
            border border-cyan-400/40 
            text-cyan-300 px-6 py-3 rounded-lg
            bg-cyan-500/5
            hover:bg-cyan-500/10
            hover:shadow-[0_0_15px_#22d3ee]
            transition duration-300"
              >
                Download CV <GoDownload />
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="absolute -inset-4 rounded-2xl 
        bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        blur-3xl opacity-40"
          ></div>

          <img
            src={photo}
            alt="arjun_singh"
            className="relative w-50 sm:w-80 md:w-96 rounded-2xl 
        border border-cyan-500/30
        shadow-[0_0_30px_rgba(34,211,238,0.25)]
        hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};
