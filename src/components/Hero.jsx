import Aurora from './Aurora'
import { motion } from 'framer-motion'
import foto from '../assets/img/foto3.jpeg'
import LazyImage from './LazyImage'
import MatrixPhoto from './MatrixPhoto'
import { useGSAP } from '../hooks/useGSAP'
import { useDeviceDetection } from '../hooks/useDeviceDetection'

const Hero = () => {
  const containerRef = useGSAP()
  const { isLowEnd } = useDeviceDetection()
  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  return (
    <section id="about-me" className="hero-section" ref={containerRef}>
      {!isLowEnd && (
        <Aurora
          colorStops={["#0891b2", "#43c0dd", "#a855f7"]}
          blend={1.1}
          amplitude={2.2}
          speed={0.45}
        />
      )}
      <div className="hero-content">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-content parallax-slow">
            <h2 className="spectacular-title">
              Daniela Homobono
            </h2>
            <motion.div
              className="hero-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <p className="intro-main">
                Full Stack Developer | Backend · Node.js · NestJS · Python · AWS
              </p>
              
              <motion.p
                className="intro-summary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                Desarrollo APIs, sistemas backend y aplicaciones web que resuelven problemas reales. Especializada en arquitecturas con IA integrada y cloud.
              </motion.p>
            </motion.div>
            <motion.div
              className="welcome-text"
              initial={{ opacity: 0, scale: 0.5, y: 50, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: 2.5, 
                duration: 1.5, 
                ease: "backOut",
                type: "spring",
                bounce: 0.4
              }}
            >
              <span className="highlight welcome-title">
                ¡BIENVENIDOS A MI MUNDO DIGITAL!
              </span>
            </motion.div>
            
            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
            >
              <a href="#projects" className="cta-primary" onClick={(e) => handleSmoothScroll(e, '#projects')}>
                Ver Proyectos
              </a>
              <a href="#contact" className="cta-secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                Contactar
              </a>
              <a 
                href="/assets/CV-DanielaHomobono-2026.pdf" 
                download="CV-DanielaHomobono-2026.pdf"
                className="cta-download"
                title="Descargar CV"
              >
                Descargar CV
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="profile-image-container parallax-fast"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <MatrixPhoto
              src={foto}
              alt="Daniela Homobono"
              className="profile-image"
            />
            <motion.div 
              className="hover-hint"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <span className="hover-text">
                <span className="desktop-text">Hover the picture</span>
                <span className="mobile-text">Click the picture</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          id="what-i-do" 
          className="what-i-do-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            ¿Qué Hago?
          </motion.h2>
          <div className="missions-grid">
            {[
              {
                icon: "fas fa-code",
                title: "Backend Development",
                description: "Diseño y desarrollo APIs REST escalables con Node.js, NestJS y Python (FastAPI). Autenticación JWT, OAuth 2.0, RBAC, arquitectura modular y procesamiento asíncrono."
              },
              {
                icon: "fas fa-mobile-alt",
                title: "IA & Cloud",
                description: "Integro modelos de lenguaje (Azure OpenAI, Claude API, Llama) en aplicaciones reales. Certificada en AWS (re/Start Graduate, Cloud Architecting) y Azure OpenAI."
              },
              {
                icon: "fas fa-server",
                title: "Full Stack",
                description: "Desarrollo aplicaciones completas con React, Next.js y TypeScript en el frontend, integradas con backends robustos y bases de datos relacionales y NoSQL."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="mission-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: "0 5px 15px rgba(168, 85, 247, 0.6)",
                  transition: { duration: 0.1 }
                }}
              >
                <div className="card-content">
                  <i className={item.icon} aria-hidden="true"></i>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="card-hover-info">
                  <div className="tech-stack">
                    <h4>Stack:</h4>
                    <div className="tech-tags">
                      {i === 0 && ["Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"].map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                      {i === 1 && ["Azure OpenAI", "Claude API", "AWS", "Docker", "CI/CD"].map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                      {i === 2 && ["React", "Next.js", "TypeScript", "TailwindCSS", "Supabase"].map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="stat">
                      <span className="stat-value">{["Backend", "IA Aplicada", "Full Stack"][i]}</span>
                      <span className="stat-label">Enfoque</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{["REST APIs", "Cloud AWS", "React & Next.js"][i]}</span>
                      <span className="stat-label">Especialidad</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;