import React, { useState } from "react";
import { ExternalLink, Github, Play, Apple, MapPin, Star, Users, Calendar } from "lucide-react";

const Projects = ({ theme, isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Smart Laundry App",
      description: "A user-friendly laundry pickup and delivery mobile app that enhances customer experience and service efficiency.",
      category: "mobile",
      features: [
        "Google Maps API integration for real-time tracking",
        "Firebase Cloud Messaging for push notifications",
        "Intuitive UI/UX with responsive design",
        "Scheduling, order tracking, and status updates"
      ],
      technologies: ["React Native", "Google Maps API", "Firebase", "JavaScript"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&hl=en_IN",
      appStoreLink: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
      image: "https://play-lh.googleusercontent.com/FdZRkVVWRcSpd8UAMXTSqFjo6jsIXwBub8EfnSJvHerwwok1svg1BW0YtD4FLbvMmIjk=w416-h235-rw",
      stats: {
        downloads: "1K+",
        rating: 4.5,
        users: "1K+"
      }
    },
    {
      id: 2,
      title: "Smart Laundry Business App",
      description: "Business analytics app with order summaries, interactive charts, and delivery management features.",
      category: "mobile",
      features: [
        "Business analytics with interactive charts",
        "Google Maps API for real-time navigation",
        "Firebase push notifications",
        "WhatsApp integration for billing summaries",
        "Dynamic pricing and service configuration"
      ],
      technologies: ["React Native", "Google Maps API", "Firebase", "Chart.js"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&hl=en_IN",
      appStoreLink: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
      image: "https://play-lh.googleusercontent.com/L2G-25aETHKH_Uz0YaKHEHNhWtkyIH8RgHhUNJxEoxxgQQpNtv6JeAkZXk9BKOIfd6Q=w416-h235-rw",
      stats: {
        downloads: "5K+",
        rating: 4.7,
        users: "2K+"
      }
    },
    {
      id: 3,
      title: "TPV App",
      description: "Mobile app for business networking, enabling professionals to connect and manage chapters.",
      category: "mobile",
      features: [
        "Secure user authentication with OTP verification",
        "Star rating system for referrals",
        "Attendance tracking for meetings",
        "Payment gateway integration",
        "SQL database with connection pooling"
      ],
      technologies: ["React Native", "SQL", "Node.js", "Payment Gateway"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.tpv_app&hl=en_IN",
      image: "https://play-lh.googleusercontent.com/VCW6jQyUkmHjsdFWbR96siI3jaXRyPdeCihb6QdrNDUMKkMKtPCdpuZnJBoaTdRs90U=w416-h235-rw",
      stats: {
        downloads: "2K+",
        rating: 4.3,
        users: "1K+"
      }
    },
    {
      id: 4,
      title: "College Bus Tracking System",
      description: "Android application to track college bus location in real-time with notifications.",
      category: "mobile",
      features: [
        "Real-time bus tracking with Google Maps",
        "Dual login system for drivers and students",
        "Push notifications for bus proximity alerts",
        "User-friendly interface with timely alerts"
      ],
      technologies: ["Android Studio", "Firebase", "Google Maps API", "Java"],
      image: "https://topresearchjournal.wordpress.com/wp-content/uploads/2019/04/bus2.jpg",
      stats: {
        users: "500+",
        rating: 4.8
      }
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "700", 
          marginBottom: "1rem",
          background: `linear-gradient(135deg, ${theme.accent}, ${theme.highlight})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          My Projects
        </h2>
        <p style={{ 
          color: theme.textLight, 
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Here are some of the mobile applications I've developed with a focus on user experience and performance.
        </p>
      </div>

      {/* Projects grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        {filteredProjects.map(project => (
          <div key={project.id} style={{
            background: theme.card,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* Project image */}
            <div style={{ 
              height: "200px", 
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                display: "flex",
                gap: "0.5rem"
              }}>
                {project.playStoreLink && (
                  <a 
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "#fff",
                      padding: "0.5rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#3B82F6";
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(0, 0, 0, 0.7)";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <Play size={16} />
                  </a>
                )}
                {project.appStoreLink && (
                  <a 
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "#fff",
                      padding: "0.5rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#000";
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(0, 0, 0, 0.7)";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <Apple size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Project content */}
            <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "0.5rem",
                color: theme.text
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                color: theme.textLight, 
                marginBottom: "1rem",
                lineHeight: "1.6"
              }}>
                {project.description}
              </p>
              
              {/* Stats */}
              {/* {project.stats && (
                <div style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap"
                }}>
                  {project.stats.downloads && (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.9rem",
                      color: theme.textLight
                    }}>
                      <Download size={16} />
                      <span>{project.stats.downloads}</span>
                    </div>
                  )}
                  
                  {project.stats.rating && (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.9rem",
                      color: theme.textLight
                    }}>
                      <Star size={16} fill="currentColor" />
                      <span>{project.stats.rating}</span>
                    </div>
                  )}
                  
                  {project.stats.users && (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.9rem",
                      color: theme.textLight
                    }}>
                      <Users size={16} />
                      <span>{project.stats.users}</span>
                    </div>
                  )}
                </div>
              )} */}
              
              {/* Features list */}
              <div style={{ marginBottom: "1.5rem", flexGrow: 1 }}>
                <h4 style={{ 
                  fontSize: "1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.5rem",
                  color: theme.text
                }}>
                  Key Features:
                </h4>
                <ul style={{ 
                  paddingLeft: "1.2rem",
                  color: theme.textLight
                }}>
                  {project.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "0.4rem", fontSize: "0.9rem" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ 
                  fontSize: "1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.5rem",
                  color: theme.text
                }}>
                  Technologies:
                </h4>
                <div style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  gap: "0.5rem" 
                }}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={{
                      padding: "0.3rem 0.8rem",
                      borderRadius: "50px",
                      fontSize: "0.8rem",
                      background: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                      color: theme.text
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project links */}
              <div style={{ 
                display: "flex", 
                gap: "1rem",
                marginTop: "auto"
              }}>
                {(project.playStoreLink || project.appStoreLink) && (
                  <a 
                    href={project.playStoreLink || project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "8px",
                      background: `linear-gradient(135deg, ${theme.accent}, ${theme.highlight})`,
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      fontSize: "0.9rem"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <ExternalLink size={16} />
                    View App
                  </a>
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "8px",
                      background: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                      color: theme.text,
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      fontSize: "0.9rem"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Download icon component (since it's not in lucide-react)
const Download = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default Projects;