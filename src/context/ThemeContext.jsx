import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Always set dark mode
    setDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    
    // Listen for changes in reduced motion preference
    const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = (e) => {
      setReducedMotion(e.matches);
    };
    
    reducedMotionMediaQuery.addEventListener('change', handleReducedMotionChange);
    
    return () => {
      reducedMotionMediaQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Keep the toggle function for compatibility, but make it do nothing
  const toggleTheme = () => {
    // Do nothing - always stay in dark mode
    return;
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    localStorage.setItem('reducedMotion', !reducedMotion ? 'true' : 'false');
  };

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      toggleTheme, 
      reducedMotion, 
      toggleReducedMotion 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 