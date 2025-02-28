import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Home, User, Briefcase, Mail,Building2 , Github, Linkedin, Twitter, Instagram } from "lucide-react";
import MobileDark from './assets/mobile_Dark.png';
import MobileLight from './assets/mobile_Light.png';
const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const colors = {
    light: {
      background: "#FFF2F2",
      primary: "#2D336B",
      secondary: "#7886C7",
      accent: "#A9B5DF",
      text: "#2D336B",
      textLight: "#7886C7",
      card: "#F5E8E8"
    },
    dark: {
      background: "#2D336B",
      primary: "#FFF2F2",
      secondary: "#A9B5DF",
      accent: "#7886C7",
      text: "#FFF2F2",
      textLight: "#A9B5DF",
      card: "#373C6E"
    }
  };

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
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const theme = isDarkMode ? colors.dark : colors.light;

  const navItems = [
    { name: "Home", href: "#", icon: <Home size={16} /> },
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} /> }
  ];

  // Social links
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Prathisha-M", icon: <Github size={18} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/prathisha-m", icon: <Linkedin size={18} /> },
    { name: "Gmail", href: "mailto:prathishamurugesan@gmail.com", icon: <Mail size={18} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={18} /> }
  ];

  return (
    <div style={{ 
      backgroundColor: theme.background, 
      color: theme.text,
      minHeight: "100vh",
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      {/* Navbar */}
      <nav style={{ 
        backgroundColor: isScrolled ? (isDarkMode ? "#252a5c" : "#f5e8e8") : "transparent",
        boxShadow: isScrolled ? `0 4px 6px -1px ${theme.accent}40` : "none",
        padding: isScrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }} className="flex items-center">
        {/* Logo - Left */}
        <div className="flex-none">
          <a href="#" style={{ 
            fontSize: "1.5rem", 
            fontWeight: 700,
            textDecoration: "none", 
            color: theme.primary,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span style={{ 
              backgroundColor: theme.accent,
              color: isDarkMode ? "#2D336B" : "#FFF2F2",
              borderRadius: "50%",
              width: "2rem",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700
            }}>P</span>
            <span>My Portfolio</span>
          </a>
        </div>
        
        {/* Desktop Menu - Center */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                style={{ 
                  color: theme.primary, 
                  fontWeight: 500,
                  position: "relative",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }} 
                className="hover:opacity-80 nav-link"
                onClick={closeMenu}
              >
                {item.icon}
                {item.name}
                <span style={{
                  position: "absolute",
                  bottom: "-0.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0%",
                  height: "2px",
                  backgroundColor: theme.accent,
                  transition: "width 0.3s ease"
                }} className="nav-indicator"></span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Right Section - Social Links + Dark Mode + Mobile Menu */}
        <div className="flex items-center ml-auto">
          {/* Social Links - Desktop Only */}
          <div className="hidden md:flex items-center space-x-3 mr-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                style={{ 
                  color: theme.primary,
                  transition: "transform 0.2s ease, color 0.2s ease"
                }} 
                title={social.name}
                className="hover:text-accent hover:transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            style={{ 
              backgroundColor: theme.accent, 
              color: isDarkMode ? "#2D336B" : "#FFF2F2",
              borderRadius: "50%",
              border: "none",
              padding: "0.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            style={{ 
              color: theme.primary,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              marginLeft: "1rem"
            }} 
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{ 
          backgroundColor: isDarkMode ? "#252a5cee" : "#f5e8e8ee",
          backdropFilter: "blur(10px)",
          padding: "5rem 2rem 2rem",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          transition: "all 0.3s ease"
        }} className="md:hidden">
          {/* Navigation Items in Mobile Menu */}
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              style={{ 
                color: theme.primary,
                fontWeight: 600,
                fontSize: "1.5rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem"
              }} 
              className="hover:opacity-80"
              onClick={closeMenu}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          
          {/* Social Links in Mobile Menu */}
          <div style={{ 
            display: "flex", 
            gap: "1.5rem", 
            marginTop: "2rem" 
          }}>
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                style={{ 
                  color: theme.primary,
                  backgroundColor: theme.accent,
                  borderRadius: "50%",
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease"
                }} 
                className="hover:transform hover:scale-110"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section id="about" style={{ 
        textAlign: "center",
        padding: "8rem 1.5rem 5rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{  
  fontSize: "3rem", 
  fontWeight: 700, 
  color: theme.primary,
  marginBottom: "1.5rem"
}}>
  Hi, I'm Prathisha 👋
