import * as React from "react";
import { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

/* ─────────────────────────────────────────────
   Design tokens — edit here to retheme everything
───────────────────────────────────────────── */
const TOKENS = {
  light: {
    bg:        "#f8f7f4",
    bg2:       "#f0ede8",
    text:      "#111318",
    textLight: "#6b7280",
    card:      "rgba(255,255,255,0.80)",
    cardSolid: "#ffffff",
    border:    "rgba(17,19,24,0.09)",
    accent:    "#6056ff",         // indigo-violet
    accent2:   "#00c4a0",         // teal
    highlight: "#ff5a5a",         // coral
    primary:   "#6056ff",
    shadow:    "rgba(96,86,255,0.18)",
  },
  dark: {
    bg:        "#07090f",
    bg2:       "#0e1220",
    text:      "#eef0f6",
    textLight: "#7c8899",
    card:      "rgba(255,255,255,0.045)",
    cardSolid: "#0e1220",
    border:    "rgba(255,255,255,0.08)",
    accent:    "#8b82ff",
    accent2:   "#2de8c4",
    highlight: "#ff7070",
    primary:   "#8b82ff",
    shadow:    "rgba(139,130,255,0.22)",
  },
};

/* Animated background orbs */
const BgOrbs = ({ isDark, accent, accent2 }) => (
  <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
    <div style={{
      position: "absolute", top: "-15%", right: "-10%",
      width: "600px", height: "600px", borderRadius: "50%",
      background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
      animation: "pulse-glow 8s ease-in-out infinite",
    }} />
    <div style={{
      position: "absolute", bottom: "5%", left: "-12%",
      width: "500px", height: "500px", borderRadius: "50%",
      background: `radial-gradient(circle, ${accent2}1a 0%, transparent 70%)`,
      animation: "pulse-glow 11s ease-in-out infinite 2s",
    }} />
    {/* Subtle grid overlay */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: isDark
        ? `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
           linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`
        : `linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
           linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)`,
      backgroundSize: "48px 48px",
      maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
    }} />
  </div>
);

export default function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    try { return JSON.parse(localStorage.getItem('darkMode') ?? 'false'); }
    catch { return false; }
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const theme = isDarkMode ? TOKENS.dark : TOKENS.light;

  return (
    <div style={{
      background: theme.bg,
      color: theme.text,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      transition: "background 0.4s ease, color 0.3s ease",
    }}>
      <BgOrbs isDark={isDarkMode} accent={theme.accent} accent2={theme.accent2} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header
          isDarkMode={isDarkMode}
          setDarkMode={setDarkMode}
          theme={theme}
          isScrolled={isScrolled}
        />

        <main>
          <section id="about">
            <About theme={theme} isDarkMode={isDarkMode} />
          </section>
          <section id="skills">
            <Skills theme={theme} isDarkMode={isDarkMode} />
          </section>
          <section id="projects">
            <Projects theme={theme} isDarkMode={isDarkMode} />
          </section>
          <section id="contact">
            <Contact theme={theme} isDarkMode={isDarkMode} />
          </section>
        </main>

        <Footer isDarkMode={isDarkMode} theme={theme} />
      </div>
    </div>
  );
}