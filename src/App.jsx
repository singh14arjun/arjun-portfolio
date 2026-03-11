import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { About } from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import { Projects } from "./pages/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300   w-full">
      <NavBar setOpen={setOpen} />
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="pt-20 px-6 md:px-20">
        <About />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer setOpen={setOpen} />
      <ContactForm open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;

// almost completed
