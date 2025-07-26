// File: src/components/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaFigma, FaDatabase, FaServer, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiGraphql, SiMongodb, SiPostgresql, SiKubernetes, SiGit, SiJest } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
    { id: 'backend', name: 'Backend', icon: <FaNodeJs /> },
    { id: 'tools', name: 'Tools', icon: <FaDocker /> },
    { id: 'design', name: 'Design', icon: <FaFigma /> },
  ];

  const skills = {
    frontend: [
      { name: 'React', icon: <FaReact />, level: 95, color: 'text-blue-400' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: 'text-yellow-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: 'text-teal-400' },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: 'text-green-500' },
      { name: 'Python', icon: <FaPython />, level: 80, color: 'text-blue-600' },
      { name: 'GraphQL', icon: <SiGraphql />, level: 75, color: 'text-pink-500' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: 'text-green-400' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: 'text-blue-400' },
      { name: 'REST APIs', icon: <FaServer />, level: 90, color: 'text-gray-400' },
    ],
    tools: [
      { name: 'Docker', icon: <FaDocker />, level: 80, color: 'text-blue-500' },
      { name: 'Kubernetes', icon: <SiKubernetes />, level: 70, color: 'text-blue-400' },
      { name: 'Git', icon: <SiGit />, level: 90, color: 'text-orange-500' },
      { name: 'Jest', icon: <SiJest />, level: 85, color: 'text-red-500' },
      { name: 'CI/CD', icon: <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">CI</div>, level: 85, color: 'text-gray-300' },
    ],
    design: [
      { name: 'Figma', icon: <FaFigma />, level: 85, color: 'text-purple-500' },
      { name: 'UI Design', icon: <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>, level: 80, color: 'text-blue-400' },
      { name: 'UX Research', icon: <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-red-500 rounded-full"></div>, level: 75, color: 'text-amber-400' },
      { name: 'Prototyping', icon: <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"></div>, level: 85, color: 'text-green-400' },
      { name: 'Wireframing', icon: <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>, level: 90, color: 'text-gray-400' },
      { name: 'Design Systems', icon: <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"></div>, level: 80, color: 'text-indigo-400' },
    ]
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-5"></div>
        
        {/* Floating hexagons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/10 rounded-lg"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{ 
              rotate: [0, 15, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
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
            My <span className="text-cyan-400">Skills</span> & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I've worked with a range of technologies across the stack, constantly learning and adapting to new tools and methodologies.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categories.indexOf(category) }}
              viewport={{ once: true }}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 overflow-hidden ${
                hoveredSkill === skill.name ? 'border-cyan-400/50' : ''
              }`}
              whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Skill glow effect when hovered */}
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 bg-cyan-500/5 rounded-xl animate-pulse pointer-events-none"></div>
              )}
              
              <div className="flex items-start">
                <div className={`text-3xl p-3 rounded-lg bg-gray-900/50 ${skill.color}`}>
                  {skill.icon}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Animated particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                  style={{
                    top: `${Math.random() * 60 + 20}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 1
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;