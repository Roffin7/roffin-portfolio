import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../component_styles/Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'a Full Stack Developer',
    'an AI Specialist',
    'a Machine Learning Engineer',
    'a Web Solutions Architect'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[textIndex % titles.length];
      const shouldDelete = isDeleting;
      const speed = isDeleting ? 80 : typingSpeed;
      
      if (!shouldDelete && displayText === currentTitle) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      
      if (shouldDelete && displayText === '') {
        // Move to next title
        setIsDeleting(false);
        setTextIndex(textIndex + 1);
        // Random speed between 120-180ms for natural feel
        setTypingSpeed(Math.random() * 60 + 120);
        return;
      }

      // Update text
      const updatedText = shouldDelete 
        ? currentTitle.substring(0, displayText.length - 1) 
        : currentTitle.substring(0, displayText.length + 1);
      
      setDisplayText(updatedText);
    };

    const timer = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed]);

  return (
    <section className="hero-hero-section py-5">
        <div className="hero-particles-bg"></div>
        <Container>
            <Row className="align-items-center">
                <Col lg={7} md={6} className="hero-hero-content">
                    <div className="hero-greeting-wrapper">
                        <h5 className="hero-greeting">Hi <span className="hero-wave">👋</span></h5>
                    </div>
                    <h1 className="hero-name">I'm <span className="hero-highlight">Roffin Jason</span></h1>
                    <h2 className="hero-profession">
                        <span className="hero-typing-text">{displayText}</span>
                        <span className="hero-cursor"></span>
                    </h2>
                    <p className="hero-hero-description hero-animated-text">
                        Passionate about building innovative solutions at the intersection of web development and artificial intelligence.
                        I transform complex problems into elegant, scalable applications using cutting-edge technologies.
                    </p>
                    <div className="hero-hero-buttons mt-4">
                        <Button variant="dark" className="hero-btn hero-btn-glow">
                            Hire Me
                        </Button>
                        <Button variant="dark" className="hero-btn hero-btn-outline-glow" href="assets/pdf/RJ_Resume.pdf" download>
                            Download CV <i className="fas fa-download ms-2"></i>
                        </Button>
                    </div>
                </Col>
                <Col lg={5} md={6} className="text-center">
                    <div className="hero-profile-image-container">
                        <div className="hero-orbit hero-orbit-1"></div>
                        <div className="hero-orbit hero-orbit-2"></div>
                        <div className="hero-orbit hero-orbit-3"></div>
                        <img 
                            src="assets/images/user_3.png"
                            alt="Roffin Jason" 
                            className="hero-profile-image" 
                        />
                        <div className="hero-tech-icon hero-icon-1">
                            <span style={{ fontSize: '1.5rem' }}><i className="fab fa-angular"></i></span>
                        </div>
                        <div className="hero-tech-icon hero-icon-2">
                            <span style={{ fontSize: '1.5rem' }}><i className="fab fa-python"></i></span>
                        </div>
                        <div className="hero-tech-icon hero-icon-3">
                            <span style={{ fontSize: '1.5rem' }}><i className="fab fa-node-js"></i></span>
                        </div>
                        <div className="hero-tech-icon hero-icon-4">
                            <span style={{ fontSize: '1.5rem' }}><i className="fab fa-react"></i></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Hero;