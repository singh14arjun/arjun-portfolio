import { DiJava } from "react-icons/di";
import nesiya1 from "../assets/nesiyatovaWeb1.png";
import nesiya2 from "../assets/nesiyatovaWeb2.png";
import nesiya3 from "../assets/nesiyatovaWeb3.png";
import { SiSpringboot, SiSpring } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
export const projectData = [
  {
    title: "Nesiyatova",
    url: "https://app.nesiyatova.com",
    images: [nesiya1, nesiya2, nesiya3],
    tech: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    details: "",
  },
  {
    title: "Nesiyatova App",
    url: "https://nesiyatova.com",
    images: [],
    tech: ["HTML", "CSS", "JavaScript", "React Native", "SCSS"],
    details: "",
  },
  {
    title: "Genvite",
    url: "https://genvite.com",
    images: [],
    tech: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    details: "",
  },
];

export const personalProjectData = [
  {
    title: "Task Manager",
    url: "",
    images: [],
    tech: ["JavaScript", "React", "Tailwind CSS", "Java", "Spring Boot"],
    details:
      "A full-stack task management application that allows users to create, update, and track daily tasks. Features include user authentication, task status updates, and responsive UI built with React and Tailwind CSS, with a Java Spring Boot backend.",
  },

  {
    title: "Door Fuel",
    url: "",
    images: [],
    tech: ["JavaScript", "React", "Tailwind CSS", "Java", "Spring Boot"],
    details:
      "A fuel delivery web application that allows users to request fuel directly to their location. Includes features like order management, user login, and service tracking with a modern responsive frontend and REST API backend.",
  },

  {
    title: "Portfolio",
    url: "",
    images: [],
    tech: ["JavaScript", "React", "Tailwind CSS"],
    details:
      "A modern developer portfolio showcasing projects, skills, certifications, and experience. Designed with responsive layouts, dark mode support, animated UI components, and smooth navigation.",
  },

  {
    title: "Weather",
    url: "",
    images: [],
    tech: ["HTML", "CSS", "JavaScript", "React", "OpenWeatherMap API"],
    details:
      "A responsive weather web application that displays real-time weather information using a public weather API. Users can search for any city to view temperature, weather conditions, humidity, and wind speed. Built with React and modern UI practices for a smooth user experience.",
  },
  {
    title: "Calculator",
    url: "",
    images: [],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    details:
      "A responsive calculator web application that performs basic arithmetic operations with a clean user interface. Built using React with modular components and styled using SCSS.",
  },
];

export const techData = {
  backend: [
    {
      name: "Java",
      icon: DiJava,
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
    },
    {
      name: "Spring Framework",
      icon: SiSpring,
    },
  ],

  frontend: [
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
    },
  ],

  tools: [
    {
      name: "Figma",
      icon: SiFigma,
    },
    {
      name: "VS Code",
      icon: VscVscode,
    },
    {
      name: "Git",
      icon: FaGit,
    },
  ],
};