</h2>
        
        <div style={{ 
          color: theme.textLight,
          fontSize: "1.25rem",
          maxWidth: "800px",
          margin: "0 auto 2rem",
          lineHeight: 1.6,
          textAlign: "left"
        }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "2rem" }}>
  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
    A Full Stack React Native Developer specializing in hybrid mobile app development and backend integration with Node.js and DBMS.
  </p>
  <div className="group w-full max-w-[400px] mx-auto mb-4 overflow-hidden">
  <img
    src={isDarkMode ? MobileLight : MobileDark}
    alt="Mobile View"
    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
</div>
  <p style={{ textAlign: "justify" }}>
    I am an <strong>enthusiastic</strong> and <strong>quick learner</strong> with a strong <strong>problem-solving mindset</strong>. 
    My expertise lies in <strong>React Native</strong>, <strong>Node.js</strong>, and <strong>DBMS</strong>, 
    enabling me to build seamless <strong>hybrid mobile applications</strong> with efficient backend integrations.
  </p>
</div>

<div style={{ marginBottom: "2rem" }}>
  <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: theme.primary, textAlign: "center", marginBottom: "3rem" }}>
    Experience
  </h2>
  <div style={{ display: "flex", justifyContent: "center" }}> 
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li style={{ marginBottom: "1rem" }}>
        <strong>
          <a 
            href="https://smartzensolutions.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >  
            <span style={{ flexShrink: 0 }}>🏢</span> SmartZEN Solutions Private Limited
          </a>
        </strong>Hybrid React Native Developer
        <span style={{ 
                    display: "inline-block", 
                    marginLeft: "0.5rem",
                    fontSize: "0.9rem",
                    color: theme.secondary
                  }}>
                   (06/2024 - Present)
                  </span> 
        <ul>
          <li>Implemented push notifications for Android using react-native-push-notification.</li>
          <li>Integrated Google Maps for location-based services.</li>
          <li>Developed a real-time chat feature with authentication.</li>
          <li>Worked on user authentication and secure API development.</li>
          <li>Designed and optimized SQL database queries for efficient data retrieval.</li>
        </ul>
      </li>
      <li>
        <strong>
          <a 
            href="https://www.akinfopark.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
          > 
            <span style={{ flexShrink: 0 }}>🏢</span>  AK Infopark Private Limited
          </a> 
        </strong>Full-Stack Developer
        <span style={{ 
                    display: "inline-block", 
                    marginLeft: "0.5rem",
                    fontSize: "0.9rem",
                    color: theme.secondary
                  }}>
                   (03/2024 - 04/2024)
                  </span> 
        <ul>
          <li>Developed a simple e-commerce website for product listing.</li>
          <li>Implemented add-to-cart functionality using React and Redux.</li>
          <li>Built a REST API for managing products and orders.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<div style={{ marginBottom: "2rem" }}>
  <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: theme.primary, textAlign: "center", marginBottom: "3rem" }}>Education</h2>
  <ul style={{ 
    listStyleType: "none", 
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  }}>
    <li style={{ 
      display: "flex", 
      alignItems: "flex-start",
      gap: "0.5rem"
    }}>
      <span style={{ flexShrink: 0 }}>🎓</span> 
      <div>
        <strong>Master of Technology</strong> 
        <span style={{ fontSize: "0.85rem", color: theme.secondary }}> (Information Technology)</span> - CSI Institute of Technology 
        <span style={{ 
          display: "inline-block", 
          marginLeft: "0.5rem",
          fontSize: "0.9rem",
          color: theme.secondary
        }}>
          (08/2024 - Present)
        </span>
      </div>
    </li>
    <li style={{ 
      display: "flex", 
      alignItems: "flex-start",
      gap: "0.5rem"
    }}>
      <span style={{ flexShrink: 0 }}>🎓</span> 
      <div>
        <strong>Bachelor of Engineering</strong> 
        <span style={{ fontSize: "0.85rem", color: theme.secondary }}> (Computer Science)</span> - Loyola Institute of Technology and Science 
        <span style={{ 
          display: "inline-block", 
          marginLeft: "0.5rem",
          fontSize: "0.9rem",
          color: theme.secondary
        }}>
          (08/2020 - 08/2024, 86%)
        </span>
      </div>
    </li>
    <li style={{ 
      display: "flex", 
      alignItems: "flex-start",
      gap: "0.5rem"
    }}>
      <span style={{ flexShrink: 0 }}>🎓</span> 
      <div>
        <strong>12th (Higher Secondary)</strong> 
        <span style={{ fontSize: "0.85rem", color: theme.secondary }}> (Computer Science)</span> - Vivekananda Kendra Matric Hr. Sec School 
        <span style={{ 
          display: "inline-block", 
          marginLeft: "0.5rem",
          fontSize: "0.9rem",
          color: theme.secondary
        }}>
          (08/2019 - 08/2020, 70%)
        </span>
      </div>
    </li>
    <li style={{ 
      display: "flex", 
      alignItems: "flex-start",
      gap: "0.5rem"
    }}>
      <span style={{ flexShrink: 0 }}>🎓</span> 
      <div>
        <strong>10th SSLC</strong> - Annai Matric Hr. Sec School 
        <span style={{ 
          display: "inline-block", 
          marginLeft: "0.5rem",
          fontSize: "0.9rem",
          color: theme.secondary
        }}>
          (08/2017 - 08/2018, 88%)
        </span>
      </div>
    </li>
  </ul>
