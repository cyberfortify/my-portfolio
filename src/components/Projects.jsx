import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiFlask,
  SiJupyter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
} from "react-icons/si";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description: "React + Vite-based personal portfolio site.",
      tags: ["React", "Vite", "Tailwind CSS"],
      category: "web",
      image: "/project-images/portfolio.png",
      github: "https://github.com/cyberfortify/my-portfolio",
      live: "#",
      techIcons: [<FaReact />, <SiVite />, <SiTailwindcss />],
    },
    {
      id: 2,
      title: "Employee Report App",
      description:
        "Streamlit app to generate department-wise employee reports from Excel.",
      tags: ["Python", "Pandas", "Streamlit"],
      category: "data",
      image: "/project-images/employee-report-app.png",
      github: "https://github.com/cyberfortify/employee-report-app",
      live: "https://employee-report-app.streamlit.app/",
      techIcons: [<FaPython />, <SiJupyter />],
    },
    {
      id: 3,
      title: "Alibaba RFQ Scraper",
      description:
        "Web scraper for Alibaba RFQs using Python and BeautifulSoup.",
      tags: ["Python", "Web Scraping"],
      category: "automation",
      image: "/project-images/Aibaba.png",
      github: "https://github.com/cyberfortify/Alibaba_RFQ_Scraper",
      live: "https://github.com/cyberfortify/Alibaba_RFQ_Scraper",
      techIcons: [<FaPython />],
    },
    {
      id: 4,
      title: "3D Website Animation",
      description: "Scroll-based 3D animation website using Three.js and GSAP.",
      tags: ["HTML", "Three.js", "GSAP"],
      category: "web",
      image: "/project-images/3d.png",
      github: "https://github.com/cyberfortify/3D_Website_Animation",
      live: "https://3d-website-animation.vercel.app/",
      techIcons: [<SiHtml5 />, <SiJavascript />],
    },
    {
      id: 5,
      title: "Employee Management System",
      description:
        "Full-stack system with CRUD functionality using React, Flask, MySQL.",
      tags: ["React", "Flask", "MySQL"],
      category: "fullstack",
      image: "/project-images/ems.png",
      github: "https://github.com/cyberfortify/employee-management-system",
      live: "https://employee-management-system-nu-rose.vercel.app/login",
      techIcons: [<FaReact />, <SiFlask />, <FaDatabase />],
    },
    {
      id: 6,
      title: "YouTube Trending Analysis",
      description:
        "Data analysis of trending videos using Pandas and Matplotlib.",
      tags: ["Python", "Pandas", "Matplotlib"],
      category: "data",
      image: "/project-images/yt-trending.png",
      github: "https://github.com/cyberfortify/Youtube_Trending_Video_Analysis",
      live: "https://github.com/cyberfortify/Youtube_Trending_Video_Analysis",
      techIcons: [<FaPython />, <SiJupyter />],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background animation and blur elements (unchanged) */}
      {/* ... keep the same glowing dots, grid, binary code ... */}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Here are some of my selected projects showcasing my skills and
            experience across different domains.
          </p>
        </motion.div>

        {/* Projects Grid (no filtering now) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden ${
                hoveredProject === project.id ? "border-cyan-400/50" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              {/* Project image with hover overlay */}
              <div className="h-48 relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex space-x-3">
                    {project.techIcons.map((icon, i) => (
                      <div
                        key={i}
                        className="text-xl text-white bg-gray-800/80 p-2 rounded-full"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="text-lg" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900/50 text-xs rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <button className="relative px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg font-medium group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center">
                <FiCode className="mr-2" />
                View All Projects
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
