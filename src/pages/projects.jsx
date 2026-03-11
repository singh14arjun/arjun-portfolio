import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BsEye } from "react-icons/bs";
import { projectData } from "../data/projectsData";
import { personalProjectData } from "../data/projectsData";
import { techData } from "../data/projectsData";

export function Projects() {
  return (
    <div className="py-20 text-white" id="projects">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div
            className="text-5xl font-bold text-center 
  bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
  bg-clip-text text-transparent w-fit mx-auto"
          >
            Featured Projects
          </div>

          <div className="text-center text-white/50">
            A curated selection of high-performance web applications built with
            <br />
            React, focusing on user experience, scalability, and clean code.
          </div>

          <div className="grid lg:grid-cols-3 gap-8 py-6">
            {projectData.map((project, index) => {
              const items = project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl 
          group-hover:scale-105 transition duration-500"
                />
              ));

              return (
                <div
                  key={index}
                  className="group 
          bg-gradient-to-br from-gray-900 via-gray-950 to-black
          text-white rounded-2xl overflow-hidden 
          border border-cyan-500/20
          shadow-[0_0_15px_rgba(34,211,238,0.1)]
          hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
          hover:border-cyan-400
          hover:-translate-y-2 
          transition-all duration-500"
                >
                  <div className="overflow-hidden">
                    <AliceCarousel
                      items={items}
                      autoPlay
                      autoPlayInterval={2000}
                      infinite
                      disableDotsControls
                      disableButtonsControls
                      mouseTracking
                    />
                  </div>

                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="bg-cyan-500/10 border border-cyan-400/30
                  text-cyan-300 px-3 py-1 rounded-full text-xs
                  hover:bg-cyan-500/20
                  hover:shadow-[0_0_8px_#22d3ee]
                  transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h2
                      className="text-xl font-bold 
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
            bg-clip-text text-transparent"
                    >
                      {project.title}
                    </h2>

                    <div
                      className="flex items-center gap-2 justify-center mt-2 py-2 rounded-lg
              bg-gradient-to-r from-cyan-500/10 to-blue-500/10
              border border-cyan-400
              text-cyan-300
              shadow-[0_0_10px_#22d3ee]
              hover:shadow-[0_0_25px_#22d3ee]
              hover:bg-cyan-500/20
              hover:scale-105
              transition-all duration-300 cursor-pointer"
                    >
                      <BsEye className="text-lg" />

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium tracking-wide"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div
            className="text-5xl font-bold text-center 
  bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
  bg-clip-text text-transparent"
          >
            Personal Projects
          </div>

          <div className="text-center text-white/50">
            A curated selection of high-performance web applications built with
            <br />
            React, focusing on user experience, scalability, and clean code.
          </div>

          <div>
            <div className="grid lg:grid-cols-3 gap-8 py-6">
              {personalProjectData.map((project, index) => {
                const items = project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-t-xl 
            group-hover:scale-105 transition duration-500"
                  />
                ));

                return (
                  <div
                    key={index}
                    className="group 
            bg-gradient-to-br from-gray-900 via-gray-950 to-black
            text-white rounded-2xl overflow-hidden 
            border border-cyan-500/20
            shadow-[0_0_15px_rgba(34,211,238,0.1)]
            hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
            hover:-translate-y-2
            transition-all duration-500"
                  >
                    <div className="overflow-hidden">
                      <AliceCarousel
                        items={items}
                        autoPlay
                        autoPlayInterval={2000}
                        infinite
                        disableDotsControls
                        disableButtonsControls
                        mouseTracking
                      />
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                      <h2
                        className="text-xl font-bold 
              bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
              bg-clip-text text-transparent"
                      >
                        {project.title}
                      </h2>

                      <div className="text-sm text-white/60 leading-relaxed">
                        {project?.details}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="bg-cyan-500/10 border border-cyan-400/30
                    text-cyan-300 px-3 py-1 rounded-full text-xs
                    hover:bg-cyan-500/20
                    hover:shadow-[0_0_8px_#22d3ee]
                    transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center gap-2 justify-center 
                mt-3 py-2 rounded-lg
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                border border-cyan-400
                text-cyan-300
                shadow-[0_0_10px_#22d3ee]
                hover:shadow-[0_0_25px_#22d3ee]
                hover:bg-cyan-500/20
                hover:scale-105
                transition-all duration-300 cursor-pointer"
                      >
                        <BsEye className="text-lg" />

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium tracking-wide"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* tech details */}
      <div
        className="border p-6 flex flex-col gap-5 rounded-2xl 
border-white/20 
bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a]
shadow-[0_0_40px_rgba(0,255,255,0.08)]"
      >
        <div
          className="text-center text-4xl font-bold 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
  bg-clip-text text-transparent"
        >
          Technical Proficiency
        </div>

        <div className="text-sm font-semibold text-white/50 text-center">
          The tools and technologies I use to bring ideas to life.
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div>
            <div className="text-center text-lg uppercase font-semibold text-cyan-400 tracking-wider">
              frontend
            </div>

            <div className="flex gap-4 flex-wrap justify-center mt-4">
              {techData.frontend.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 
              border border-cyan-500/40 
              w-fit px-3 py-2 rounded-xl
              bg-cyan-500/5
              hover:bg-cyan-500/10
              hover:shadow-[0_0_12px_#22d3ee]
              transition-all duration-300"
                  >
                    <Icon className="text-2xl text-cyan-400" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col gap-5">
            <div className="text-center text-lg uppercase font-semibold text-blue-400 tracking-wider">
              backend
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              {techData.backend.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 
              border border-blue-500/40
              w-fit px-3 py-2 rounded-xl
              bg-blue-500/5
              hover:bg-blue-500/10
              hover:shadow-[0_0_12px_#3b82f6]
              transition-all duration-300"
                  >
                    <Icon className="text-2xl text-blue-400" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-5">
            <div className="text-center text-lg uppercase font-semibold text-purple-400 tracking-wider">
              tools
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              {techData.tools.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 
              border border-purple-500/40
              w-fit px-3 py-2 rounded-xl
              bg-purple-500/5
              hover:bg-purple-500/10
              hover:shadow-[0_0_12px_#a855f7]
              transition-all duration-300"
                  >
                    <Icon className="text-2xl text-purple-400" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
