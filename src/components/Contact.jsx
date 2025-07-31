import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiMessageSquare } from 'react-icons/fi';
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
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'direct'

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
    setSubmitSuccess(false);
    setSubmitError(false);

    emailjs.send(
      'service_dhvhi7e',        // e.g. 'service_gmail'
      'template_i5klu6d',       // e.g. 'template_contactform'
      formData,
      'u-b3b-DWHEoVQQW0n'         // e.g. 'Br2_X8xxxxxx'
    ).then(
      (result) => {
        console.log(result.text);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error(error.text);
        setSubmitError(true);
      }
    ).finally(() => {
      setIsSubmitting(false);
    });
  };


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/5 via-gray-900 to-purple-900/5"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-10"></div>

        {/* Floating contact icons */}
        {[...Array(6)].map((_, i) => {
          const icons = [<FiMail />, <FiPhone />, <FaTelegramPlane />, <FiMapPin />];
          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center text-xl text-cyan-400/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 6,
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12 md:mb-16"
        >

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={fadeIn}
          >
            Get in <span className="text-cyan-400">Touch</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"
            variants={fadeIn}
          ></motion.div>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
            variants={fadeIn}
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
          </motion.p>
        </motion.div>

        {/* Contact Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-1">
            <button
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'form'
                  ? 'bg-cyan-900/30 text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-300'
                }`}
              onClick={() => setActiveTab('form')}
            >
              <span className="flex items-center justify-center">
                <FiMessageSquare className="mr-2" />
                Send Message
              </span>
            </button>
            <button
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'direct'
                  ? 'bg-cyan-900/30 text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-300'
                }`}
              onClick={() => setActiveTab('direct')}
            >
              <span className="flex items-center justify-center">
                <FiMail className="mr-2" />
                Direct Contact
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          {/* Left Column - Contact Information */}
          <motion.div
            className="lg:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3 animate-pulse"></div>
                Contact Information
              </h3>

              <motion.div
                className="space-y-5 mb-8"
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: <FiMail className="text-lg md:text-xl" />, title: "Email", info: "work.aditya2010@gmail.com", link: "mailto:work.aditya2010@gmail.com" },
                  { icon: <FiPhone className="text-lg md:text-xl" />, title: "Phone", info: "+1 (123) 456-7890", link: "tel:+11234567890" },
                  { icon: <FiMapPin className="text-lg md:text-xl" />, title: "Location", info: "Mumbai, India", link: null }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-3 bg-gray-900/20 rounded-xl hover:bg-gray-800/30 transition-colors"
                    variants={fadeIn}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-300">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-cyan-400 transition-colors break-all"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-300 mb-4">Connect With Me</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: <FiGithub />, link: "https://github.com/cyberfortify/", label: "GitHub" },
                    { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/aditya-vk-professional/", label: "LinkedIn" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-700 flex items-center justify-center text-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-gray-900/30 border border-cyan-500/20 rounded-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-300">Current Availability</p>
                    <p className="text-sm text-gray-400">Open for new projects and collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 transition-all duration-500 ${activeTab !== 'form' ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <FiMessageSquare className="mr-3 text-cyan-400" />
                Send me a message
              </h3>

              {submitSuccess ? (
                <motion.div
                  className="bg-green-900/20 border border-green-700/50 rounded-xl p-5 mb-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/20 mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : submitError ? (
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-5 mb-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/20 mb-4">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Error Sending Message</h4>
                  <p className="text-gray-400">
                    There was a problem sending your message. Please try again later.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 pl-12 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-cyan-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:text-sm peer-placeholder-shown:text-base pointer-events-none"
                    >
                      Your Name
                    </label>
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-cyan-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 pl-12 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-cyan-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:text-sm peer-placeholder-shown:text-base pointer-events-none"
                    >
                      Your Email
                    </label>
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-cyan-400">
                      <FiMail className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 pl-12 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-cyan-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:text-sm peer-placeholder-shown:text-base pointer-events-none"
                  >
                    Subject
                  </label>
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 pl-12 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition peer resize-none"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-12 top-5 text-gray-500 peer-focus:text-cyan-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-sm peer-placeholder-shown:text-base pointer-events-none"
                  >
                    Your Message
                  </label>
                  <div className="absolute left-5 top-5 text-gray-500 peer-focus:text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center ${isSubmitting
                      ? 'bg-cyan-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90'
                    } transition-all shadow-lg shadow-cyan-500/20`}
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

            {/* Direct Contact Info */}
            <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 transition-all duration-500 ${activeTab !== 'direct' ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
                <FiMail className="mr-3 text-cyan-400" />
                Contact me directly
              </h3>

              <div className="space-y-6">
                <div className="p-5 bg-gray-900/30 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-4">
                      <FiMail className="text-lg" />
                    </div>
                    <h4 className="font-bold text-lg">Email Me</h4>
                  </div>
                  <p className="text-gray-400 mb-4">For project inquiries or collaborations</p>
                  <a
                    href="mailto:work.aditya2010@gmail.com"
                    className="inline-flex items-center px-5 py-2.5 bg-cyan-900/20 text-cyan-400 rounded-lg font-medium hover:bg-cyan-900/30 transition-colors"
                  >
                    <FiMail className="mr-2" />
                    work.aditya2010@gmail.com
                  </a>
                </div>

                <div className="p-5 bg-gray-900/30 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-4">
                      <FiPhone className="text-lg" />
                    </div>
                    <h4 className="font-bold text-lg">Call Me</h4>
                  </div>
                  <p className="text-gray-400 mb-4">Available for urgent inquiries or calls</p>
                  <a
                    href="tel:+11234567890"
                    className="inline-flex items-center px-5 py-2.5 bg-cyan-900/20 text-cyan-400 rounded-lg font-medium hover:bg-cyan-900/30 transition-colors"
                  >
                    <FiPhone className="mr-2" />
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center mb-3 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/30">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            <span className="text-cyan-400 font-mono tracking-widest text-xs md:text-sm">
              URGENT PROJECTS
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Have an <span className="text-cyan-400">emergency</span> project?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Need immediate assistance with a critical project? Contact me directly for priority support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+11234567890"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              <FiPhone className="mr-2" />
              Call Now
            </a>
            <a
              href="mailto:work.aditya2010@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-medium hover:bg-gray-700/50 transition-colors"
            >
              <FiMail className="mr-2" />
              Email Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;