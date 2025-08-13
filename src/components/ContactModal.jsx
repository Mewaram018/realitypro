// src/components/ContactModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    onClose();
    setFormData({ name: '', email: '', phone: '', message: '', propertyType: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            style={styles.modal}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Get In Touch</h2>
              <button style={styles.closeBtn} onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formRow}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Property Interest</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="investment">Investment</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
                rows="4"
                required
              ></textarea>

              <button type="submit" style={styles.submitBtn}>
                Send Message
              </button>
            </form>

            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <span>info@realtypro.com</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '2rem'
  },
  modal: {
    background: 'white',
    borderRadius: '20px',
    padding: '2rem',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #eee'
  },
  modalTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    margin: 0
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#999',
    transition: 'color 0.3s ease'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  input: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  select: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    transition: 'all 0.3s ease'
  },
  textarea: {
    padding: '1rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'all 0.3s ease'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid #eee'
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#666'
  },
  contactIcon: {
    fontSize: '1.5rem'
  }
};

export default ContactModal;
