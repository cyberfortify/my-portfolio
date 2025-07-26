// File: src/pages/ProjectPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiX, FiFilter, FiArrowLeft } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiGraphql } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const ProjectPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'design', name: 'UI/UX' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
      fullDescription: 'This e-commerce platform was built with React on the frontend and Node.js on the backend. It features a responsive design, product filtering, user reviews, and integrates with Stripe for payment processing. The admin dashboard allows for inventory management and order tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
      category: 'fullstack',
      image: '/project1.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />, <SiTypescript />],
      date: 'Jan 2023',
      highlights: [
        'Integrated Stripe payment processing with webhooks',
        'Implemented JWT authentication system',
        'Created admin dashboard for inventory management',
        'Optimized for mobile shopping experience'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop interface, real-time updates, and team collaboration features.',
      fullDescription: 'A Kanban-style task management application built with React and Firebase. Features include drag-and-drop task organization, real-time updates, team collaboration, due date reminders, and progress tracking. The app uses Firebase Authentication and Firestore for data persistence.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Drag & Drop', 'Real-time'],
      category: 'web',
      image: '/project2.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiFirebase />, <SiTailwindcss />],
      date: 'Mar 2023',
      highlights: [
        'Implemented real-time updates with Firebase',
        'Created custom drag-and-drop interface',
        'Added team collaboration features',
        'Designed responsive UI with Tailwind CSS'
      ]
    },
    {
      id: 3,
      title: 'Health & Fitness Tracker',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with data visualization.',
      fullDescription: 'A React Native application that helps users track their fitness journey. Features include workout logging, nutrition tracking, step counting, and health metric visualization. The app syncs with wearable devices and provides personalized recommendations based on user goals.',
      tags: ['React Native', 'GraphQL', 'Node.js', 'HealthKit', 'Data Visualization'],
      category: 'mobile',
      image: '/project3.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiGraphql />, <FaNodeJs />],
      date: 'Jun 2023',
      highlights: [
        'Integrated with HealthKit for biometric data',
        'Created custom data visualization components',
        'Developed personalized workout recommendations',
        'Implemented GraphQL API for efficient data fetching'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Design System',
      description: 'Custom design system and component library built for creative professionals and developers.',
      fullDescription: 'A comprehensive design system created to ensure consistency across multiple projects. Includes a component library built with React and Storybook, design tokens, accessibility guidelines, and documentation. The system supports theming and is optimized for developer experience.',
      tags: ['Figma', 'UI Design', 'Design Systems', 'Storybook', 'React'],
      category: 'design',
      image: '/project4.jpg',
      github: '#',
      live: '#',
      techIcons: [<SiTailwindcss />, <FaReact />],
      date: 'Aug 2023',
      highlights: [
        'Created comprehensive design documentation',
        'Built component library with Storybook',
        'Ensured WCAG 2.1 AA accessibility compliance',
        'Developed theming system with dark/light modes'
      ]
    },
    {
      id: 5,
      title: 'Real Estate Dashboard',
      description: 'Analytics dashboard for real estate professionals with interactive maps and data visualization.',
      fullDescription: 'A data-intensive dashboard for real estate brokers to track market trends, property values, and investment opportunities. Features include interactive maps, customizable reports, comparative market analysis, and lead management. Built with React and D3.js for data visualization.',
      tags: ['React', 'Mapbox', 'Node.js', 'MongoDB', 'D3.js'],
      category: 'fullstack',
      image: '/project5.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      date: 'Oct 2023',
      highlights: [
        'Integrated Mapbox for interactive property maps',
        'Created custom data visualizations with D3.js',
        'Developed comparative market analysis tools',
        'Implemented role-based access control'
      ]
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'Tool for tracking social media metrics and generating reports with customizable dashboards.',
      fullDescription: 'A social media analytics platform that aggregates data from multiple platforms (Twitter, Instagram, Facebook) to provide insights and performance metrics. Features include customizable dashboards, competitor analysis, content scheduling, and automated reporting.',
      tags: ['React', 'Firebase', 'Chart.js', 'Social API', 'Analytics'],
      category: 'web',
      image: '/project6.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiFirebase />, <SiTypescript />],
      date: 'Dec 2023',
      highlights: [
        'Integrated multiple social media APIs',
        'Created real-time analytics dashboard',
        'Developed automated PDF reporting system',
        'Implemented content scheduling features'
      ]
    },
    {
      id: 7,
      title: 'AI Content Generator',
      description: 'Web application that uses AI to generate marketing content, blog posts, and social media captions.',
      fullDescription: 'A platform that leverages OpenAI API to generate high-quality content for marketing purposes. Users can input prompts and receive blog posts, social media content, ad copy, and more. Features include content customization, tone adjustment, and content scheduling.',
      tags: ['React', 'Node.js', 'OpenAI API', 'Content Generation', 'MongoDB'],
      category: 'fullstack',
      image: '/project7.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      date: 'Feb 2024',
      highlights: [
        'Integrated OpenAI API for content generation',
        'Created prompt engineering system',
        'Developed content customization options',
        'Implemented content scheduling calendar'
      ]
    },
    {
      id: 8,
      title: 'Crypto Portfolio Tracker',
      description: 'Application for tracking cryptocurrency investments across multiple exchanges with real-time data.',
      fullDescription: 'A cryptocurrency portfolio tracker that aggregates holdings from multiple exchanges and wallets. Provides real-time price tracking, profit/loss calculations, portfolio allocation visualization, and price alerts. Built with React and CoinGecko API.',
      tags: ['React', 'CoinGecko API', 'Crypto', 'Data Visualization', 'WebSockets'],
      category: 'web',
      image: '/project8.jpg',
      github: '#',
      live: '#',
      techIcons: [<FaReact />, <SiFirebase />, <SiTypescript />],
      date: 'Apr 2024',
      highlights: [
        'Integrated with multiple exchange APIs',
        'Created real-time updates with WebSockets',
        'Developed portfolio allocation visualizations',
        'Implemented price alert notifications'
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
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
              onClick={() => navigate('/')}
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
            A curated collection of my development projects, showcasing my skills across various technologies and domains.
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
                  onClick={() => setSearchTerm('')}
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
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
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
            Showing <span className="text-cyan-400">{filteredProjects.length}</span> of {projects.length} projects
            {activeFilter !== 'all' && ` in ${filters.find(f => f.id === activeFilter)?.name}`}
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
                    <span className="text-gray-500 text-sm">{project.date}</span>
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
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            <button 
              className="mt-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700 transition-colors"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
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
                  <h2 className="text-3xl md:text-4xl font-bold">{expandedProject.title}</h2>
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
                      <div key={i} className="text-2xl p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                    <p className="text-gray-300 mb-6">{expandedProject.fullDescription}</p>
                    
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
                        <span className="font-medium capitalize">{expandedProject.category}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-400">Date</span>
                        <span className="font-medium">{expandedProject.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status</span>
                        <span className="font-medium text-cyan-400">Completed</span>
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ↑
          </button>
        </p>
      </footer>
    </div>
  );
};

export default ProjectPage;