// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: 'RealtyPro',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    properties: {
      title: 'Properties',
      links: [
        { name: 'Buy Properties', path: '/properties?type=buy' },
        { name: 'Rent Properties', path: '/properties?type=rent' },
        { name: 'Commercial', path: '/properties?type=commercial' },
        { name: 'Luxury Homes', path: '/properties?type=luxury' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Property Valuation', path: '/services#valuation' },
        { name: 'Legal Support', path: '/services#legal' },
        { name: 'Home Loans', path: '/services#loans' },
        { name: 'Investment Advisory', path: '/investment' }
      ]
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Footer Content */}
        <div style={styles.footerMain}>
          {/* Company Info */}
          <div style={styles.footerSection}>
            <div style={styles.logoSection}>
              <div style={styles.logo}>
                <span style={styles.logoIcon}>🏢</span>
                <span style={styles.logoText}>RealtyPro</span>
              </div>
              <p style={styles.companyDescription}>
                Your trusted partner for premium real estate solutions. 
                Find your dream property with confidence and expert guidance.
              </p>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink}>📘</a>
                <a href="#" style={styles.socialLink}>📷</a>
                <a href="#" style={styles.socialLink}>🐦</a>
                <a href="#" style={styles.socialLink}>💼</a>
                <a href="#" style={styles.socialLink}>📺</a>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} style={styles.footerSection}>
              <h3 style={styles.sectionTitle}>{section.title}</h3>
              <ul style={styles.linksList}>
                {section.links.map((link, index) => (
                  <li key={index} style={styles.linkItem}>
                    <Link to={link.path} style={styles.footerLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Get In Touch</h3>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <div style={styles.contactDetails}>
                  <p style={styles.contactLabel}>Call Us</p>
                  <p style={styles.contactValue}>+91 98765 43210</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <div style={styles.contactDetails}>
                  <p style={styles.contactLabel}>Email</p>
                  <p style={styles.contactValue}>info@realtypro.com</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div style={styles.contactDetails}>
                  <p style={styles.contactLabel}>Address</p>
                  <p style={styles.contactValue}>Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div style={styles.newsletter}>
          <div style={styles.newsletterContent}>
            <h3 style={styles.newsletterTitle}>Stay Updated</h3>
            <p style={styles.newsletterText}>
              Subscribe to get latest property updates and market insights
            </p>
          </div>
          <form style={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={styles.newsletterInput}
            />
            <button type="submit" style={styles.newsletterBtn}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Footer */}
        <div style={styles.footerBottom}>
          <div style={styles.bottomLeft}>
            <p style={styles.copyright}>
              © {currentYear} RealtyPro. All rights reserved.
            </p>
            <div style={styles.legalLinks}>
              <Link to="/privacy" style={styles.legalLink}>Privacy Policy</Link>
              <span style={styles.separator}>|</span>
              <Link to="/terms" style={styles.legalLink}>Terms of Service</Link>
              <span style={styles.separator}>|</span>
              <Link to="/cookies" style={styles.legalLink}>Cookie Policy</Link>
            </div>
          </div>
          <div style={styles.bottomRight}>
            <p style={styles.madeWith}>
              Made with ❤️ for premium real estate
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    color: 'white',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 1rem',
    '@media (min-width: 768px)': {
      padding: '0 2rem'
    }
  },
  footerMain: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    padding: '2rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: '2fr repeat(3, 1fr)',
      gap: '3rem',
      padding: '4rem 0 2rem'
    }
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  logoSection: {
    marginBottom: '1rem'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '1.5rem'
  },
  logoIcon: {
    fontSize: '2rem'
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  companyDescription: {
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    fontSize: '1rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: 'white'
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  linkItem: {
    marginBottom: '0.8rem'
  },
  footerLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  contactIcon: {
    fontSize: '1.5rem',
    marginTop: '0.2rem'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.6)',
    margin: '0 0 0.3rem 0'
  },
  contactValue: {
    fontSize: '1rem',
    color: 'white',
    margin: 0,
    fontWeight: '500'
  },
  newsletter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  newsletterContent: {
    flex: 1,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  },
  newsletterTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  newsletterText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem'
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    '@media (min-width: 640px)': {
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  newsletterInput: {
    padding: '1rem',
    borderRadius: '25px',
    border: 'none',
    fontSize: '1rem',
    width: '100%',
    outline: 'none',
    '@media (min-width: 640px)': {
      width: '300px'
    }
  },
  newsletterBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    width: '100%',
    '@media (min-width: 640px)': {
      width: 'auto'
    }
  },
  footerBottom: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem 0',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'left'
    }
  },
  bottomLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      alignItems: 'flex-start'
    }
  },
  copyright: {
    margin: 0,
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.9rem'
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      justifyContent: 'flex-start'
    }
  },
  legalLink: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease'
  },
  separator: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.9rem'
  },
  bottomRight: {
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'right'
    }
  },
  madeWith: {
    margin: 0,
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.9rem'
  }
};

// Add hover effects
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    a:hover {
      color: #667eea !important;
      transform: translateX(5px);
    }
    .social-link:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      transform: translateY(-2px);
    }
    .newsletter-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }
    .legal-link:hover {
      color: #667eea !important;
    }
  `;
  document.head.appendChild(style);
}

export default Footer;