// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyInterest: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone Support',
      details: ['+91 98765 43210', '+91 98765 43211'],
      description: 'Available 24/7 for urgent queries',
      color: '#27ae60'
    },
    {
      icon: '📧',
      title: 'Email Support',
      details: ['info@realtypro.com', 'support@realtypro.com'],
      description: 'Response within 2 hours',
      color: '#3498db'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: ['Available on website', 'WhatsApp: +91 98765 43210'],
      description: 'Instant responses during business hours',
      color: '#e74c3c'
    },
    {
      icon: '📍',
      title: 'Office Locations',
      details: ['Mumbai, Delhi, Bangalore', 'Pune, Hyderabad, Chennai'],
      description: 'Visit our offices across India',
      color: '#f39c12'
    }
  ];

  const offices = [
    {
      city: 'Mumbai',
      address: '123 Business District, Bandra West, Mumbai 400050',
      phone: '+91 98765 43210',
      email: 'mumbai@realtypro.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      city: 'Delhi',
      address: '456 Corporate Hub, Connaught Place, New Delhi 110001',
      phone: '+91 98765 43211',
      email: 'delhi@realtypro.com',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Koramangala, Bangalore 560034',
      phone: '+91 98765 43212',
      email: 'bangalore@realtypro.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccessModal(true);
    setFormData({
      name: '', email: '', phone: '', subject: '', message: '', propertyInterest: ''
    });
  };

  return (
    <div style={styles.contactPage}>
      {/* Hero Section */}
      <motion.section 
        style={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div style={styles.container}>
          <motion.h1 
            style={styles.heroTitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            style={styles.heroSubtitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're here to help you find your perfect property
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <section style={styles.methodsSection}>
        <div style={styles.container}>
          <div style={styles.methodsGrid}>
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                style={{...styles.methodCard, borderLeft: `4px solid ${method.color}`}}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={{...styles.methodIcon, color: method.color}}>
                  {method.icon}
                </div>
                <h3 style={styles.methodTitle}>{method.title}</h3>
                <div style={styles.methodDetails}>
                  {method.details.map((detail, idx) => (
                    <p key={idx} style={styles.methodDetail}>{detail}</p>
                  ))}
                </div>
                <p style={styles.methodDescription}>{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section style={styles.formSection}>
        <div style={styles.container}>
          <div style={styles.formGrid}>
            <motion.div 
              style={styles.formContainer}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={styles.formTitle}>Send us a Message</h2>
              <p style={styles.formSubtitle}>
                Fill out the form below and our team will get back to you within 24 hours
              </p>
              
              <form onSubmit={handleSubmit} style={styles.contactForm}>
                <div style={styles.formRow}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    required
                  />
                </div>

                <div style={styles.formRow}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    required
                  />
                  <select
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleInputChange}
                    style={styles.formSelect}
                    required
                  >
                    <option value="">Property Interest *</option>
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="renting">Renting Property</option>
                    <option value="investment">Investment Advisory</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  style={styles.formTextarea}
                  required
                ></textarea>

                <motion.button 
                  type="submit" 
                  style={styles.submitBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              style={styles.mapContainer}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 style={styles.mapTitle}>Visit Our Head Office</h3>
              <div style={styles.mapPlaceholder}>
                <div style={styles.mapContent}>
                  <h4>RealtyPro Head Office</h4>
                  <p>123 Business District<br />Bandra West, Mumbai 400050</p>
                  <div style={styles.mapButtons}>
                    <button style={styles.directionsBtn}>Get Directions</button>
                    <button style={styles.callBtn}>Call Office</button>
                  </div>
                </div>
              </div>
              
              <div style={styles.quickContact}>
                <h4 style={styles.quickTitle}>Quick Contact</h4>
                <div style={styles.quickItems}>
                  <div style={styles.quickItem}>
                    <span style={styles.quickIcon}>⏰</span>
                    <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div style={styles.quickItem}>
                    <span style={styles.quickIcon}>📞</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div style={styles.quickItem}>
                    <span style={styles.quickIcon}>📧</span>
                    <span>info@realtypro.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section style={styles.officesSection}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Office Locations
          </motion.h2>
          <div style={styles.officesGrid}>
            {offices.map((office, index) => (
              <motion.div
                key={index}
                style={styles.officeCard}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={styles.officeImage}>
                  <img src={office.image} alt={office.city} style={styles.officeImg} />
                  <div style={styles.officeOverlay}>
                    <h3 style={styles.officeCity}>{office.city}</h3>
                  </div>
                </div>
                <div style={styles.officeContent}>
                  <div style={styles.officeDetails}>
                    <div style={styles.officeItem}>
                      <span style={styles.officeIcon}>📍</span>
                      <span>{office.address}</span>
                    </div>
                    <div style={styles.officeItem}>
                      <span style={styles.officeIcon}>📞</span>
                      <span>{office.phone}</span>
                    </div>
                    <div style={styles.officeItem}>
                      <span style={styles.officeIcon}>📧</span>
                      <span>{office.email}</span>
                    </div>
                    <div style={styles.officeItem}>
                      <span style={styles.officeIcon}>⏰</span>
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section style={styles.faqSection}>
        <div style={styles.container}>
          <motion.div 
            style={styles.faqContent}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.faqTitle}>Need Quick Answers?</h2>
            <p style={styles.faqSubtitle}>
              Check out our comprehensive FAQ section or start a live chat
            </p>
            <div style={styles.faqButtons}>
              <motion.button 
                style={styles.faqBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View FAQ
              </motion.button>
              <motion.button 
                style={styles.chatBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Live Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div style={styles.modalOverlay} onClick={() => setShowSuccessModal(false)}>
          <motion.div 
            style={styles.successModal}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.successIcon}>✅</div>
            <h2 style={styles.successTitle}>Message Sent Successfully!</h2>
            <p style={styles.successText}>
              Thank you for contacting us. Our team will get back to you within 24 hours.
            </p>
            <button 
              style={styles.successBtn}
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const styles = {
  contactPage: {
    paddingTop: '80px'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
    color: 'white',
    padding: '5rem 0',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto'
  },
  methodsSection: {
    padding: '5rem 0',
    background: '#f8f9fa'
  },
  methodsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  methodCard: {
    background: 'white',
    padding: '3rem 2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  methodIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  methodTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  methodDetails: {
    marginBottom: '1rem'
  },
  methodDetail: {
    margin: '0.3rem 0',
    fontWeight: '500',
    color: '#333'
  },
  methodDescription: {
    color: '#666',
    fontSize: '0.9rem',
    fontStyle: 'italic'
  },
  formSection: {
    padding: '5rem 0',
    background: 'white'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '4rem',
    alignItems: 'start'
  },
  formContainer: {
    background: '#f8f9fa',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
  },
  formTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  formSubtitle: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  formInput: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  formSelect: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    transition: 'all 0.3s ease'
  },
  formTextarea: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'all 0.3s ease'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  mapContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  mapTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '1rem'
  },
  mapPlaceholder: {
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: '300px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center'
  },
  mapContent: {
    color: '#2c3e50'
  },
  mapButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    justifyContent: 'center'
  },
  directionsBtn: {
    background: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  callBtn: {
    background: '#3498db',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  quickContact: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  quickTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  quickItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  quickItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  quickIcon: {
    fontSize: '1.2rem'
  },
  officesSection: {
    padding: '5rem 0',
    background: '#f8f9fa'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#2c3e50'
  },
  officesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  officeCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  officeImage: {
    position: 'relative',
    height: '200px'
  },
  officeImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  officeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    color: 'white',
    padding: '2rem 1.5rem 1rem'
  },
  officeCity: {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: 0
  },
  officeContent: {
    padding: '2rem'
  },
  officeDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  officeItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  officeIcon: {
    fontSize: '1.2rem',
    minWidth: '20px'
  },
  faqSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '4rem 0',
    color: 'white',
    textAlign: 'center'
  },
  faqContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  faqTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  faqSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '3rem'
  },
  faqButtons: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  faqBtn: {
    background: 'white',
    color: '#667eea',
    border: 'none',
    padding: '1.2rem 3rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  chatBtn: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1.2rem 3rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  successModal: {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    maxWidth: '400px'
  },
  successIcon: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  successTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#27ae60'
  },
  successText: {
    color: '#666',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  successBtn: {
    background: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default Contact;
// Add this at the end of each page's styles object or as a separate responsive styles object

const responsiveStyles = {
  // Mobile Breakpoints
  '@media (max-width: 480px)': {
    // Global mobile styles
  },
  '@media (max-width: 768px)': {
    // Tablet styles
  },
  '@media (max-width: 1024px)': {
    // Small desktop styles
  }
};

// Add this CSS injection at the end of each page component
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    /* Global Mobile Responsive Styles */
    @media (max-width: 768px) {
      * {
        box-sizing: border-box;
      }
      
      .container {
        padding: 0 1rem !important;
        max-width: 100% !important;
      }
      
      h1, .hero-title {
        font-size: 2.5rem !important;
        line-height: 1.2 !important;
      }
      
      h2, .section-title {
        font-size: 2rem !important;
        line-height: 1.3 !important;
      }
      
      h3 {
        font-size: 1.3rem !important;
      }
      
      p {
        font-size: 1rem !important;
        line-height: 1.6 !important;
      }
      
      /* Grid Layouts Mobile */
      .grid, .properties-grid, .services-grid, .team-grid, .benefits-grid, 
      .offices-grid, .jobs-grid, .modern-properties-grid, .modern-services-grid, 
      .testimonials-grid {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
      }
      
      /* Flexbox Mobile */
      .flex-row, .form-row, .search-container, .slide-actions, .hero-stats,
      .cta-buttons, .property-footer, .agent-actions, .quick-links-buttons {
        flex-direction: column !important;
        gap: 1rem !important;
      }
      
      /* Padding & Margins Mobile */
      .section, .hero-section, .featured-section, .services-section {
        padding: 3rem 0 !important;
      }
      
      .card, .property-card, .service-card, .team-card, .modal {
        margin: 0 1rem !important;
        padding: 1.5rem !important;
      }
    }

    /* Header Mobile Responsive */
    @media (max-width: 768px) {
      .nav-links {
        display: none !important;
      }
      
      .action-buttons {
        display: none !important;
      }
      
      .mobile-toggle {
        display: flex !important;
        flex-direction: column !important;
        gap: 3px !important;
        background: transparent !important;
        border: none !important;
        cursor: pointer !important;
        padding: 0.5rem !important;
      }
      
      .mobile-toggle span {
        width: 25px !important;
        height: 3px !important;
        background: #333 !important;
        border-radius: 2px !important;
        transition: all 0.3s ease !important;
      }
      
      .mobile-menu {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        right: 0 !important;
        background: white !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        padding: 2rem 1rem !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 1rem !important;
        z-index: 1000 !important;
      }
      
      .mobile-nav-link {
        padding: 1rem !important;
        text-decoration: none !important;
        color: #333 !important;
        font-weight: 600 !important;
        border-bottom: 1px solid #eee !important;
        transition: all 0.3s ease !important;
      }
      
      .mobile-nav-link:hover {
        color: #667eea !important;
        background: #f8f9fa !important;
        border-radius: 8px !important;
      }
    }

    /* Home Page Mobile Responsive */
    @media (max-width: 768px) {
      .hero-section {
        height: 80vh !important;
        padding: 2rem 0 !important;
      }
      
      .slide-title {
        font-size: 2.5rem !important;
        margin-bottom: 1rem !important;
      }
      
      .slide-subtitle {
        font-size: 1.1rem !important;
        margin-bottom: 2rem !important;
      }
      
      .slide-actions {
        flex-direction: column !important;
        gap: 1rem !important;
        align-items: center !important;
      }
      
      .primary-cta, .secondary-cta {
        width: 100% !important;
        max-width: 300px !important;
        padding: 1rem 2rem !important;
        font-size: 1rem !important;
      }
      
      .hero-stats {
        flex-direction: column !important;
        gap: 2rem !important;
      }
      
      .floating-search {
        position: relative !important;
        bottom: auto !important;
        transform: none !important;
        width: 95% !important;
        margin: -50px auto 2rem !important;
      }
      
      .search-form {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
        padding: 1.5rem !important;
      }
      
      .search-tabs {
        flex-wrap: wrap !important;
      }
      
      .search-tab {
        flex: 1 !important;
        min-width: 80px !important;
        padding: 0.8rem 1rem !important;
        font-size: 0.9rem !important;
      }
      
      .modern-properties-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .modern-property-card {
        margin: 0 1rem !important;
      }
      
      .modern-property-specs {
        flex-wrap: wrap !important;
        gap: 1rem !important;
      }
      
      .property-footer {
        flex-direction: column !important;
        gap: 1rem !important;
        align-items: stretch !important;
      }
      
      .calculator-container {
        flex-direction: column !important;
        text-align: center !important;
        padding: 2rem !important;
      }
      
      .calculator-features {
        justify-content: center !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 1rem !important;
      }
    }

    /* Properties Page Mobile Responsive */
    @media (max-width: 768px) {
      .filters-section {
        margin: -30px 1rem 2rem !important;
        padding: 2rem 1rem !important;
      }
      
      .mobile-filter-btn {
        display: block !important;
        width: 100% !important;
        padding: 1rem !important;
        font-size: 1rem !important;
      }
      
      .filters-container {
        display: none !important;
      }
      
      .filters-container.show {
        display: block !important;
      }
      
      .filters-grid {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      
      .view-toggle {
        grid-template-columns: 1fr 1fr !important;
      }
      
      .properties-container {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
      }
      
      .property-card {
        margin: 0 1rem !important;
      }
      
      .property-card-list {
        flex-direction: column !important;
        height: auto !important;
      }
      
      .property-specs {
        flex-wrap: wrap !important;
        gap: 0.5rem !important;
      }
      
      .property-actions {
        flex-direction: column !important;
        gap: 1rem !important;
      }
      
      .contact-btn, .view-btn {
        width: 100% !important;
        padding: 1rem !important;
      }
      
      .pagination {
        flex-wrap: wrap !important;
        gap: 0.5rem !important;
        justify-content: center !important;
      }
      
      .page-btn {
        min-width: 44px !important;
        padding: 0.8rem !important;
      }
    }

    /* Services Page Mobile Responsive */
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .service-card {
        margin: 0 1rem !important;
        padding: 2rem 1.5rem !important;
      }
      
      .detail-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .detail-image {
        order: -1 !important;
      }
      
      .features-grid {
        grid-template-columns: 1fr !important;
      }
      
      .process-steps {
        grid-template-columns: 1fr !important;
      }
      
      .process-step {
        text-align: center !important;
        padding: 2rem 1.5rem !important;
      }
    }

    /* About Page Mobile Responsive */
    @media (max-width: 768px) {
      .story-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .story-image {
        order: -1 !important;
      }
      
      .mission-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .values-grid {
        grid-template-columns: 1fr !important;
      }
      
      .team-grid {
        grid-template-columns: 1fr !important;
      }
      
      .team-card {
        max-width: 400px !important;
        margin: 0 auto !important;
      }
      
      .timeline-item {
        flex-direction: column !important;
        text-align: center !important;
        gap: 1rem !important;
      }
      
      .timeline-year {
        margin-right: 0 !important;
      }
    }

    /* Contact Page Mobile Responsive */
    @media (max-width: 768px) {
      .methods-grid {
        grid-template-columns: 1fr !important;
      }
      
      .form-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .form-container {
        padding: 2rem 1.5rem !important;
      }
      
      .form-row {
        grid-template-columns: 1fr !important;
      }
      
      .map-container {
        order: -1 !important;
      }
      
      .offices-grid {
        grid-template-columns: 1fr !important;
      }
      
      .office-card {
        margin: 0 1rem !important;
      }
      
      .newsletter-form {
        flex-direction: column !important;
      }
      
      .newsletter-input {
        width: 100% !important;
      }
    }

    /* Careers Page Mobile Responsive */
    @media (max-width: 768px) {
      .culture-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .culture-image {
        order: -1 !important;
      }
      
      .benefits-grid {
        grid-template-columns: 1fr !important;
      }
      
      .jobs-grid {
        grid-template-columns: 1fr !important;
      }
      
      .job-card {
        margin: 0 1rem !important;
        padding: 1.5rem !important;
      }
      
      .job-actions {
        flex-direction: column !important;
        gap: 1rem !important;
      }
      
      .view-details-btn, .apply-btn {
        width: 100% !important;
        padding: 1rem !important;
      }
      
      .details-grid {
        grid-template-columns: 1fr !important;
      }
      
      .application-form .form-row {
        grid-template-columns: 1fr !important;
      }
    }

    /* Modal Mobile Responsive */
    @media (max-width: 768px) {
      .modal-overlay {
        padding: 1rem !important;
      }
      
      .modal, .property-modal, .success-modal, .job-modal, .application-modal {
        width: 95% !important;
        max-width: none !important;
        margin: 0 !important;
        max-height: 90vh !important;
        overflow-y: auto !important;
      }
      
      .modal-header {
        padding: 1.5rem 1rem !important;
        flex-wrap: wrap !important;
      }
      
      .modal-title {
        font-size: 1.5rem !important;
      }
      
      .modal-content {
        padding: 1rem !important;
      }
      
      .image-gallery .thumbnails {
        gap: 0.5rem !important;
      }
      
      .thumbnail {
        width: 80px !important;
        height: 60px !important;
      }
      
      .details-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .specs-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1rem !important;
      }
      
      .amenities-list {
        grid-template-columns: 1fr !important;
      }
      
      .agent-actions {
        flex-direction: column !important;
        gap: 1rem !important;
      }
      
      .quick-actions {
        gap: 1rem !important;
      }
      
      .quick-actions button {
        padding: 1rem !important;
        font-size: 1rem !important;
      }
    }

    /* Chat Widget Mobile Responsive */
    @media (max-width: 768px) {
      .chat-toggle {
        width: 50px !important;
        height: 50px !important;
        bottom: 15px !important;
        right: 15px !important;
        font-size: 1.2rem !important;
      }
      
      .chat-window {
        width: 95% !important;
        height: 70vh !important;
        bottom: 80px !important;
        right: 2.5% !important;
        left: 2.5% !important;
      }
      
      .quick-replies {
        flex-direction: column !important;
      }
      
      .quick-reply {
        width: 100% !important;
        text-align: left !important;
      }
    }

    /* Footer Mobile Responsive */
    @media (max-width: 768px) {
      .footer-main {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
        text-align: center !important;
      }
      
      .logo-section {
        margin-bottom: 2rem !important;
      }
      
      .social-links {
        justify-content: center !important;
      }
      
      .newsletter {
        flex-direction: column !important;
        text-align: center !important;
        gap: 2rem !important;
      }
      
      .newsletter-form {
        flex-direction: column !important;
        max-width: 100% !important;
      }
      
      .newsletter-input {
        width: 100% !important;
        margin-bottom: 1rem !important;
      }
      
      .newsletter-btn {
        width: 100% !important;
      }
      
      .footer-bottom {
        flex-direction: column !important;
        text-align: center !important;
        gap: 1rem !important;
      }
      
      .legal-links {
        flex-direction: column !important;
        gap: 1rem !important;
      }
    }

    /* Buttons Mobile Responsive */
    @media (max-width: 768px) {
      .btn, .cta-btn, .submit-btn, .search-btn, .view-all-btn,
      .primary-cta, .secondary-cta, .calculator-btn {
        width: 100% !important;
        max-width: 300px !important;
        margin: 0 auto !important;
        padding: 1rem 2rem !important;
        font-size: 1rem !important;
        display: block !important;
        text-align: center !important;
      }
      
      .btn-group {
        flex-direction: column !important;
        gap: 1rem !important;
        align-items: center !important;
      }
    }

    /* Form Mobile Responsive */
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      
      .form-input, .form-select, .form-textarea {
        width: 100% !important;
        padding: 1rem !important;
        font-size: 1rem !important;
        border-radius: 8px !important;
      }
      
      .form-textarea {
        min-height: 120px !important;
      }
      
      .form-group {
        margin-bottom: 1.5rem !important;
      }
      
      .form-label {
        margin-bottom: 0.5rem !important;
        font-size: 1rem !important;
      }
    }

    /* Image Mobile Responsive */
    @media (max-width: 768px) {
      img {
        max-width: 100% !important;
        height: auto !important;
      }
      
      .property-image, .story-img, .culture-img, .office-img,
      .detail-img, .main-img, .modern-property-img {
        width: 100% !important;
        height: auto !important;
        min-height: 200px !important;
        object-fit: cover !important;
      }
    }

    /* Navigation Mobile Responsive */
    @media (max-width: 768px) {
      .slide-navigation {
        bottom: 20px !important;
        flex-direction: column !important;
        gap: 1rem !important;
      }
      
      .slide-controls {
        order: -1 !important;
      }
      
      .slide-control {
        width: 40px !important;
        height: 40px !important;
        font-size: 1rem !important;
      }
      
      .modern-indicator {
        width: 40px !important;
        height: 3px !important;
      }
    }

    /* Text Mobile Responsive */
    @media (max-width: 768px) {
      .hero-title, .slide-title {
        font-size: 2.5rem !important;
        line-height: 1.2 !important;
        margin-bottom: 1rem !important;
      }
      
      .section-title {
        font-size: 2rem !important;
        line-height: 1.3 !important;
        margin-bottom: 2rem !important;
      }
      
      .hero-subtitle, .slide-subtitle {
        font-size: 1.1rem !important;
        line-height: 1.5 !important;
        margin-bottom: 2rem !important;
      }
      
      .section-subtitle {
        font-size: 1rem !important;
        line-height: 1.6 !important;
        margin-bottom: 2rem !important;
      }
      
      .property-title, .service-title, .team-name {
        font-size: 1.3rem !important;
        line-height: 1.4 !important;
      }
      
      .property-price, .modal-price {
        font-size: 1.5rem !important;
      }
    }

    /* Spacing Mobile Responsive */
    @media (max-width: 768px) {
      .section {
        padding: 3rem 0 !important;
      }
      
      .hero-section {
        padding: 2rem 0 !important;
      }
      
      .container {
        padding: 0 1rem !important;
      }
      
      .card {
        padding: 1.5rem !important;
        margin: 0 1rem !important;
      }
      
      .modal-content {
        padding: 1rem !important;
      }
      
      .form-container {
        padding: 2rem 1rem !important;
      }
    }

    /* Animation Mobile Optimization */
    @media (max-width: 768px) {
      * {
        animation-duration: 0.3s !important;
        transition-duration: 0.3s !important;
      }
      
      .property-card:hover,
      .service-card:hover,
      .team-card:hover {
        transform: translateY(-5px) !important;
      }
    }

    /* Touch Optimization */
    @media (max-width: 768px) {
      button, .btn, a {
        min-height: 44px !important;
        min-width: 44px !important;
        touch-action: manipulation !important;
      }
      
      .property-card, .service-card, .team-card {
        cursor: pointer !important;
        -webkit-tap-highlight-color: rgba(0,0,0,0.1) !important;
      }
    }
  `;
  document.head.appendChild(style);
}
