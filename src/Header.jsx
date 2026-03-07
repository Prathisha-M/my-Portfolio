import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Code2, Github, Linkedin, Mail } from "lucide-react";

/* ── Nav items ── */
const NAV = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/Prathisha-M",           Icon: Github,   color: "#8b82ff" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathisha-m",  Icon: Linkedin, color: "#0a66c2" },
  { label: "Email",    href: "mailto:prathishamurugesan@gmail.com",       Icon: Mail,     color: "#ff7070" },
];

export default function Header({ isDarkMode, setDarkMode, theme, isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("");

  /* track active section */
  useEffect(() => {
    const ids = ["about", "skills", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const close = () => setMenuOpen(false);

  /* glass style */
  const glassNav = {
    background: isScrolled
      ? isDarkMode ? "rgba(7,9,15,0.82)" : "rgba(248,247,244,0.86)"
      : "transparent",
    backdropFilter: isScrolled ? "blur(20px) saturate(1.6)" : "none",
    WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(1.6)" : "none",
    borderBottom: isScrolled
      ? `1px solid ${isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`
      : "none",
    transition: "all 0.45s cubic-bezier(.4,0,.2,1)",
  };

  const linkStyle = (href) => {
    const isActive = active && href === `#${active}`;
    return {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.9rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
      color: isActive ? theme.accent : theme.textLight,
      padding: "0.4rem 0",
      position: "relative",
      transition: "color 0.2s",
      cursor: "pointer",
      background: "none",
      border: "none",
    };
  };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, ...glassNav }}>
        <div style={{
          maxWidth: 1180, margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: isScrolled ? "64px" : "72px",
          transition: "height 0.35s ease",
        }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
            <div style={{
              width: 38, height: 38, borderRadius: "10px",
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 4px 18px ${theme.shadow}`,
            }}>
              <Code2 size={20} color="#fff" />
            </div>
            <div>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: "1.1rem",
                color: theme.text,
                display: "block", lineHeight: 1,
              }}>Prathisha</span>
              <span style={{ fontSize: "0.7rem", color: theme.textLight, fontWeight: 500 }}>
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {NAV.map(({ label, href }) => (
              <a key={label} href={href} style={linkStyle(href)}
                onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = active && href === `#${active}` ? theme.accent : theme.textLight; }}
              >
                <span style={{ display: "block", padding: "0.4rem 0.9rem" }}>{label}</span>
                {/* Active underline */}
                <span style={{
                  position: "absolute", bottom: -2, left: "0.9rem", right: "0.9rem",
                  height: "2px", borderRadius: "2px",
                  background: theme.accent,
                  transform: active && href === `#${active}` ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s ease",
                  transformOrigin: "left",
                }} />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Social icons – desktop */}
            <div className="hide-mobile" style={{ display: "flex", gap: "0.2rem", marginRight: "0.5rem" }}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: 34, height: 34, borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: theme.textLight, transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)";
                    e.currentTarget.style.color = theme.accent;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = theme.textLight;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            {/* Theme toggle */}
            <button onClick={() => setDarkMode((p) => !p)}
              style={{
                width: 36, height: 36, borderRadius: "9px",
                background: isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)",
                color: theme.text,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.25s", border: `1px solid ${theme.border}`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.accent; e.currentTarget.style.color = theme.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.color = theme.text; }}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger */}
            <button className="hide-desktop" onClick={() => setMenuOpen((p) => !p)}
              style={{
                width: 36, height: 36, borderRadius: "9px",
                background: "transparent", color: theme.text,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s", border: `1px solid ${theme.border}`,
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: isDarkMode ? "rgba(7,9,15,0.97)" : "rgba(248,247,244,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "0.5rem",
          animation: "fade-in 0.25s ease",
        }}>
          {/* Close */}
          <button onClick={close} style={{
            position: "absolute", top: "1.25rem", right: "1.5rem",
            background: "none", color: theme.textLight,
            width: 40, height: 40, borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: `1px solid ${theme.border}`,
          }}>
            <X size={20} />
          </button>

          {NAV.map(({ label, href }, i) => (
            <a key={label} href={href} onClick={close}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2rem", fontWeight: 700,
                color: active === href.slice(1) ? theme.accent : theme.text,
                padding: "0.6rem 2rem",
                animation: `float-up 0.35s ease ${i * 0.06}s both`,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = active === href.slice(1) ? theme.accent : theme.text; }}
            >
              {label}
            </a>
          ))}

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", animation: "float-up 0.4s ease 0.28s both" }}>
            {SOCIALS.map(({ label, href, Icon, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 48, height: 48, borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                  border: `1px solid ${theme.border}`,
                  color: theme.textLight,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color + "55"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = theme.textLight; e.currentTarget.style.borderColor = theme.border; }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}