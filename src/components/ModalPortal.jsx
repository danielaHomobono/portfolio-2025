import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ 
  isOpen, 
  onClose, 
  children, 
  className = '',
  closeOnOverlayClick = true,
  closeOnEscape = true 
}) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Scroll lock iOS-friendly y manejo de foco
  useEffect(() => {
    if (isOpen) {
      // Guardar el elemento con foco actual
      previousFocusRef.current = document.activeElement;
      
      // Bloquear scroll de forma iOS-friendly
      const scrollY = window.scrollY;
      
      // Aplicar estilos de scroll lock
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Log para debug
      console.log('Modal opened - scroll locked at position:', scrollY);

      return () => {
        // Restaurar scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // Restaurar posición de scroll
        window.scrollTo(0, scrollY);
        
        // Log para debug
        console.log('Modal closed - scroll restored to position:', scrollY);
        
        // Restaurar foco
        if (previousFocusRef.current && previousFocusRef.current.focus) {
          // Pequeño delay para que el DOM se actualice
          setTimeout(() => {
            previousFocusRef.current.focus();
          }, 10);
        }
      };
    }
  }, [isOpen]);

  // Manejo de tecla Escape
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Trap de foco dentro del modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Enfocar el primer elemento después de un pequeño delay
    setTimeout(() => {
      if (firstElement && firstElement.focus) {
        firstElement.focus();
      }
    }, 100);

    const handleTabKey = (event) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab normal
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTabKey);
    return () => modal.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  // Manejo de click en overlay
  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,  
    bottom: 0,
    zIndex: 2147483647,
    background: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(var(--vh, 1vh) * 100)',
    padding: `max(20px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right)) max(20px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left))`,
    animation: 'modalFadeIn 0.2s ease-out'
  };

  const contentStyles = {
    background: 'linear-gradient(135deg, #1a1a3e 0%, #2d1b69 50%, #4c1d95 100%)',
    borderRadius: '20px',
    width: 'min(94%, 720px)',
    maxHeight: '85vh',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    touchAction: 'manipulation',
    padding: '30px',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    animation: 'modalSlideIn 0.3s ease-out 0.1s both'
  };

  const modalContent = (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .modal-portal-content {
            padding: 20px !important;
            border-radius: 15px !important;
          }
        }
        
        @media (max-width: 768px) and (orientation: landscape) {
          .modal-portal-overlay {
            padding: 10px !important;
          }
          .modal-portal-content {
            max-height: 80vh !important;
            width: min(90%, 720px) !important;
          }
        }
        
        @media (max-height: 500px) {
          .modal-portal-overlay {
            align-items: flex-start !important;
            padding-top: 10px !important;
          }
        }
      `}</style>
      <div 
        className={`modal-portal-overlay ${className}`}
        style={overlayStyles}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div 
          ref={modalRef}
          className="modal-portal-content"
          style={contentStyles}
          role="document"
        >
          {children}
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ModalPortal;