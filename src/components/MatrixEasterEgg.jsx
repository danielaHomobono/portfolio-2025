import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MatrixEasterEgg = ({ isActive, onDeactivate }) => {
  const canvasRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Configurar canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Caracteres para la lluvia
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]()function()console.log()ReactNodeJSMongoDB'.split('');
    
    // Columnas de caracteres
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    // Mostrar mensaje después de 1 segundo
    setTimeout(() => setShowMessage(true), 1000);

    const draw = () => {
      // Fondo semi-transparente para efecto de desvanecimiento
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Estilo del texto
      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      // Dibujar caracteres cayendo
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar gota si llega al final o aleatoriamente
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
      setShowMessage(false);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <motion.div 
      className="matrix-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <canvas 
        ref={canvasRef}
        className="matrix-canvas"
        onClick={onDeactivate}
      />
      
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="matrix-message"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <div className="hacker-badge">🔓</div>
            <h1>MODO HACKER ACTIVADO</h1>
            <div className="matrix-quote">
              "Welcome to the Matrix, Neo..."
            </div>
            <div className="developer-credit">
              Desarrollado por <span className="highlight-name">Daniela Homobono</span>
            </div>
            <div className="exit-instruction">
              [Click anywhere or ESC to exit]
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón de salida */}
      <motion.button
        className="matrix-exit-btn"
        onClick={onDeactivate}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ✕
      </motion.button>
    </motion.div>
  );
};

export default MatrixEasterEgg;