// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropertyModal from '../components/PropertyModal';
import PriceCalculator from '../components/PriceCalculator';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [activeTab, setActiveTab] = useState('buy');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      bg: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Luxury Living Redefined',
      subtitle: 'Premium properties in Mumbai\'s most prestigious locations',
      cta: 'Explore Luxury',
      overlay: 'linear-gradient(135deg, rgba(74, 145, 226, 0.18), rgba(80, 227, 195, 0.2))'
    },
    {
      bg: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Smart Investment Opportunities',
      subtitle: 'High-yield properties for the discerning investor',
      cta: 'Invest Smart',
      overlay: 'linear-gradient(135deg, rgba(236, 72, 154, 0.22), rgba(239, 68, 68, 0.14))'
    },
    {
      bg: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Commercial Excellence',
      subtitle: 'Prime commercial spaces in business districts',
      cta: 'Discover More',
      overlay: 'linear-gradient(135deg, rgba(169, 85, 247, 0.16), rgba(59, 131, 246, 0.17))'
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: 'Sky Gardens Penthouse',
      location: 'Worli, Mumbai',
      price: '₹12.5 Crores',
      originalPrice: '₹14 Crores',
      type: 'Penthouse',
      area: '4200 sq ft',
      bedrooms: 5,
      bathrooms: 4,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Sea View', 'Private Pool', 'Smart Home', 'Concierge'],
      rating: 4.9,
      views: 1250,
      isNew: true,
      isFeatured: true,
      agent: 'Rajesh Sharma'
    },
    {
      id: 2,
      title: 'Green Valley Villa',
      location: 'Whitefield, Bangalore',
      price: '₹4.8 Crores',
      type: 'Villa',
      area: '3200 sq ft',
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Garden', 'Pool', 'Garage', 'Solar'],
      rating: 4.8,
      views: 980,
      isNew: false,
      isFeatured: true,
      agent: 'Priya Patel'
    },
    {
      id: 3,
      title: 'Corporate Hub Office',
      location: 'Cyber City, Gurgaon',
      price: '₹18.5 Crores',
      type: 'Commercial',
      area: '6500 sq ft',
      bedrooms: 0,
      bathrooms: 8,
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Metro', 'Parking', 'AC', 'Security'],
      rating: 4.7,
      views: 750,
      isNew: true,
      isFeatured: true,
      agent: 'Amit Kumar'
    }
  ];

  const services = [
    {
      icon: '🏠',
      title: 'Property Purchase',
      description: 'End-to-end buying assistance with legal support',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      count: '2500+'
    },
    {
      icon: '💼',
      title: 'Investment Advisory',
      description: 'Strategic investment guidance for maximum ROI',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      count: '1200+'
    },
    {
      icon: '🔑',
      title: 'Property Management',
      description: 'Complete property management and rental services',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      count: '800+'
    },
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Comprehensive market research and valuation',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      count: '500+'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'RealtyPro helped me find the perfect office space in record time. Their professional approach and market knowledge is outstanding.',
      rating: 5,
      property: 'Commercial Office, BKC'
    },
    {
      name: 'Sneha Reddy',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Amazing experience! They guided me through every step of buying my first home. Highly recommended for first-time buyers.',
      rating: 5,
      property: 'Apartment, Koramangala'
    },
    {
      name: 'Vikram Singh',
      role: 'Investor',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Their investment advisory service helped me build a profitable real estate portfolio. Excellent market insights and support.',
      rating: 5,
      property: 'Investment Portfolio'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePropertyView = (property) => {
    setSelectedProperty(property);
    setShowPropertyModal(true);
  };

  return (
    <motion.div 
      style={styles.homePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Advanced Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroSlider}>
          <AnimatePresence mode="wait">
            {heroSlides.map((slide, index) => (
              currentSlide === index && (
                <motion.div
                  key={index}
                  style={{
                    ...styles.slide,
                    backgroundImage: `${slide.overlay}, url(${slide.bg})`
                  }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                >
                  <div style={styles.slideContent}>
                    <motion.div
                      style={styles.slideTag}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Premium Real Estate
                    </motion.div>
                    
                    <motion.h1
                      style={styles.slideTitle}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      style={styles.slideSubtitle}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div
                      style={styles.slideActions}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.button
                        style={styles.primaryCTA}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slide.cta}
                      </motion.button>
                      
                      <motion.button
                        style={styles.secondaryCTA}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📹 Watch Video
                      </motion.button>
                    </motion.div>

                    <motion.div
                      style={styles.heroStats}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div style={styles.heroStatItem}>
                        <span style={styles.heroStatNumber}>2500+</span>
                        <span style={styles.heroStatLabel}>Properties</span>
                      </div>
                      <div style={styles.heroStatItem}>
                        <span style={styles.heroStatNumber}>15+</span>
                        <span style={styles.heroStatLabel}>Cities</span>
                      </div>
                      <div style={styles.heroStatItem}>
                        <span style={styles.heroStatNumber}>98%</span>
                        <span style={styles.heroStatLabel}>Satisfied</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Modern Slide Navigation */}
        <div style={styles.slideNavigation}>
          <div style={styles.slideIndicators}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                style={{
                  ...styles.modernIndicator,
                  ...(currentSlide === index ? styles.modernIndicatorActive : {})
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <span style={styles.indicatorProgress}></span>
              </button>
            ))}
          </div>
          
          {/* <div style={styles.slideControls}>
            <button 
              style={styles.slideControl}
              onClick={() => setCurrentSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)}
            >
              ←
            </button>
            <button 
              style={styles.slideControl}
              onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
            >
              →
            </button>
          </div> */}
        </div>

        {/* Floating Search Widget */}
        {/* <motion.div 
          style={{
            ...styles.floatingSearch,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div style={styles.searchTabs}>
            {['buy', 'rent', 'sell'].map(tab => (
              <button
                key={tab}
                style={{
                  ...styles.searchTab,
                  ...(activeTab === tab ? styles.searchTabActive : {})
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div style={styles.searchForm}>
            <div style={styles.searchField}>
              <span style={styles.searchIcon}>📍</span>
              <input 
                type="text" 
                placeholder="Location (e.g., Mumbai, Bangalore)"
                style={styles.searchInput}
              />
            </div>
            
            <div style={styles.searchField}>
              <span style={styles.searchIcon}>🏠</span>
              <select style={styles.searchSelect}>
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>
            
            <div style={styles.searchField}>
              <span style={styles.searchIcon}>💰</span>
              <select style={styles.searchSelect}>
                <option>Budget</option>
                <option>₹1-2 Cr</option>
                <option>₹2-5 Cr</option>
                <option>₹5+ Cr</option>
              </select>
            </div>
            
            <motion.button 
              style={styles.searchButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔍 Search
            </motion.button>
          </div>
        </motion.div> */}
      </section>

      {/* Featured Properties with Modern Cards */}
      <section style={styles.featuredSection}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionTag}>Premium Collection</div>
            <h2 style={styles.sectionTitle}>Featured Properties</h2>
            <p style={styles.sectionSubtitle}>
              Handpicked premium properties from our exclusive collection
            </p>
          </motion.div>

          <div style={styles.modernPropertiesGrid}>
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                style={styles.modernPropertyCard}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15, boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}
                onClick={() => handlePropertyView(property)}
              >
                <div style={styles.modernPropertyImage}>
                  <img src={property.image} alt={property.title} style={styles.modernPropertyImg} />
                  
                  <div style={styles.modernPropertyOverlay}>
                    <div style={styles.propertyBadgeContainer}>
                      {property.isNew && <span style={styles.newBadge}>New</span>}
                      {property.isFeatured && <span style={styles.featuredBadge}>Featured</span>}
                    </div>
                    
                    <div style={styles.propertyActions}>
                      <button style={styles.heartBtn}>❤️</button>
                      <button style={styles.shareBtn}>📤</button>
                      <button style={styles.viewBtn}>👁️</button>
                    </div>
                  </div>

                  <div style={styles.propertyRating}>
                    <span style={styles.ratingStars}>⭐ {property.rating}</span>
                    <span style={styles.viewCount}>👁️ {property.views}</span>
                  </div>
                </div>

                <div style={styles.modernPropertyContent}>
                  <div style={styles.propertyHeader}>
                    <h3 style={styles.modernPropertyTitle}>{property.title}</h3>
                    <p style={styles.modernPropertyLocation}>📍 {property.location}</p>
                  </div>

                  <div style={styles.priceContainer}>
                    <span style={styles.modernPropertyPrice}>{property.price}</span>
                    {property.originalPrice && (
                      <span style={styles.originalPrice}>{property.originalPrice}</span>
                    )}
                    <span style={styles.priceLabel}>Total Price</span>
                  </div>

                  <div style={styles.modernPropertySpecs}>
                    <div style={styles.specItem}>
                      <span style={styles.specIcon}>🛏️</span>
                      <span style={styles.specText}>{property.bedrooms} BHK</span>
                    </div>
                    <div style={styles.specItem}>
                      <span style={styles.specIcon}>🛁</span>
                      <span style={styles.specText}>{property.bathrooms} Bath</span>
                    </div>
                    <div style={styles.specItem}>
                      <span style={styles.specIcon}>📐</span>
                      <span style={styles.specText}>{property.area}</span>
                    </div>
                  </div>

                  <div style={styles.modernFeatures}>
                    {property.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} style={styles.modernFeatureTag}>{feature}</span>
                    ))}
                  </div>

                  <div style={styles.propertyFooter}>
                    <div style={styles.agentInfo}>
                      <span style={styles.agentText}>Agent: {property.agent}</span>
                    </div>
                    <button style={styles.contactAgentBtn}>Contact</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={styles.viewAllContainer}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/properties" style={styles.viewAllBtn}>
              <span>Explore All Properties</span>
              <span style={styles.viewAllArrow}>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern Services Grid */}
      <section style={styles.modernServicesSection}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionTag}>Our Expertise</div>
            <h2 style={styles.sectionTitle}>Comprehensive Real Estate Services</h2>
            <p style={styles.sectionSubtitle}>
              From consultation to completion, we handle every aspect of your real estate journey
            </p>
          </motion.div>

          <div style={styles.modernServicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                style={styles.modernServiceCard}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  scale: 1.02
                }}
              >
                <div style={styles.serviceCardInner}>
                  <div style={{
                    ...styles.modernServiceIcon,
                    background: service.color
                  }}>
                    <span style={styles.serviceIconSymbol}>{service.icon}</span>
                  </div>
                  
                  <div style={styles.modernServiceContent}>
                    <h3 style={styles.modernServiceTitle}>{service.title}</h3>
                    <p style={styles.modernServiceDescription}>{service.description}</p>
                    <div style={styles.serviceCount}>{service.count} Projects</div>
                  </div>
                  
                  <div style={styles.serviceArrow}>→</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section style={styles.testimonialsSection}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={styles.sectionTag}>Client Stories</div>
            <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
          </motion.div>

          <div style={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                style={styles.testimonialCard}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div style={styles.testimonialHeader}>
                  <img src={testimonial.image} alt={testimonial.name} style={styles.testimonialAvatar} />
                  <div style={styles.testimonialInfo}>
                    <h4 style={styles.testimonialName}>{testimonial.name}</h4>
                    <p style={styles.testimonialRole}>{testimonial.role}</p>
                    <div style={styles.testimonialRating}>
                      {'⭐'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <p style={styles.testimonialText}>"{testimonial.text}"</p>
                <div style={styles.testimonialProperty}>{testimonial.property}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator CTA */}
      <section style={styles.calculatorCTA}>
        <div style={styles.container}>
          <motion.div
            style={styles.calculatorContainer}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={styles.calculatorContent}>
              <div style={styles.calculatorIcon}>🧮</div>
              <h2 style={styles.calculatorTitle}>EMI Calculator</h2>
              <p style={styles.calculatorSubtitle}>
                Calculate your home loan EMI instantly and plan your purchase better
              </p>
              
              <div style={styles.calculatorFeatures}>
                <span>✓ Instant Calculation</span>
                <span>✓ Multiple Bank Rates</span>
                <span>✓ Detailed Breakdown</span>
              </div>
            </div>
            
            <motion.button 
              style={styles.calculatorButton}
              onClick={() => setShowCalculator(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Open Calculator</span>
              <span style={styles.calculatorArrow}>→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <PropertyModal
        isOpen={showPropertyModal}
        onClose={() => setShowPropertyModal(false)}
        property={selectedProperty}
      />
      
      <PriceCalculator
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </motion.div>
  );
};

const styles = {
  homePage: {
    paddingTop: '80px',
    background: '#fafafa'
  },
  
  // Hero Section Styles
  heroSection: {
    position: 'relative',
    height: '80vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
  },
  heroSlider: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  slideContent: {
    textAlign: 'center',
    color: 'white',
    zIndex: 2,
    maxWidth: '900px',
    padding: '0 2rem'
  },
  slideTag: {
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '2rem',
    display: 'inline-block'
  },
  slideTitle: {
    fontSize: '4.5rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
  },
  slideSubtitle: {
    fontSize: '1.3rem',
    marginBottom: '3rem',
    opacity: 0.9,
    lineHeight: '1.6',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  slideActions: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    marginBottom: '4rem',
    flexWrap: 'wrap'
  },
  primaryCTA: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 3rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease'
  },
  secondaryCTA: {
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    border: '2px solid rgba(255,255,255,0.3)',
    padding: '1.2rem 3rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  heroStats: {
    display: 'flex',
    gap: '3rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  heroStatItem: {
    textAlign: 'center'
  },
  heroStatNumber: {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem'
  },
  heroStatLabel: {
    fontSize: '1rem',
    opacity: 0.8
  },

  // Navigation Styles
  slideNavigation: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    zIndex: 3
  },
  slideIndicators: {
    display: 'flex',
    gap: '1rem'
  },
  modernIndicator: {
    width: '60px',
    height: '4px',
    background: 'rgba(255,255,255,0.3)',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  },
  modernIndicatorActive: {
    background: 'white'
  },
  indicatorProgress: {
    display: 'block',
    height: '100%',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    width: '100%',
    transition: 'all 0.3s ease'
  },
  slideControls: {
    display: 'flex',
    gap: '1rem'
  },
  slideControl: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  // Floating Search Styles
