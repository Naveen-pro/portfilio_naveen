import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const MainContent = () => {
  const { darkMode, toggleTheme, reducedMotion, toggleReducedMotion } = useTheme();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Reduced loading time for better UX
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-dark">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-100">Loading...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full min-h-screen bg-dark text-gray-100 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar 
        toggleTheme={toggleTheme} 
        darkMode={darkMode} 
        toggleReducedMotion={toggleReducedMotion}
        reducedMotion={reducedMotion}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
