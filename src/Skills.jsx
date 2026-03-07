import * as React from "react";
import { useState, useEffect, useRef } from "react";

const Skills = ({ theme, isDarkMode }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: "🎨",
      gradient: ["#f97316", "#fb923c"],
      skills: [
        { name: "HTML / CSS", emoji: "🌐", level: 92 },
        { name: "JavaScript", emoji: "⚡", level: 88 },
        { name: "React", emoji: "⚛️", level: 90 },
        { name: "React Native", emoji: "📱", level: 92 },
        { name: "Tailwind CSS", emoji: "🎨", level: 85 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: "⚙️",
      gradient: ["#3b82f6", "#6366f1"],
      skills: [
        { name: "Node.js", emoji: "🌿", level: 87 },
        { name: "Express.js", emoji: "🚀", level: 85 },
        { name: "REST APIs", emoji: "🔗", level: 88 },
        { name: "Authentication", emoji: "🔑", level: 83 },
        { name: "WebSocket", emoji: "📡", level: 78 },
        { name: "API Integration", emoji: "🔄", level: 86 },
      ],
    },
    {
      id: "database",
      title: "Database & Cloud",
      icon: "🗄️",
      gradient: ["#10b981", "#059669"],
      skills: [
        { name: "MySQL", emoji: "🐬", level: 84 },
        { name: "Firebase", emoji: "🔥", level: 86 },
        { name: "SQL", emoji: "🗄️", level: 82 },
        { name: "Google Maps API", emoji: "🗺️", level: 88 },
        { name: "Postman", emoji: "📩", level: 90 },
        { name: "Swagger", emoji: "📜", level: 80 },
      ],
    },
    {
      id: "languages",
      title: "Languages",
      icon: "💻",
      gradient: ["#8b5cf6", "#a78bfa"],
      skills: [
        { name: "Java", emoji: "☕", level: 80 },
        { name: "Python", emoji: "🐍", level: 75 },
        { name: "C", emoji: "🔵", level: 72 },
        { name: "C++", emoji: "🚀", level: 70 },
      ],
    },
    {
      id: "ai",
      title: "AI & Prompt Eng.",
      icon: "🤖",
      gradient: ["#ec4899", "#f43f5e"],
      skills: [
        { name: "Prompt Engineering", emoji: "🧠", level: 85 },
        { name: "Claude AI", emoji: "✨", level: 82 },
        { name: "ChatGPT", emoji: "💬", level: 84 },
        { name: "AI-Assisted Dev", emoji: "🤖", level: 86 },
      ],
    },
    {
      id: "tools",
      title: "Tools & VCS",
      icon: "🛠️",
      gradient: ["#f59e0b", "#eab308"],
      skills: [
        { name: "Git & GitHub", emoji: "🐙", level: 88 },
        { name: "Android Studio", emoji: "🤖", level: 85 },
        { name: "Xcode", emoji: "🍎", level: 80 },
        { name: "VS Code", emoji: "🔷", level: 92 },
      ],
    },
  ];

  const stats = [
    { number: "6+", label: "Apps Deployed", icon: "📱" },
    { number: "25+", label: "Technologies", icon: "🛠️" },
    { number: "2+", label: "Years Exp.", icon: "⏱️" },
    { number: "∞", label: "Still Learning", icon: "🚀" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".skill-card-animate");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const bg = isDarkMode ? "#0f172a" : "#f8fafc";
  const cardBg = isDarkMode
    ? "rgba(30, 41, 59, 0.7)"
    : "rgba(255, 255, 255, 0.85)";
  const borderColor = isDarkMode
    ? "rgba(148, 163, 184, 0.1)"
    : "rgba(0, 0, 0, 0.07)";

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        background: isDarkMode
          ? "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)"
          : "linear-gradient(160deg, #f8fafc 0%, #e0f2fe 50%, #f0fdf4 100%)",
        padding: "6rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Sora', 'Nunito', 'Segoe UI', sans-serif",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: isDarkMode
            ? "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "-60px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: isDarkMode
            ? "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: isDarkMode
                ? "rgba(59,130,246,0.15)"
                : "rgba(249,115,22,0.10)",
              color: isDarkMode ? "#60a5fa" : "#f97316",
              padding: "0.35rem 1.1rem",
              borderRadius: "2rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: `1px solid ${isDarkMode ? "rgba(96,165,250,0.2)" : "rgba(249,115,22,0.15)"}`,
            }}
          >
            What I Work With
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: theme.text,
              margin: "0.5rem 0 1rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Technical{" "}
            <span
              style={{
                background: isDarkMode
                  ? "linear-gradient(135deg, #60a5fa, #34d399)"
                  : "linear-gradient(135deg, #f97316, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
          <p
            style={{
              color: theme.textLight,
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Technologies, tools, and frameworks I use to craft seamless mobile
            &amp; web experiences.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: cardBg,
                borderRadius: "1rem",
                border: `1px solid ${borderColor}`,
                padding: "1.25rem 1rem",
                textAlign: "center",
                backdropFilter: "blur(12px)",
                boxShadow: isDarkMode
                  ? "0 4px 24px rgba(0,0,0,0.25)"
                  : "0 4px 16px rgba(0,0,0,0.06)",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = isDarkMode
                  ? "0 12px 32px rgba(0,0,0,0.35)"
                  : "0 12px 28px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isDarkMode
                  ? "0 4px 24px rgba(0,0,0,0.25)"
                  : "0 4px 16px rgba(0,0,0,0.06)";
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.4rem" }}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  color: theme.text,
                  lineHeight: 1.1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  color: theme.textLight,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillCategories.map((category, catIdx) => {
            const isActive = activeCategory === category.id;
            const [c1, c2] = category.gradient;

            return (
              <div
                key={category.id}
                data-index={catIdx}
                className="skill-card-animate"
                style={{
                  background: cardBg,
                  borderRadius: "1.25rem",
                  border: `1px solid ${isActive ? c1 + "55" : borderColor}`,
                  padding: "1.75rem",
                  backdropFilter: "blur(16px)",
                  boxShadow: isActive
                    ? `0 8px 32px ${c1}25, 0 0 0 1.5px ${c1}30`
                    : isDarkMode
                    ? "0 4px 20px rgba(0,0,0,0.22)"
                    : "0 4px 16px rgba(0,0,0,0.06)",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  cursor: "pointer",
                  opacity: visibleCards.includes(catIdx) ? 1 : 0,
                  transform: visibleCards.includes(catIdx)
                    ? "translateY(0)"
                    : "translateY(28px)",
                }}
                onClick={() =>
                  setActiveCategory(isActive ? null : category.id)
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 16px 36px ${c1}20, 0 0 0 1px ${c1}25`;
                    e.currentTarget.style.borderColor = c1 + "44";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? "0 4px 20px rgba(0,0,0,0.22)"
                      : "0 4px 16px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = borderColor;
                  }
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    marginBottom: "1.4rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      boxShadow: `0 4px 14px ${c1}40`,
                      flexShrink: 0,
                    }}
                  >
                    {category.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: theme.text,
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {category.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: theme.textLight,
                        margin: "0.15rem 0 0",
                        fontWeight: 500,
                      }}
                    >
                      {category.skills.length} skills
                    </p>
                  </div>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: isActive
                        ? `linear-gradient(135deg, ${c1}, ${c2})`
                        : isDarkMode
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive ? "#fff" : theme.textLight,
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      transition: "all 0.3s",
                      flexShrink: 0,
                    }}
                  >
                    {isActive ? "−" : "+"}
                  </div>
                </div>

                {/* Skill chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {category.skills.map((skill) => {
                    const key = `${category.id}-${skill.name}`;
                    const isHovered = hoveredSkill === key;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(key)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.38rem 0.85rem",
                          borderRadius: "2rem",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          background: isHovered
                            ? `linear-gradient(135deg, ${c1}, ${c2})`
                            : isDarkMode
                            ? "rgba(255,255,255,0.07)"
                            : "rgba(0,0,0,0.05)",
                          color: isHovered
                            ? "#fff"
                            : theme.text,
                          border: `1px solid ${
                            isHovered
                              ? "transparent"
                              : isDarkMode
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.08)"
                          }`,
                          transition: "all 0.22s ease",
                          cursor: "default",
                          transform: isHovered ? "scale(1.06)" : "scale(1)",
                          boxShadow: isHovered ? `0 4px 14px ${c1}40` : "none",
                          letterSpacing: "0.01em",
                        }}
                      >
                        <span style={{ fontSize: "0.95em" }}>{skill.emoji}</span>
                        {skill.name}
                      </div>
                    );
                  })}
                </div>

                {/* Expanded skill bars */}
                {isActive && (
                  <div
                    style={{
                      marginTop: "1.4rem",
                      paddingTop: "1.2rem",
                      borderTop: `1px solid ${
                        isDarkMode
                          ? "rgba(255,255,255,0.07)"
                          : "rgba(0,0,0,0.07)"
                      }`,
                    }}
                  >
                    {category.skills.map((skill, si) => (
                      <div
                        key={skill.name}
                        style={{ marginBottom: si < category.skills.length - 1 ? "0.85rem" : 0 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "0.3rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: theme.text,
                            }}
                          >
                            {skill.emoji} {skill.name}
                          </span>
                          <span
                            style={{
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              color: c1,
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          style={{
                            height: "5px",
                            borderRadius: "999px",
                            background: isDarkMode
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.07)",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${c1}, ${c2})`,
                              borderRadius: "999px",
                              animation: "growBar 0.9s cubic-bezier(.4,0,.2,1) both",
                              animationDelay: `${si * 0.07}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <p
          style={{
            textAlign: "center",
            color: theme.textLight,
            fontSize: "0.85rem",
            marginTop: "2rem",
            opacity: 0.7,
          }}
        >
          💡 Click any card to see proficiency levels
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        @keyframes growBar {
          from { width: 0%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;