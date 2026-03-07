import React, { useState, useEffect, useRef } from "react";
import {
  User, Briefcase, GraduationCap, Trophy,
  ExternalLink, Code, Smartphone, Server, Database,
  MapPin, Calendar, Award, ChevronRight, Github,
} from "lucide-react";

/* ── Tiny helpers ── */
const Tag = ({ children, theme }) => (
  <span style={{
    display: "inline-block",
    padding: "0.28rem 0.75rem",
    borderRadius: "2rem",
    fontSize: "0.76rem",
    fontWeight: 600,
    letterSpacing: "0.01em",
    background: `${theme.accent}18`,
    color: theme.accent,
    border: `1px solid ${theme.accent}30`,
  }}>{children}</span>
);

const SectionHeading = ({ children, theme }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <h2 style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
      fontWeight: 800,
      color: theme.text,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    }}>{children}</h2>
    <div style={{ width: 48, height: 3, borderRadius: 4, background: `linear-gradient(90deg,${theme.accent},${theme.accent2})`, marginTop: 12 }} />
  </div>
);

/* ── Experience card ── */
const ExpCard = ({ exp, theme, isDarkMode }) => (
  <div style={{
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: "16px",
    padding: "1.75rem",
    marginBottom: "1.25rem",
    backdropFilter: "blur(12px)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = `0 20px 48px ${theme.shadow}`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.85rem" }}>
      <div>
        <p style={{ fontSize: "0.78rem", fontWeight: 600, color: theme.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>
          {exp.role}
        </p>
        <a href={exp.website} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: theme.text, display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          {exp.company} <ExternalLink size={14} style={{ color: theme.textLight }} />
        </a>
      </div>
    </div>
    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
      {[{ Icon: Calendar, text: exp.duration }, { Icon: MapPin, text: exp.location }].map(({ Icon, text }) => (
        <span key={text} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.82rem", color: theme.textLight }}>
          <Icon size={13} /> {text}
        </span>
      ))}
    </div>
    <ul style={{ marginBottom: "1.25rem" }}>
      {exp.achievements.map((a, i) => (
        <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.5rem", color: theme.textLight, fontSize: "0.88rem", lineHeight: 1.6 }}>
          <ChevronRight size={14} style={{ color: theme.accent, marginTop: 3, flexShrink: 0 }} />
          {a}
        </li>
      ))}
    </ul>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
      {exp.skills.map((s) => <Tag key={s} theme={theme}>{s}</Tag>)}
    </div>
  </div>
);

/* ── Education card ── */
const EduCard = ({ edu, theme }) => (
  <div style={{
    display: "flex", gap: "1rem", alignItems: "flex-start",
    padding: "1.4rem", marginBottom: "0.9rem",
    background: theme.card, border: `1px solid ${theme.border}`,
    borderRadius: "14px", backdropFilter: "blur(10px)",
    transition: "background 0.2s",
  }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${theme.accent}40`; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; }}
  >
    <div style={{
      width: 40, height: 40, flexShrink: 0, borderRadius: "10px",
      background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <GraduationCap size={18} color="#fff" />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.25rem" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: theme.text }}>
          {edu.degree}{edu.field && <span style={{ fontWeight: 400, color: theme.textLight }}> · {edu.field}</span>}
        </span>
        {edu.grade && (
          <span style={{ background: theme.accent, color: "#fff", padding: "0.15rem 0.55rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
            {edu.grade}
          </span>
        )}
      </div>
      <p style={{ fontSize: "0.85rem", color: theme.textLight, marginBottom: "0.4rem" }}>{edu.institution}</p>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: theme.textLight }}>
          <Calendar size={12} /> {edu.duration}
        </span>
        <span style={{
          fontSize: "0.7rem", fontWeight: 600,
          padding: "0.1rem 0.5rem", borderRadius: "4px",
          background: edu.status === "Current" ? `${theme.accent2}25` : `${theme.textLight}18`,
          color: edu.status === "Current" ? theme.accent2 : theme.textLight,
        }}>
          {edu.status}
        </span>
      </div>
    </div>
  </div>
);

/* ── Achievement card ── */
const AchCard = ({ ach, theme }) => {
  const Ico = ach.icon;
  return (
    <div style={{
      padding: "1.5rem", borderRadius: "14px",
      background: `linear-gradient(135deg, ${ach.color}12, ${ach.color}06)`,
      border: `1px solid ${ach.color}30`,
      textAlign: "center", transition: "transform 0.25s, box-shadow 0.25s",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 16px 36px ${ach.color}28`; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{
        width: 46, height: 46, borderRadius: "12px",
        background: ach.color, margin: "0 auto 1rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 8px 20px ${ach.color}40`,
      }}>
        <Ico size={22} color="#fff" />
      </div>
      <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.98rem", color: theme.text, marginBottom: "0.35rem" }}>{ach.title}</p>
      <p style={{ fontSize: "0.8rem", color: theme.textLight, marginBottom: "0.5rem" }}>{ach.organization}</p>
      <span style={{ fontSize: "0.76rem", fontWeight: 700, color: ach.color }}>{ach.year}</span>
    </div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function About({ theme, isDarkMode }) {
  const [tab, setTab] = useState("intro");
  const [typed, setTyped] = useState("");
  const titleRef = useRef(null);
  const ROLES = ["Software Developer", "React Native Engineer", "Mobile App Builder", "Full-Stack Dev"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* typewriter */
  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : charIdx === current.length ? 1600 : 70;
    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTyped(current.slice(0, charIdx + 1));
        setCharIdx((p) => p + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setTyped(current.slice(0, charIdx - 1));
        setCharIdx((p) => p - 1);
      } else {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  const experiences = [
    {
      id: 1,
      company: "SmartZEN Solutions Private Limited",
      role: "Software Developer",
      duration: "06/2024 – Present",
      location: "Chennai, India",
      website: "https://smartzensolutions.com/",
      achievements: [
        "Implemented push notifications for Android using react-native-push-notification",
        "Integrated Google Maps APIs with full map functionality including markers, routes, and geolocation",
        "Configured and implemented Google Login authentication flow for secure user access",
        "Developed a real-time chat feature with authentication",
        "Worked on user authentication and secure API development",
        "Designed and optimized SQL database queries for efficient data retrieval",
      ],
      skills: ["React Native", "Node.js", "Firebase", "SQL", "Auth & API Security", "Google Maps API"],
    },
    {
      id: 2,
      company: "AK Infopark Private Limited",
      role: "React Full-Stack Developer Intern",
      duration: "03/2024 – 04/2024",
      location: "Nagercoil, India",
      website: "https://www.akinfopark.com/",
      achievements: [
        "Developed a simple e-commerce website for product listing",
        "Implemented add-to-cart functionality using React and Redux",
        "Built a REST API for managing products and orders",
      ],
      skills: ["React", "Redux", "REST API", "E-commerce", "Full-Stack"],
    },
  ];

  const education = [
    { degree: "Master of Technology", field: "Information Technology", institution: "CSI Institute of Technology", duration: "08/2024 – Present", status: "Current", grade: null },
    { degree: "Bachelor of Engineering", field: "Computer Science", institution: "Loyola Institute of Technology and Science", duration: "08/2020 – 08/2024", status: "Completed", grade: "86%" },
    { degree: "12th (Higher Secondary)", field: "Computer Science", institution: "Vivekananda Kendra Matric Hr. Sec School", duration: "08/2019 – 08/2020", status: "Completed", grade: "70%" },
    { degree: "10th SSLC", field: null, institution: "Annai Matric Hr. Sec School", duration: "08/2017 – 08/2018", status: "Completed", grade: "88%" },
  ];

  const achievements = [
    { title: "First Rank", organization: "CSI Institute of Technology", year: "2024–2026", icon: Award, color: "#f59e0b" },
    { title: "Progressive Visionary", organization: "Loyola Institute of Technology and Science", year: "2023–2024", icon: Trophy, color: "#10b981" },
    { title: "First Rank", organization: "Loyola Institute of Technology and Science", year: "2020–2024", icon: Award, color: "#6056ff" },
    { title: "Best Academic Performer", organization: "Loyola Institute of Technology and Science", year: "2022–2023", icon: GraduationCap, color: "#3b82f6" },
    { title: "Elite & Silver Badge", organization: "Programming in Java (NPTEL)", year: "2021–2022", icon: Code, color: "#8b5cf6" },
  ];

  const coreSkills = [
    { name: "React Native", Icon: Smartphone, pct: 92 },
    { name: "Node.js",      Icon: Server,     pct: 85 },
    { name: "Full-Stack",   Icon: Code,       pct: 88 },
    { name: "Databases",    Icon: Database,   pct: 82 },
  ];

  const TABS = [
    { id: "intro",        label: "Intro",        Icon: User },
    { id: "experience",   label: "Experience",   Icon: Briefcase },
    { id: "education",    label: "Education",    Icon: GraduationCap },
    { id: "achievements", label: "Achievements", Icon: Trophy },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>

      {/* ── TABS ── */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "0.35rem",
        background: isDarkMode ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
        border: `1px solid ${theme.border}`,
        padding: "0.4rem",
        borderRadius: "999px",
        marginBottom: "3.5rem",
        width: "fit-content",
        backdropFilter: "blur(14px)",
      }}>
        {TABS.map(({ id, label, Icon }) => {
          const active = tab === id;
          return (
            <button key={id} onClick={() => setTab(id)}
              style={{
                display: "flex", alignItems: "center", gap: "0.45rem",
                padding: "0.55rem 1.2rem",
                borderRadius: "999px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem", fontWeight: active ? 700 : 500,
                color: active ? "#fff" : theme.textLight,
                background: active ? `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})` : "transparent",
                border: "none", cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: active ? `0 4px 18px ${theme.shadow}` : "none",
              }}
              onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = theme.text; e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"; } }}
              onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = theme.textLight; e.currentTarget.style.background = "transparent"; } }}
            >
              <Icon size={15} /> {label}
            </button>
          );
        })}
      </div>

      {/* ── INTRO ── */}
      {tab === "intro" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "start" }}>
          <div style={{ animation: "float-up 0.5s ease both" }}>
            {/* Badge */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: `${theme.accent}14`, color: theme.accent,
              padding: "0.3rem 0.85rem", borderRadius: "2rem",
              fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", border: `1px solid ${theme.accent}28`,
              marginBottom: "1.25rem",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: theme.accent2, display: "inline-block", animation: "pulse-glow 2s infinite" }} />
              Available for work
            </span>

            <h1 ref={titleRef} style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: theme.text,
              marginBottom: "1rem",
            }}>
              Hi, I'm<br />
              <span style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Prathisha M</span>
            </h1>

            {/* Typewriter */}
            <p style={{ fontSize: "1.1rem", color: theme.textLight, marginBottom: "1.5rem", minHeight: "1.8rem", fontWeight: 500 }}>
              <span style={{ color: theme.accent2, fontWeight: 700 }}>{typed}</span>
              <span style={{ animation: "blink 1s infinite", color: theme.accent }}>|</span>
            </p>

            <p style={{ fontSize: "1rem", color: theme.textLight, lineHeight: 1.8, maxWidth: 560, marginBottom: "2rem" }}>
              Passionate about crafting seamless <strong style={{ color: theme.text }}>cross-platform mobile apps</strong> with React Native. Strong foundation in{" "}
              <strong style={{ color: theme.text }}>Node.js</strong>, real-time data, and backend integrations —
              with a focus on performance and polished UX.
            </p>

            {/* Skill bars */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
              {coreSkills.map(({ name, Icon, pct }) => (
                <div key={name} style={{
                  padding: "0.85rem 1rem",
                  background: theme.card, border: `1px solid ${theme.border}`,
                  borderRadius: "12px", backdropFilter: "blur(10px)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <Icon size={15} style={{ color: theme.accent }} />
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: theme.text }}>{name}</span>
                    <span style={{ marginLeft: "auto", fontSize: "0.75rem", fontWeight: 700, color: theme.accent }}>{pct}%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 4, background: theme.border, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", width: `${pct}%`, borderRadius: 4,
                      background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
                      animation: "bar-grow 1.2s cubic-bezier(.4,0,.2,1) both",
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://github.com/Prathisha-M" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.75rem 1.6rem",
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
                  color: "#fff", fontWeight: 700, fontSize: "0.9rem",
                  boxShadow: `0 8px 24px ${theme.shadow}`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 14px 32px ${theme.shadow}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px ${theme.shadow}`; }}
              >
                <Github size={16} /> View GitHub
              </a>
              <button onClick={() => setTab("experience")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.75rem 1.6rem",
                  borderRadius: "12px",
                  background: "transparent",
                  color: theme.accent, fontWeight: 700, fontSize: "0.9rem",
                  border: `1.5px solid ${theme.accent}`,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = `${theme.accent}14`; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                See Experience <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Floating card visual */}
          <div className="hide-mobile" style={{ animation: "scale-in 0.6s ease 0.1s both" }}>
            <div style={{
              padding: "1.75rem", borderRadius: "20px",
              background: theme.card, border: `1px solid ${theme.border}`,
              backdropFilter: "blur(16px)",
              width: 220,
            }}>
              <div style={{ fontSize: "3rem", textAlign: "center", marginBottom: "0.75rem" }}>📱</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {["React Native", "Node.js", "Firebase", "SQL", "Google Maps"].map((s) => (
                  <div key={s} style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    fontSize: "0.8rem", color: theme.textLight, fontWeight: 500,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: theme.accent2, flexShrink: 0 }} />
                    {s}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1.2rem", padding: "0.7rem", borderRadius: "10px", background: `${theme.accent}12` }}>
                <p style={{ fontSize: "0.72rem", color: theme.accent, fontWeight: 700, textAlign: "center" }}>
                  6+ Apps Deployed 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── EXPERIENCE ── */}
      {tab === "experience" && (
        <div style={{ animation: "float-up 0.45s ease both" }}>
          <SectionHeading theme={theme}>Professional Experience</SectionHeading>
          {experiences.map((e) => <ExpCard key={e.id} exp={e} theme={theme} isDarkMode={isDarkMode} />)}
        </div>
      )}

      {/* ── EDUCATION ── */}
      {tab === "education" && (
        <div style={{ animation: "float-up 0.45s ease both" }}>
          <SectionHeading theme={theme}>Educational Background</SectionHeading>
          {education.map((edu, i) => <EduCard key={i} edu={edu} theme={theme} />)}
        </div>
      )}

      {/* ── ACHIEVEMENTS ── */}
      {tab === "achievements" && (
        <div style={{ animation: "float-up 0.45s ease both" }}>
          <SectionHeading theme={theme}>Achievements & Recognition</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {achievements.map((a, i) => <AchCard key={i} ach={a} theme={theme} />)}
          </div>
        </div>
      )}
    </div>
  );
}