// File: src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Me.png";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <FaCode className="text-cyan-400" />,
      level: 95,
    },
    {
      name: "UI/UX Design",
      icon: <FaLaptopCode className="text-purple-400" />,
      level: 85,
    },
    {
      name: "Backend Development",
      icon: <FaServer className="text-amber-400" />,
      level: 80,
    },
    {
      name: "Database Management",
      icon: <FaDatabase className="text-emerald-400" />,
      level: 75,
    },
  ];

  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-5"></div>

        {/* Floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/20 rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
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
            Crafting <span className="text-cyan-400">Digital Experiences</span>{" "}
            <br className="hidden md:block" />
            with Precision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I bridge the gap between design and technology, creating seamless
            digital experiences that captivate users and drive results.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Profile image with techy border */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700">
                <div className="bg-gray-800/30 backdrop-blur-sm w-full h-80 flex items-center justify-center">
                  <img
                    src={profilePic}// 👈 Put your actual image path here
                    alt="Aditya Vishwakarma"
                    className="w-48 h-48 object-cover rounded-xl border-2 border-gray-600"
                  />
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 border border-cyan-400/30 rounded-xl animate-pulse pointer-events-none"></div>
              </div>



              {/* Personal info card */}
              <div className="mt-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Personal Info</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Name", value: "Aditya Vishwakarma" },
                    { label: "Email", value: "work.aditya2010@gmail.com" },
                    { label: "Location", value: "Mumbai, Maharashtra" },
                    { label: "Availability", value: "Open to work" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                      <div>
                        <div className="text-sm text-gray-400">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/Aditya_Vishwakarma_resume.pdf"
                  download
                  className="mt-6 block text-center w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Download Resume
                </a>

              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills and About Text */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-gray-300 mb-8">
              I'm a BSc IT graduate and passionate developer with hands-on experience in building full-stack web applications using React.js, Python, Flask, and MySQL. I specialize in creating dynamic, responsive UIs and robust backend systems.
            </p>

            <p className="text-gray-300 mb-10">
              My projects span across automation (Selenium-based tools), data analysis (Pandas, Excel), and interactive web experiences (3D animations with Three.js and GSAP). I'm actively seeking opportunities in web development, full-stack development, or as a Python developer, where I can apply my skills to real-world challenges and continue learning in a collaborative environment.
            </p>

            {/* <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="mr-3 text-lg">{skill.icon}</div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div>
              <h3 className="text-2xl font-bold mb-6">Development Approach</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "User-Centric Design",
                    description:
                      "Creating interfaces focused on intuitive user experiences and accessibility.",
                  },
                  {
                    title: "Performance First",
                    description:
                      "Optimizing for speed and efficiency to deliver seamless interactions.",
                  },
                  {
                    title: "Clean & Maintainable",
                    description:
                      "Writing code that's organized, documented, and easy to maintain.",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Staying updated with the latest technologies and industry best practices.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="flex mb-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
