import { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const About = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About }))
);
const ContactForm = lazy(() => import("./pages/ContactForm"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() =>
  import("./pages/projects").then((module) => ({ default: module.Projects }))
);

function App() {
  const [open, setOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const maxScroll = documentHeight - windowHeight;
      const currentScroll = Math.max(0, Math.min(scrollTop, maxScroll));

      if (maxScroll > 0) {
        setScrollPercent(Math.round((currentScroll / maxScroll) * 100));
      } else {
        setScrollPercent(0);
      }

      if (scrollTop > lastScrollY && scrollTop > 5) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollY) {
        setScrollDirection("up");
      } else if (scrollTop === 0) {
        setScrollDirection("down");
      }

      lastScrollY = scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Customizable Scroll / Page Loading Options ---
  const SCROLL_DURATION = 1000; // Scroll duration in milliseconds (e.g., 1000 = 1 second)
  const USE_PAGE_LOADING_EFFECT = true; // Set to true to show a loading screen instead of smooth scrolling
  const [isPageLoading, setIsPageLoading] = useState(false);

  const customScrollTo = (targetPosition) => {
    if (USE_PAGE_LOADING_EFFECT) {
      setIsPageLoading(true);
      setTimeout(() => {
        window.scrollTo({ top: targetPosition });
        setTimeout(() => setIsPageLoading(false), 500); // 500ms loader fade out
      }, 600); // 600ms loader fade in
      return;
    }

    // Custom smooth scroll animation
    const startY = window.scrollY;
    const difference = targetPosition - startY;
    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      // Easing function (easeInOutCubic)
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const percent = Math.min(progress / SCROLL_DURATION, 1);

      window.scrollTo(0, startY + difference * easeInOutCubic(percent));

      if (progress < SCROLL_DURATION) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      customScrollTo(top);
    }
  };

  const handleScrollAction = () => {
    if (scrollDirection === "down") {
      customScrollTo(document.documentElement.scrollHeight);
    } else {
      customScrollTo(0);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300   w-full">
      {isPageLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              {/* inner spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[4px] rounded-full border-b-2 border-l-2 border-blue-500 border-dotted opacity-50"
              />
              {/* Icon in center */}
              <span className="text-4xl text-cyan-400">AS</span>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* <span className="font-bold text-2xl tracking-[0.3em] uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Arjun
              </span> */}
            </motion.div>
          </div>
        </motion.div>
      )}
      <NavBar setOpen={setOpen} navigateToSection={navigateToSection} />
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="pt-20 px-6 md:px-20">
        <Suspense fallback={<div className="flex justify-center items-center py-20 text-cyan-400">Loading components...</div>}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <About />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <Experience />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <Projects />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <Education />
          </motion.div>
        </Suspense>
      </main>
      <Footer setOpen={setOpen} />
      <Suspense fallback={null}>
        <ContactForm open={open} setOpen={setOpen} />
      </Suspense>
      <button
        onClick={handleScrollAction}
        style={{
          background: `conic-gradient(rgba(6, 182, 212, 1) ${scrollPercent}%, transparent ${scrollPercent}%)`
        }}
        className="fixed bottom-6 right-6 text-gray-900 dark:text-white w-14 h-14 flex items-center justify-center rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm transition-all duration-300 z-50 hover:scale-110 p-0"
      >
        <span className="flex items-center justify-center bg-white dark:bg-gray-900 w-[48px] h-[48px] rounded-full">
          {scrollDirection === "up" ? <FaArrowUp className="text-lg text-cyan-500" /> : <FaArrowDown className="text-lg text-cyan-500" />}
        </span>
      </button>
    </div>
  );
}

export default App;
