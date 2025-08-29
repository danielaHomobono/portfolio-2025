import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    setTimeout(() => setShowText(true), 800);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Partículas de fondo */}
      <div className="loading-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Logo/Inicial animada */}
      <motion.div 
        className="loading-logo"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        <motion.div
          className="logo-letter"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(168, 85, 247, 0.8)",
              "0 0 40px rgba(67, 192, 221, 1)",
              "0 0 20px rgba(168, 85, 247, 0.8)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          DH
        </motion.div>
      </motion.div>

      {/* Texto de carga */}
      {showText && (
        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Cargando mi mundo digital...
          </motion.h2>
        </motion.div>
      )}

      {/* Barra de progreso */}
      <motion.div 
        className="progress-container"
        initial={{ width: 0 }}
        animate={{ width: "300px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="progress-bar">
          <motion.div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <motion.span 
          className="progress-text"
          key={progress}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {progress}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;