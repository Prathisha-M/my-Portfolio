import * as React from "react";
import { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const modernColors = {
    light: {
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#0f3460",
      highlight: "#e94560",
      text: "#1a1a2e",
      textLight: "#64748b",
      card: "rgba(255, 255, 255, 0.8)"
    },
    dark: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      primary: "#f8fafc",
      secondary: "#e2e8f0",
      accent: "#3b82f6",
      highlight: "#10b981",
      text: "#f8fafc",
      textLight: "#94a3b8",
      card: "rgba(15, 23, 42, 0.8)"
    }
  };

  const theme = isDarkMode ? modernColors.dark : modernColors.light;

  return (
    <div style={{ 
      background: theme.background,
      color: theme.text,
      minHeight: "100vh",
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: "relative"
    }}>
      <Header 
        isDarkMode={isDarkMode} 
        setDarkMode={setDarkMode} 
        theme={theme} 
        isScrolled={isScrolled} 
      />
      <About theme={theme} isDarkMode={isDarkMode} />
      <Skills theme={theme} isDarkMode={isDarkMode} />
      <Projects theme={theme} isDarkMode={isDarkMode} />
      <Contact theme={theme} isDarkMode={isDarkMode} />
      
      <Footer 
        isDarkMode={isDarkMode} 
        theme={theme} 
      />
    </div>
  );
};

export default App;