//   floatingSearch: {
//     position: 'absolute',
//     bottom: '0px',
//     left: '10%',
//     transform: 'translateX(-50%)',
//     width: '90%',
//     maxWidth: '1200px',
//     background: 'white',
//     borderRadius: '20px',
//     boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     zIndex: 10
//   },
//   searchTabs: {
//     display: 'flex',
//     borderBottom: '1px solid rgba(0,0,0,0.1)',
//     alignItems: 'center',
//     textAlign: 'center',
//     background: '#f8f9fa'
//   },
//   searchTab: {
//     flex: 1,
//     padding: '1rem 2rem',
//     background: 'transparent',
//     border: 'none',
//     fontSize: '1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     color: '#666'
//   },
//   searchTabActive: {
//     background: 'white',
//     color: '#667eea',
//     borderRadius: '10px 10px 0 0'
//   },
//   searchForm: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr auto',
//     gap: '1rem',
//     padding: '2rem',
//     alignItems: 'center'
//   },
//   searchField: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     background: '#f8f9fa',
//     borderRadius: '12px',
//     padding: '0 1rem'
//   },
//   searchIcon: {
//     fontSize: '1.2rem',
//     marginRight: '1rem'
//   },
//   searchInput: {
//     flex: 1,
//     padding: '1rem 0',
//     border: 'none',
//     background: 'transparent',
//     fontSize: '1rem',
//     outline: 'none'
//   },
//   searchSelect: {
//     flex: 1,
//     padding: '1rem 0',
//     border: 'none',
//     background: 'transparent',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     outline: 'none'
//   },
//   searchButton: {
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     color: 'white',
//     border: 'none',
//     padding: '1.2rem 2rem',
//     borderRadius: '12px',
//     fontSize: '1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
//     whiteSpace: 'nowrap'
//   },

  // Section Styles
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  featuredSection: {
    padding: '8rem 0',
    background: 'white'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  sectionTag: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1rem',
    lineHeight: '1.2'
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  },

  // Modern Property Cards
  modernPropertiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  modernPropertyCard: {
    background: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.05)'
  },
  modernPropertyImage: {
    position: 'relative',
    height: '280px',
    overflow: 'hidden'
  },
  modernPropertyImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease'
  },
  modernPropertyOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.7) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  propertyBadgeContainer: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  newBadge: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    backdropFilter: 'blur(10px)'
  },
  featuredBadge: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    backdropFilter: 'blur(10px)'
  },
  propertyActions: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  heartBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  shareBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  viewBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  propertyRating: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    display: 'flex',
    gap: '1rem'
  },
  ratingStars: {
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  viewCount: {
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  modernPropertyContent: {
    padding: '2rem'
  },
  propertyHeader: {
    marginBottom: '1.5rem'
  },
  modernPropertyTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '0.5rem',
    lineHeight: '1.3'
  },
  modernPropertyLocation: {
    color: '#666',
    fontSize: '1rem'
  },
  priceContainer: {
    marginBottom: '1.5rem'
  },
  modernPropertyPrice: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#667eea',
    display: 'block',
    lineHeight: '1.2'
  },
  originalPrice: {
    fontSize: '1.2rem',
    color: '#999',
    textDecoration: 'line-through',
    marginLeft: '1rem'
  },
  priceLabel: {
    fontSize: '0.9rem',
    color: '#666',
    display: 'block',
    marginTop: '0.2rem'
  },
  modernPropertySpecs: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: '12px'
  },
  specItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  specIcon: {
    fontSize: '1.2rem'
  },
  specText: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#333'
  },
  modernFeatures: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  },
  modernFeatureTag: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.4rem 1rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '500'
  },
  propertyFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.5rem',
    borderTop: '1px solid #eee'
  },
  agentInfo: {
    flex: 1
  },
  agentText: {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: '500'
  },
  contactAgentBtn: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '3rem'
  },
  viewAllBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '1.2rem 3rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
  },
  viewAllArrow: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease'
  },

  // Modern Services Section
  modernServicesSection: {
    padding: '8rem 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
  },
  modernServicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  modernServiceCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.05)'
  },
  serviceCardInner: {
    padding: '2.5rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  modernServiceIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
  },
  serviceIconSymbol: {
    fontSize: '2rem'
  },
  modernServiceContent: {
    flex: 1
  },
  modernServiceTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  modernServiceDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  },
  serviceCount: {
    background: '#f1f5f9',
    color: '#667eea',
    padding: '0.5rem 1rem',
    borderRadius: '15px',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'inline-block'
  },
  serviceArrow: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    fontSize: '1.5rem',
    color: '#ccc',
    transition: 'all 0.3s ease'
  },

  // Testimonials Section
  testimonialsSection: {
    padding: '8rem 0',
    background: 'white'
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  testimonialCard: {
    background: '#f8f9fa',
    padding: '2.5rem',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.05)'
  },
  testimonialHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  testimonialAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  testimonialInfo: {
    flex: 1
  },
  testimonialName: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '0.2rem'
  },
  testimonialRole: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '0.5rem'
  },
  testimonialRating: {
    fontSize: '1rem'
  },
  testimonialText: {
    color: '#555',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    fontStyle: 'italic'
  },
  testimonialProperty: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
    display: 'inline-block'
  },

  // Calculator CTA
  calculatorCTA: {
    padding: '8rem 0',
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
  },
  calculatorContainer: {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '30px',
    padding: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    color: 'white'
  },
  calculatorContent: {
    flex: 1
  },
  calculatorIcon: {
    fontSize: '4rem',
    marginBottom: '1.5rem'
  },
  calculatorTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  calculatorSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  calculatorFeatures: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  calculatorButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.5rem 3rem',
    borderRadius: '50px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap'
  },
  calculatorArrow: {
    fontSize: '1.3rem',
    transition: 'transform 0.3s ease'
  }
};

// Add hover effects using CSS-in-JS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .modern-property-card:hover .modern-property-img {
      transform: scale(1.05);
    }
    
    .modern-property-card:hover .modern-property-overlay {
      opacity: 1;
    }
    
    .modern-service-card:hover .service-arrow {
      color: #667eea;
      transform: translateX(5px);
    }
    
    .view-all-btn:hover .view-all-arrow {
      transform: translateX(5px);
    }
    
    .calculator-button:hover .calculator-arrow {
      transform: translateX(5px);
    }
    
    .slide-control:hover {
      background: rgba(255,255,255,0.3);
      transform: scale(1.1);
    }
    
    .search-field:focus-within {
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    @media (max-width: 768px) {
      .slide-title {
        font-size: 2.5rem !important;
      }
      
      .search-form {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      
      .slide-actions {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .hero-stats {
        flex-direction: column !important;
        gap: 2rem !important;
      }
      
      .calculator-container {
        flex-direction: column !important;
        text-align: center !important;
      }
      
      .testimonials-grid {
        grid-template-columns: 1fr !important;
      }
      
      .modern-properties-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Home;
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
