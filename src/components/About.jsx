import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="about" className="py-16 content-overlay">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Professional Summary Column */}
          <motion.div variants={itemVariants} className="card col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-6 font-heading">
              Professional Summary
            </h3>
            <p className="mb-4 leading-relaxed">
              I am a recent Electronics and Communication Engineering graduate with experience in full-stack web development and data analysis. 
              My technical skills include Python, Django, SQL, and various frontend technologies that I've applied in both academic and professional projects.
            </p>
            <p className="mb-4 leading-relaxed">
              I am particularly enthusiastic about the intersection of AI and software development. I believe that machine learning and 
              data-driven systems can significantly enhance user experiences and improve decision-making processes across industries.
            </p>
            <p className="leading-relaxed">
              My goal is to contribute to innovative projects involving AI technologies and drive organizational growth through technical creativity.
              I continuously explore new technologies and methodologies to expand my skill set and bring fresh perspectives to software development challenges.
            </p>
          </motion.div>
          
          {/* Education Column */}
          <motion.div variants={itemVariants} className="card col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-6 font-heading">
              Education
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex flex-col md:flex-row"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-primary text-xl mr-2" />
                    <span className="font-medium">2020 - 2024</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-medium font-heading">Bachelor of Engineering in Electronics and Communication</h4>
                  <p className="text-primary">St Joseph College of Engineering, Chennai, Tamil Nadu</p>
                  <p className="mt-1">Graduated with 72%.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 