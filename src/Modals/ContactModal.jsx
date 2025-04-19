import React, { useState, useRef, useEffect } from "react";
import { X, Mail, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import '../component_styles/ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const formRef = useRef(null);
  
  // Reset status when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  // Create a wrapper function for onClose that resets the status
  const handleClose = () => {
    setStatus('idle');
    onClose();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    emailjs
      .sendForm(
        'service_7wt7xju',      // 🔁 Replace with your actual EmailJS service ID
        'template_kvxivni',     // 🔁 Replace with your actual EmailJS template ID
        e.target,
        'qMYk3fLcVbtIFgB6L'       // 🔁 Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setStatus('success');
          formRef.current.reset();
          
          // Reset status after animation completes
          setTimeout(() => {
            handleClose();
          }, 2500);
        },
        (error) => {
          console.error("Send Failed:", error.text);
          setStatus('error');
          
          // Reset status after showing error
          setTimeout(() => {
            setStatus('idle');
          }, 3000);
        }
      );
  };
  
  // Animation variants for framer-motion
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    }
  };
  
  // Success animation when form submits
  const SuccessAnimation = () => (
    <motion.div 
      className="navbar-success-animation"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1.2, 1],
        rotate: [0, 10, 0] 
      }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        times: [0, 0.6, 1]
      }}
    >
      <div className="navbar-success-circle">
        <Check size={40} className="navbar-success-icon" />
      </div>
      <motion.div 
        className="navbar-success-message"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Message sent successfully!
      </motion.div>
    </motion.div>
  );
  
  // Error animation when form fails
  const ErrorAnimation = () => (
    <motion.div 
      className="navbar-error-animation"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1.1, 1],
        x: [0, -10, 10, -5, 5, 0]
      }}
      transition={{ 
        duration: 0.7,
        times: [0, 0.4, 0.5, 0.6, 0.7, 0.8]
      }}
    >
      <div className="navbar-error-circle">
        <AlertCircle size={40} className="navbar-error-icon" />
      </div>
      <motion.div 
        className="navbar-error-message"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Something went wrong. Please try again.
      </motion.div>
    </motion.div>
  );

  // Loading spinner animation  
  const LoadingSpinner = () => (
    <motion.div 
      className="navbar-loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Loader2 size={24} className="navbar-loading-spinner" />
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div 
      className="navbar-fixed-modal-backdrop" 
      onClick={handleClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div 
        className="navbar-clean-modal-container" 
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
      >
        <button className="navbar-clean-modal-close" onClick={handleClose}>
          <X size={20} />
        </button>
        <div className="navbar-clean-modal-inner">
          <h3 className="navbar-clean-modal-heading">Let's Connect</h3>
          <div className="navbar-clean-email-container">
            <Mail size={18} className="navbar-clean-email-icon" />
            <a href="mailto:roffinjason@gmail.com" className="navbar-clean-email-link">
              roffinjason@gmail.com
            </a>
          </div>
          
          <AnimatePresence>
            {status === 'success' && <SuccessAnimation />}
            {status === 'error' && <ErrorAnimation />}
          </AnimatePresence>
          
          {status !== 'success' && (
            <form className="navbar-clean-form" onSubmit={handleSubmit} ref={formRef}>
              <div className="navbar-clean-input-row">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="navbar-clean-form-input"
                  required
                  disabled={status === 'loading'}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="navbar-clean-form-input"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="navbar-clean-form-input navbar-full-width"
                required
                disabled={status === 'loading'}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="navbar-clean-form-textarea"
                rows={4}
                required
                disabled={status === 'loading'}
              />
              <motion.button 
                type="submit" 
                className="navbar-clean-send-button"
                disabled={status === 'loading'}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -3, boxShadow: "0 6px 12px rgba(255, 107, 53, 0.25)" }}
              >
                {status === 'loading' ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="navbar-clean-send-icon" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;