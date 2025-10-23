import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CodeShowcase from './CodeShowcase';

const ProjectDetails = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-modal"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          
          <div className="modal-content">
            <div className="modal-header">
              <img src={project.image} alt={project.title} />
              <div className="header-info">
                <h2>{project.title}</h2>
                <p className="project-summary">{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Ver Proyecto
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Código
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="tech-section">
                <h3><i className="fas fa-code"></i> Stack Técnico</h3>
                <div className="tech-grid">
                  {project.techStack?.map((tech, index) => (
                    <span key={index} className="tech-badge" style={{ borderColor: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="challenges-section">
                <h3><i className="fas fa-mountain"></i> Retos Técnicos</h3>
                <ul className="challenges-list">
                  {project.challenges?.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="solutions-section">
                <h3><i className="fas fa-lightbulb"></i> Soluciones Implementadas</h3>
                <ul className="solutions-list">
                  {project.solutions?.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>

              <div className="architecture-section">
                <h3><i className="fas fa-sitemap"></i> Arquitectura</h3>
                <p>{project.architecture}</p>
              </div>

              <div className="learnings-section">
                <h3><i className="fas fa-graduation-cap"></i> Aprendizajes</h3>
                <ul className="learnings-list">
                  {project.learnings?.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>

              {project.performance && (
                <div className="performance-section">
                  <h3><i className="fas fa-tachometer-alt"></i> Rendimiento</h3>
                  <div className="performance-metrics">
                    {Object.entries(project.performance).map(([key, value]) => (
                      <div key={key} className="metric">
                        <span className="metric-label">{key}</span>
                        <span className="metric-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="code-section">
                <h3><i className="fas fa-code"></i> Código y Arquitectura</h3>
                <CodeShowcase project={project} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;