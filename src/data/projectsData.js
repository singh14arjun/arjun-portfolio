import { DiJava } from "react-icons/di";
import nesiya1 from "../assets/nesiyatovaWeb1.png";
import nesiya2 from "../assets/nesiyatovaWeb2.png";
import nesiya3 from "../assets/nesiyatovaWeb3.png";
import nesiyaapp1 from "../assets/nesiya app (1).png";
import nesiyaapp2 from "../assets/nesiya app (2).png";
import nesiyaapp3 from "../assets/nesiya app (3).png";
import weathte1 from "../assets/weather (1).png";
import weathte2 from "../assets/weather (2).png";
import weathte3 from "../assets/weather (3).png";
import weathte4 from "../assets/weather (4).png";
import arjun1 from "../assets/arjun (1).png";
import arjun2 from "../assets/arjun (2).png";
import arjun3 from "../assets/arjun (3).png";
import arjun4 from "../assets/arjun (4).png";
import genvite1 from "../assets/genvite (1).png";
import genvite2 from "../assets/genvite (2).png";
import genvite3 from "../assets/genvite (3).png";
import { TbBrandOauth } from "react-icons/tb";
import { SiOracle, SiPostgresql, SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";


import { SiSpringboot, SiSpring, SiBitbucket, SiJira, SiPostman, SiDocker, SiHibernate, SiMysql, SiApachemaven, SiGradle, SiSpringsecurity, SiMui, SiRedux } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";

export const projectData = [
  {
    title: "Nesiyatova",
    url: "https://app.nesiyatova.com",
    images: [nesiya1, nesiya2, nesiya3],
    tech: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    details: "",
  },
  {
    title: "Genvite",
    url: "https://genvite.com",
    images: [genvite1, genvite2, genvite3],
    tech: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    details: "",
  },
];

export const personalProjectData = [
  {
    title: "Portfolio",
    url: "https://arjun-portfolio-xi.vercel.app/",
    images: [arjun1, arjun2, arjun3, arjun4],
    tech: ["JavaScript", "React", "Tailwind CSS"],
    details:
      "A modern developer portfolio showcasing projects, skills, certifications, and experience. Designed with responsive layouts, dark mode support, animated UI components, and smooth navigation.",
  },

  {
    title: "Weather",
    url: "https://web-weather-app-gules.vercel.app/",
    images: [weathte1, weathte2, weathte3, weathte4],
    tech: ["HTML", "CSS", "JavaScript", "React", "OpenWeatherMap API"],
    details:
      "A responsive weather web application that displays real-time weather information using a public weather API. Users can search for any city to view temperature, weather conditions, humidity, and wind speed. Built with React and modern UI practices for a smooth user experience.",
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
    {
      name: "Hibernate",
      icon: SiHibernate,
    },
    {
      name: "Maven",
      icon: SiApachemaven,
    },
    {
      name: "Gradle",
      icon: SiGradle,
    },
    {
      name: "Spring Security",
      icon: SiSpringsecurity,
    },
    {
      name: "OAuth",
      icon: TbBrandOauth,
    },
    {
      name: "Microservices",
      icon: SiSpringboot,
    }
  ],

  database: [
    {
      name: "Oracle",
      icon: SiOracle,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "SQL",
      icon: FaDatabase,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    }
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
      name: "SCSS",
      icon: BsFiletypeScss,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Redux",
      icon: SiRedux,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
    },
    {
      name: "MUI",
      icon: SiMui,
    }
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
    {
      name: "GitHub",
      icon: FaGithub,
    },
    {
      name: "Postman",
      icon: SiPostman,
    },
    {
      name: "Jira",
      icon: SiJira,
    },
    {
      name: "Bitbucket",
      icon: SiBitbucket,
    },
    {
      name: "Docker",
      icon: SiDocker,
    }
  ],
};
