import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const LINKS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/Prathisha-M",          Icon: Github,   color: "#8b82ff" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathisha-m", Icon: Linkedin, color: "#0a66c2" },
  { label: "Email",    href: "mailto:prathishamurugesan@gmail.com",      Icon: Mail,     color: "#ff7070" },
];

export default function Footer({ isDarkMode, theme }) {
  const year = new Date().getFullYear();
  const border = isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <footer style={{
      borderTop: `1px solid ${border}`,
      background: isDarkMode ? "#07090f" : "#f8f7f4",
      padding: "3rem 1.5rem 2rem",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "2.5rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
              <div style={{
                width: 34, height: 34, borderRadius: "9px",
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Code2 size={17} color="#fff" />
              </div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: theme.text }}>
                Prathisha M
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: theme.textLight, lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: 260 }}>
              Software Developer crafting seamless mobile &amp; web experiences with React Native.
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {SOCIALS.map(({ label, href, Icon, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  style={{
                    width: 36, height: 36, borderRadius: "9px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                    border: `1px solid ${border}`,
                    color: theme.textLight,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = color + "50";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = color + "12";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.textLight;
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.8rem", fontWeight:700, color:theme.textLight, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"1rem" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {LINKS.map(({ label, href }) => (
                <a key={label} href={href}
                  style={{ fontSize: "0.87rem", color: theme.textLight, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = theme.textLight; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.8rem", fontWeight:700, color:theme.textLight, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"1rem" }}>
              Contact
            </h4>
            <a href="mailto:prathishamurugesan@gmail.com"
              style={{ fontSize:"0.85rem", color:theme.textLight, textDecoration:"none", transition:"color 0.2s", display:"block", marginBottom:"0.5rem" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.textLight; }}
            >
              prathishamurugesan@gmail.com
            </a>
            <p style={{ fontSize: "0.83rem", color: theme.textLight }}>Chennai, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${border}`,
          paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "0.75rem",
        }}>
          <p style={{
            fontSize: "0.82rem", color: theme.textLight,
            display: "flex", alignItems: "center", gap: "0.4rem",
          }}>
            <span>© {year} Prathisha M. Made with</span>
            <Heart size={13} style={{ color: theme.highlight || "#ff7070", fill: theme.highlight || "#ff7070" }} />
            <span>in Chennai</span>
          </p>
          <span style={{ fontSize: "0.78rem", color: theme.textLight }}>
            Built with React + Vite
          </span>
        </div>
      </div>
    </footer>
  );
}