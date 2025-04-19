import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Rocket, GitBranch, Mail } from 'lucide-react';
import { SiLinkedin, SiGithub, SiLeetcode } from 'react-icons/si';
import '../component_styles/About.css';
import ContactModal from '../Modals/ContactModal'; // Import the ContactModal component

const About = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Single master section ref for animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Collection of developer quotes
  const devQuotes = [
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "If debugging is the process of removing bugs, then programming must be the process of putting them in.", author: "Edsger W. Dijkstra" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" }
  ];

  // Change quote every 8 seconds, but only start after section is in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setQuoteIndex(prevIndex => (prevIndex + 1) % devQuotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isInView, devQuotes.length]);

  // Toggle modal function
  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  // Philosophy items with icons from Lucide
  const philosophyItems = [
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solver",
      text: "I approach each project as a puzzle to be solved with creativity and precision."
    },
    {
      icon: <Rocket size={24} />,
      title: "Continuous Learner",
      text: "In tech, learning never stops. I embrace new technologies with enthusiasm."
    },
    {
      icon: <GitBranch size={24} />,
      title: "Clean Code Advocate",
      text: "I believe in writing code that's not just functional, but also maintainable and elegant."
    }
  ];

  // Social links with icons - Fixed definition
  const socialLinks = [
    { icon: <SiLinkedin size={20} />, url: "https://www.linkedin.com/in/roffin/", label: "LinkedIn" },
    { icon: <SiGithub size={20} />, url: "https://github.com/Roffin7", label: "GitHub" },
    { icon: <SiLeetcode size={20} />, url: "https://leetcode.com/u/roffinjason/", label: "LeetCode" },
    { icon: <Mail size={20} />, url: "#", label: "Email", onClick: toggleModal }
  ];

  return (
    <>
      <section ref={sectionRef} id="about" className="about-section">
        <div className="particles-bg"></div>
        <Container fluid className="about-container">
          {/* Header Section - Simplified */}
          <motion.div 
            className="about-header"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <Col lg={12} className="text-center">
              <h2 className="about-section-title-simple">
                About Me
              </h2>
              <motion.div 
                className="about-section-divider"
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
            </Col>
          </motion.div>
          
          <Row className="about-content-row">
            {/* Left side: Animated Developer Quote Card */}
            <Col lg={5} className="about-quote-display-col">
              <motion.div 
                className="about-dev-quote-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="about-quote-card-inner">
                  <div className="about-quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <motion.div 
                    className="about-quote-content"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <p className="about-quote-text">
                      {devQuotes[quoteIndex].text}
                    </p>
                    <p className="about-quote-author">- {devQuotes[quoteIndex].author}</p>
                  </motion.div>
                  <motion.div 
                    className="about-quote-dots"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {devQuotes.map((_, index) => (
                      <span 
                        key={index} 
                        className={`about-quote-dot ${index === quoteIndex ? 'active' : ''}`}
                        onClick={() => setQuoteIndex(index)}
                      ></span>
                    ))}
                  </motion.div>
                </div>
                
                <div className="about-dev-philosophy">
                  <motion.h3 
                    className="about-philosophy-title"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    My Philosophy
                  </motion.h3>
                  <div className="about-philosophy-content">
                    {philosophyItems.map((item, index) => (
                      <motion.div 
                        className="about-philosophy-item"
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ 
                          duration: 0.65, 
                          delay: 0.3 + (index * 0.15),
                          ease: "easeOut"
                        }}
                      >
                        <div className="about-philosophy-icon">
                          {item.icon}
                        </div>
                        <div className="about-philosophy-text">
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
            
            {/* Right side: Bio and education */}
            <Col lg={7}>
              <div className="about-bio-container">
                <motion.div 
                  className="about-bio-section"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <h3 className="about-bio-title">Who I Am</h3>
                  <p className="about-bio-text">
                    Aspiring Software Developer with a strong foundation in Java, web development, and databases. 
                    Passionate about building efficient, scalable applications and eager to contribute technical 
                    skills in a dynamic environment.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="about-timeline-container"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h3 className="about-timeline-title">Education Journey</h3>
                  
                  <div className="about-timeline">
                    {[
                      {
                        period: "2021 - 2025",
                        heading: "Bachelor of Technology in Computer Science and Business Systems",
                        school: "Panimalar Engineering College, Chennai",
                        detail: "GPA: 9.0/10.0"
                      },
                      {
                        period: "2018 - 2021",
                        heading: "Higher Secondary Certificate",
                        school: "Carmel Matha Matriculation Higher Secondary School",
                        detail: "HSC: 91.50% | SSLC: 90.05%"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        className="about-timeline-item"
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.4 + (index * 0.25),
                          ease: "easeOut"
                        }}
                      >
                        <div className="about-timeline-marker"></div>
                        <div className="about-timeline-content">
                          <div className="about-timeline-date">{item.period}</div>
                          <h4 className="about-timeline-heading">{item.heading}</h4>
                          <p className="about-timeline-school">{item.school}</p>
                          <p className="about-timeline-detail">
                            {item.detail.split('|').map((part, i) => {
                              const [label, value] = part.trim().split(':');
                              return (
                                <span key={i}>
                                  {i > 0 && " | "}
                                  {label}: {value?.trim()}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="about-social-links-section"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h3 className="about-social-title">Connect With Me</h3>
                  <div className="about-social-links">
                    {socialLinks.map((link, index) => (
                      <motion.a 
                        key={index}
                        href={link.url} 
                        className="about-social-link" 
                        target={link.onClick ? "_self" : "_blank"}
                        rel={link.onClick ? "" : "noopener noreferrer"}
                        aria-label={link.label}
                        onClick={link.onClick}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.4 + (index * 0.15),
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Add the ContactModal component */}
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default About;