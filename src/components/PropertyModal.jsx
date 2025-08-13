// src/components/PropertyModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyModal = ({ isOpen, onClose, property }) => {
  if (!property) return null;

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
              <h2 style={styles.modalTitle}>{property.title}</h2>
              <button style={styles.closeBtn} onClick={onClose}>×</button>
            </div>

            <div style={styles.modalContent}>
              <div style={styles.propertyImageLarge}>
                <img src={property.image} alt={property.title} style={styles.modalImg} />
                <div style={styles.priceOverlay}>{property.price}</div>
              </div>

              <div style={styles.propertyDetails}>
                <div style={styles.location}>
                  📍 {property.location}
                </div>

                <div style={styles.specs}>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Type:</span>
                    <span style={styles.specValue}>{property.type}</span>
                  </div>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Area:</span>
                    <span style={styles.specValue}>{property.area}</span>
                  </div>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Bedrooms:</span>
                    <span style={styles.specValue}>{property.bedrooms}</span>
                  </div>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Bathrooms:</span>
                    <span style={styles.specValue}>{property.bathrooms}</span>
                  </div>
                </div>

                <div style={styles.features}>
                  <h4 style={styles.featuresTitle}>Features</h4>
                  <div style={styles.featuresList}>
                    {property.features.map((feature, index) => (
                      <span key={index} style={styles.featureItem}>{feature}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.modalActions}>
                  <button style={styles.contactBtn}>Contact Agent</button>
                  <button style={styles.visitBtn}>Schedule Visit</button>
                  <button style={styles.favoriteBtn}>❤️ Save</button>
                </div>
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
    maxWidth: '800px',
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
    color: '#999',
    transition: 'color 0.3s ease'
  },
  modalContent: {
    padding: '2rem'
  },
  propertyImageLarge: {
    position: 'relative',
    height: '300px',
    borderRadius: '15px',
    overflow: 'hidden',
    marginBottom: '2rem'
  },
  modalImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  priceOverlay: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1.5rem',
    fontWeight: '700'
  },
  location: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '2rem'
  },
  specs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '2rem'
  },
  spec: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: '10px'
  },
  specLabel: {
    fontWeight: '600',
    color: '#2c3e50'
  },
  specValue: {
    color: '#666'
  },
  features: {
    marginBottom: '2rem'
  },
  featuresTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  featuresList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  featureItem: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '15px',
    fontSize: '0.9rem'
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  contactBtn: {
    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  visitBtn: {
    background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  favoriteBtn: {
    background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default PropertyModal;
