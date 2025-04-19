import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../component_styles/Services.css';
import { services } from '../data/ServicesData.jsx';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section ref={sectionRef} className="services-section" id="services">
      <div className="services-background">
        <div className="services-particles"></div>
      </div>
      
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-title">
            <span className="title-text">Services</span>
            <span className="title-highlight"></span>
          </h2>
          <p className="services-subtitle">Fresh skills ready to tackle your projects</p>
        </motion.div>

        <motion.div 
          className="services-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="banner-content">
            <h3>Ready to Transform Your Ideas Into Reality</h3>
            <p>
              As an emerging developer, I bring the latest techniques and a fresh perspective to every project. 
              While my professional journey is just beginning, my technical foundation is solid and my 
              enthusiasm for problem-solving is boundless.
            </p>
          </div>
        </motion.div>

        <div className="services-wrapper">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`service-item ${hoveredService === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                style={{
                  '--service-color': service.color
                }}
              >
                <div className="service-content">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <Icon />
                    </div>
                    <div className="service-glow"></div>
                  </div>
                  
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-skills">
                    {service.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="cta-glow"></div>
          <div className="cta-content">
            <h3>Let's Build Something Amazing</h3>
            <p>
              Looking for technical expertise for your project? I'm eager to collaborate and 
              bring your vision to life with fresh ideas and solid code.
            </p>
            <a href="https://www.instagram.com/ro_fin_.12/" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">
              DM On Insta
              <div className="button-shine"></div>
            </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;