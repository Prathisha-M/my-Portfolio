import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  ExternalLink,
  Code,
  Smartphone,
  Server,
  Database,
  MapPin,
  Calendar,
  Award,
  ChevronRight,
  Github,
  Download
} from 'lucide-react';

const MobileDark = 'https://cdn-icons-gif.flaticon.com/17122/17122397.gif';
const MobileLight = 'https://cdn-icons-gif.flaticon.com/17122/17122361.gif';

const About = ({ theme, isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      id: 1,
      company: "SmartZEN Solutions Private Limited",
      role: "Software Developer",
      duration: "06/2024 - Present",
      location: "Remote",
      website: "https://smartzensolutions.com/",
      achievements: [
        "Implemented push notifications for Android using react-native-push-notification",
        "Integrated Google Maps for location-based services",
        "Developed a real-time chat feature with authentication",
        "Worked on user authentication and secure API development",
        "Designed and optimized SQL database queries for efficient data retrieval"
      ],
      skills: ["React Native", "Node.js", "SQL", "Authentication", "Google Maps API"]
    },
    {
      id: 2,
      company: "AK Infopark Private Limited",
      role: "React Full-Stack Developer Intern",
      duration: "03/2024 - 04/2024",
      location: "Chennai, India",
      website: "https://www.akinfopark.com/",
      achievements: [
        "Developed a simple e-commerce website for product listing",
        "Implemented add-to-cart functionality using React and Redux",
        "Built a REST API for managing products and orders"
      ],
      skills: ["React", "Redux", "REST API", "E-commerce", "Full-Stack"]
    }
  ];

  const education = [
    {
      degree: "Master of Technology",
      field: "Information Technology",
      institution: "CSI Institute of Technology",
      duration: "08/2024 - Present",
      status: "Current",
      grade: null
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "Loyola Institute of Technology and Science",
      duration: "08/2020 - 08/2024",
      status: "Completed",
      grade: "86%"
    },
    {
      degree: "12th (Higher Secondary)",
      field: "Computer Science",
      institution: "Vivekananda Kendra Matric Hr. Sec School",
      duration: "08/2019 - 08/2020",
      status: "Completed",
      grade: "70%"
    },
    {
      degree: "10th SSLC",
      field: null,
      institution: "Annai Matric Hr. Sec School",
      duration: "08/2017 - 08/2018",
      status: "Completed",
      grade: "88%"
    }
  ];

  const achievements = [
    {
      title: "Progressive Visionary",
      organization: "Loyola Institute of Technology and Science",
      year: "2023-2024",
      icon: Trophy,
      color: "#10b981"
    },
    {
      title: "First Rank",
      organization: "Loyola Institute of Technology and Science",
      year: "2020-2024",
      icon: Award,
      color: "#f59e0b"
    },
    {
      title: "Best Academic Performer",
      organization: "Loyola Institute of Technology and Science",
      year: "2022-2023",
      icon: GraduationCap,
      color: "#3b82f6"
    },
    {
      title: "Elite & Silver Badge",
      organization: "Programming in Java (NPTEL)",
      year: "2021-2022",
      icon: Code,
      color: "#8b5cf6"
    }
  ];

  const skills = [
    { name: "React Native", icon: Smartphone, level: 90 },
    { name: "Node.js", icon: Server, level: 85 },
    { name: "Database Management", icon: Database, level: 80 },
    { name: "Full-Stack Development", icon: Code, level: 88 }
  ];

  const NavigationTab = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        borderRadius: '2rem',
        border: 'none',
        background: isActive ? theme.highlight : 'transparent',
        color: isActive ? '#ffffff' : theme.textLight,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '0.9rem',
        fontWeight: isActive ? '600' : '500',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.target.style.background = isDarkMode ? '#334155' : '#f1f5f9';
          e.target.style.color = theme.text;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.target.style.background = 'transparent';
          e.target.style.color = theme.textLight;
        }
      }}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  const ExperienceCard = ({ experience }) => (
    <div
      style={{
        background: isDarkMode ? 'rgba(51, 65, 85, 0.3)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '2rem',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
        marginBottom: '1.5rem',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 20px 25px -5px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: theme.text,
            marginBottom: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Briefcase size={20} style={{ color: theme.highlight }} />
            {experience.role}
          </h3>
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme.highlight,
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}
          >
            {experience.company}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        color: theme.textLight,
        fontSize: '0.9rem'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Calendar size={16} />
          {experience.duration}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <MapPin size={16} />
          {experience.location}
        </span>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ color: theme.text, fontWeight: '600', marginBottom: '0.75rem' }}>Key Achievements:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {experience.achievements.map((achievement, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                color: theme.textLight,
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}
            >
              <ChevronRight size={16} style={{ color: theme.highlight, marginTop: '0.1rem', flexShrink: 0 }} />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            style={{
              background: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
              color: theme.highlight,
              padding: '0.25rem 0.75rem',
              borderRadius: '1rem',
              fontSize: '0.8rem',
              fontWeight: '500',
              border: `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const EducationCard = ({ edu, index }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1.5rem',
        background: isDarkMode ? 'rgba(51, 65, 85, 0.2)' : 'rgba(255, 255, 255, 0.5)',
        borderRadius: '0.75rem',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
        marginBottom: '1rem',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isDarkMode ? 'rgba(51, 65, 85, 0.4)' : 'rgba(255, 255, 255, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isDarkMode ? 'rgba(51, 65, 85, 0.2)' : 'rgba(255, 255, 255, 0.5)';
      }}
    >
      <div
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.highlight}, ${theme.accent})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          flexShrink: 0
        }}
      >
        <GraduationCap size={20} />
      </div>
      
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: theme.text,
            marginBottom: '0.25rem'
          }}>
            {edu.degree}
            {edu.field && <span style={{ color: theme.textLight, fontWeight: 'normal' }}> ({edu.field})</span>}
          </h3>
          {edu.grade && (
            <span style={{
              background: theme.highlight,
              color: '#ffffff',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              {edu.grade}
            </span>
          )}
        </div>
        
        <p style={{
          color: theme.textLight,
          marginBottom: '0.5rem',
          fontSize: '0.95rem'
        }}>
          {edu.institution}
        </p>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          color: theme.textLight,
          fontSize: '0.85rem'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Calendar size={14} />
            {edu.duration}
          </span>
          <span style={{
            padding: '0.125rem 0.5rem',
            borderRadius: '0.25rem',
            background: edu.status === 'Current' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(148, 163, 184, 0.2)',
            color: edu.status === 'Current' ? '#10b981' : theme.textLight,
            fontSize: '0.75rem',
            fontWeight: '500'
          }}>
            {edu.status}
          </span>
        </div>
      </div>
    </div>
  );

  const AchievementCard = ({ achievement }) => {
    const IconComponent = achievement.icon;
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}10)`,
          borderRadius: '0.75rem',
          padding: '1.5rem',
          border: `1px solid ${achievement.color}40`,
          transition: 'all 0.3s ease',
          textAlign: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
          e.currentTarget.style.boxShadow = `0 20px 25px -5px ${achievement.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: achievement.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: '#ffffff'
          }}
        >
          <IconComponent size={24} />
        </div>
        
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: theme.text,
          marginBottom: '0.5rem'
        }}>
          {achievement.title}
        </h3>
        
        <p style={{
          color: theme.textLight,
          fontSize: '0.9rem',
          marginBottom: '0.5rem'
        }}>
          {achievement.organization}
        </p>
        
        <span style={{
          color: achievement.color,
          fontSize: '0.85rem',
          fontWeight: '600'
        }}>
          {achievement.year}
        </span>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{  
                fontSize: "3.5rem", 
                fontWeight: 700, 
                background: `linear-gradient(135deg, ${theme.highlight}, ${theme.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: "1rem",
                lineHeight: '1.1'
              }}>
                Hi, I'm Prathisha
              </h2>
              
              <div style={{ 
                color: theme.textLight,
                fontSize: "1.2rem",
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}>
                <p style={{ marginBottom: "1.5rem", fontSize: '1.3rem', color: theme.text }}>
                  A <strong style={{ color: theme.highlight }}>Software Developer</strong> with hands-on experience in React Native development.
                </p>
                
                <p style={{ marginBottom: "1.5rem" }}>
                  Skilled in building <strong style={{ color: theme.highlight }}>cross-platform</strong> and{' '}
                  <strong style={{ color: theme.highlight }}>quick learner</strong> with a strong{' '}
                  <strong style={{ color: theme.highlight }}>problem-solving mindset</strong>. 
                  My expertise lies in <strong style={{ color: theme.highlight }}>React Native</strong>,{' '}
                  <strong style={{ color: theme.highlight }}>Node.js</strong>, and{' '}
                  <strong style={{ color: theme.highlight }}>DBMS</strong>, 
                  enabling me to build seamless <strong style={{ color: theme.highlight }}>hybrid mobile applications</strong> with efficient backend integrations.
                </p>
              </div>

              {/* Skills Preview */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: theme.text, 
                  fontSize: '1.2rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem' 
                }}>
                  Core Skills
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '1rem' 
                }}>
                  {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.75rem',
                          background: isDarkMode ? 'rgba(51, 65, 85, 0.3)' : 'rgba(255, 255, 255, 0.6)',
                          borderRadius: '0.5rem',
                          border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
                        }}
                      >
                        <IconComponent size={20} style={{ color: theme.highlight }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ 
                            color: theme.text, 
                            fontSize: '0.9rem', 
                            fontWeight: '500',
                            marginBottom: '0.25rem'
                          }}>
                            {skill.name}
                          </div>
                          <div style={{
                            background: isDarkMode ? '#334155' : '#e2e8f0',
                            height: '4px',
                            borderRadius: '2px',
                            overflow: 'hidden'
                          }}>
                            <div
                              style={{
                                background: theme.highlight,
                                height: '100%',
                                width: `${skill.level}%`,
                                borderRadius: '2px',
                                transition: 'width 1s ease-in-out'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.highlight}, ${theme.accent})`,
                    color: '#ffffff',
                    padding: "0.875rem 2rem",
                    borderRadius: "0.75rem",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: `0 10px 15px -3px ${theme.highlight}40`,
                    transition: "all 0.3s ease",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 20px 25px -5px ${theme.highlight}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = `0 10px 15px -3px ${theme.highlight}40`;
                  }}
                  onClick={() => window.open("https://github.com/Prathisha-M", "_blank")}
                >
                  <Github size={18} />
                  View My Work
                </button>
{/*                 
                <button 
                  style={{ 
                    background: 'transparent',
                    color: theme.highlight,
                    padding: "0.875rem 2rem",
                    borderRadius: "0.75rem",
                    border: `2px solid ${theme.highlight}`,
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.background = theme.highlight;
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = theme.highlight;
                  }}
                >
                  <Download size={18} />
                  Download Resume
                </button> */}
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div
                style={{
                  position: 'relative',
                  padding: '1rem',
                  borderRadius: '2rem',
                  background: `linear-gradient(135deg, ${theme.highlight}20, ${theme.accent}20)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <img
                  src={isDarkMode ? MobileLight : MobileDark}
                  alt="Mobile Development"
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    height: 'auto',
                    borderRadius: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: theme.highlight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    animation: 'pulse 2s infinite'
                  }}
                >
                  📱
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'experience':
        return (
          <div>
            <h2 style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              color: theme.text, 
              textAlign: "center", 
              marginBottom: "3rem",
              position: 'relative'
            }}>
              Professional Experience
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.highlight}, ${theme.accent})`,
                borderRadius: '2px'
              }} />
            </h2>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        );
        
      case 'education':
        return (
          <div>
            <h2 style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              color: theme.text, 
              textAlign: "center", 
              marginBottom: "3rem",
              position: 'relative'
            }}>
              Educational Background
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.highlight}, ${theme.accent})`,
                borderRadius: '2px'
              }} />
            </h2>
            <div style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute',
                left: '1.5rem',
                top: '2rem',
                bottom: '2rem',
                width: '2px',
                background: `linear-gradient(to bottom, ${theme.highlight}, ${theme.accent})`,
                zIndex: 1
              }} />
              
              {education.map((edu, index) => (
                <EducationCard key={index} edu={edu} index={index} />
              ))}
            </div>
          </div>
        );
        
      case 'achievements':
        return (
          <div>
            <h2 style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              color: theme.text, 
              textAlign: "center", 
              marginBottom: "3rem",
              position: 'relative'
            }}>
              Achievements & Recognition
              <div style={{ position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.highlight}, ${theme.accent})`,
                borderRadius: '2px'
              }} />
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} />
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="about" style={{ 
      padding: "8rem 1.5rem 5rem",
      maxWidth: "1200px",
      margin: "0 auto",
      minHeight: "100vh",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease'
    }}>
      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '4rem',
        flexWrap: 'wrap',
        background: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(248, 250, 252, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: '0.75rem',
        borderRadius: '2rem',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
        position: 'sticky',
        top: '6rem',
        zIndex: 100
      }}>
        <NavigationTab
          id="intro"
          label="Introduction"
          icon={User}
          isActive={activeSection === 'intro'}
          onClick={setActiveSection}
        />
        <NavigationTab
          id="experience"
          label="Experience"
          icon={Briefcase}
          isActive={activeSection === 'experience'}
          onClick={setActiveSection}
        />
        <NavigationTab
          id="education"
          label="Education"
          icon={GraduationCap}
          isActive={activeSection === 'education'}
          onClick={setActiveSection}
        />
        <NavigationTab
          id="achievements"
          label="Achievements"
          icon={Trophy}
          isActive={activeSection === 'achievements'}
          onClick={setActiveSection}
        />
      </div>

      {/* Main Content */}
      <div style={{
        background: isDarkMode ? 'rgba(15, 23, 42, 0.3)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(20px)',
        borderRadius: '2rem',
        padding: '3rem',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
        boxShadow: `0 25px 50px -12px ${isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'}`,
        transition: 'all 0.3s ease'
      }}>
        {renderContent()}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default About;