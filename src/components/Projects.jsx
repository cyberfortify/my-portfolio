// File: src/components/Projects.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiGraphql } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'data', name: 'Data Analysis' },
    { id: 'automation', name: 'Automation' },
    { id: 'design', name: 'UI/UX & Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      image: '/project1.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />, <SiTypescript />]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop interface, real-time updates, and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'web',
      image: '/project2.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiFirebase />, <SiTailwindcss />]
    },
    {
      id: 3,
      title: 'Health & Fitness Tracker',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with data visualization.',
      tags: ['React Native', 'GraphQL', 'Node.js'],
      category: 'mobile',
      image: '/project3.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiGraphql />, <FaNodeJs />]
    },
    {
      id: 4,
      title: 'Portfolio Design System',
      description: 'Custom design system and component library built for creative professionals and developers.',
      tags: ['Figma', 'UI Design', 'Design Systems'],
      category: 'design',
      image: '/project4.jpg',
      github: '#',
      live: '#',
      techIcons: [<FiCode />, <SiTailwindcss />]
    },
    {
      id: 5,
      title: 'Real Estate Dashboard',
      description: 'Analytics dashboard for real estate professionals with interactive maps and data visualization.',
      tags: ['React', 'Mapbox', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      image: '/project5.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />]
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'Tool for tracking social media metrics and generating reports with customizable dashboards.',
      tags: ['React', 'Firebase', 'Chart.js'],
      category: 'web',
      image: '/project6.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiFirebase />, <SiTypescript />]
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-5"></div>

        {/* Floating binary code */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 font-mono text-xs md:text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {Math.random() > 0.5 ? '101010' : '010101'}
          </motion.div>
        ))}
      </div>

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
            Here are some of my selected projects showcasing my skills and experience across different domains.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden ${hoveredProject === project.id ? 'border-cyan-400/50' : ''
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              {/* Project image */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex space-x-3">
                    {project.techIcons.map((icon, i) => (
                      <div key={i} className="text-xl text-white bg-gray-800/80 p-2 rounded-full">
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

              {/* Hover effect */}
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