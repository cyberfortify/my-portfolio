// File: src/pages/ProjectPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiArrowLeft, FiSearch, FiFilter } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import {
  SiSelenium,
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
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedProject, setExpandedProject] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "fullstack", name: "Full Stack" },
    { id: "data", name: "Data Analysis" },
    { id: "automation", name: "Automation" },
  ];

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
      title: "Naukri Profile Updater",
      description:
        "Automates the login and profile summary update on Naukri.com using Python and Selenium.",
      tags: ["Python", "Selenium", "Automation"],
      category: "automation",
      image: "/project-images/naukri.jpg", 
      github: "https://github.com/cyberfortify/naukri-profile-updater",
      live: "", 
      techIcons: [<FaPython />, <SiSelenium />]
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      title: "Employee Management System",
      description:
        "Full-stack system with CRUD functionality using React, Flask, MySQL.",
      tags: ["React", "Flask", "MySQL"],
      category: "fullstack",
      image: "/project-images/ems.png",
      github: "https://github.com/cyberfortify/employee-management-system",
      live: "https://employee-management-system-nu-rose.vercel.app/",
      techIcons: [<FaReact />, <SiFlask />, <FaDatabase />],
    },
    {
      id: 7,
      title: "To-Do Flask App",
      description: "Simple task manager using Flask and MySQL.",
      tags: ["Flask", "MySQL"],
      category: "fullstack",
      image: "/project-images/todo-flas.jpg",
      github: "https://github.com/cyberfortify/to-do-flask-app",
      live: "https://github.com/cyberfortify/to-do-flask-app",
      techIcons: [<SiFlask />, <FaDatabase />],
    },
    {
      id: 8,
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
    {
      id: 9,
      title: "Netflix Viewing Habits",
      description:
        "Insights on Netflix user behavior through data visualization.",
      tags: ["Python", "Pandas", "Seaborn"],
      category: "data",
      image: "/project-images/netflix.png",
      github: "https://github.com/cyberfortify/Netflix-Viewing-Habits-Analysis",
      live: "https://github.com/cyberfortify/Netflix-Viewing-Habits-Analysis",
      techIcons: [<FaPython />, <SiJupyter />],
    },
    {
      id: 10,
      title: "Superstore Sales Dashboard",
      description:
        "Data analysis of sales records from the Superstore dataset.",
      tags: ["Python", "Pandas", "DataViz"],
      category: "data",
      image: "/project-images/superstor.png",
      github: "https://github.com/cyberfortify/Superstore-Sales-Analysis",
      live: "https://github.com/cyberfortify/Superstore-Sales-Analysis",
      techIcons: [<FaPython />, <SiJupyter />],
    },
    {
      id: 11,
      title: "AICTE Steganography",
      description:
        "Project using steganography to hide sensitive info in images.",
      tags: ["Python", "Steganography"],
      category: "security",
      image: "/project-images/steganography.jpg",
      github: "https://github.com/cyberfortify/AICTE_Steganography",
      live: "https://github.com/cyberfortify/AICTE_Steganography",
      techIcons: [<FaPython />],
    },
    // Add more projects if needed
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expandedProject]);

  const handleCloseProject = () => {
    setExpandedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => navigate("/")}
              whileHover={{ x: -5 }}
            >
              <FiArrowLeft className="mr-2" />
              Back to Portfolio
            </motion.button>
            <h1 className="text-xl md:text-2xl font-bold">
              My <span className="text-cyan-400">Projects</span>
            </h1>
            <div></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mb-4"
          >
            <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3 animate-pulse"></div>
            <span className="text-cyan-400 font-mono tracking-widest text-sm">
              PROJECT PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Explore My <span className="text-cyan-400">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg mb-10"
          >
            A curated collection of my development projects, showcasing my
            skills across various technologies and domains.
          </motion.p>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl py-4 px-5 pl-12 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
              {searchTerm && (
                <button
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  onClick={() => setSearchTerm("")}
                >
                  <FiX className="text-xl" />
                </button>
              )}
            </div>

            <button
              className="md:hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl py-4 px-6 flex items-center justify-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter className="mr-2" />
              Filters
            </button>
          </motion.div>
        </div>

        {/* Filters - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeFilter === filter.id
                ? "bg-cyan-500 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Filters - Mobile */}
        {showFilters && (
          <div className="md:hidden mb-8 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Filter Projects</h3>
              <button onClick={() => setShowFilters(false)}>
                <FiX className="text-xl" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    }`}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setShowFilters(false);
                  }}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Projects Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-cyan-400">{filteredProjects.length}</span> of{" "}
            {projects.length} projects
            {activeFilter !== "all" &&
              ` in ${filters.find((f) => f.id === activeFilter)?.name}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                onClick={() => setExpandedProject(project)}
              >
                {/* Project image */}
                <div className="h-48 relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Icons */}
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
                    <span className="text-gray-500 text-sm">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-900/50 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-900/50 text-xs rounded-full text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 transition-colors"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
                setShowFilters(false);
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </main>

      {/* Expanded Project View */}
      {expandedProject && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto px-4 md:px-8 py-12">
            <button
              className="fixed top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
              onClick={handleCloseProject}
            >
              <FiX className="text-3xl" />
            </button>

            <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden">
              {/* Project Header */}
              <div className="h-80 bg-gradient-to-br from-gray-700 to-gray-900 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    {expandedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {expandedProject.title}
                  </h2>
                  <p className="text-gray-400 mt-2">{expandedProject.date}</p>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-4 justify-between items-start mb-8">
                  <div className="flex gap-3">
                    {expandedProject.github && (
                      <a
                        href={expandedProject.github}
                        className="px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center hover:bg-gray-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="mr-2" />
                        GitHub
                      </a>
                    )}
                    {expandedProject.live && (
                      <a
                        href={expandedProject.live}
                        className="px-6 py-3 bg-cyan-500 text-white rounded-lg flex items-center hover:bg-cyan-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {expandedProject.techIcons.map((icon, i) => (
                      <div
                        key={i}
                        className="text-2xl p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {expandedProject.fullDescription}
                    </p>

                    <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {expandedProject.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3"></div>
                          <p className="text-gray-300">{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Project Details</h3>

                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-5 mb-6">
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-400">Category</span>
                        <span className="font-medium capitalize">
                          {expandedProject.category}
                        </span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-400">Date</span>
                        <span className="font-medium">
                          {expandedProject.date}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status</span>
                        <span className="font-medium text-cyan-400">
                          Completed
                        </span>
                      </div>
                    </div>

                    <h4 className="font-bold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {expandedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-700 rounded-xl"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="mt-2">
          <button
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </button>
        </p>
      </footer>
    </div>
  );
};

export default ProjectPage;
