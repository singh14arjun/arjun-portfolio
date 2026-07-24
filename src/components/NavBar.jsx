import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiCode } from "react-icons/hi";

const NavBar = ({ setOpen, navigateToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["about", "experience", "projects", "education", "contact"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = section;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
        bg-black/70 backdrop-blur-xl
        border-b border-cyan-500/20
        shadow-[0_0_20px_rgba(34,211,238,0.2)]
        transition-all duration-300"
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        <a href="#" className="flex items-center gap-2">
          <HiCode className="text-blue-500 text-2xl" />
          <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Arjun Singh
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {["About", "Experience", "Projects", "Education", "Contact"].map(
              (item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (navigateToSection) {
                          navigateToSection(item.toLowerCase());
                        }
                      }}
                      className={`transition duration-300 ${isActive
                        ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]"
                        : "text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee]"
                        }`}
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-2 rounded-full text-white font-medium shadow-[0_0_12px_#22d3ee] hover:shadow-[0_0_25px_#22d3ee] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Connect
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black dark:text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
        >
          <ul className="flex flex-col gap-5 p-6">
            {["About", "Experience", "Projects", "Education", "Contact"].map(
              (item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        if (navigateToSection) {
                          navigateToSection(item.toLowerCase());
                        }
                      }}
                      className={`block w-full transition duration-300 ${isActive
                        ? "text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]"
                        : "text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee]"
                        }`}
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}

            <button
              onClick={() => {
                setOpen(true);
                setMenuOpen(false);
              }}
              className="mt-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-[0_0_12px_#22d3ee] hover:shadow-[0_0_25px_#22d3ee] hover:scale-105 transition-all duration-300"
            >
              Connect
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
