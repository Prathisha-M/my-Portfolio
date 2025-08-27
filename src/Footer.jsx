import { Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

const Footer = ({ isDarkMode, theme }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/Prathisha-M",
      icon: Github,
      color: "#333"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/prathisha-m",
      icon: Linkedin,
      color: "#0077B5"
    },
    { 
      name: "Email", 
      href: "mailto:prathishamurugesan@gmail.com",
      icon: Mail,
      color: "#EA4335"
    },
  ];

  return (
    <footer
      style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: "3rem 2rem 2rem",
        marginTop: "4rem",
        borderTop: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '2fr 1fr 1fr' : '1fr',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: theme.highlight,
              marginBottom: '1rem',
            }}>
              Prathisha M
            </h3>
            <p style={{
              color: theme.textLight,
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Software Developer with hands-on experience in React Native development. 
            </p>
            
            {/* Social Links with Icons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: isDarkMode ? '#334155' : '#ffffff',
                      color: theme.text,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${isDarkMode ? '#475569' : '#e2e8f0'}`,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = link.color;
                      e.target.style.color = '#ffffff';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = `0 8px 25px ${link.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = isDarkMode ? '#334155' : '#ffffff';
                      e.target.style.color = theme.text;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: theme.text,
              marginBottom: '1rem',
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: theme.textLight,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.color = theme.highlight}
                  onMouseLeave={(e) => e.target.style.color = theme.textLight}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: theme.text,
              marginBottom: '1rem',
            }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="mailto:prathishamurugesan@gmail.com"
                style={{
                  color: theme.textLight,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = theme.highlight}
                onMouseLeave={(e) => e.target.style.color = theme.textLight}
              >
                prathishamurugesan@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${isDarkMode ? '#334155' : '#e2e8f0'}, transparent)`,
          margin: '2rem 0 1.5rem',
        }} />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            color: theme.textLight,
            fontSize: '0.85rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>&copy; {currentYear} Prathisha M. Made with</span>
            <Heart 
              size={16} 
              style={{ 
                color: theme.highlight,
                fill: theme.highlight 
              }} 
            />
            <span>and lots of coffee</span>
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            fontSize: '0.85rem',
          }}>
            <span style={{ color: theme.textLight }}>
              Built with React
            </span>
            <span style={{ color: theme.textLight }}>
              •
            </span>
            <span style={{ color: theme.textLight }}>
              Deployed with ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;