</div>
          
          <div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: theme.primary, textAlign: "center", marginBottom: "3rem" }}>Achievements</h2>

            <ul style={{ 
              listStyleType: "none", 
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}>
              <li style={{ 
                display: "flex", 
                alignItems: "flex-start",
                gap: "0.5rem"
              }}>
                <span style={{ flexShrink: 0 }}>🏆</span> 
                <div>
                  <strong>Progressive Visionary</strong> - Loyola Institute of Technology and Science 
                  <span style={{ 
                    display: "inline-block", 
                    marginLeft: "0.5rem",
                    fontSize: "0.9rem",
                    color: theme.secondary
                  }}>
                    (2023-2024)
                  </span>
                </div>
              </li>
              <li style={{ 
                display: "flex", 
                alignItems: "flex-start",
                gap: "0.5rem"
              }}>
                <span style={{ flexShrink: 0 }}>🥇</span> 
                <div>
                  <strong>First Rank</strong> - Loyola Institute of Technology and Science 
                  <span style={{ 
                    display: "inline-block", 
                    marginLeft: "0.5rem",
                    fontSize: "0.9rem",
                    color: theme.secondary
                  }}>
                    (2020-2024)
                  </span>
                </div>
              </li>
              <li style={{ 
                display: "flex", 
                alignItems: "flex-start",
                gap: "0.5rem"
              }}>
                <span style={{ flexShrink: 0 }}>📖</span> 
                <div>
                  <strong>Best Academic Performer</strong> - Loyola Institute of Technology and Science 
                  <span style={{ 
                    display: "inline-block", 
                    marginLeft: "0.5rem",
                    fontSize: "0.9rem",
                    color: theme.secondary
                  }}>
                    (2022-2023)
                  </span>
                </div>
              </li>
              <li style={{ 
                display: "flex", 
                alignItems: "flex-start",
                gap: "0.5rem"
              }}>
                <span style={{ flexShrink: 0 }}>🎖️</span> 
                <div>
                  <strong>Elite & Silver Badge</strong> - Programming in Java (NPTEL) 
                  <span style={{ 
                    display: "inline-block", 
                    marginLeft: "0.5rem",
                    fontSize: "0.9rem",
                    color: theme.secondary
                  }}>
                    (2021-2022)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <button 
  style={{ 
    backgroundColor: theme.secondary, 
    color: isDarkMode ? "#2D336B" : "#FFF2F2",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    border: "none",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    marginTop: "1rem",
    transition: "transform 0.2s ease, opacity 0.2s ease"
  }} 
  className="hover:opacity-90 hover:transform hover:scale-105"
  onClick={() => window.open("https://github.com/Prathisha-M", "_blank")}
>
  View My Work
</button>
      </section>
      
      <section id="projects" style={{ padding: "5rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
  <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: theme.primary, textAlign: "center", marginBottom: "3rem" }}>Projects</h2>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "4rem" }}>
    {[
      {
        "title": "📦 CRUD Operations in React Native",
        "description": "Built a React Native app with Create, Read, Update, Delete functionality. Integrated Express.js and SQL for backend operations.",
        "link": "https://github.com/Prathisha-M/CRUD-operation-in-React-Native",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-crudapp-mobiledevelopment-activity-7217807043187916800-7URy"
      },
      {
        "title": "🖼️ WhatsApp Profile Picture Editor Clone",
        "description": "Developed a WhatsApp-like profile picture editor with cropping and filtering options. Used React Native Reanimated for smooth animations.",
        "link": "https://github.com/Prathisha-M/Whatsapp-Profile-Clone",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-mobileappdevelopment-smartzensolutions-activity-7219347441391685632-8oGe"
      },
      {
        "title": "📤 File Uploader with WhatsApp Notification",
        "description": "Created an API-based file uploader with Multer (Express.js). Sent a WhatsApp notification after successful upload.",
        "link": "https://github.com/Prathisha-M/file-uploader-with-whatsapp-msg-notifier",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-appdevelopment-api-activity-7220069113895776258-hT1Q"
      },
      {
        "title": "🔢 WhatsApp OTP-Based Login System",
        "description": "Implemented an OTP-based authentication system via WhatsApp API. Integrated React Native OTP Input for seamless login.",
        "link": "https://github.com/Prathisha-M/Login-via-WhatsappOTP",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-appdevelopment-whatsapplogin-activity-7225116790425542656-c049"
      },
      {
        "title": "🛒 Shopping Cart with Redux",
        "description": "Built a React Native shopping app with Redux for state management. Implemented cart functionality and push notifications.",
        "link": "https://github.com/Prathisha-M/Redux-Shopping-cart-and-Drawer-Navigation",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-redux-mobileappdevelopment-activity-7224392131971362817-t0Q0"
      },
      {
        "title": "🔔 React Native Login with Push Notification",
        "description": "Developed a login system with React Native Push Notifications. Integrated Firebase for authentication and notifications.",
        "link": "https://github.com/Prathisha-M/ReactNative-login-Notification-store-deviceId",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-mobileappdevelopment-studentauthentication-activity-7229075218109972480-m1wI"
      },
      {
        "title": "💸 PayGuard with Voice Transaction Alerts",
        "description": "Developed a React Native app that listens for bank-related SMS alerts, filters key transaction messages, and converts them into speech for real-time notifications. Includes play and stop controls for voice alerts.",
        "link": "https://github.com/Prathisha-M/react-native-sms-alerts-to-speech",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-mobileappdevelopment-fintech-activity-7231327561849397250-tU4j"
      },
      {
        "title": "🌍 Business Masters of World",
        "description": "A platform connecting business professionals, enabling seamless business interactions and maintaining a 5-star rating system for credibility."
      },
      {
        "title": "🩺 Doctor-Patient App with Location & Chat",
        "description": "Created an app for patients to connect with doctors, featuring a chat system using WebSockets and an appointment booking system. Integrated Google Maps API for location-based appointments.",
        "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-hybridapp-doctorpatientapp-activity-7300919187546198016-SJCj"
      }
    ].map((project, index) => (
      <div 
        key={index} 
        style={{ 
          backgroundColor: theme.card, 
          borderLeft: `4px solid ${theme.secondary}`, 
          borderRadius: "0.5rem", 
          padding: "1.5rem", 
          boxShadow: `0 10px 15px -3px ${theme.accent}30`, 
          transition: "transform 0.3s ease", 
          height: "100%", 
          display: "flex", 
          flexDirection: "column",
        }} 
        className="hover:transform hover:scale-105"
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: theme.primary, marginBottom: "0.75rem" }}>{project.title}</h3>
        <p style={{ color: theme.textLight, lineHeight: 1.6, flex: 1 }}>{project.description}</p>
        {project.title !== "🌍 Business Masters of World" && (
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
            <a 
              href={project.linkedin} 
              style={{ 
                color: theme.primary, 
                borderBottom: `2px solid ${theme.secondary}`, 
                paddingBottom: "0.25rem", 
                textDecoration: "none", 
                fontWeight: 500, 
                display: "inline-block"
              }} 
              className="hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details
            </a>
            {project.link && (
              <a 
                href={project.link} 
                style={{ 
                  color: theme.primary, 
                  borderBottom: `2px solid ${theme.secondary}`, 
                  paddingBottom: "0.25rem", 
                  textDecoration: "none", 
                  fontWeight: 500, 
                  display: "inline-block"
                }} 
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                &lt;code&gt;
              </a>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
</section>
      <section style={{ 
        backgroundColor: theme.card,
        padding: "5rem 1.5rem"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: 700, 
            color: theme.primary,
            textAlign: "center",
            marginBottom: "3rem"
          }}>My Skills</h2>
          
          <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "1.5rem",
    maxWidth: "900px",
    margin: "0 auto",
  }}
>
  {[
      { name: "HTML/CSS", emoji: "🌐" },
      { name: "JavaScript", emoji: "⚡" },
      { name: "React", emoji: "⚛️" },
      { name: "React Native", emoji: "📱" },
      { name: "Tailwind CSS", emoji: "🎨" },
      { name: "Node.js", emoji: "🌿" },
      { name: "Express.js", emoji: "🚀" },
      { name: "API Development", emoji: "🔗" },
      { name: "Authentication", emoji: "🔑" },
      { name: "Authorization", emoji: "🛡️" },
      { name: "API Integration", emoji: "🔄" },
      { name: "WebSocket", emoji: "📡" },
      { name: "Firebase", emoji: "🔥" },
      { name: "Postman", emoji: "📩" },
      { name: "Swagger", emoji: "📜" },
      { name: "Google Maps API", emoji: "🗺️" },
      { name: "SQL", emoji: "🗄️" },
      { name: "MySQL", emoji: "🐬" },
      { name: "DBMS", emoji: "🛢️" },
      { name: "Java", emoji: "☕" },
      { name: "Python", emoji: "🐍" },
      { name: "C", emoji: "🔵" },
      { name: "C++", emoji: "🚀" },
      { name: "Git & GitHub", emoji: "🐙" }   
  ].map((skill) => (
    <div
      key={skill.name}
      style={{
        backgroundColor: theme.accent,
        color: isDarkMode ? "#2D336B" : "#FFF2F2",
        padding: "1rem",
        borderRadius: "0.5rem",
        textAlign: "center",
        fontWeight: 500,
        fontSize: "1rem",
        transition: "transform 0.2s ease",
      }}
      className="hover:transform hover:scale-105"
    >
      {skill.emoji} {skill.name}
    </div>
  ))}
</div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" style={{ 
        textAlign: "center",
        padding: "5rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          fontWeight: 700, 
          color: theme.primary,
          marginBottom: "1.5rem"
        }}>Get in Touch</h2>
        
        <p style={{ 
          color: theme.textLight,
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto 2rem",
          lineHeight: 1.6
        }}>
          I’m always open to collaborating on new projects and ideas. Feel free to reach out to discuss potential opportunities!
        </p>
        
        <a href="mailto:prathishamurugesan@gmail.com" style={{ 
          backgroundColor: theme.secondary,
          color: isDarkMode ? "#2D336B" : "#FFF2F2",
          padding: "0.75rem 2rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1rem",
          display: "inline-block",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease, opacity 0.2s ease"
        }} className="hover:opacity-90 hover:transform hover:scale-105">
          Let's connect
        </a>
      </section>
      
      {/* Footer */}
      <footer
  style={{
    backgroundColor: isDarkMode ? "#1F2455" : "#F5E8E8",
    padding: "2rem 1.5rem",
    textAlign: "center",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      marginBottom: "1rem",
    }}
  >
    <a
      href="https://github.com/Prathisha-M"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: theme.secondary,
        textDecoration: "none",
        fontWeight: 500,
        transition: "opacity 0.2s ease",
      }}
      className="hover:opacity-80"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/prathisha-m"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: theme.secondary,
        textDecoration: "none",
        fontWeight: 500,
        transition: "opacity 0.2s ease",
      }}
      className="hover:opacity-80"
    >
      LinkedIn
    </a>

    <a
      href="mailto:prathishamurugesan@gmail.com"
      style={{
        color: theme.secondary,
        textDecoration: "none",
        fontWeight: 500,
        transition: "opacity 0.2s ease",
      }}
      className="hover:opacity-80"
    >
      Email
    </a>

    <a
      href="#"
      style={{
        color: theme.secondary,
        textDecoration: "none",
        fontWeight: 500,
        transition: "opacity 0.2s ease",
      }}
      className="hover:opacity-80"
    >
      Instagram
    </a>
  </div>

  <p
    style={{
      color: theme.textLight,
      fontSize: "0.875rem",
    }}
  >
    &copy; 2025 Prathisha. All Rights Reserved.
  </p>
</footer>
    </div>
  );
};

export default App;