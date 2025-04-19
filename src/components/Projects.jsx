import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Server, Database, Globe, Cpu, Smartphone, X, ArrowRight } from 'lucide-react';
import { projectsData, categories } from '../data/Projectsdata';
import '../component_styles/Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [animationDirection, setAnimationDirection] = useState(1); // 1 for right, -1 for left
  
  // Add section ref for visibility detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(selectedCategory));
  
  // Reset visible projects when category changes
  useEffect(() => {
    setVisibleProjects(3);
  }, [selectedCategory]);

  // Handle closing the detail modal with ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setActiveProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const loadMoreProjects = () => {
    setAnimationDirection(1);
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  const showLessProjects = () => {
    setAnimationDirection(-1);
    setVisibleProjects(prev => Math.max(prev - 3, 3));
  };
  
  // Get the icon for a project based on its primary category
  const getProjectIcon = (categories) => {
    if (categories.includes('java')) return <Code className="projects-tech-icon projects-java" />;
    if (categories.includes('ai-ml')) return <Cpu className="projects-tech-icon projects-ai-ml" />;
    if (categories.includes('python')) return <Server className="projects-tech-icon projects-python" />;
    if (categories.includes('web')) return <Globe className="projects-tech-icon projects-web" />;
    if (categories.includes('mobile')) return <Smartphone className="projects-tech-icon projects-mobile" />;
    return <Database className="projects-tech-icon" />;
  };
  
  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Featured Projects</h2>
          <p>Explore my latest work across different technologies</p>
        </motion.div>
        
        <motion.div 
          className="projects-category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`projects-category-btn ${selectedCategory === category.id ? 'projects-active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1 * index + 0.3 }
              } : { 
                opacity: 0, 
                y: 20 
              }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
        
        {filteredProjects.length > 0 ? (
          <div className="projects-grid-container">
            <AnimatePresence mode="popLayout">
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="projects-card"
                  initial={{ 
                    opacity: 0, 
                    x: 50 * animationDirection, 
                    y: 30
                  }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0, 
                    y: 0 
                  } : { 
                    opacity: 0, 
                    x: 50 * animationDirection, 
                    y: 30
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -50 * animationDirection, 
                    y: 30,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="projects-card-inner">
                    <div className="projects-category-icon">
                      {getProjectIcon(project.categories)}
                    </div>
                    
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="projects-tags">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <motion.span 
                          key={idx} 
                          className="projects-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.1 * idx + 0.3 + index * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="projects-tag projects-more-tag">+{project.tags.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="projects-actions">
                      <button 
                        className="projects-view-details-btn"
                        onClick={() => setActiveProject(project)}
                      >
                        View Details
                        <ArrowRight size={16} />
                      </button>
                      
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="projects-github-btn"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            className="projects-no-projects"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            No projects found in this category
          </motion.div>
        )}
        
        {filteredProjects.length > 3 && (
          <motion.div 
            className="projects-load-more-container"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {visibleProjects < filteredProjects.length ? (
              <motion.button 
                className="projects-load-more-btn"
                onClick={loadMoreProjects}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 107, 56, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Show More Projects
                <ArrowRight size={16} />
              </motion.button>
            ) : visibleProjects > 3 && (
              <motion.button 
                className="projects-load-more-btn projects-show-less"
                onClick={showLessProjects}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 107, 56, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Show Less
              </motion.button>
            )}
          </motion.div>
        )}
      </div>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="projects-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="projects-modal"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="projects-close-modal" onClick={() => setActiveProject(null)}>
                <X size={18} />
              </button>
              
              <div className="projects-modal-header">
                <div className="projects-modal-icon-container">
                  {getProjectIcon(activeProject.categories)}
                </div>
                <h2>{activeProject.title}</h2>
              </div>
              
              <div className="projects-modal-content">
                <div className="projects-modal-description">
                  <p>{activeProject.description}</p>
                  <div className="projects-highlights">
                    <h4>Key Features</h4>
                    <ul>
                      {activeProject.tags.map((tag, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {tag}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="projects-modal-tags">
                  {activeProject.tags.map((tag, index) => (
                    <span key={index} className="projects-modal-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="projects-modal-links">
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="projects-github-link">
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </a>
                  {activeProject.links && activeProject.links.length > 0 && activeProject.links.map((link, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="projects-demo-link">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;