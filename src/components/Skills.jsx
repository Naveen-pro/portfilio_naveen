import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Python', level: 'Proficient', percentage: 90 },
        { name: 'JavaScript', level: 'Proficient', percentage: 65 },
        { name: 'HTML/CSS', level: 'Proficient', percentage: 85 },
        { name: 'SQL', level: 'Proficient', percentage: 90 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'Django', level: 'Proficient', percentage: 60 },
        { name: 'React.js', level: 'Proficient', percentage: 70 },
        { name: 'TailwindCSS', level: 'Familiar', percentage: 70 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git/GitHub', level: 'Proficient', percentage: 85 },
        { name: 'RESTful APIs', level: 'Proficient', percentage: 50 },

      ],
    },
    {
      title: 'AI & Data',
      icon: <FaDatabase />,
      skills: [
        { name: 'Data Analysis', level: 'Proficient', percentage: 50 },
        { name: 'Pandas/NumPy', level: 'Proficient', percentage: 25 },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const skillBarVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(59, 130, 246, 0)" 
    },
    hover: { 
      boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="section bg-white dark:bg-dark">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 bg-primary/10 text-primary rounded-full mr-4"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold font-heading">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                      {skill.level && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary/70 transition-colors duration-300">{skill.level}</span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        variants={skillBarVariants}
                        whileHover="hover"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 