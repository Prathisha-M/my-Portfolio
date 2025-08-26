import * as React from "react";

const Skills = ({ theme, isDarkMode }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", emoji: "🌐" },
        { name: "JavaScript", emoji: "⚡" },
        { name: "React", emoji: "⚛️" },
        { name: "React Native", emoji: "📱" },
        { name: "Tailwind CSS", emoji: "🎨" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", emoji: "🌿" },
        { name: "Express.js", emoji: "🚀" },
        { name: "API Development", emoji: "🔗" },
        { name: "Authentication", emoji: "🔑" },
        { name: "Authorization", emoji: "🛡️" },
        { name: "API Integration", emoji: "🔄" },
        { name: "WebSocket", emoji: "📡" }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQL", emoji: "🗄️" },
        { name: "MySQL", emoji: "🐬" },
        { name: "DBMS", emoji: "🛢️" },
        { name: "Firebase", emoji: "🔥" },
        { name: "Postman", emoji: "📩" },
        { name: "Swagger", emoji: "📜" },
        { name: "Google Maps API", emoji: "🗺️" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", emoji: "☕" },
        { name: "Python", emoji: "🐍" },
        { name: "C", emoji: "🔵" },
        { name: "C++", emoji: "🚀" }
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git & GitHub", emoji: "🐙" }
      ]
    }
  ];

  return (
    <section style={{
      backgroundColor: theme.card,
      padding: "5rem 1.5rem",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "-10%",
        width: "200px",
        height: "200px",
        background: `linear-gradient(45deg, ${theme.primary}20, ${theme.accent}20)`,
        borderRadius: "50%",
        filter: "blur(40px)",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "-5%",
        width: "150px",
        height: "150px",
        background: `linear-gradient(-45deg, ${theme.accent}20, ${theme.primary}20)`,
        borderRadius: "50%",
        filter: "blur(30px)",
        zIndex: 0
      }} />

      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: 800,
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1rem",
            letterSpacing: "-0.02em"
          }}>
            Technical Skills
          </h2>
          <div style={{
            width: "80px",
            height: "4px",
            background: `linear-gradient(90deg, ${theme.primary}, ${theme.accent})`,
            margin: "0 auto",
            borderRadius: "2px"
          }} />
          <p style={{
            color: theme.textSecondary,
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            maxWidth: "600px",
            margin: "1.5rem auto 0"
          }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem"
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              style={{
                background: isDarkMode 
                  ? "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                  : "linear-gradient(145deg, rgba(0,0,0,0.02), rgba(0,0,0,0.05))",
                backdropFilter: "blur(10px)",
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: "16px",
                padding: "2rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transformOrigin: "center",
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.1}s both`
              }}
              className="hover:transform hover:translateY-[-8px] hover:shadow-2xl"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${theme.primary}20, 0 0 0 1px ${theme.primary}30`;
                e.currentTarget.style.borderColor = theme.primary + '40';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{
                color: theme.primary,
                fontSize: "1.3rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                textAlign: "center"
              }}>
                {category.title}
              </h3>
              
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                justifyContent: "center"
              }}>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}dd)`,
                      color: isDarkMode ? "#2D336B" : "#FFF2F2",
                      padding: "0.6rem 1rem",
                      borderRadius: "25px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.2s ease",
                      cursor: "default",
                      boxShadow: `0 2px 8px ${theme.accent}30`
                    }}
                    className="hover:transform hover:scale-110"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 4px 16px ${theme.accent}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = `0 2px 8px ${theme.accent}30`;
                    }}
                  >
                    <span style={{ fontSize: "1.1em" }}>{skill.emoji}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginTop: "4rem"
        }}>
          {[
            { number: "24+", label: "Technologies", icon: "🛠️" },
            { number: "5", label: "Categories", icon: "📂" },
            { number: "1+", label: "Years Experience", icon: "⏱️" },
            { number: "∞", label: "Learning", icon: "🚀" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "1.5rem",
                background: isDarkMode 
                  ? "rgba(255,255,255,0.03)" 
                  : "rgba(0,0,0,0.03)",
                borderRadius: "12px",
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                transition: "all 0.3s ease"
              }}
              className="hover:transform hover:translateY-[-4px]"
            >
              <div style={{
                fontSize: "2rem",
                marginBottom: "0.5rem"
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: theme.primary,
                marginBottom: "0.5rem"
              }}>
                {stat.number}
              </div>
              <div style={{
                color: theme.textSecondary,
                fontSize: "0.9rem",
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;