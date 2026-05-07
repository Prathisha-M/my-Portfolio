import React, { useState, useEffect, useCallback } from "react";
import { Github, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import SmartMandap from "./assets/SmartMandap.png";
import SmartFreshBasket from "./assets/SmartFreshBasket.png";
import SmartIronBusiness from "./assets/SmartIronBusiness.jpg";
import SmartIronXpress from "./assets/SmartIronXpress.jpg";
import SmartLaundryBanner from "./assets/SmartLaundryBanner.jpeg";
import SmartLaundryBusinessBanner from "./assets/SmartLaundryBusinessBanner.jpeg";
import TPVBanner from "./assets/TPVBanner.jpg";
import CollegeBusBanner from "./assets/CollegeBusBanner.jpg";
import apple from "./assets/apple.png";
import play from "./assets/play.png";

// Smart Fresh Basket screenshots
import SFB_Login from "./assets/Smart_Fresh_Basket/Customer_Screens/Login_Screen.png";
import SFB_AddLocation from "./assets/Smart_Fresh_Basket/Customer_Screens/Add_Location.png";
import SFB_AddressSelection from "./assets/Smart_Fresh_Basket/Customer_Screens/Address_Selection.png";
import SFB_AddToCart from "./assets/Smart_Fresh_Basket/Customer_Screens/AddToCart.png";
import SFB_Dashboard from "./assets/Smart_Fresh_Basket/Customer_Screens/Dashboard.png";
import SFB_Onboarding from "./assets/Smart_Fresh_Basket/Customer_Screens/Onboarding_Screen.png";
import SFB_OrderHistory from "./assets/Smart_Fresh_Basket/Customer_Screens/Order_History.png";
import SFB_ProductDetails from "./assets/Smart_Fresh_Basket/Customer_Screens/Product_Details.png";
import SFB_Splash from "./assets/Smart_Fresh_Basket/Customer_Screens/SplashScreen.png";
import SFB_F_AddStock from "./assets/Smart_Fresh_Basket/Farmer_Screens/Add_Stock.png";
import SFB_F_Currency from "./assets/Smart_Fresh_Basket/Farmer_Screens/Currency.png";
import SFB_F_Dashboard from "./assets/Smart_Fresh_Basket/Farmer_Screens/Dashboard.png";
import SFB_F_Login from "./assets/Smart_Fresh_Basket/Farmer_Screens/Login.png";
import SFB_F_Navigation from "./assets/Smart_Fresh_Basket/Farmer_Screens/Navigation.png";
import SFB_F_OrderList from "./assets/Smart_Fresh_Basket/Farmer_Screens/Order_List.png";

const SFB_SCREENSHOTS = [
  { src: SFB_Splash,          label: "Splash Screen",      tab: "Customer" },
  { src: SFB_Onboarding,      label: "Onboarding",         tab: "Customer" },
  { src: SFB_Login,           label: "Login",              tab: "Customer" },
  { src: SFB_AddLocation,     label: "Add Location",       tab: "Customer" },
  { src: SFB_AddressSelection,label: "Address Selection",  tab: "Customer" },
  { src: SFB_Dashboard,       label: "Dashboard",          tab: "Customer" },
  { src: SFB_ProductDetails,  label: "Product Details",    tab: "Customer" },
  { src: SFB_AddToCart,       label: "Add to Cart",        tab: "Customer" },
  { src: SFB_OrderHistory,    label: "Order History",      tab: "Customer" },
  { src: SFB_F_Login,         label: "Login",              tab: "Farmer"   },
  { src: SFB_F_Dashboard,     label: "Dashboard",          tab: "Farmer"   },
  { src: SFB_F_Navigation,    label: "Navigation",         tab: "Farmer"   },
  { src: SFB_F_AddStock,      label: "Add Stock",          tab: "Farmer"   },
  { src: SFB_F_OrderList,     label: "Order List",         tab: "Farmer"   },
  { src: SFB_F_Currency,      label: "Currency",           tab: "Farmer"   },
];

const PROJECTS = [
  {
    id: 1,
    title: "Smart Mandap",
    tagline: "Wedding venue booking made simple",
    description:
      "Smart Mandap is a complete wedding venue booking app that helps users discover, explore, and book mandaps easily. It supports Admin, Customer, and User roles with seamless booking and management features.",
    category: "mobile",
    features: [
      "Browse mandaps with images and detailed information",
      "Easy booking and enquiry system",
      "Role-based login (Admin, Customer, User)",
      "Booking management and status tracking",
      "User-friendly and responsive interface",
    ],
    tech: ["React Native", "Node.js", "Firebase", "MySQL", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    image: SmartMandap,
    accent: "#b91c1c",
  },
  {
    id: 2,
    title: "Smart Fresh Basket",
    tagline: "Grocery delivery made easy",
    description:
      "Smart Fresh Basket is a modern grocery delivery app that allows users to browse, select, and order fresh produce and household items with ease.",
    category: "mobile",
    features: [
      "Browse products with images and detailed information",
      "Easy ordering and checkout system",
      "Role-based login (Admin, Customer, User)",
      "Order management and status tracking",
      "User-friendly and responsive interface",
    ],
    tech: ["React Native", "Node.js", "Firebase", "MySQL", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    github: "https://github.com/Prathisha-M/Project_Screenchots/tree/main/Smart_Fresh_Basket",
    screenshots: SFB_SCREENSHOTS,
    image: SmartFreshBasket,
    accent: "#2ec05a",
  },
  {
    id: 3,
    title: "Smart Iron Business",
    tagline: "Vendor & delivery management",
    description:
      "All-in-one ironing service app for vendors, delivery partners, and admins — with integrated maps for efficient pickup & delivery coordination.",
    category: "mobile",
    features: [
      "Google Maps API for real-time tracking",
      "Firebase Cloud Messaging notifications",
      "Role-based dashboards for all actors",
      "Order scheduling & delivery management",
    ],
    tech: ["React Native", "Node.js", "Firebase", "MySQL", "Google Maps API", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    playStore: "https://play.google.com/store/apps/details?id=com.smartironbusiness",
    appStore: "https://apps.apple.com/in/app/smart-iron-business/id6755295734",
    image: SmartIronBusiness,
    accent: "#f97316",
  },
  {
    id: 4,
    title: "Smart Iron Xpress",
    tagline: "Customer-facing ironing app",
    description:
      "Convenient ironing service app where customers place orders, track progress in real-time, and receive seamless updates from pickup to delivery.",
    category: "mobile",
    features: [
      "Simple order placement with clothing selection",
      "Real-time tracking via Google Maps",
      "Firebase push notifications",
      "User-friendly responsive UI",
    ],
    tech: ["React Native", "Google Maps API", "Firebase", "Express.js", "MySQL", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    playStore: "https://play.google.com/store/apps/details?id=com.smartironxpress",
    appStore: "https://apps.apple.com/in/app/smart-iron-xpress/id6754585989",
    image: SmartIronXpress,
    accent: "#6056ff",
  },
  {
    id: 5,
    title: "Smart Laundry",
    tagline: "On-demand laundry service",
    description:
      "Connects customers with nearby laundries and provides real-time order status — from pickup scheduling to delivery confirmation.",
    category: "mobile",
    features: [
      "Nearby laundry discovery via Maps",
      "Real-time order status updates",
      "Firebase notifications",
      "Clean & intuitive navigation",
    ],
    tech: ["React Native", "Google Maps API", "Firebase", "Node.js", "MySQL", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    playStore: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
    image: SmartLaundryBanner,
    accent: "#10b981",
  },
  {
    id: 6,
    title: "Smart Laundry Business",
    tagline: "Vendor & delivery management",
    description:
      "Business analytics app with interactive charts, order summaries, delivery management, and dynamic pricing configuration for laundry owners.",
    category: "mobile",
    features: [
      "Analytics with interactive charts",
      "Google Maps for live navigation",
      "WhatsApp billing summaries",
      "Dynamic pricing configuration",
    ],
    tech: ["React Native", "Firebase", "Google Maps API", "Node.js", "MySQL", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    playStore: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
    image: SmartLaundryBusinessBanner,
    accent: "#8b5cf6",
  },
  {
    id: 7,
    title: "TPV",
    tagline: "Business networking platform",
    description:
      "Mobile app for professional business networking — connecting members, managing chapters, tracking referrals, and handling payments.",
    category: "mobile",
    features: [
      "Secure OTP authentication",
      "Star rating system for referrals",
      "Attendance tracking",
      "Payment gateway integration",
    ],
    tech: ["React Native", "Firebase", "Google Maps API", "Node.js", "MySQL", "Express.js", "Redux", "REST API", "JWT Authentication", "Socket.IO", "Git"],
    playStore: "https://play.google.com/store/apps/details?id=com.tpv_app&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/tpv-app/id6752292667",
    image: TPVBanner,
    accent: "#ec4899",
  },
  {
    id: 8,
    title: "College Bus Tracking",
    tagline: "Real-time campus transit",
    description:
      "Android app for real-time college bus tracking with dual login for drivers and students, proximity alerts, and Google Maps integration.",
    category: "mobile",
    features: [
      "Real-time tracking with Google Maps",
      "Dual login: drivers & students",
      "Push proximity alerts",
      "User-friendly alert system",
    ],
    tech: ["Android Studio", "Firebase", "Google Maps API", "Java"],
    image: CollegeBusBanner,
    accent: "#f59e0b",
  },
];

// ─── Screenshot Carousel Modal ────────────────────────────────────────────────
const ScreenshotModal = ({ project, onClose }) => {
  const tabs = [...new Set(project.screenshots.map((s) => s.tab))];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = project.screenshots.filter((s) => s.tab === activeTab);
  const accent = project.accent;

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  // Reset index when tab changes
  useEffect(() => { setCurrentIndex(0); }, [activeTab]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const current = filtered[currentIndex];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0f0f0f",
          border: `1px solid ${accent}30`,
          borderRadius: "20px",
          width: "100%",
          maxWidth: 480,
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: `0 0 60px ${accent}22`,
        }}
      >
        {/* Modal Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 1.25rem",
          borderBottom: `1px solid ${accent}20`,
          flexShrink: 0,
        }}>
          <div>
            <h3 style={{
              margin: 0, fontSize: "1rem", fontWeight: 800,
              color: "#fff", letterSpacing: "-0.02em",
              fontFamily: "'Syne', sans-serif",
            }}>{project.title}</h3>
            <p style={{ margin: 0, fontSize: "0.72rem", color: accent, fontWeight: 600, marginTop: 2 }}>
              App Screenshots
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div style={{
            display: "flex", gap: "0.5rem",
            padding: "0.75rem 1.25rem 0",
            flexShrink: 0,
          }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "0.35rem 1rem",
                  borderRadius: "2rem",
                  border: `1px solid ${activeTab === tab ? accent : "rgba(255,255,255,0.12)"}`,
                  background: activeTab === tab ? accent + "22" : "transparent",
                  color: activeTab === tab ? accent : "rgba(255,255,255,0.5)",
                  fontSize: "0.75rem", fontWeight: 700,
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {tab} Screens
              </button>
            ))}
          </div>
        )}

        {/* Image Area */}
        <div style={{
          flex: 1, overflow: "hidden",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "1rem 1.25rem",
          position: "relative",
          minHeight: 0,
        }}>
          {/* Counter */}
          <p style={{
            margin: "0 0 0.6rem", fontSize: "0.72rem",
            color: "rgba(255,255,255,0.4)", fontWeight: 600,
            alignSelf: "flex-end",
          }}>
            {currentIndex + 1} / {filtered.length}
          </p>

          {/* Image + arrows row */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "0.75rem", width: "100%",
            flex: 1, minHeight: 0,
          }}>
            {/* Prev */}
            <button
              onClick={prev}
              style={{
                flexShrink: 0,
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: `1px solid rgba(255,255,255,0.12)`,
                cursor: "pointer", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = accent + "33"; e.currentTarget.style.borderColor = accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Screenshot image */}
            <div style={{
              flex: 1, minHeight: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "14px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${accent}20`,
              maxHeight: "calc(92vh - 220px)",
            }}>
              <img
                key={current.src}
                src={current.src}
                alt={current.label}
                style={{
                  maxWidth: "100%",
                  maxHeight: "calc(92vh - 220px)",
                  objectFit: "contain",
                  display: "block",
                  animation: "fadeIn 0.25s ease",
                }}
              />
            </div>

            {/* Next */}
            <button
              onClick={next}
              style={{
                flexShrink: 0,
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: `1px solid rgba(255,255,255,0.12)`,
                cursor: "pointer", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = accent + "33"; e.currentTarget.style.borderColor = accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Label */}
          <p style={{
            margin: "0.65rem 0 0",
            fontSize: "0.8rem", fontWeight: 600,
            color: "rgba(255,255,255,0.6)",
          }}>{current.label}</p>
        </div>

        {/* Dot indicators */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: "0.4rem", padding: "0.75rem 1.25rem 1.25rem",
          flexShrink: 0, flexWrap: "wrap",
        }}>
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? 20 : 7,
                height: 7, borderRadius: "4px",
                background: i === currentIndex ? accent : "rgba(255,255,255,0.2)",
                border: "none", cursor: "pointer",
                padding: 0, transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
};

// ─── Reusable Components ───────────────────────────────────────────────────────
const TechBadge = ({ label, isDarkMode }) => (
  <span style={{
    display: "inline-block",
    padding: "0.22rem 0.65rem",
    borderRadius: "2rem",
    fontSize: "0.72rem",
    fontWeight: 600,
    background: isDarkMode ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.06)",
    color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
  }}>{label}</span>
);

const StoreBadge = ({ href, icon, label, accent }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    style={{
      display: "inline-flex", alignItems: "center", gap: "0.45rem",
      padding: "0.45rem 1rem", borderRadius: "8px",
      background: accent + "18", color: accent,
      border: `1px solid ${accent}30`,
      fontSize: "0.78rem", fontWeight: 700,
      textDecoration: "none", transition: "all 0.2s",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = accent + "28"; e.currentTarget.style.transform = "translateY(-1px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = accent + "18"; e.currentTarget.style.transform = "translateY(0)"; }}
  >
    <img src={icon} alt={label} style={{ width: 14, height: 14 }} />
    {label}
  </a>
);

const GithubBadge = ({ href, accent }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    style={{
      display: "inline-flex", alignItems: "center", gap: "0.45rem",
      padding: "0.45rem 1rem", borderRadius: "8px",
      background: accent + "18", color: accent,
      border: `1px solid ${accent}30`,
      fontSize: "0.78rem", fontWeight: 700,
      textDecoration: "none", transition: "all 0.2s",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = accent + "28"; e.currentTarget.style.transform = "translateY(-1px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = accent + "18"; e.currentTarget.style.transform = "translateY(0)"; }}
  >
    <Github size={14} />
    GitHub
  </a>
);

// ── Screenshots badge now uses Camera icon ─────────────────────────────────────
const ScreenshotsBadge = ({ onClick, accent }) => (
  <button
    onClick={onClick}
    style={{
      display: "inline-flex", alignItems: "center", gap: "0.45rem",
      padding: "0.45rem 1rem", borderRadius: "8px",
      background: accent + "18", color: accent,
      border: `1px solid ${accent}30`,
      fontSize: "0.78rem", fontWeight: 700,
      cursor: "pointer", transition: "all 0.2s",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = accent + "28"; e.currentTarget.style.transform = "translateY(-1px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = accent + "18"; e.currentTarget.style.transform = "translateY(0)"; }}
  >
    <Camera size={14} />
    Screenshots
  </button>
);

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, isDarkMode, theme }) => {
  const [imgHov, setImgHov] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <>
      {showCarousel && project.screenshots && (
        <ScreenshotModal project={project} onClose={() => setShowCarousel(false)} />
      )}

      <div style={{
        background: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
        border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
        borderRadius: "18px", overflow: "hidden",
        backdropFilter: "blur(12px)",
        display: "flex", flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isDarkMode ? "0 4px 20px rgba(0,0,0,0.25)" : "0 4px 16px rgba(0,0,0,0.06)",
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = `0 20px 48px ${project.accent}22, 0 0 0 1px ${project.accent}25`;
          e.currentTarget.style.borderColor = project.accent + "40";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = isDarkMode ? "0 4px 20px rgba(0,0,0,0.25)" : "0 4px 16px rgba(0,0,0,0.06)";
          e.currentTarget.style.borderColor = isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
        }}
      >
        {/* Banner image */}
        <div
          style={{ position: "relative", height: 200, overflow: "hidden", background: "#111" }}
          onMouseEnter={() => setImgHov(true)}
          onMouseLeave={() => setImgHov(false)}
        >
          <img src={project.image} alt={project.title} style={{
            width: "100%", height: "100%",
            transform: imgHov ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.55s ease",
            filter: imgHov ? "brightness(0.7)" : "brightness(1)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to top, ${project.accent}cc 0%, transparent 50%)`,
            opacity: imgHov ? 1 : 0, transition: "opacity 0.35s ease",
          }} />

          {/* Top-right icon buttons */}
          <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", display: "flex", gap: "0.4rem" }}>
            {/* Camera icon → opens carousel */}
            {project.screenshots && (
              <button
                onClick={() => setShowCarousel(true)}
                title="View Screenshots"
                style={{
                  width: 32, height: 32, borderRadius: "8px",
                  background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s", color: "#fff",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                <Camera size={14} />
              </button>
            )}
            {/* GitHub icon → opens GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                style={{
                  width: 32, height: 32, borderRadius: "8px",
                  background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s", color: "#fff",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                <Github size={14} />
              </a>
            )}
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 32, height: 32, borderRadius: "8px",
                  background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                <img src={play} alt="Play" style={{ width: 14, height: 14 }} />
              </a>
            )}
            {project.appStore && (
              <a href={project.appStore} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 32, height: 32, borderRadius: "8px",
                  background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                <img src={apple} alt="App Store" style={{ width: 14, height: 14 }} />
              </a>
            )}
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.15rem", fontWeight: 800,
              color: theme.text, marginBottom: "0.25rem",
              letterSpacing: "-0.02em",
            }}>{project.title}</h3>
            <p style={{ fontSize: "0.78rem", fontWeight: 600, color: project.accent }}>{project.tagline}</p>
          </div>

          <p style={{ fontSize: "0.87rem", color: theme.textLight, lineHeight: 1.7, flex: 1 }}>
            {project.description}
          </p>

          <ul style={{ margin: 0, padding: 0 }}>
            {project.features.map((f, i) => (
              <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.35rem", fontSize: "0.82rem", color: theme.textLight, lineHeight: 1.5 }}>
                <span style={{ color: project.accent, marginTop: 2, flexShrink: 0 }}>▸</span>{f}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {project.tech.map((t) => <TechBadge key={t} label={t} isDarkMode={isDarkMode} />)}
          </div>

          {/* Bottom action buttons */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
            {/* Screenshots button (Camera icon) */}
            {project.screenshots && (
              <ScreenshotsBadge onClick={() => setShowCarousel(true)} accent={project.accent} />
            )}
            {/* GitHub button — always shown when github link exists */}
            {project.github && (
              <GithubBadge href={project.github} accent={project.accent} />
            )}
            {project.playStore && (
              <StoreBadge href={project.playStore} icon={play} label="Play Store" accent={project.accent} />
            )}
            {project.appStore && (
              <StoreBadge href={project.appStore} icon={apple} label="App Store" accent={project.accent} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Projects({ theme, isDarkMode }) {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span style={{
          display: "inline-block",
          background: isDarkMode ? "rgba(96,86,255,0.14)" : "rgba(96,86,255,0.08)",
          color: theme.accent,
          padding: "0.3rem 1rem", borderRadius: "2rem",
          fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", marginBottom: "1rem",
          border: `1px solid ${theme.accent}28`,
        }}>Featured Work</span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800,
          color: theme.text, letterSpacing: "-0.03em",
          margin: "0.5rem 0 1rem",
        }}>
          Projects &amp;{" "}
          <span style={{
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Apps</span>
        </h2>
        <p style={{ color: theme.textLight, fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
          Production-grade mobile applications deployed on Play Store &amp; App Store.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "1.5rem",
      }}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} isDarkMode={isDarkMode} theme={theme} />
        ))}
      </div>
    </section>
  );
}