import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring animations, dark mode, and interactive UI components.',
      image: 'portfolio.jpg',
      category: 'web',
      technologies: ['React.js', 'Tailwind CSS', 'Vite'],
      githubLink: 'https://github.com/Naveen-pro/portfilio_naveen',
      liveLink: '',
      features: [
        'Responsive design for all devices',
        'Dark/Light mode toggle',
        'Smooth animations and transitions',
        'Interactive UI components',
        'Optimized performance',
        'Accessibility features',
      ],
    },
    {
      id: 2,
      title: 'Event management system',
      description:"Developed a Django-based Event Management System featuring event categorization, scheduling, and administrative functionalities. Implemented models, views, and templates to enable efficient event creation, updating, and deletion within a user-friendly interface." ,
      image: 'event-management.jpg',
      category: 'web',
      technologies: ['Python', 'Django', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Naveen-pro/event-management-system',
      features: [
        'User Registration and Login – Allows users to sign up, log in, and manage their profiles securely',
        'Event Creation and Management – Admins can create, edit, and delete events with details like name, date, time, and description',
        'Event Listing and Details View – Users can browse a list of upcoming events and view detailed information for each event',
        'Event Registration – Users can register for events, and their participation is tracked in the system'
      ],
    },
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-dark">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Project Image */}
              <motion.div 
                className="h-56 bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.image ? (
                  <img 
                    src={`/src/assets/images/${project.image}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                ) : (
                  <motion.div 
                    className="text-6xl text-gray-400 dark:text-gray-500"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {project.category === 'data' ? <FaDatabase /> : <FaCode />}
                  </motion.div>
                )}
              </motion.div>
              
              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-2 font-heading"
                  whileHover={{ x: 5, color: "#0070f3" }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {project.title}
                </motion.h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(0, 112, 243, 0.2)" 
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.p 
                  className="mb-4 text-gray-600 dark:text-gray-300"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors"
                      aria-label="GitHub repository"
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: "#0070f3", 
                        color: "#ffffff" 
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <FaGithub className="text-lg" />
                    </motion.a>
                    <motion.a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors"
                      aria-label="Live demo"
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: "#0070f3", 
                        color: "#ffffff" 
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </motion.a>
                  </div>
                  
                  <motion.a 
                    href={`#project-${project.id}`}
                    className="text-primary"
                    whileHover={{ 
                      x: 3, 
                      textDecoration: "underline" 
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 