// File: src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ width: `${Math.random() * 30 + 70}%`, left: `${Math.random() * 100}%` }}
              animate={{ 
                y: [0, window.innerHeight],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <motion.div 
            className="md:w-1/2 mb-16 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3 animate-pulse"></div>
              <span className="text-cyan-400 font-mono tracking-widest text-sm">DEVELOPER & DESIGNER</span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I'm <span className="text-cyan-400">Aditya</span> <br />
              <span className="relative inline-block">
                Vishwakarma
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
             Bringing ideas to life through sleek, responsive, and user-focused web development.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                className="relative px-8 py-4 bg-cyan-500 rounded-lg font-medium text-center overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">View Projects</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="relative px-8 py-4 border-2 border-cyan-400/30 rounded-lg font-medium text-center group overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Hero graphic */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Floating cube */}
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Cube faces */}
                <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl transform -rotate-3"></div>
                <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl transform -rotate-6"></div>
                
                {/* Center glow */}
                <div className="absolute inset-6 bg-cyan-400/10 rounded-lg backdrop-blur-lg border border-cyan-400/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-cyan-400/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/30 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Floating dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-cyan-400"
                    style={{
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                    }}
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Floating elements around cube */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-full border-2 border-cyan-400/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ 
                    rotate: 360,
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 4 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll down</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full">
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full mx-auto -mt-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div> */}
    </div>
  );
};

export default Hero;