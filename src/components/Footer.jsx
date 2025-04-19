import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import '../component_styles/Footer.css';
import ContactModal from '../Modals/ContactModal'; // Import the ContactModal component

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <>
      <footer className="footer">
        {/* Wave element removed */}
        
        <div className="footer-content">
          <div className="footer-container">
            {/* Top section with brand and links */}
            <div className="footer-top">
              {/* Brand column */}
              <div className="footer-brand">
                <h2 className="footer-logo">
                  Roffin<span> Jason</span>
                </h2>
                <p className="footer-tagline">
                  Building innovative solutions at the intersection of web development and AI.
                </p>
              </div>
              
              {/* Quick links columns */}
              <div className="footer-links-wrapper">
                {/* Navigation column */}
                <div className="footer-links-column">
                  <h3 className="footer-heading">Navigation</h3>
                  <ul className="footer-nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li className="mobile-hide"><a href="#services">Services</a></li>
                    {/* Modified contact link to open the modal */}
                    <li><a href="#" onClick={toggleModal}>Contact</a></li>
                  </ul>
                </div>
                
                {/* Services column - will be hidden on very small screens */}
                <div className="footer-links-column services-column">
                  <h3 className="footer-heading">Services</h3>
                  <ul className="footer-nav-links">
                    <li><a href="#web-development">Web Development</a></li>
                    <li><a href="#ui-design">UI Design</a></li>
                    <li><a href="#mobile-apps">Mobile Apps</a></li>
                    <li><a href="#ai-solutions">AI Solutions</a></li>
                    <li className="mobile-hide"><a href="#consulting">Consulting</a></li>
                  </ul>
                </div>
                
                {/* Contact column */}
                <div className="footer-links-column">
                  <h3 className="footer-heading">Contact</h3>
                  <ul className="footer-contact-links">
                    {/* Modified email link to open the modal */}
                    <li><a href="#" onClick={toggleModal}>roffinjason@gmail.com</a></li>
                    <li className="mobile-hide"><a href="tel:+1234567890">+91 7358898585</a></li>
                    <li>Tamilnadu, India</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Social and copyright section */}
            <div className="footer-bottom">
              <div className="footer-social">
                <a href="https://github.com/Roffin7" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <SiGithub />
                </a>
                <a href="https://www.linkedin.com/in/roffin/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <SiLinkedin />
                </a>
                <a href="https://www.instagram.com/ro_fin_.12/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <SiInstagram />
                </a>
                <a href="https://x.com/RoffinJ" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg className="x-icon" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Mail icon already opens modal */}
                <a href="#" onClick={toggleModal} className="social-icon">
                  <Mail />
                </a>
              </div>
              
              <div className="footer-copyright">
                <p>© {currentYear} <span>Roffin Jason</span>. All rights reserved.</p>
                <div className="footer-legal">
                  <a href="">Privacy Policy</a> • <a href="">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Footer;