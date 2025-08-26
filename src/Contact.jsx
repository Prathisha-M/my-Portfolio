import * as React from "react";
import { useState } from "react";

const Contact = ({ theme, isDarkMode }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("prathishamurugesan@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ 
      textAlign: "center",
      padding: "6rem 1.5rem",
      maxWidth: "1000px",
      margin: "0 auto"
    }}>
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ 
          fontSize: "2.8rem", 
          fontWeight: 700, 
          color: theme.primary,
          marginBottom: "1rem",
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>Get in Touch</h2>
        
        <div style={{
          height: "4px",
          width: "80px",
          background: `linear-gradient(90deg, ${theme.accent}, ${theme.highlight})`,
          margin: "0 auto 1.5rem",
          borderRadius: "2px"
        }}></div>
        
        <p style={{ 
          color: theme.textLight,
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto 3rem",
          lineHeight: 1.6
        }}>
          I'm always open to collaborating on new projects and ideas. Feel free to reach out to discuss potential opportunities!
        </p>
      </div>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem"
      }}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{
          width: "100%",
          maxWidth: "600px",
          padding: "2.5rem",
          borderRadius: "1rem",
          background: theme.card,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          textAlign: "left"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: theme.primary
          }}>Send me a message</h3>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="name" style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: theme.textLight
            }}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: `1px solid ${theme.textLight}30`,
                background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                color: theme.text,
                fontSize: "1rem"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="email" style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: theme.textLight
            }}>Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: `1px solid ${theme.textLight}30`,
                background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                color: theme.text,
                fontSize: "1rem"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="message" style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: theme.textLight
            }}>Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: `1px solid ${theme.textLight}30`,
                background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                color: theme.text,
                fontSize: "1rem",
                resize: "vertical"
              }}
            ></textarea>
          </div>
          
          <button type="submit" style={{
            backgroundColor: theme.secondary,
            color: isDarkMode ? "#2D336B" : "#FFF2F2",
            padding: "0.75rem 2rem",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s ease",
            width: "100%"
          }} onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px -1px rgba(0, 0, 0, 0.15)";
          }} onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
          }}>
            Send Message
          </button>
        </form>
        
        <div style={{ fontSize: "1.1rem", color: theme.textLight, margin: "1rem 0" }}>
          OR
        </div>
        
        {/* Direct Contact Options */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center"
        }}>
          <a href="mailto:prathishamurugesan@gmail.com" style={{ 
            backgroundColor: theme.secondary,
            color: isDarkMode ? "#2D336B" : "#FFF2F2",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s ease"
          }} onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px -1px rgba(0, 0, 0, 0.15)";
          }} onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Send Email
          </a>
          
          <button onClick={copyEmailToClipboard} style={{ 
            backgroundColor: "transparent",
            color: theme.textLight,
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: `1px solid ${theme.textLight}30`,
            fontWeight: 600,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }} onMouseOver={(e) => {
            e.target.style.backgroundColor = isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)";
          }} onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
            {isCopied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </div>
      
      {/* Social Links */}
      <div style={{ marginTop: "4rem" }}>
        <p style={{ color: theme.textLight, marginBottom: "1.5rem" }}>
          You can also find me on these platforms:
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem"
        }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
            color: theme.textLight,
            transition: "all 0.2s ease"
          }} onMouseOver={(e) => {
            e.target.style.color = theme.highlight;
            e.target.style.transform = "translateY(-2px)";
          }} onMouseOut={(e) => {
            e.target.style.color = theme.textLight;
            e.target.style.transform = "translateY(0)";
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            color: theme.textLight,
            transition: "all 0.2s ease"
          }} onMouseOver={(e) => {
            e.target.style.color = theme.highlight;
            e.target.style.transform = "translateY(-2px)";
          }} onMouseOut={(e) => {
            e.target.style.color = theme.textLight;
            e.target.style.transform = "translateY(0)";
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
            color: theme.textLight,
            transition: "all 0.2s ease"
          }} onMouseOver={(e) => {
            e.target.style.color = theme.highlight;
            e.target.style.transform = "translateY(-2px)";
          }} onMouseOut={(e) => {
            e.target.style.color = theme.textLight;
            e.target.style.transform = "translateY(0)";
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;