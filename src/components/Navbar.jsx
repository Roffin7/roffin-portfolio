import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import '../component_styles/Navbar.css';
import ContactModal from '../Modals/ContactModal'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
     
      // Improved active section detection with threshold checking
      const sections = ['about', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // Default to empty (no active link) when at the top/hero section
      let currentActive = '';
      
      // Find which section we're currently viewing
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          // Only set as active if we're actually within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            currentActive = section;
            break;
          }
        }
      }
      
      // Only update the state if it's changed to prevent unnecessary re-renders
      if (currentActive !== activeLink) {
        setActiveLink(currentActive);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set the correct active link on page load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]); // Include activeLink in dependencies to access current value

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="navbar-logo-text">R</span>offin <span className="navbar-logo-text">J</span>ason
            <span className="navbar-logo-dot"></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['about', 'skills', 'projects', 'services'].map((item) => (
                <li className="navbar-nav-item" key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className={`navbar-nav-link ${activeLink === item ? 'navbar-active-link' : ''}`}
                    spy={false} // Disable Link's built-in spy as we're handling it ourselves
                    onClick={() => {}} // Remove the manual setActiveLink here
                  >
                    <span className="navbar-nav-link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  </Link>
                </li>
              ))}
              <li className="navbar-nav-item">
                <a
                  href="#"
                  className={`navbar-nav-link navbar-special-contact ${activeLink === 'contact' ? 'navbar-active-link' : ''}`}
                  onClick={toggleModal}
                >
                  <span className="navbar-nav-link-text">Contact</span>
                  <span className="navbar-contact-dot"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Use the ContactModal component */}
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Navbar;