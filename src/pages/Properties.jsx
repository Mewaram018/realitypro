// src/pages/Properties.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    sortBy: 'newest'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const propertiesPerPage = 9;

  // Sample Properties Data
  const sampleProperties = [
    {
      id: 1,
      title: 'Luxury Penthouse in Bandra West',
      location: 'Bandra West, Mumbai',
      price: '₹8.5 Crores',
      originalPrice: '₹9.2 Crores',
      type: 'Penthouse',
      category: 'residential',
      area: 3500,
      bedrooms: 4,
      bathrooms: 4,
      parking: 3,
      images: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Sea View', 'Private Elevator', 'Terrace Garden', 'Modular Kitchen', 'Premium Fixtures', 'Security'],
      amenities: ['Swimming Pool', 'Gym', 'Club House', 'Garden', 'Security', 'Power Backup'],
      description: 'Stunning penthouse with panoramic sea views and world-class amenities.',
      isNew: true,
      isFeatured: true,
      isVerified: true,
      postedDate: '2024-01-15',
      agent: {
        name: 'Rajesh Sharma',
        phone: '+91 98765 43210',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 2,
      title: 'Modern Villa in Whitefield',
      location: 'Whitefield, Bangalore',
      price: '₹2.8 Crores',
      type: 'Villa',
      category: 'residential',
      area: 2800,
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Private Garden', 'Swimming Pool', 'Modular Kitchen', 'Servant Quarter', 'Solar Panels'],
      amenities: ['24/7 Security', 'Power Backup', 'Water Storage', 'Landscaped Garden'],
      description: 'Beautiful independent villa with modern amenities and spacious interiors.',
      isNew: false,
      isFeatured: true,
      isVerified: true,
      postedDate: '2024-01-10',
      agent: {
        name: 'Priya Patel',
        phone: '+91 98765 43211',
        image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 3,
      title: 'Premium Office Space in Connaught Place',
      location: 'Connaught Place, Delhi',
      price: '₹15 Crores',
      type: 'Office',
      category: 'commercial',
      area: 5000,
      bedrooms: 0,
      bathrooms: 6,
      parking: 10,
      images: [
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Central AC', 'High Speed Elevators', 'Conference Rooms', 'Reception Area', 'Cafeteria'],
      amenities: ['24/7 Security', 'Power Backup', 'Parking', 'Metro Connectivity'],
      description: 'Prime commercial space in the heart of Delhi with excellent connectivity.',
      isNew: true,
      isFeatured: false,
      isVerified: true,
      postedDate: '2024-01-08',
      agent: {
        name: 'Amit Kumar',
        phone: '+91 98765 43212',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 4,
      title: 'Luxury Apartment in Hitech City',
      location: 'Hitech City, Hyderabad',
      price: '₹1.8 Crores',
      type: 'Apartment',
      category: 'residential',
      area: 1650,
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      images: [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Smart Home', 'Premium Flooring', 'Designer Kitchen', 'Balcony', 'Study Room'],
      amenities: ['Swimming Pool', 'Gym', 'Children Play Area', 'Jogging Track', 'Club House'],
      description: 'Modern apartment with smart home features in IT corridor.',
      isNew: false,
      isFeatured: false,
      isVerified: true,
      postedDate: '2024-01-05',
      agent: {
        name: 'Sneha Reddy',
        phone: '+91 98765 43213',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 5,
      title: 'Spacious House in Koramangala',
      location: 'Koramangala, Bangalore',
      price: '₹3.2 Crores',
      type: 'House',
      category: 'residential',
      area: 2400,
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Garden', 'Terrace', 'Spacious Rooms', 'Natural Light', 'Ventilation'],
      amenities: ['Security', 'Power Backup', 'Water Storage', 'Parking'],
      description: 'Well-maintained independent house in prime Bangalore location.',
      isNew: false,
      isFeatured: true,
      isVerified: true,
      postedDate: '2024-01-03',
      agent: {
        name: 'Karan Singh',
        phone: '+91 98765 43214',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    },
    {
      id: 6,
      title: 'Sea View Apartment in Marine Drive',
      location: 'Marine Drive, Mumbai',
      price: '₹12 Crores',
      originalPrice: '₹13.5 Crores',
      type: 'Apartment',
      category: 'residential',
      area: 2200,
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Sea View', 'High Floor', 'Premium Location', 'Spacious Balcony', 'Natural Light'],
      amenities: ['Concierge', 'Valet Parking', 'Gym', 'Rooftop Garden', '24/7 Security'],
      description: 'Prestigious apartment with unobstructed sea views on iconic Marine Drive.',
      isNew: true,
      isFeatured: true,
      isVerified: true,
      postedDate: '2024-01-12',
      agent: {
        name: 'Meera Shah',
        phone: '+91 98765 43215',
        image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    }
  ];

  useEffect(() => {
    setProperties(sampleProperties);
    setFilteredProperties(sampleProperties);
  }, []);

  // Filter properties based on all filters
  useEffect(() => {
    let filtered = properties;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Type filter
    if (filters.type) {
      filtered = filtered.filter(property => 
        property.type.toLowerCase() === filters.type.toLowerCase()
      );
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(property => 
        property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(val => 
        val === 'above' ? Infinity : parseFloat(val)
      );
      filtered = filtered.filter(property => {
        const price = parseFloat(property.price.replace(/[^\d.]/g, ''));
        return price >= min && (max === Infinity || price <= max);
      });
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => 
          parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''))
        );
        break;
      case 'price-high':
        filtered.sort((a, b) => 
          parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, ''))
        );
        break;
      case 'area-large':
        filtered.sort((a, b) => b.area - a.area);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        break;
    }

    setFilteredProperties(filtered);
    setCurrentPage(1);
  }, [properties, filters, searchQuery]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setShowPropertyModal(true);
  };

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <div style={styles.propertiesPage}>
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
            Discover Premium Properties
          </motion.h1>
          <motion.p 
            style={styles.heroSubtitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Find your perfect home from our curated collection of luxury properties
          </motion.p>

          {/* Hero Search */}
          <motion.div 
            style={styles.heroSearch}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search by location, property type, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
              <button style={styles.searchBtn}>
                🔍 Search
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            style={styles.heroStats}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{filteredProperties.length}</span>
              <span style={styles.statLabel}>Properties Available</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>15+</span>
              <span style={styles.statLabel}>Cities Covered</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>2500+</span>
              <span style={styles.statLabel}>Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div style={styles.container}>
        {/* Filters Section */}
        <section style={styles.filtersSection}>
          <div style={styles.filtersHeader}>
            <h2 style={styles.filtersTitle}>Filter Properties</h2>
            <button 
              style={styles.mobileFilterBtn}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'} 🔽
            </button>
          </div>

          <motion.div 
            style={{
              ...styles.filtersContainer,
              display: showFilters ? 'block' : 'none'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showFilters ? 'auto' : 0, 
              opacity: showFilters ? 1 : 0 
            }}
          >
            <div style={styles.filtersGrid}>
              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Property Type</label>
                <select 
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="office">Office Space</option>
                </select>
              </div>

              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Location</label>
                <select 
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="">All Locations</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                </select>
              </div>

              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Price Range</label>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="">Any Price</option>
                  <option value="0-1">₹0 - ₹1 Cr</option>
                  <option value="1-3">₹1 - ₹3 Cr</option>
                  <option value="3-5">₹3 - ₹5 Cr</option>
                  <option value="5-10">₹5 - ₹10 Cr</option>
                  <option value="10-above">₹10 Cr+</option>
                </select>
              </div>

              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Bedrooms</label>
                <select 
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="">Any</option>
                  <option value="1">1+ BHK</option>
                  <option value="2">2+ BHK</option>
                  <option value="3">3+ BHK</option>
                  <option value="4">4+ BHK</option>
                </select>
              </div>

              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Sort By</label>
                <select 
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="area-large">Area: Largest First</option>
                </select>
              </div>

              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>View Mode</label>
                <div style={styles.viewToggle}>
                  <button 
                    style={{
                      ...styles.viewBtn,
                      ...(viewMode === 'grid' ? styles.viewBtnActive : {})
                    }}
                    onClick={() => setViewMode('grid')}
                  >
                    ⊞ Grid
                  </button>
                  <button 
                    style={{
                      ...styles.viewBtn,
                      ...(viewMode === 'list' ? styles.viewBtnActive : {})
                    }}
                    onClick={() => setViewMode('list')}
                  >
                    ☰ List
                  </button>
                </div>
              </div>
            </div>

            <div style={styles.filtersActions}>
              <button 
                style={styles.clearFiltersBtn}
                onClick={() => {
                  setFilters({
                    type: '', priceRange: '', location: '', bedrooms: '', 
                    bathrooms: '', area: '', sortBy: 'newest'
                  });
                  setSearchQuery('');
                }}
              >
                Clear All Filters
              </button>
              <span style={styles.resultCount}>
                {filteredProperties.length} properties found
              </span>
            </div>
          </motion.div>
        </section>

        {/* Properties Grid/List */}
        <section style={styles.propertiesSection}>
          <AnimatePresence>
            <div style={{
              ...styles.propertiesContainer,
              ...(viewMode === 'list' ? styles.propertiesContainerList : {})
            }}>
              {currentProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  style={{
                    ...styles.propertyCard,
                    ...(viewMode === 'list' ? styles.propertyCardList : {})
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => openPropertyModal(property)}
                >
                  <div style={styles.propertyImageContainer}>
                    <img 
                      src={property.images[0]} 
                      alt={property.title}
                      style={styles.propertyImage}
                    />
                    
                    {/* Badges */}
                    <div style={styles.propertyBadges}>
                      {property.isNew && (
                        <span style={styles.badgeNew}>New</span>
                      )}
                      {property.isFeatured && (
                        <span style={styles.badgeFeatured}>Featured</span>
                      )}
                      {property.isVerified && (
                        <span style={styles.badgeVerified}>✓ Verified</span>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <button 
                      style={{
                        ...styles.favoriteBtn,
                        ...(favorites.includes(property.id) ? styles.favoriteBtnActive : {})
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(property.id);
                      }}
                    >
                      ❤️
                    </button>

                    {/* Image Counter */}
                    <div style={styles.imageCounter}>
                      📷 {property.images.length}
                    </div>
                  </div>

                  <div style={styles.propertyContent}>
                    <div style={styles.propertyHeader}>
                      <h3 style={styles.propertyTitle}>{property.title}</h3>
                      <p style={styles.propertyLocation}>📍 {property.location}</p>
                    </div>

                    <div style={styles.propertyPrice}>
                      <span style={styles.currentPrice}>{property.price}</span>
                      {property.originalPrice && (
                        <span style={styles.originalPrice}>{property.originalPrice}</span>
                      )}
                    </div>

                    <div style={styles.propertySpecs}>
                      {property.bedrooms > 0 && (
                        <span style={styles.spec}>🛏️ {property.bedrooms} BHK</span>
                      )}
                      <span style={styles.spec}>🛁 {property.bathrooms} Bath</span>
                      <span style={styles.spec}>📐 {property.area} sq ft</span>
                      {property.parking > 0 && (
                        <span style={styles.spec}>🅿️ {property.parking} Parking</span>
                      )}
                    </div>

                    <div style={styles.propertyFeatures}>
                      {property.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} style={styles.featureTag}>{feature}</span>
                      ))}
                      {property.features.length > 3 && (
                        <span style={styles.moreFeatures}>+{property.features.length - 3} more</span>
                      )}
                    </div>

                    <div style={styles.propertyFooter}>
                      <div style={styles.agentInfo}>
                        <img 
                          src={property.agent.image} 
                          alt={property.agent.name}
                          style={styles.agentAvatar}
                        />
                        <div style={styles.agentDetails}>
                          <span style={styles.agentName}>{property.agent.name}</span>
                          <span style={styles.agentPhone}>{property.agent.phone}</span>
                        </div>
                      </div>
                      
                      <div style={styles.propertyActions}>
                        <button 
                          style={styles.contactBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Calling ${property.agent.name}: ${property.agent.phone}`);
                          }}
                        >
                          📞 Call
                        </button>
                        <button 
                          style={styles.viewBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            openPropertyModal(property);
                          }}
                        >
                          👁️ View
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={styles.pagination}>
              <button 
                style={styles.pageBtn}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  style={{
                    ...styles.pageBtn,
                    ...(currentPage === index + 1 ? styles.pageBtnActive : {})
                  }}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                style={styles.pageBtn}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {showPropertyModal && selectedProperty && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPropertyModal(false)}
          >
            <motion.div
              style={styles.propertyModal}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h2 style={styles.modalTitle}>{selectedProperty.title}</h2>
                <button 
                  style={styles.closeBtn}
                  onClick={() => setShowPropertyModal(false)}
                >
                  ×
                </button>
              </div>

              <div style={styles.modalContent}>
                {/* Image Gallery */}
                <div style={styles.imageGallery}>
                  <div style={styles.mainImage}>
                    <img 
                      src={selectedProperty.images[0]} 
                      alt={selectedProperty.title}
                      style={styles.mainImg}
                    />
                  </div>
                  <div style={styles.thumbnails}>
                    {selectedProperty.images.map((image, idx) => (
                      <img 
                        key={idx}
                        src={image} 
                        alt={`View ${idx + 1}`}
                        style={styles.thumbnail}
                      />
                    ))}
                  </div>
                </div>

                {/* Property Details */}
                <div style={styles.modalDetails}>
                  <div style={styles.detailsGrid}>
                    <div style={styles.detailsLeft}>
                      <div style={styles.priceSection}>
                        <span style={styles.modalPrice}>{selectedProperty.price}</span>
                        {selectedProperty.originalPrice && (
                          <span style={styles.modalOriginalPrice}>{selectedProperty.originalPrice}</span>
                        )}
                      </div>

                      <p style={styles.modalLocation}>📍 {selectedProperty.location}</p>
                      <p style={styles.modalDescription}>{selectedProperty.description}</p>

                      <div style={styles.specsGrid}>
                        <div style={styles.specItem}>
                          <span style={styles.specIcon}>🏠</span>
                          <span style={styles.specLabel}>Type</span>
                          <span style={styles.specValue}>{selectedProperty.type}</span>
                        </div>
                        <div style={styles.specItem}>
                          <span style={styles.specIcon}>📐</span>
                          <span style={styles.specLabel}>Area</span>
                          <span style={styles.specValue}>{selectedProperty.area} sq ft</span>
                        </div>
                        {selectedProperty.bedrooms > 0 && (
                          <div style={styles.specItem}>
                            <span style={styles.specIcon}>🛏️</span>
                            <span style={styles.specLabel}>Bedrooms</span>
                            <span style={styles.specValue}>{selectedProperty.bedrooms}</span>
                          </div>
                        )}
                        <div style={styles.specItem}>
                          <span style={styles.specIcon}>🛁</span>
                          <span style={styles.specLabel}>Bathrooms</span>
                          <span style={styles.specValue}>{selectedProperty.bathrooms}</span>
                        </div>
                        {selectedProperty.parking > 0 && (
                          <div style={styles.specItem}>
                            <span style={styles.specIcon}>🅿️</span>
                            <span style={styles.specLabel}>Parking</span>
                            <span style={styles.specValue}>{selectedProperty.parking}</span>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <div style={styles.featuresSection}>
                        <h4 style={styles.sectionHeading}>Features</h4>
                        <div style={styles.featuresList}>
                          {selectedProperty.features.map((feature, idx) => (
                            <span key={idx} style={styles.modalFeatureTag}>{feature}</span>
                          ))}
                        </div>
                      </div>

                      {/* Amenities */}
                      <div style={styles.amenitiesSection}>
                        <h4 style={styles.sectionHeading}>Amenities</h4>
                        <div style={styles.amenitiesList}>
                          {selectedProperty.amenities.map((amenity, idx) => (
                            <div key={idx} style={styles.amenityItem}>
                              <span style={styles.checkIcon}>✓</span>
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={styles.detailsRight}>
                      {/* Agent Card */}
                      <div style={styles.agentCard}>
                        <img 
                          src={selectedProperty.agent.image} 
                          alt={selectedProperty.agent.name}
                          style={styles.agentCardImage}
                        />
                        <h4 style={styles.agentCardName}>{selectedProperty.agent.name}</h4>
                        <p style={styles.agentCardTitle}>Property Consultant</p>
                        <p style={styles.agentCardPhone}>{selectedProperty.agent.phone}</p>
                        
                        <div style={styles.agentActions}>
                          <button style={styles.callAgentBtn}>📞 Call Agent</button>
                          <button style={styles.whatsappBtn}>💬 WhatsApp</button>
                          <button style={styles.emailBtn}>📧 Email</button>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div style={styles.quickActions}>
                        <button style={styles.scheduleBtn}>📅 Schedule Visit</button>
                        <button style={styles.brochureBtn}>📄 Download Brochure</button>
                        <button style={styles.shareBtn}>📤 Share Property</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles = {
  propertiesPage: {
    paddingTop: '80px',
    background: '#f8f9fa'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '4rem 0',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    opacity: 0.9,
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem'
  },
  heroSearch: {
    marginBottom: '3rem'
  },
  searchContainer: {
    display: 'flex',
    maxWidth: '800px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '50px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  searchInput: {
    flex: 1,
    padding: '1.2rem 2rem',
    border: 'none',
    fontSize: '1.1rem',
    outline: 'none'
  },
  searchBtn: {
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4rem',
    flexWrap: 'wrap'
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '1rem',
    opacity: 0.8
  },
  filtersSection: {
    padding: '3rem 0',
    background: 'white',
    borderRadius: '20px',
    marginTop: '-50px',
    marginBottom: '3rem',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
    position: 'relative',
    zIndex: 10
  },
  filtersHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '0 2rem'
  },
  filtersTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#2c3e50'
  },
  mobileFilterBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    display: 'none'
  },
  filtersContainer: {
    padding: '0 2rem'
  },
  filtersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  filterLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#333'
  },
  filterSelect: {
    padding: '0.8rem',
    border: '2px solid #e1e8ed',
    borderRadius: '10px',
    fontSize: '1rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  viewToggle: {
    display: 'flex',
    gap: '0.5rem'
  },
  viewBtn: {
    flex: 1,
    padding: '0.8rem',
    border: '2px solid #e1e8ed',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem'
  },
  viewBtnActive: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderColor: '#667eea'
  },
  filtersActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #eee'
  },
  clearFiltersBtn: {
    background: 'transparent',
    color: '#e74c3c',
    border: '2px solid #e74c3c',
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  resultCount: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: '600'
  },
  propertiesSection: {
    paddingBottom: '4rem'
  },
  propertiesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  propertiesContainerList: {
    gridTemplateColumns: '1fr'
  },
  propertyCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  propertyCardList: {
    display: 'flex',
    flexDirection: 'row',
    height: '300px'
  },
  propertyImageContainer: {
    position: 'relative',
    height: '250px',
    overflow: 'hidden'
  },
  propertyImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  propertyBadges: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  badgeNew: {
    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  badgeFeatured: {
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  badgeVerified: {
    background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  favoriteBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'rgba(255,255,255,0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  favoriteBtnActive: {
    background: '#ff6b6b',
    color: 'white'
  },
  imageCounter: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem'
  },
  propertyContent: {
    padding: '1.5rem'
  },
  propertyHeader: {
    marginBottom: '1rem'
  },
  propertyTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  propertyLocation: {
    color: '#666',
    fontSize: '0.9rem'
  },
  propertyPrice: {
    marginBottom: '1rem'
  },
  currentPrice: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#e74c3c',
    marginRight: '1rem'
  },
  originalPrice: {
    fontSize: '1.2rem',
    color: '#999',
    textDecoration: 'line-through'
  },
  propertySpecs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  spec: {
    background: '#f8f9fa',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    color: '#666'
  },
  propertyFeatures: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  featureTag: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem'
  },
  moreFeatures: {
    color: '#667eea',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  propertyFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #eee'
  },
  agentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  agentAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  agentDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  agentName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#333'
  },
  agentPhone: {
    fontSize: '0.8rem',
    color: '#666'
  },
  propertyActions: {
    display: 'flex',
    gap: '0.5rem'
  },
  contactBtn: {
    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  viewBtn: {
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '0.6rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '3rem'
  },
  pageBtn: {
    padding: '0.8rem 1.2rem',
    border: '2px solid #e1e8ed',
    background: 'white',
    color: '#333',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500'
  },
  pageBtnActive: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderColor: '#667eea'
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
  propertyModal: {
    background: 'white',
    borderRadius: '20px',
    maxWidth: '1200px',
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
    fontSize: '2rem',
    fontWeight: '700',
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
  imageGallery: {
    marginBottom: '2rem'
  },
  mainImage: {
    marginBottom: '1rem'
  },
  mainImg: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '15px'
  },
  thumbnails: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto'
  },
  thumbnail: {
    width: '100px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.3s ease'
  },
  modalDetails: {
    marginTop: '2rem'
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem'
  },
  detailsLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  modalPrice: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#e74c3c'
  },
  modalOriginalPrice: {
    fontSize: '1.5rem',
    color: '#999',
    textDecoration: 'line-through'
  },
  modalLocation: {
    fontSize: '1.2rem',
    color: '#666'
  },
  modalDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#555'
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem'
  },
  specItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: '10px',
    textAlign: 'center'
  },
  specIcon: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem'
  },
  specLabel: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.3rem'
  },
  specValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333'
  },
  featuresSection: {
    marginTop: '1rem'
  },
  sectionHeading: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  featuresList: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  modalFeatureTag: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem'
  },
  amenitiesSection: {
    marginTop: '1rem'
  },
  amenitiesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.8rem'
  },
  amenityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  checkIcon: {
    color: '#27ae60',
    fontWeight: '700',
    fontSize: '1.2rem'
  },
  detailsRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  agentCard: {
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center'
  },
  agentCardImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem'
  },
  agentCardName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  agentCardTitle: {
    color: '#666',
    marginBottom: '0.5rem'
  },
  agentCardPhone: {
    fontWeight: '600',
    color: '#333',
    marginBottom: '1.5rem'
  },
  agentActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  },
  callAgentBtn: {
    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  whatsappBtn: {
    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  emailBtn: {
    background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  quickActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  scheduleBtn: {
    background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  brochureBtn: {
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '1rem',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  shareBtn: {
    background: 'transparent',
    color: '#666',
    border: '2px solid #ddd',
    padding: '1rem',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .mobileFilterBtn {
        display: block !important;
      }
      .filtersContainer {
        display: none;
      }
      .filtersContainer.show {
        display: block !important;
      }
      .heroStats {
        flex-direction: column !important;
        gap: 2rem !important;
      }
      .propertiesContainer {
        grid-template-columns: 1fr !important;
      }
      .propertyCardList {
        flex-direction: column !important;
        height: auto !important;
      }
      .detailsGrid {
        grid-template-columns: 1fr !important;
      }
      .filtersGrid {
        grid-template-columns: 1fr !important;
      }
      .propertyFooter {
        flex-direction: column !important;
        gap: 1rem !important;
      }
      .searchContainer {
        flex-direction: column !important;
      }
    }
    
    .propertyCard:hover .propertyImage {
      transform: scale(1.05);
    }
    
    .filterSelect:focus {
      border-color: #667eea;
      outline: none;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    .clearFiltersBtn:hover {
      background: #e74c3c;
      color: white;
    }
    
    .pageBtn:hover:not(:disabled) {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: #667eea;
    }
    
    .pageBtn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .thumbnail:hover {
      opacity: 1;
    }
    
    .closeBtn:hover {
      color: #333;
    }
  `;
  document.head.appendChild(style);
}

export default Properties;
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
