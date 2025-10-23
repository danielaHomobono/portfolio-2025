import { useEffect, useState } from 'react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const MobileOptimizer = ({ children }) => {
  const { isLowEnd, isMobile } = useDeviceDetection();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Aplicar optimizaciones para dispositivos de baja potencia
    if (isLowEnd || reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
      
      // Desactivar animaciones complejas
      const style = document.createElement('style');
      style.textContent = `
        * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
        }
        .tech-card::before,
        .mission-card::before,
        .project-card::before {
          display: none !important;
        }
        .aurora-canvas {
          display: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isLowEnd, reducedMotion]);



  return children;
};

export default MobileOptimizer;