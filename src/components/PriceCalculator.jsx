// src/components/PriceCalculator.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PriceCalculator = ({ isOpen, onClose }) => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / (12 * 100);
    const time = tenure * 12;

    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const totalAmount = emi * time;
    const totalInterest = totalAmount - principal;

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
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
              <h2 style={styles.modalTitle}>EMI Calculator</h2>
              <button style={styles.closeBtn} onClick={onClose}>×</button>
            </div>

            <div style={styles.calculatorContent}>
              <div style={styles.inputSection}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Loan Amount</label>
                  <div style={styles.inputContainer}>
                    <span style={styles.currency}>₹</span>
                    <input
                      type="range"
                      min="1000000"
                      max="50000000"
                      step="100000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      style={styles.slider}
                    />
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      style={styles.numberInput}
                    />
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Interest Rate (% per annum)</label>
                  <div style={styles.inputContainer}>
                    <input
                      type="range"
                      min="6"
                      max="15"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      style={styles.slider}
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      style={styles.numberInput}
                    />
                    <span style={styles.percent}>%</span>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Tenure (Years)</label>
                  <div style={styles.inputContainer}>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      style={styles.slider}
                    />
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      style={styles.numberInput}
                    />
                    <span style={styles.years}>Years</span>
                  </div>
                </div>

                <button style={styles.calculateBtn} onClick={calculateEMI}>
                  Calculate EMI
                </button>
              </div>

              {result && (
                <motion.div 
                  style={styles.resultSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 style={styles.resultTitle}>EMI Calculation Result</h3>
                  
                  <div style={styles.resultCards}>
                    <div style={styles.resultCard}>
                      <div style={styles.resultLabel}>Monthly EMI</div>
                      <div style={styles.resultValue}>₹{result.emi.toLocaleString()}</div>
                    </div>
                    
                    <div style={styles.resultCard}>
                      <div style={styles.resultLabel}>Total Amount</div>
                      <div style={styles.resultValue}>₹{result.totalAmount.toLocaleString()}</div>
                    </div>
                    
                    <div style={styles.resultCard}>
                      <div style={styles.resultLabel}>Total Interest</div>
                      <div style={styles.resultValue}>₹{result.totalInterest.toLocaleString()}</div>
                    </div>
                  </div>

                  <div style={styles.chartSection}>
                    <div style={styles.pieChart}>
                      <div style={styles.chartLabel}>Principal vs Interest</div>
                      <div style={styles.chartValues}>
                        <div style={styles.chartItem}>
                          <span style={styles.principalColor}></span>
                          <span>Principal: ₹{loanAmount.toLocaleString()}</span>
                        </div>
                        <div style={styles.chartItem}>
                          <span style={styles.interestColor}></span>
                          <span>Interest: ₹{result.totalInterest.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
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
    maxWidth: '700px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    borderBottom: '1px solid #eee',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '20px 20px 0 0'
  },
  modalTitle: {
    fontSize: '1.8rem',
    margin: 0
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: 'white',
    transition: 'opacity 0.3s ease'
  },
  calculatorContent: {
    padding: '2rem'
  },
  inputSection: {
    marginBottom: '2rem'
  },
  inputGroup: {
    marginBottom: '2rem'
  },
  label: {
    display: 'block',
    marginBottom: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2c3e50'
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  currency: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#666'
  },
  slider: {
    flex: 1,
    height: '8px',
    borderRadius: '4px',
    background: '#e1e8ed',
    outline: 'none',
    cursor: 'pointer'
  },
  numberInput: {
    width: '120px',
    padding: '0.8rem',
    border: '2px solid #e1e8ed',
    borderRadius: '8px',
    fontSize: '1rem',
    textAlign: 'center'
  },
  percent: {
    fontSize: '1rem',
    color: '#666'
  },
  years: {
    fontSize: '1rem',
    color: '#666'
  },
  calculateBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem',
    borderRadius: '10px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  resultSection: {
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px'
  },
  resultTitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#2c3e50',
    textAlign: 'center'
  },
  resultCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '2rem'
  },
  resultCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  resultLabel: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.5rem'
  },
  resultValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2c3e50'
  },
  chartSection: {
    textAlign: 'center'
  },
  pieChart: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '10px'
  },
  chartLabel: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  chartValues: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  chartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  principalColor: {
    width: '15px',
    height: '15px',
    background: '#3498db',
    borderRadius: '50%'
  },
  interestColor: {
    width: '15px',
    height: '15px',
    background: '#e74c3c',
    borderRadius: '50%'
  }
};

export default PriceCalculator;
