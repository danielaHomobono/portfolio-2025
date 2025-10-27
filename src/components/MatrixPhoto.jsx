import { useEffect, useRef, useState, memo } from 'react';

const MatrixPhoto = ({ src, alt, className }) => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Función para ajustar el tamaño del canvas
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    const chars = '01100110011001100110011001100110011001100110011001100110011001'.split('');
    const words = ['BEST', 'PROGRAMER', 'EVER'];
    const fontSize = 12;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);
    let columnWords = Array(columns).fill(null).map(() =>
      Math.random() < 0.3 ? words[Math.floor(Math.random() * words.length)] : null
    );
    let wordPositions = Array(columns).fill(0);

    const draw = () => {
      // Si el tamaño cambió, recalcular columnas y drops
      if (columns !== Math.floor(canvas.width / fontSize)) {
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
        columnWords = Array(columns).fill(null).map(() =>
          Math.random() < 0.3 ? words[Math.floor(Math.random() * words.length)] : null
        );
        wordPositions = Array(columns).fill(0);
      }
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        if (columnWords[i] && drops[i] >= wordPositions[i] && drops[i] < wordPositions[i] + columnWords[i].length) {
          const letterIndex = drops[i] - wordPositions[i];
          const letter = columnWords[i][letterIndex];
          ctx.fillStyle = '#43c0dd';
          ctx.font = `bold ${fontSize + 4}px monospace`;
          ctx.shadowColor = '#43c0dd';
          ctx.shadowBlur = 8;
          ctx.fillText(letter, i * fontSize, drops[i] * fontSize);
        } else {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = '#4a4a79';
          ctx.font = `${fontSize}px monospace`;
          ctx.shadowBlur = 0;
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          columnWords[i] = Math.random() < 0.3 ? words[Math.floor(Math.random() * words.length)] : null;
          wordPositions[i] = Math.floor(Math.random() * 10) + 5;
        }
        drops[i]++;
      }
    };

    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, [isHovered]);

  return (
    <div 
      className="matrix-photo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} ${isHovered ? 'matrix-hidden' : ''}`}
      />
      <canvas
        ref={canvasRef}
        className={`matrix-canvas ${isHovered ? 'matrix-visible' : ''}`}
      />
    </div>
  );
};

export default memo(MatrixPhoto);