import React from 'react';

const ProjectDetails = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 999998
        }}
      />
      
      {/* Drawer */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '500px',
          maxWidth: '90vw',
          backgroundColor: '#1a1a3e',
          zIndex: 999999,
          overflowY: 'auto',
          padding: '30px',
          boxShadow: '-5px 0 15px rgba(0,0,0,0.3)'
        }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ×
        </button>

        {/* Content */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ 
            color: '#fff', 
            fontSize: '24px', 
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            {project.title}
          </h2>
          
          <p style={{ 
            color: '#fff', 
            fontSize: '16px', 
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            {project.description}
          </p>
          
          {project.techStack && project.techStack.length > 0 && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ 
                color: '#32FF32', 
                fontSize: '18px',
                marginBottom: '15px',
                fontWeight: 'bold'
              }}>
                Stack Técnico
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#00FFFF',
                  color: '#000',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#32FF32',
                  color: '#000',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                Ver Proyecto
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
