import { BiCopyright } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const Footer = ({ setOpen }) => {
  return (
    <div className="pt-20 text-white/50 " id="contact">
      <div className="mx-6">
        <div
          className="bg-gradient-to-br from-gray-950 via-black to-gray-950 
  max-w-150 mx-auto p-6 md:px-20 text-center rounded-2xl 
  border border-cyan-500/30 
  shadow-[0_0_40px_rgba(0,255,255,0.08)]"
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <div
              className="text-4xl font-semibold 
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
      bg-clip-text text-transparent"
            >
              Let's build something together.
            </div>

            <div className="text-gray-400 max-w-xl">
              Currently available for React development projects and full-time
              opportunities. Reach out to discuss your next big idea.
            </div>

            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 
      text-white font-bold px-6 py-2 rounded-lg 
      shadow-[0_0_15px_#22d3ee] 
      hover:shadow-[0_0_25px_#22d3ee] 
      hover:scale-105 transition duration-300 cursor-pointer"
            >
              <button onClick={() => setOpen(true)}>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cyan-500/20 bg-gradient-to-b from-gray-950 via-black to-gray-950 mt-20">
        <div className="grid md:grid-cols-3 gap-20 p-6 md:p-20">
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 text-white">
              <HiCode className="text-cyan-400 text-3xl drop-shadow-[0_0_10px_#22d3ee]" />
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Arjun Singh
              </span>
            </a>

            <div className="text-gray-400 leading-relaxed">
              React Developer specializing in building high-performance web
              applications with modern technologies and clean, maintainable
              codebases. Focused on user experience and scalable architecture.
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-4 text-cyan-400 tracking-wide">
              Quick Links
            </h1>

            <nav className="flex flex-col gap-3 text-gray-400 w-fit">
              <li className="list-none hover:text-cyan-400 transition duration-300 cursor-pointer ">
                <a href="#">About</a>
              </li>
              <li className="list-none hover:text-cyan-400 transition duration-300 cursor-pointer">
                <a href="#projects">Projects</a>
              </li>
              <li className="list-none hover:text-cyan-400 transition duration-300 cursor-pointer">
                <a href="#experience">Experience</a>
              </li>
              <li className="list-none hover:text-cyan-400 transition duration-300 cursor-pointer">
                <a href="#skills">Skills</a>
              </li>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold uppercase text-cyan-400 tracking-wider">
              Connect
            </h1>

            <div className="flex gap-6 text-2xl text-gray-400">
              <a href="https://github.com/singh14arjun" target="_blank">
                <BsGithub className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition duration-300 cursor-pointer" />
              </a>
              <BsInstagram className="hover:text-pink-500 hover:drop-shadow-[0_0_10px_#ec4899] transition duration-300 cursor-pointer" />
              <a
                href="https://www.linkedin.com/in/arjun-singh14/"
                target="_blank"
              >
                <BsLinkedin className="hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6] transition duration-300 cursor-pointer" />
              </a>
            </div>

            <div className="flex flex-col gap-2 text-gray-400">
              <div className="flex gap-2 items-center hover:text-cyan-400 transition cursor-pointer">
                <IoCallSharp className="text-lg" />
                <span>3733333</span>
              </div>

              <a
                href="mailto:arjun2314singh@gmail.com?subject=Portfolio Contact&body=Hello Arjun,"
                className="flex gap-2 items-center hover:text-cyan-400 transition cursor-pointer"
              >
                <MdEmail className="text-lg" />
                <span>arjun2314singh@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <footer
          className="p-6 md:px-10 rounded-br-xl rounded-bl-xl border-t border-cyan-500/20"
          id="contact"
        >
          <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center text-gray-400 gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 text-center md:text-left">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 font-bold text-2xl rounded shadow-[0_0_10px_#22d3ee] text-white">
                AS
              </span>

              <span>{new Date().getFullYear()} Arjun Singh .</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
              <div className="hover:text-cyan-400 cursor-pointer transition">
                Privacy Policy
              </div>
              <div className="hover:text-cyan-400 cursor-pointer transition">
                Terms of Service
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
