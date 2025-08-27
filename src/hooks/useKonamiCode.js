import { useEffect, useState } from 'react';

export const useKonamiCode = () => {
  const [isActivated, setIsActivated] = useState(false);
  
  // Secuencia del Konami Code
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  
  const [currentSequence, setCurrentSequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Prevenir activación si ya está activo
      if (isActivated) return;

      const newSequence = [...currentSequence, event.code];
      
      // Verificar si la secuencia coincide hasta ahora
      const isValidSequence = konamiCode.slice(0, newSequence.length)
        .every((key, index) => key === newSequence[index]);
      
      if (isValidSequence) {
        setCurrentSequence(newSequence);
        
        // Si completó toda la secuencia
        if (newSequence.length === konamiCode.length) {
          setIsActivated(true);
          setCurrentSequence([]);
          
          // Opcional: Sonido de activación
          try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
            audio.play().catch(() => {}); // Ignorar errores de audio
          } catch (e) {}
        }
      } else {
        // Secuencia incorrecta, reiniciar
        setCurrentSequence([]);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isActivated) {
        setIsActivated(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [currentSequence, isActivated]);

  const deactivate = () => {
    setIsActivated(false);
    setCurrentSequence([]);
  };

  return { isActivated, deactivate };
};