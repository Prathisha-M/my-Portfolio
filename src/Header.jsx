import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Home, User, Briefcase, Mail, Github, Linkedin, Twitter, Instagram, Code2 } from "lucide-react";

const Header = ({ isDarkMode, setDarkMode, theme, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  // Modern color scheme
  const modernColors = {
    light: {
      background: "rgba(255, 255, 255, 0.95)",
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#0f3460",
      highlight: "#e94560",
      text: "#1a1a2e",
      textMuted: "#64748b",
      border: "rgba(148, 163, 184, 0.2)",
      glass: "rgba(255, 255, 255, 0.1)"
    },
    dark: {
      background: "rgba(15, 23, 42, 0.95)",
      primary: "#f8fafc",
      secondary: "#e2e8f0",
      accent: "#3b82f6",
      highlight: "#10b981",
      text: "#f8fafc",
      textMuted: "#94a3b8",
      border: "rgba(148, 163, 184, 0.1)",
      glass: "rgba(0, 0, 0, 0.2)"
    }
  };

  const currentTheme = isDarkMode ? modernColors.dark : modernColors.light;

  const navItems = [
    { name: "Home", href: "#", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> }
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Prathisha-M", icon: <Github size={20} />, color: "#333" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/prathisha-m", icon: <Linkedin size={20} />, color: "#0077b5" },
    { name: "Gmail", href: "mailto:prathishamurugesan@gmail.com", icon: <Mail size={20} />, color: "#ea4335" }
  ];

  return (
    <>
      <nav 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled ? currentTheme.background : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? `1px solid ${currentTheme.border}` : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "0 1rem"
        }}
      >
        <div 
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: isScrolled ? "70px" : "80px",
            transition: "height 0.3s ease"
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "45px",
                height: "45px",
                background: `linear-gradient(135deg, ${currentTheme.accent}, ${currentTheme.highlight})`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "700",
                fontSize: "1.2rem",
                boxShadow: `0 8px 25px ${currentTheme.accent}40`
              }}
            >
              <Code2 size={24} />
            </div>
            <div>
              <h1 
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: currentTheme.primary,
                  margin: 0,
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Prathisha
              </h1>
              <p 
                style={{
                  fontSize: "0.8rem",
                  color: currentTheme.textMuted,
                  margin: 0,
                  fontWeight: "500"
                }}
              >
                Software Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div 
            style={{ 
              display: "none",
              alignItems: "center",
              gap: "2rem"
            }} 
            className="md:flex"
          >
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: currentTheme.textMuted,
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}
                className="nav-item"
                onMouseEnter={(e) => {
                  e.target.style.color = currentTheme.primary;
                  e.target.style.background = currentTheme.glass;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = currentTheme.textMuted;
                  e.target.style.background = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Social Links - Desktop */}
            <div 
              style={{ 
                display: "none",
                alignItems: "center",
                gap: "0.5rem"
              }} 
              className="md:flex"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    color: currentTheme.textMuted,
                    transition: "all 0.3s ease",
                    position: "relative"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = social.color;
                    e.target.style.background = currentTheme.glass;
                    e.target.style.transform = "translateY(-2px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = currentTheme.textMuted;
                    e.target.style.background = "transparent";
                    e.target.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                border: "none",
                background: `linear-gradient(135deg, ${currentTheme.accent}, ${currentTheme.highlight})`,
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                boxShadow: `0 4px 15px ${currentTheme.accent}40`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px) rotate(180deg)";
                e.target.style.boxShadow = `0 8px 25px ${currentTheme.accent}60`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) rotate(0deg)";
                e.target.style.boxShadow = `0 4px 15px ${currentTheme.accent}40`;
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                border: `2px solid ${currentTheme.border}`,
                background: currentTheme.glass,
                color: currentTheme.primary,
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)"
              }}
              className="md:hidden flex"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${currentTheme.background}f0, ${currentTheme.glass}f0)`,
            backdropFilter: "blur(20px)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem",
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          className="md:hidden"
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: currentTheme.primary,
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: "600",
                padding: "1rem 2rem",
                borderRadius: "16px",
                background: currentTheme.glass,
                border: `1px solid ${currentTheme.border}`,
                minWidth: "200px",
                justifyContent: "flex-start",
                transition: "all 0.3s ease",
                transform: `translateY(${isMenuOpen ? 0 : 50}px)`,
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {item.icon}
              {item.name}
            </a>
          ))}

          {/* Mobile Social Links */}
          <div 
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
              transform: `translateY(${isMenuOpen ? 0 : 50}px)`,
              opacity: isMenuOpen ? 1 : 0,
              transition: "all 0.3s ease 400ms"
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "55px",
                  height: "55px",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                  color: social.color,
                  border: `2px solid ${social.color}30`,
                  transition: "all 0.3s ease"
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, ${currentTheme.accent}, ${currentTheme.highlight});
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-item:hover::before {
          width: 80%;
        }

        @media (max-width: 768px) {
          .md\\:flex {
            display: none !important;
          }
          .md\\:hidden {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;