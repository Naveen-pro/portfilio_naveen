import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web developer Intern',
      company: '8Queens Software Technologies',
      location: 'Chennai, India',
      period: 'Oct 2024 - Dec 2024',
      responsibilities: [
        'Developed RESTful APIs using django for client projects',
        'Built responsive front-end interfaces with React.js, improving user experience',
        'Optimized database queries resulting in significant performance improvements',
        'Implemented user authentication and authorization systems',
      ],
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="bg-white dark:bg-dark p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <motion.div 
                  className="p-3 bg-primary/10 text-primary rounded-full self-start"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 15, 
                    backgroundColor: "rgba(0, 112, 243, 0.2)" 
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaBriefcase className="text-xl" />
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-bold"
                    whileHover={{ x: 5, color: "#0070f3" }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {exp.title}
                  </motion.h3>
                  
                  <div className="mt-2 space-y-2">
                    <motion.div 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaBuilding className="mr-2" />
                      <span>{exp.company}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.period}</span>
                    </motion.div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          whileHover={{ 
                            x: 8, 
                            color: "#0070f3", 
                            transition: { type: "spring", stiffness: 300 } 
                          }}
                        >
                          <FaChevronRight className="mt-1 mr-2 text-primary" />
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 