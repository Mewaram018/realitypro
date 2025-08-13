// src/pages/Careers.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Property Consultant',
      department: 'Sales',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      description: 'Lead property sales initiatives and manage client relationships for luxury residential projects.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        'Minimum 3 years in real estate sales',
        'Excellent communication skills',
        'Strong negotiation abilities',
        'Knowledge of Mumbai property market'
      ],
      responsibilities: [
        'Generate leads and convert prospects into clients',
        'Conduct property tours and presentations',
        'Negotiate deals and close transactions',
        'Build long-term client relationships',
        'Achieve monthly sales targets'
      ]
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      description: 'Drive digital marketing strategies to enhance brand visibility and generate quality leads.',
      requirements: [
        'MBA in Marketing or equivalent',
        '2+ years in digital marketing',
        'Experience with Google Ads, Facebook Ads',
        'Knowledge of SEO and content marketing',
        'Analytics and data-driven approach'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media presence',
        'Optimize website for search engines',
        'Create engaging content for various platforms',
        'Track and analyze campaign performance'
      ]
    },
    {
      id: 3,
      title: 'Legal Associate',
      department: 'Legal',
      location: 'Delhi',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹5-8 LPA',
      description: 'Provide legal support for property transactions and ensure regulatory compliance.',
      requirements: [
        'LLB from recognized university',
        'Experience in property law',
        'Knowledge of RERA regulations',
        'Strong research and analytical skills',
        'Attention to detail'
      ],
      responsibilities: [
        'Review property documents and agreements',
        'Conduct title searches and due diligence',
        'Ensure RERA compliance',
        'Handle legal documentation',
        'Support transaction closures'
      ]
    },
    {
      id: 4,
      title: 'Business Development Executive',
      department: 'Business Development',
      location: 'Pune',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹4-6 LPA',
      description: 'Identify new business opportunities and build strategic partnerships in the real estate sector.',
      requirements: [
        'Bachelor\'s degree in any field',
        'Excellent communication skills',
        'Strong networking abilities',
        'Goal-oriented mindset',
        'Willingness to travel'
      ],
      responsibilities: [
        'Identify potential business opportunities',
        'Build relationships with developers',
        'Generate leads through various channels',
        'Participate in property exhibitions',
        'Achieve business development targets'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: '🌟',
      title: 'Career Growth',
      description: 'Clear career progression paths with regular training programs'
    },
    {
      icon: '🏖️',
      title: 'Work-Life Balance',
      description: 'Flexible working hours and generous leave policies'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and skill development programs'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team outings, celebrations, and company events'
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  return (
    <div style={styles.careersPage}>
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
            Join Our Growing Team
          </motion.h1>
          <motion.p 
            style={styles.heroSubtitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Build your career in premium real estate with RealtyPro
          </motion.p>
        </div>
      </motion.section>

      {/* Company Culture */}
      <section style={styles.cultureSection}>
        <div style={styles.container}>
          <div style={styles.cultureGrid}>
            <motion.div 
              style={styles.cultureContent}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={styles.sectionTitle}>Why Work With Us?</h2>
              <p style={styles.cultureText}>
                At RealtyPro, we believe in fostering a culture of innovation, collaboration, 
                and excellence. Our team members are our greatest asset, and we're committed 
                to providing an environment where you can thrive professionally and personally.
              </p>
              <p style={styles.cultureText}>
                Join a company that values your growth, rewards your achievements, and 
                supports your career ambitions in the dynamic real estate industry.
              </p>
            </motion.div>
            <motion.div 
              style={styles.cultureImage}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Culture"
                style={styles.cultureImg}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Employee Benefits
          </motion.h2>
          <div style={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                style={styles.benefitCard}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={styles.benefitIcon}>{benefit.icon}</div>
                <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                <p style={styles.benefitDescription}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section style={styles.jobsSection}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Current Openings
          </motion.h2>
          <div style={styles.jobsGrid}>
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                style={styles.jobCard}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div style={styles.jobHeader}>
                  <h3 style={styles.jobTitle}>{job.title}</h3>
                  <div style={styles.jobMeta}>
                    <span style={styles.jobDepartment}>{job.department}</span>
                    <span style={styles.jobLocation}>📍 {job.location}</span>
                  </div>
                </div>
                
                <div style={styles.jobDetails}>
                  <div style={styles.jobInfo}>
                    <span style={styles.jobType}>{job.type}</span>
                    <span style={styles.jobExperience}>{job.experience}</span>
                    <span style={styles.jobSalary}>{job.salary}</span>
                  </div>
                  <p style={styles.jobDescription}>{job.description}</p>
                </div>
                
                <div style={styles.jobActions}>
                  <motion.button 
                    style={styles.viewDetailsBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedJob(job)}
                  >
                    View Details
                  </motion.button>
                  <motion.button 
                    style={styles.applyBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApply(job)}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && !showApplicationModal && (
        <div style={styles.modalOverlay} onClick={() => setSelectedJob(null)}>
          <motion.div 
            style={styles.jobModal}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>{selectedJob.title}</h2>
              <button style={styles.closeBtn} onClick={() => setSelectedJob(null)}>×</button>
            </div>
            
            <div style={styles.modalContent}>
              <div style={styles.jobFullDetails}>
                <div style={styles.modalSection}>
                  <h4 style={styles.sectionHeading}>Job Requirements</h4>
                  <ul style={styles.requirementsList}>
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} style={styles.requirementItem}>✓ {req}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={styles.modalSection}>
                  <h4 style={styles.sectionHeading}>Key Responsibilities</h4>
                  <ul style={styles.requirementsList}>
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} style={styles.requirementItem}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div style={styles.modalActions}>
                <button 
                  style={styles.applyModalBtn}
                  onClick={() => handleApply(selectedJob)}
                >
                  Apply for This Position
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Modal */}
      {showApplicationModal && (
        <div style={styles.modalOverlay} onClick={() => setShowApplicationModal(false)}>
          <motion.div 
            style={styles.applicationModal}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Apply for {selectedJob?.title}</h2>
              <button style={styles.closeBtn} onClick={() => setShowApplicationModal(false)}>×</button>
            </div>
            
            <form style={styles.applicationForm}>
              <div style={styles.formRow}>
                <input type="text" placeholder="Full Name" style={styles.formInput} required />
                <input type="email" placeholder="Email Address" style={styles.formInput} required />
              </div>
              <div style={styles.formRow}>
                <input type="tel" placeholder="Phone Number" style={styles.formInput} required />
                <input type="text" placeholder="Current Location" style={styles.formInput} required />
              </div>
              <input type="text" placeholder="Current Position" style={styles.formInput} required />
              <textarea placeholder="Why are you interested in this role?" rows="4" style={styles.formTextarea} required></textarea>
              <div style={styles.fileUpload}>
                <label style={styles.uploadLabel}>Upload Resume (PDF only)</label>
                <input type="file" accept=".pdf" style={styles.fileInput} required />
              </div>
              <button type="submit" style={styles.submitBtn}>Submit Application</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <motion.div 
            style={styles.ctaContent}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.ctaTitle}>Don't See the Right Role?</h2>
            <p style={styles.ctaSubtitle}>
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
            <motion.button 
              style={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  careersPage: {
    paddingTop: '80px'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
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
  cultureSection: {
    padding: '5rem 0',
    background: 'white'
  },
  cultureGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  cultureContent: {
    padding: '2rem'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#2c3e50',
    textAlign: 'center'
  },
  cultureText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '1.5rem'
  },
  cultureImage: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
  },
  cultureImg: {
    width: '100%',
    height: '400px',
    objectFit: 'cover'
  },
  benefitsSection: {
    padding: '5rem 0',
    background: '#f8f9fa'
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  },
  benefitCard: {
    background: 'white',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  benefitIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  benefitTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  benefitDescription: {
    color: '#666',
    lineHeight: '1.6'
  },
  jobsSection: {
    padding: '5rem 0',
    background: 'white'
  },
  jobsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  },
  jobCard: {
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  jobHeader: {
    marginBottom: '1.5rem'
  },
  jobTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  jobMeta: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  jobDepartment: {
    background: '#667eea',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem'
  },
  jobLocation: {
    color: '#666',
    fontSize: '0.9rem'
  },
  jobDetails: {
    marginBottom: '2rem'
  },
  jobInfo: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  jobType: {
    background: '#e8f5e8',
    color: '#27ae60',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem'
  },
  jobExperience: {
    background: '#fff3cd',
    color: '#856404',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem'
  },
  jobSalary: {
    background: '#f8d7da',
    color: '#721c24',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem'
  },
  jobDescription: {
    color: '#666',
    lineHeight: '1.6'
  },
  jobActions: {
    display: 'flex',
    gap: '1rem'
  },
  viewDetailsBtn: {
    flex: 1,
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  applyBtn: {
    flex: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
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
    zIndex: 2000,
    padding: '2rem'
  },
  jobModal: {
    background: 'white',
    borderRadius: '20px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  applicationModal: {
    background: 'white',
    borderRadius: '20px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    borderBottom: '1px solid #eee'
  },
  modalTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    margin: 0
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#999'
  },
  modalContent: {
    padding: '2rem'
  },
  jobFullDetails: {
    marginBottom: '2rem'
  },
  modalSection: {
    marginBottom: '2rem'
  },
  sectionHeading: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  requirementsList: {
    listStyle: 'none',
    padding: 0
  },
  requirementItem: {
    marginBottom: '0.8rem',
    color: '#666',
    lineHeight: '1.5'
  },
  modalActions: {
    textAlign: 'center'
  },
  applyModalBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 3rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer'
  },
  applicationForm: {
    padding: '2rem',
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
    fontSize: '1rem'
  },
  formTextarea: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    resize: 'vertical'
  },
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  uploadLabel: {
    fontWeight: '600',
    color: '#333'
  },
  fileInput: {
    padding: '0.8rem',
    border: '2px dashed #e1e8ed',
    borderRadius: '10px'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer'
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
  }
};

export default Careers;
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
