import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-5"></div>
        
        {/* Floating contact icons */}
        {[...Array(8)].map((_, i) => {
          const icons = [<FiMail />, <FiPhone />, <FaTelegramPlane />, <FiMapPin />];
          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center text-xl text-cyan-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {icons[i % icons.length]}
            </motion.div>
          );
        })}
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
            Get in  <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">Let's Talk</h3>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: <FiMail className="text-xl" />, title: "Email", info: "work.aditya2010@gmail.com", link: "mailto:work.aditya2010@gmail.com" },
                  { icon: <FiPhone className="text-xl" />, title: "Phone", info: "+1 (123) 456-7890", link: "tel:+11234567890" },
                  { icon: <FiMapPin className="text-xl" />, title: "Location", info: "Mumbai, India", link: null }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-10">
                <h4 className="font-bold text-lg mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiGithub />, link: "https://github.com/cyberfortify/", label: "GitHub" },
                    { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/aditya-vk-professional/", label: "LinkedIn" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 rounded-full bg-gray-900/50 border border-gray-700 flex items-center justify-center text-xl hover:text-cyan-400 hover:border-cyan-400 transition-all"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              {submitSuccess ? (
                <motion.div 
                  className="bg-green-900/30 border border-green-700 rounded-xl p-6 mb-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-4xl text-green-400 mb-4">✓</div>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : submitError ? (
                <div className="bg-red-900/30 border border-red-700 rounded-xl p-6 mb-8 text-center">
                  <div className="text-4xl text-red-400 mb-4">✗</div>
                  <h4 className="text-xl font-bold mb-2">Error Sending Message</h4>
                  <p className="text-gray-400">
                    There was a problem sending your message. Please try again later.
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-4 px-5 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                        placeholder="Enter your name"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-4 px-5 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                        placeholder="Enter your email"
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <FiMail />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-4 px-5 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                      placeholder="Project Inquiry"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-4 px-5 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition resize-none"
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                    <div className="absolute right-4 top-4 text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-lg font-bold flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-cyan-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90'
                  } transition-all`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Have an <span className="text-cyan-400">emergency</span> project?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Need immediate assistance with a critical project? Contact me directly for priority support.
          </p>
          <a 
            href="tel:+11234567890" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            <FiPhone className="mr-3" />
            Call Now: +1 (123) 456-7890
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;