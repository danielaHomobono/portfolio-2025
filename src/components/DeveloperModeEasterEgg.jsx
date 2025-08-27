import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperModeEasterEgg = ({ isActive, onDeactivate, profileImage }) => {
  const canvasRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [codeLines] = useState([
    'const developer = new Daniela();',
    'function createAwesomeProjects() {',
    '  return magic.code();',
    '}',
    'React.render(<Portfolio />);',
    'console.log("Hello World!");',
    'npm install awesome-skills',
    'git commit -m "Another epic feature"',
    'const skills = ["React", "Node", "MongoDB"];',
    'while(coding) { keepLearning(); }',
    'export default DanielaHomobono;',
    'async function buildFuture() {',
    '  await dream.code.repeat();',
    '}',
    'import { passion } from "./developer";'
  ]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flyingCode = [];
    
    const createCodeLine = () => {
      return {
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        x: -200,
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 3,
        opacity: 0.8 + Math.random() * 0.2,
        size: 12 + Math.random() * 8
      };
    };

    for (let i = 0; i < 15; i++) {
      flyingCode.push(createCodeLine());
    }

    setTimeout(() => setShowMessage(true), 800);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      flyingCode.forEach((line, index) => {
        ctx.font = `${line.size}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(0, 255, 255, ${line.opacity})`;
        ctx.fillText(line.text, line.x, line.y);
        
        line.x += line.speed;
        
        if (line.x > canvas.width + 200) {
          flyingCode[index] = createCodeLine();
        }
      });
      
      if (isActive) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      setShowMessage(false);
    };
  }, [isActive, codeLines]);

  if (!isActive) return null;

  return (
    <motion.div 
      className="developer-mode-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onClick={onDeactivate}
    >
      <canvas 
        ref={canvasRef}
        className="flying-code-canvas"
      />
      
      <motion.div
        className="pixelated-avatar"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        <img 
          src={profileImage} 
          alt="Pixelated Daniela" 
          className="pixel-image"
        />
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="developer-message"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <div className="dev-icon">👩‍💻</div>
            <h1>MODO DESARROLLADORA ACTIVADO</h1>
            <div className="code-quote">
              "Code is poetry in motion"
            </div>
            <div className="developer-stats">
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Lines of Code</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Coding Mode</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
            <div className="exit-hint">
              [Click anywhere to exit developer mode]
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DeveloperModeEasterEgg;