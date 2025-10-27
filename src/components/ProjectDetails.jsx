import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ProjectDetails = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Método más simple de bloqueo de scroll que no afecta al modal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape, true);
    return () => document.removeEventListener('keydown', handleEscape, true);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Calcular posición actual del viewport
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  return createPortal(
    <div 
      className="modal-overlay-absolute-viewport"
      style={{
        position: 'absolute',
        top: `${scrollTop}px`,
        left: `${scrollLeft}px`,
        width: `${viewportWidth}px`,
        height: `${viewportHeight}px`,
        zIndex: 2147483647,
        background: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxSizing: 'border-box',
        margin: '0px',
        pointerEvents: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <style>{`
        .modal-overlay-absolute-viewport {
          position: absolute !important;
          z-index: 2147483647 !important;
          margin: 0px !important;
          padding: 20px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-sizing: border-box !important;
          pointer-events: auto !important;
        }
      `}</style>
      <style>{`
        @keyframes portalModalSlide {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
      
      <div 
        style={{
          background: 'linear-gradient(135deg, #1a1a3e 0%, #2d1b69 50%, #4c1d95 100%)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '700px',
          maxHeight: '85vh',
          overflow: 'visible',
          padding: '30px',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          WebkitOverflowScrolling: 'touch',
          animation: 'portalModalSlide 0.3s ease-out',
          boxSizing: 'border-box',
          margin: '0 auto',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      >
        <div 
          className="modal-content-scrollable"
          style={{
            maxHeight: '75vh',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            width: '100%',
          }}
        >
          <style>{`
            .modal-content-scrollable {
              scrollbar-width: thin;
              scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
            }
            .modal-content-scrollable::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }
            .modal-content-scrollable::-webkit-scrollbar-track {
              background: transparent;
            }
            .modal-content-scrollable::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.3);
              border-radius: 3px;
            }
            .modal-content-scrollable::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.5);
            }
            .modal-content-scrollable::-webkit-scrollbar-corner {
              background: transparent;
            }
          `}</style>

          <button 
          onClick={onClose}
          aria-label="Cerrar modal de detalles del proyecto"
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ✕
        </button>
        
        <h2 
          id="modal-title"
          style={{ 
            color: project.color || '#00FFFF', 
            marginBottom: '20px',
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            marginTop: '5px',
            fontWeight: '700'
          }}
        >
          {project.title}
        </h2>
        
        {/* Descripción detallada */}
        <div style={{ marginBottom: '25px' }}>
          <p style={{ 
            lineHeight: '1.6',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            opacity: '0.95',
            color: '#f0f0f0',
            marginBottom: '15px'
          }}>
            {project.description}
          </p>
          
          {/* Descripción adicional o arquitectura */}
          {project.architecture && (
            <p style={{ 
              lineHeight: '1.6',
              fontSize: 'clamp(0.85rem, 2.3vw, 1rem)',
              opacity: '0.85',
              color: '#e0e0e0',
              fontStyle: 'italic',
              borderLeft: `3px solid ${project.color || '#00FFFF'}`,
              paddingLeft: '15px',
              marginTop: '15px'
            }}>
              <strong>Arquitectura:</strong> {project.architecture}
            </p>
          )}
        </div>

        {/* Stack Técnico */}
        {project.techStack && project.techStack.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ 
              color: '#32FF32', 
              marginBottom: '15px',
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              fontWeight: '600'
            }}>
              Stack Técnico
            </h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px'
            }}>
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                    border: `1px solid ${project.color || '#00FFFF'}`,
                    whiteSpace: 'nowrap',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.25)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.15)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Desafíos */}
        {project.challenges && project.challenges.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ 
              color: '#B19CD9', 
              marginBottom: '15px',
              fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
              fontWeight: '600'
            }}>
              Desafíos Principales
            </h3>
            <p style={{
              lineHeight: '1.6',
              fontSize: 'clamp(0.85rem, 2.3vw, 1rem)',
              color: '#f0f0f0',
              marginBottom: '0'
            }}>
              {project.challenges.join(', optimicé los modelos y gestioné eficientemente ')}
            </p>
          </div>
        )}

        {/* Soluciones */}
        {project.solutions && project.solutions.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ 
              color: '#9B59B6', 
              marginBottom: '15px',
              fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
              fontWeight: '600'
            }}>
              Soluciones Implementadas
            </h3>
            <p style={{
              lineHeight: '1.6',
              fontSize: 'clamp(0.85rem, 2.3vw, 1rem)',
              color: '#f0f0f0',
              marginBottom: '0'
            }}>
              {project.solutions.join(', implementé estrategias innovadoras y ')}
            </p>
          </div>
        )}




        
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          marginTop: '30px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #00FFFF, #0080FF)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.2s ease',
                minWidth: '120px',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.3)';
              }}
            >
              GitHub
            </a>
          )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDetails;