import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers } from 'lucide-react';
import '../component_styles/Skills.css';
import { skillCategories } from '../data/SkillsData.jsx';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Add section ref for visibility detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.id === activeCategory);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <motion.div 
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2>Skills & Expertise</h2>
          <p>My technical skillset and areas of expertise</p>
        </motion.div>
        
        <motion.div 
          className="skills-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <button 
            className={`skills-filter-btn ${activeCategory === 'all' ? 'skills-active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <Layers size={16} />
            All
          </button>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button 
                key={category.id}
                className={`skills-filter-btn ${activeCategory === category.id ? 'skills-active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
              >
                <Icon size={16} />
                {category.title}
              </motion.button>
            );
          })}
        </motion.div>
        
        <div className="skills-grid">
          {filteredCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={category.id}
                className="skills-category"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + (categoryIndex * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="skills-category-header">
                  <Icon size={24} />
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      className="skills-item"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.5 + (categoryIndex * 0.1) + (index * 0.05),
                        type: "spring",
                        stiffness: 120
                      }}
                    >
                      <div className="skills-bubble">
                        <span>{skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;