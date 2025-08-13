// src/pages/Services.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'valuation',
      icon: '📊',
      title: 'Property Valuation',
      subtitle: 'Get accurate market value of your property',
      description: 'Our expert valuers provide comprehensive property assessment using latest market data and comparable analysis.',
      features: ['Market Analysis', 'Comparable Sales Data', 'Professional Report', 'Investment Advisory'],
      color: '#3498db',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'legal',
      icon: '⚖️',
      title: 'Legal Support',
      subtitle: 'Complete legal assistance for property transactions',
      description: 'End-to-end legal services including document verification, title search, and transaction support.',
      features: ['Document Verification', 'Title Search', 'NOC Clearance', 'Registration Support'],
      color: '#e74c3c',
      image: 'https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'loans',
      icon: '🏦',
      title: 'Home Loans',
      subtitle: 'Best home loan deals from top banks',
      description: 'We help you secure home loans at competitive rates with minimal documentation and quick processing.',
      features: ['Loan Comparison', 'Quick Approval', 'Competitive Rates', 'Minimal Documentation'],
      color: '#27ae60',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'management',
      icon: '🏗️',
      title: 'Property Management',
      subtitle: 'Complete property management solutions',
      description: 'Professional property management services for landlords and property owners.',
      features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', 'Legal Compliance'],
      color: '#f39c12',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'consultation',
      icon: '💡',
      title: 'Investment Consultation',
      subtitle: 'Expert advice on real estate investments',
      description: 'Strategic investment advice to help you make profitable real estate investment decisions.',
      features: ['Market Research', 'ROI Analysis', 'Risk Assessment', 'Portfolio Planning'],
      color: '#9b59b6',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'interior',
      icon: '🎨',
      title: 'Interior Design',
      subtitle: 'Transform your space with expert design',
      description: 'Professional interior design services to make your property stand out and increase its value.',
      features: ['Space Planning', '3D Visualization', 'Material Selection', 'Project Management'],
      color: '#e67e22',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We understand your requirements and provide initial guidance'
    },
    {
      step: '02',
      title: 'Property Analysis',
      description: 'Detailed analysis of property or market based on your needs'
    },
    {
      step: '03',
      title: 'Solution Design',
      description: 'Custom solution designed specifically for your requirements'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Professional execution with regular updates and monitoring'
    },
    {
      step: '05',
      title: 'Post-Service Support',
      description: 'Continued support and assistance even after service completion'
    }
  ];

  return (
    <div style={styles.servicesPage}>
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
            Premium Real Estate Services
          </motion.h1>
          <motion.p 
            style={styles.heroSubtitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive solutions for all your property needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section style={styles.servicesSection}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Expert Services
          </motion.h2>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                style={{...styles.serviceCard, borderTop: `4px solid ${service.color}`}}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveService(index)}
              >
                <div style={styles.serviceHeader}>
                  <div style={{...styles.serviceIcon, color: service.color}}>
                    {service.icon}
                  </div>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>
                <div style={styles.serviceContent}>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <ul style={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>✓ {feature}</li>
                    ))}
                  </ul>
                  <motion.button 
                    style={{...styles.serviceBtn, backgroundColor: service.color}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section style={styles.detailSection}>
        <div style={styles.container}>
          <div style={styles.detailGrid}>
            <motion.div 
              style={styles.detailContent}
              key={activeService}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div style={styles.detailHeader}>
                <span style={{...styles.detailIcon, color: services[activeService].color}}>
                  {services[activeService].icon}
                </span>
                <h2 style={styles.detailTitle}>{services[activeService].title}</h2>
              </div>
              <p style={styles.detailDescription}>{services[activeService].description}</p>
              <div style={styles.detailFeatures}>
                <h4 style={styles.featuresTitle}>What's Included:</h4>
                <div style={styles.featuresGrid}>
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} style={styles.featureCard}>
                      <span style={styles.featureCheck}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              style={styles.detailImage}
              key={activeService}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title}
                style={styles.detailImg}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={styles.processSection}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Service Process
          </motion.h2>
          <div style={styles.processSteps}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                style={styles.processStep}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={styles.stepNumber}>{step.step}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <motion.div 
            style={styles.ctaContent}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
            <p style={styles.ctaSubtitle}>
              Contact our experts today for personalized service consultation
            </p>
            <div style={styles.ctaButtons}>
              <motion.button 
                style={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button 
                style={styles.ctaButtonSecondary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: +91 98765 43210
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  servicesPage: {
    paddingTop: '80px'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
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
  servicesSection: {
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
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  serviceCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  serviceHeader: {
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block'
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  serviceSubtitle: {
    color: '#666',
    fontSize: '1rem'
  },
  serviceContent: {
    textAlign: 'left'
  },
  serviceDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '2rem'
  },
  featureItem: {
    color: '#27ae60',
    marginBottom: '0.5rem',
    fontWeight: '500'
  },
  serviceBtn: {
    width: '100%',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  detailSection: {
    padding: '5rem 0',
    background: 'white'
  },
  detailGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  detailContent: {
    padding: '2rem'
  },
  detailHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  },
  detailIcon: {
    fontSize: '3rem'
  },
  detailTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2c3e50'
  },
  detailDescription: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '2rem'
  },
  detailFeatures: {
    marginBottom: '2rem'
  },
  featuresTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  },
  featureCard: {
    background: '#f8f9fa',
    padding: '1rem',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  featureCheck: {
    color: '#27ae60',
    fontWeight: '700',
    fontSize: '1.2rem'
  },
  detailImage: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
  },
  detailImg: {
    width: '100%',
    height: '400px',
    objectFit: 'cover'
  },
  processSection: {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  },
  processSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  processStep: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    position: 'relative'
  },
  stepNumber: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#667eea',
    marginBottom: '1rem'
  },
  stepTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  stepDescription: {
    color: '#666',
    lineHeight: '1.6'
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '5rem 0',
    color: 'white',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  ctaSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '3rem'
  },
  ctaButtons: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  ctaButton: {
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
  ctaButtonSecondary: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1.2rem 3rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default Services;
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
