import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaServer, FaDesktop } from 'react-icons/fa';
import { useState } from 'react';
import profilePhoto from '../assets/images/photo (1).jpeg';

const Hero = () => {
  const [iconHovered, setIconHovered] = useState(false);

  return (
    <section id="home" className="w-full min-h-screen flex items-center pt-16 pb-12 content-overlay">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Symbol Column - replacing image with animated technology icons */}
          <motion.div 
            className="md:w-5/12 w-full mb-10 md:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onHoverStart={() => setIconHovered(true)}
              onHoverEnd={() => setIconHovered(false)}
            >
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-effect flex items-center justify-center overflow-hidden border-4 border-primary relative"
                animate={{ 
                  boxShadow: iconHovered 
                    ? "0 0 25px rgba(0, 112, 243, 0.6)" 
                    : "0 5px 15px rgba(0, 0, 0, 0.1)" 
                }}
              >
                {/* Profile Photo */}
                <img 
                  src="../assets/images/photo (1).jpeg"
                  alt="Naveen N" 
                  className="w-full h-full object-cover object-center"
                  style={{ borderRadius: "50%" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="md:w-7/12 w-full md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 p-6 card">
              <h2 className="text-xl font-semibold text-primary">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">Naveen N</h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-heading">Full-Stack Web Developer</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Recent Electronics and Communication Engineering graduate with experience in full-stack web development and data analysis. Skilled in Python, Django, SQL, and frontend technologies. Enthusiastic about the intersection of AI and software development, particularly how machine learning and data-driven systems can enhance user experiences and decision-making. Eager to contribute to innovative projects involving AI technologies and drive organizational growth through technical creativity.
              </p>
            
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <motion.a 
                  href="https://github.com/Naveen-pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/naveennanthakumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>
              
              {/* Call to Action */}
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#projects" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a 
                  href="/resume.pdf" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 