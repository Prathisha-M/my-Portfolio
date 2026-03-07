import * as React from "react";
import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, ArrowRight } from "lucide-react";

const EMAIL = "prathishamurugesan@gmail.com";

const CHANNELS = [
  {
    Icon: Mail,
    label: "Email",
    value: EMAIL,
    sub: "Fastest response",
    href: `mailto:${EMAIL}`,
    color: "#ff7070",
    bg: "rgba(255,112,112,0.10)",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "prathisha-m",
    sub: "Let's connect professionally",
    href: "https://www.linkedin.com/in/prathisha-m",
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.10)",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "Prathisha-M",
    sub: "Check out my code",
    href: "https://github.com/Prathisha-M",
    color: isDark => isDark ? "#c9d1d9" : "#24292e",
    bg: isDark => isDark ? "rgba(201,209,217,0.08)" : "rgba(36,41,46,0.07)",
  },
];

export default function Contact({ theme, isDarkMode }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section style={{
      background: isDarkMode
        ? "linear-gradient(160deg, #07090f 0%, #0e1220 60%, #07090f 100%)"
        : "linear-gradient(160deg, #f8f7f4 0%, #eff6ff 100%)",
      padding: "6rem 1.5rem 5rem",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 500, height: 240,
        background: `radial-gradient(ellipse, ${theme.accent}18 0%, transparent 70%)`,
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            display: "inline-block",
            background: isDarkMode ? `${theme.accent}18` : `${theme.accent}10`,
            color: theme.accent,
            padding: "0.3rem 1rem", borderRadius: "2rem",
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", marginBottom: "1.25rem",
            border: `1px solid ${theme.accent}28`,
          }}>Let's Talk</span>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
            fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05,
            color: theme.text, marginBottom: "1.25rem",
          }}>
            Get In{" "}
            <span style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Touch</span>
          </h2>

          <p style={{ color: theme.textLight, fontSize: "1rem", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
            Open to collaborations, new opportunities, or just a friendly chat about tech and mobile development.
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
          {CHANNELS.map(({ Icon, label, value, sub, href, color: rawColor, bg: rawBg }) => {
            const color = typeof rawColor === "function" ? rawColor(isDarkMode) : rawColor;
            const bg    = typeof rawBg    === "function" ? rawBg(isDarkMode)    : rawBg;
            const isEmail = label === "Email";

            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)",
                  border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
                  borderRadius: "14px",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  boxShadow: isDarkMode ? "0 2px 12px rgba(0,0,0,0.2)" : "0 2px 10px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color + "50";
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.boxShadow = `0 8px 28px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = isDarkMode ? "0 2px 12px rgba(0,0,0,0.2)" : "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: "12px", flexShrink: 0,
                  background: bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color,
                }}>
                  <Icon size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontSize:"0.78rem", fontWeight:700, color: theme.textLight, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.2rem" }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "0.92rem", fontWeight: 600, color: theme.text }}>{value}</p>
                  <p style={{ fontSize: "0.75rem", color: theme.textLight }}>{sub}</p>
                </div>
                <ArrowRight size={18} style={{ color: theme.textLight, flexShrink: 0 }} />
              </a>
            );
          })}
        </div>

        {/* Copy email CTA */}
        <div style={{ textAlign: "center" }}>
          <button onClick={copy} style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.85rem 2rem",
            borderRadius: "12px",
            background: copied
              ? `linear-gradient(135deg, ${theme.accent2}, #059669)`
              : `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
            color: "#fff", fontWeight: 700, fontSize: "0.92rem",
            border: "none", cursor: "pointer",
            boxShadow: `0 8px 24px ${theme.shadow}`,
            transition: "all 0.3s ease",
          }}
            onMouseEnter={(e) => { if (!copied) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 14px 32px ${theme.shadow}`; } }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 8px 24px ${theme.shadow}`; }}
          >
            {copied ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy Email Address</>}
          </button>
          <p style={{ color: theme.textLight, fontSize: "0.78rem", marginTop: "0.75rem" }}>
            {EMAIL}
          </p>
        </div>
      </div>
    </section>
  );
}