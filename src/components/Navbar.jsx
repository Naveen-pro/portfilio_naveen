import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaWalking, FaRunning } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme, darkMode, toggleReducedMotion, reducedMotion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#about', label: 'About' },
    { path: '/#skills', label: 'Skills' },
    { path: '/#experience', label: 'Experience' },
    { path: '/#projects', label: 'Projects' },
    { path: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform">
          Naveen N
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a 
              key={link.label}
              href={link.path}
              className="font-medium relative group text-gray-200 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          
          <div className="flex items-center space-x-2">
            {/* Reduced Motion Toggle */}
            <motion.button 
              onClick={toggleReducedMotion}
              className="p-2 rounded-full bg-black hover:bg-black/80 transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Toggle reduced motion"
              title={reducedMotion ? "Enable animations" : "Reduce animations"}
            >
              {reducedMotion ? 
                <FaWalking className="text-green-600 group-hover:text-green-800 transition-colors" /> : 
                <FaRunning className="text-green-600 group-hover:text-green-800 transition-colors" />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button 
            onClick={toggleReducedMotion}
            className="p-2 mr-2 rounded-full bg-black hover:bg-black/80 transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle reduced motion"
          >
            {reducedMotion ? 
              <FaWalking className="text-green-600 group-hover:text-green-800 transition-colors" /> : 
              <FaRunning className="text-green-600 group-hover:text-green-800 transition-colors" />}
          </motion.button>
          
          <motion.button 
            onClick={toggleMenu}
            className="p-2 rounded-md bg-black hover:bg-black/80 transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? 
              <FaTimes className="text-green-600 group-hover:text-green-800 transition-colors" /> : 
              <FaBars className="text-green-600 group-hover:text-green-800 transition-colors" />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark/90 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.a 
                key={link.label}
                href={link.path}
                className="font-medium py-2 relative overflow-hidden group text-gray-200 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 