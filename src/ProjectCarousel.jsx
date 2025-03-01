import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, Play, X, Pause } from 'lucide-react';
import CRUD from './assets/CRUD.mp4';
import FileUpload from './assets/FileUpload.mp4';
import WhatsappProfileClone from './assets/WhatsappProfileClone.mp4';
import doctorPatient from './assets/doctorPatient.mp4';

const ProjectCarousel = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  
  const projects = [
    {
      "title": "📦 CRUD Operations in React Native",
      "description": "Built a React Native app with Create, Read, Update, Delete functionality. Integrated Express.js and SQL for backend operations.",
      "link": "https://github.com/Prathisha-M/CRUD-operation-in-React-Native",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-crudapp-mobiledevelopment-activity-7217807043187916800-7URy",
      "video": CRUD,
      "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "March 2024",
        "text": "Excited to share my CRUD Operations app built with React Native! #ReactNative #CRUDApp #MobileDevelopment",
        "stats": {
          "likes": 28,
          "comments": 8
        }
      }
    },
    {
      "title": "🖼️ WhatsApp Profile Picture Editor Clone",
      "description": "Developed a WhatsApp-like profile picture editor with cropping and filtering options. Used React Native Reanimated for smooth animations.",
      "link": "https://github.com/Prathisha-M/Whatsapp-Profile-Clone",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-mobileappdevelopment-smartzensolutions-activity-7219347441391685632-8oGe",
         "video": WhatsappProfileClone,
         "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "March 2024",
        "text": "Just completed a WhatsApp Profile Picture Editor clone with React Native! #ReactNative #MobileAppDevelopment #SmartzenSolutions",
        "stats": {
          "likes": 56,
          "comments": 12
        }
      }
    },
    {
      "title": "📤 File Uploader with WhatsApp Notification",
      "description": "Created an API-based file uploader with Multer (Express.js). Sent a WhatsApp notification after successful upload.",
      "link": "https://github.com/Prathisha-M/file-uploader-with-whatsapp-msg-notifier",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-appdevelopment-api-activity-7220069113895776258-hT1Q",
       "video": FileUpload,
       "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "March 2024",
        "text": "Created a seamless file uploader with WhatsApp notifications! #ReactNative #AppDevelopment #API",
        "stats": {
          "likes": 38,
          "comments": 7
        }
      }
    },
    {
      "title": "🔢 WhatsApp OTP-Based Login System",
      "description": "Implemented an OTP-based authentication system via WhatsApp API. Integrated React Native OTP Input for seamless login.",
      "link": "https://github.com/Prathisha-M/Login-via-WhatsappOTP",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-appdevelopment-whatsapplogin-activity-7225116790425542656-c049",
      "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "April 2024",
        "text": "Enhancing security with WhatsApp OTP-based authentication! #ReactNative #AppDevelopment #WhatsAppLogin",
        "stats": {
          "likes": 63,
          "comments": 14
        }
      }
    },
    {
      "title": "🛒 Shopping Cart with Redux",
      "description": "Built a React Native shopping app with Redux for state management. Implemented cart functionality and push notifications.",
      "link": "https://github.com/Prathisha-M/Redux-Shopping-cart-and-Drawer-Navigation",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-redux-mobileappdevelopment-activity-7224392131971362817-t0Q0",
      "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "April 2024",
        "text": "Implementing Redux for state management in my latest shopping cart app! #ReactNative #Redux #MobileAppDevelopment",
        "stats": {
          "likes": 45,
          "comments": 9
        }
      }
    },
    {
      "title": "🔔 React Native Login with Push Notification",
      "description": "Developed a login system with React Native Push Notifications. Integrated Firebase for authentication and notifications.",
      "link": "https://github.com/Prathisha-M/ReactNative-login-Notification-store-deviceId",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-mobileappdevelopment-studentauthentication-activity-7229075218109972480-m1wI",
      "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "May 2024",
        "text": "Check out my new login system with push notifications! Perfect for student authentication. #ReactNative #MobileAppDevelopment #StudentAuthentication",
        "stats": {
          "likes": 51,
          "comments": 11
        }
      }
    },
    {
      "title": "💸 PayGuard with Voice Transaction Alerts",
      "description": "Developed a React Native app that listens for bank-related SMS alerts, filters key transaction messages, and converts them into speech for real-time notifications. Includes play and stop controls for voice alerts.",
      "link": "https://github.com/Prathisha-M/react-native-sms-alerts-to-speech",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-mobileappdevelopment-fintech-activity-7231327561849397250-tU4j",
      "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "May 2024",
        "text": "Introducing PayGuard - real-time voice alerts for your transactions! #ReactNative #MobileAppDevelopment #Fintech",
        "stats": {
          "likes": 78,
          "comments": 17
        }
      }
    },
    {
      "title": "🌍 Business Masters of World",
      "description": "A platform connecting business professionals, enabling seamless business interactions and maintaining a 5-star rating system for credibility."
    },
    {
      "title": "🩺 Doctor-Patient App with Location & Chat",
      "description": "Created an app for patients to connect with doctors, featuring a chat system using WebSockets and an appointment booking system. Integrated Google Maps API for location-based appointments.",
      "linkedin": "https://www.linkedin.com/posts/prathisha-m_reactnative-hybridapp-doctorpatientapp-activity-7300919187546198016-SJCj",
       "video": doctorPatient,
       "linkedinPreview": {
        "author": "Prathisha M",
        "role": "Mobile App Developer",
        "date": "August 2024",
        "text": "Excited to launch my new doctor-patient connection app with real-time chat and location-based appointments! #ReactNative #HybridApp #DoctorPatientApp",
        "stats": {
          "likes": 92,
          "comments": 21
        }
      }
    }
  ];
  
  const [cardsToShow, setCardsToShow] = useState(3);

  // Minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= projects.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? projects.length - 1 : nextIndex;
    });
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setIsPlaying(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Touch event handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (showModal && videoRef.current) {
      videoRef.current.playbackRate = 2.0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Auto-play failed:", error);
        setIsPlaying(false);
      });
    }
  }, [showModal, selectedProject]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showModal) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [showModal]);

  // Calculate visible projects differently based on cardsToShow
  const visibleProjects = [];
  if (cardsToShow === 1) {
    // For mobile, just show the current index
    visibleProjects.push(projects[currentIndex]);
  } else {
    // For larger screens with center element bigger
    const centerIndex = currentIndex;
    const leftIndex = (centerIndex - 1 + projects.length) % projects.length;
    const rightIndex = (centerIndex + 1) % projects.length;
    
    if (cardsToShow === 3) {
      visibleProjects.push(projects[leftIndex]);
      visibleProjects.push(projects[centerIndex]);
      visibleProjects.push(projects[rightIndex]);
    } else if (cardsToShow === 2) {
      visibleProjects.push(projects[centerIndex]);
      visibleProjects.push(projects[rightIndex]);
    }
  }

  const totalPages = projects.length;

  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: theme.primary, textAlign: "center", marginBottom: "3rem" }}>Projects</h2>
      
      <div 
        style={{ position: "relative" }} 
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button 
          onClick={prevSlide}
          style={{ 
            position: "absolute", 
            left: "-20px", 
            top: "50%", 
            transform: "translateY(-50%)",
            backgroundColor: theme.primary,
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          }}
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: cardsToShow === 3 ? "1fr 1.4fr 1fr" : cardsToShow === 2 ? "1.2fr 1fr" : "1fr",
          gap: "1.5rem",
          overflow: "hidden",
          height: "auto",
          transition: "all 0.3s ease"
        }}>
          {visibleProjects.map((project, index) => {
            // Determine if this is the center card for styling
            const isCenter = cardsToShow === 3 && index === 1;
            
            return (
              <div 
                key={`${project.title}-${index}`} 
                style={{ 
                  backgroundColor: theme.card, 
                  borderLeft: `4px solid ${theme.secondary}`, 
                  borderRadius: "0.5rem", 
                  padding: "1.5rem", 
                  boxShadow: isCenter ? 
                    `0 15px 25px -3px ${theme.accent}50` : 
                    `0 10px 15px -3px ${theme.accent}30`, 
                  transition: "transform 0.3s ease", 
                  transform: isCenter ? "scale(1.05)" : "scale(1)",
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  minHeight: isCenter ? "420px" : "400px",
                  zIndex: isCenter ? 2 : 1
                }} 
              >
                <h3 style={{ 
                  fontSize: isCenter ? "1.5rem" : "1.25rem", 
                  fontWeight: 600,
                  color: theme.text,
                  marginTop: 0,
                  marginBottom: "0.75rem"
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  fontSize: isCenter ? "1rem" : "0.9rem",
                  color: theme.textSecondary,
                  marginBottom: "1rem",
                  flex: "0 0 auto"
                }}>
                  {project.description}
                </p>
                
                {project.linkedinPreview && (
                  <div 
                    style={{ 
                      border: "1px solid #e0e0e0", 
                      borderRadius: "0.5rem", 
                      padding: "1rem", 
                      marginTop: "auto",
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      position: "relative",
                      overflow: "hidden",
                      marginBottom: "3rem",
                    }}
                    onClick={() => openModal(project)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0,0,0,0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "5rem" }}>
                      <div style={{ 
                        width: "40px", 
                        height: "40px", 
                        borderRadius: "50%", 
                        backgroundColor: "#0077b5", 
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "0.75rem"
                      }}>
                        <Linkedin size={20} />
                      </div>
                      <div>
                        <p style={{ fontWeight: "bold", margin: 0 }}>{project.linkedinPreview.author}</p>
                        <p style={{ fontSize: "0.75rem", margin: 0, color: "#666" }}>{project.linkedinPreview.role} • {project.linkedinPreview.date}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.875rem", margin: "0.5rem 0" }}>{project.linkedinPreview.text}</p>
                    <div style={{ 
                      borderRadius: "0.25rem", 
                      height: "140px",
                      backgroundColor: "#ddd",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      {project.video ? (
                        <video 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                          muted
                          loop
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img src="/api/placeholder/400/200" alt="Preview" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                      )}
                      <div style={{ 
                        position: "absolute", 
                        top: "50%", 
                        left: "50%", 
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                      }}>
                        <Play size={20} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <button 
          onClick={nextSlide}
          style={{ 
            position: "absolute", 
            right: "-20px", 
            top: "50%", 
            transform: "translateY(-50%)",
            backgroundColor: theme.primary,
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          }}
          aria-label="Next projects"
        >
          <ChevronRight size={24} />
        </button>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginTop: "2rem",
          gap: "0.5rem"
        }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
              }}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: currentIndex === idx ? theme.primary : theme.accent,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "background-color 0.3s ease"
              }}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      {showModal && selectedProject && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100
        }} onClick={(e) => {
          // Close when clicking outside the modal content
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}>
          <div style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            width: "90%",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}>
            <button 
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}
              aria-label="Close modal"
            >
              <X size={24} color="#333" />
            </button>
            
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  borderRadius: "50%", 
                  backgroundColor: "#0077b5", 
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem"
                }}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: "bold", margin: 0, fontSize: "1.125rem" }}>{selectedProject.linkedinPreview.author}</p>
                  <p style={{ fontSize: "0.875rem", margin: 0, color: "#666" }}>{selectedProject.linkedinPreview.role} • {selectedProject.linkedinPreview.date}</p>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: 600,
                color: "#333",
                marginTop: "0.5rem",
                marginBottom: "1rem"
              }}>
                {selectedProject.title}
              </h3>
              
              <p style={{ fontSize: "1rem", margin: "1rem 0", lineHeight: 1.6 }}>{selectedProject.description}</p>
              <p style={{ fontSize: "1rem", margin: "1rem 0", lineHeight: 1.6, fontStyle: "italic" }}>{selectedProject.linkedinPreview.text}</p>
              
              <div style={{ 
                marginBottom: "1.5rem",
                backgroundColor: "#f0f0f0",
                borderRadius: "0.5rem",
                overflow: "hidden",
                position: "relative",
                width: "100%"
              }}>
                {selectedProject.video ? (
                  <div style={{ width: "100%", position: "relative" }}>
                    <video 
                      ref={videoRef}
                      style={{ 
                        width: "100%",
                        display: "block",
                        height: "auto",
                        maxHeight: "450px",
                        margin: "0 auto"
                      }}
                      onClick={togglePlayPause}
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div 
                      style={{ 
                        position: "absolute", 
                        top: "50%", 
                        left: "50%", 
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        cursor: "pointer",
                        opacity: isPlaying ? 0 : 1,
                        transition: "opacity 0.3s"
                      }}
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? <Pause size={30} /> : <Play size={30} />}
                    </div>
                  </div>
                ) : (
                  <img src="/api/placeholder/600/400" alt="Preview" style={{ width: "100%", display: "block" }} />
                )}
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e0e0e0", paddingTop: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                </div>
                
                <div style={{ display: "flex", gap: "1rem" }}>
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link}
                      style={{ 
                        color: "white", 
                        backgroundColor: "#333",
                        padding: "0.5rem 1rem", 
                        borderRadius: "0.25rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  <a 
                    href={selectedProject.linkedin}
                    style={{ 
                      color: "white", 
                      backgroundColor: "#0077b5",
                      padding: "0.5rem 1rem", 
                      borderRadius: "0.25rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      textDecoration: "none",
                      fontWeight: 500
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCarousel;