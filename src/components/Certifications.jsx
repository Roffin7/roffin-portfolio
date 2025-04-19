import React, { useState, useEffect, useRef } from 'react';
import { Award, Download, Clock, Building, Tag, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { certificationData, certificationCategories } from '../data/CertificationsData';
import '../component_styles/Certifications.css';

const AchievementGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Get filtered certificates
  const getFilteredCertificates = () => {
    // Filter by category
    const categoryFiltered = activeCategory === 'all' 
      ? certificationData 
      : certificationData.filter(cert => cert.category === activeCategory);
    
    // Sort by priority
    return [...categoryFiltered].sort((a, b) => {
      // First by priority level (ascending)
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      // For same priority items, sort by date (most recent first)
      const aYear = parseInt(a.date.match(/\d{4}/), 10);
      const bYear = parseInt(b.date.match(/\d{4}/), 10);
      
      return bYear - aYear;
    });
  };

  const filteredCertificates = getFilteredCertificates();
  const displayedCertificates = filteredCertificates.slice(0, displayCount);
  const hasMoreToShow = displayedCertificates.length < filteredCertificates.length;
  
  // Get priority level name
  const getPriorityGroupName = (priority) => {
    const priorityLabels = {
      1: 'Internships',
      2: 'Professional Certificates',
      3: 'Additional Certifications'
    };
    
    return priorityLabels[priority] || 'Other';
  };

  // Show more certificates handler
  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + 6);
  };
  
  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(6);
  }, [activeCategory]);
  
  // Modal handlers
  const openCertificate = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };
  
  const closeCertificate = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };
  
  // Get color variable based on category
  const getCategoryColor = (category) => {
    const colorMap = {
      'internship': '#36b5b0',
      'ai': '#ff6b35',
      'programming': '#4d79ff',
      'cloud': '#9e7bff',
      'data': '#50c878',
      'development': '#ff7eb6',
      'database': '#ffc75f'
    };
    
    return colorMap[category] || '#ff6b35';
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'internship':
        return <Building size={20} />;
      case 'ai':
        return <Award size={20} />;
      case 'programming':
        return <Tag size={20} />;
      case 'cloud':
        return <Award size={20} />;
      case 'data':
        return <Award size={20} />;
      case 'development':
        return <Tag size={20} />;
      case 'database':
        return <Award size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  return (
    <section id="certifications" className="certifications-achievement-grid-section" ref={sectionRef}>
      <div className="certifications-achievement-background">
        <div className="certifications-achievement-particles"></div>
        <div className="certifications-gradient-overlay"></div>
      </div>
      
      <div className="certifications-container">
        <motion.div 
          className="certifications-achievement-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="certifications-section-title"
          >
            <span className="certifications-title-text">Certifications</span>
            <motion.span 
              className="certifications-title-highlight"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            ></motion.span>
          </motion.h2>
          
          <motion.p 
            className="certifications-achievement-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my professional qualifications and expertise
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="certifications-achievement-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {certificationCategories.map((category, index) => (
            <motion.button 
              key={category.id}
              className={`certifications-achievement-category-btn ${activeCategory === category.id ? 'certifications-active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ 
                '--category-color': getCategoryColor(category.id)
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="certifications-achievement-grid-container">
          {filteredCertificates.length === 0 ? (
            <motion.div 
              className="certifications-no-achievements"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              <Award size={48} />
              <p>No certifications found</p>
              <motion.button 
                className="certifications-reset-filters-btn"
                onClick={() => setActiveCategory('all')}
                whileHover={{ y: -3, boxShadow: "0 6px 15px rgba(255, 107, 53, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="certifications-achievement-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {displayedCertificates.map((cert, index) => {
                  const categoryColor = getCategoryColor(cert.category);
                  
                  return (
                    <motion.div 
                      key={cert.id}
                      className="certifications-achievement-card-wrapper"
                      variants={cardVariants}
                    >
                      <motion.div 
                        className="certifications-achievement-card"
                        onClick={() => openCertificate(cert)}
                        whileHover={{ 
                          y: -8, 
                          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(255, 255, 255, 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <motion.div 
                          className="certifications-card-category-icon"
                          style={{ backgroundColor: categoryColor }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5, 
                            transition: { type: "spring", stiffness: 300, damping: 10 }
                          }}
                        >
                          {getCategoryIcon(cert.category)}
                        </motion.div>
                        
                        <div className="certifications-card-glow" style={{ backgroundColor: categoryColor }}></div>
                        
                        <div className="certifications-card-content">
                          <h4 className="certifications-card-title">{cert.name}</h4>
                          <div className="certifications-card-issuer">
                            <Building size={14} />
                            <span>{cert.issuer}</span>
                          </div>
                          <div className="certifications-card-date">
                            <Clock size={14} />
                            <span>{cert.date}</span>
                          </div>
                          <div className="certifications-card-type-badge" style={{ backgroundColor: categoryColor }}>
                            {certificationCategories.find(c => c.id === cert.category)?.name}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {hasMoreToShow && (
                <motion.div 
                  className="certifications-show-more-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <motion.button 
                    className="certifications-show-more-btn"
                    onClick={handleShowMore}
                    whileHover={{ 
                      y: -3, 
                      boxShadow: "0 6px 15px rgba(255, 107, 53, 0.2)",
                      backgroundColor: "rgba(255, 107, 53, 0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Show More</span>
                    <ChevronDown size={16} />
                  </motion.button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div 
          className="certifications-achievement-modal-backdrop" 
          onClick={closeCertificate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="certifications-achievement-modal-container" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          >
            <motion.button 
              className="certifications-achievement-modal-close" 
              onClick={closeCertificate}
              whileHover={{ 
                backgroundColor: "rgba(255, 107, 53, 0.8)", 
                rotate: 90 
              }}
              transition={{ duration: 0.2 }}
            >
              <span>&times;</span>
            </motion.button>
            
            <div className="certifications-achievement-modal-content">
              <motion.div 
                className="certifications-achievement-modal-image-container"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.img 
                  src={selectedCert.imgSrc} 
                  alt={selectedCert.name}
                  className="certifications-achievement-modal-image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="certifications-achievement-modal-details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3 
                  className="certifications-achievement-modal-title"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {selectedCert.name}
                </motion.h3>
                
                <motion.div 
                  className="certifications-achievement-modal-meta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {[
                    { icon: <Building size={18} />, label: "Issuer:", value: selectedCert.issuer },
                    { icon: <Clock size={18} />, label: "Date:", value: selectedCert.date },
                    { 
                      icon: <Tag size={18} />, 
                      label: "Category:", 
                      value: certificationCategories.find(c => c.id === selectedCert.category)?.name,
                      isCategory: true 
                    },
                    { 
                      icon: <Award size={18} />, 
                      label: "Type:", 
                      value: getPriorityGroupName(selectedCert.priority),
                      isPriority: true 
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="certifications-achievement-modal-meta-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    >
                      {item.icon}
                      <span>
                        <strong>{item.label}</strong> 
                        {item.isCategory ? (
                          <span 
                            className="certifications-modal-category-badge" 
                            style={{ backgroundColor: getCategoryColor(selectedCert.category) }}
                          >
                            {item.value}
                          </span>
                        ) : item.isPriority ? (
                          <span className="certifications-modal-priority-badge">
                            {item.value}
                          </span>
                        ) : (
                          " " + item.value
                        )}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="certifications-achievement-modal-actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.a 
                    href={selectedCert.pdfLink} 
                    className="certifications-achievement-download-btn" 
                    download
                    onClick={(e) => e.stopPropagation()}
                    style={{ backgroundColor: getCategoryColor(selectedCert.category) }}
                    whileHover={{ 
                      y: -2, 
                      boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
                      backgroundColor: getCategoryColor(selectedCert.category).replace(')', ', 1.1)')
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download size={16} />
                    Download Certificate
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AchievementGrid;