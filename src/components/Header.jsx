// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/Header.css'; // We'll create this CSS file

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">🏢</span>
            <span className="logo-text">RealtyPro</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobileView && (
            <div className="desktop-nav">
              <div className="nav-links">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="call-button">
                  <span className="call-icon">📞</span> +91 98765 43210
                </button>
                <button className="cta-button">List Property</button>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobileView && (
            <button
              className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileView && isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mobile-action-buttons">
              <button className="mobile-call-button">
                <span className="call-icon">📞</span> Call Us
              </button>
              <button className="mobile-cta-button">List Property</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;