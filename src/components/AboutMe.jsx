import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutMe = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [stat1Ref, stat1Visible] = useIntersectionObserver({ threshold: 0.5 });
  const [stat2Ref, stat2Visible] = useIntersectionObserver({ threshold: 0.5 });
  const [stat3Ref, stat3Visible] = useIntersectionObserver({ threshold: 0.5 });
  const [stat4Ref, stat4Visible] = useIntersectionObserver({ threshold: 0.5 });
  const [chapter1Ref, chapter1Visible] = useIntersectionObserver({ threshold: 0.4 });
  const [chapter2Ref, chapter2Visible] = useIntersectionObserver({ threshold: 0.4 });
  const [chapter3Ref, chapter3Visible] = useIntersectionObserver({ threshold: 0.4 });
  const [chapter4Ref, chapter4Visible] = useIntersectionObserver({ threshold: 0.4 });

  return (
    <section id="about-story" className="about-story-section" ref={ref}>
      <motion.div
        className="about-story-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Mi Historia: De Administración a Desarrollo
        </motion.h2>

        <div className="story-content">
          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="story-chapter"
              ref={chapter1Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter1Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3><i className="fas fa-briefcase"></i> Los Inicios: Mundo Administrativo</h3>
              <p>
                Mi carrera comenzó en el mundo administrativo, donde desarrollé habilidades fundamentales 
                que hoy son mi fortaleza: <strong>organización meticulosa</strong>, <strong>atención al detalle</strong> 
                y <strong>comprensión profunda de procesos empresariales</strong>. Esta experiencia me enseñó 
                a ver los sistemas desde la perspectiva del usuario final y entender las necesidades reales del negocio.
              </p>
            </motion.div>

            <motion.div 
              className="story-chapter"
              ref={chapter2Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter2Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h3><i className="fas fa-lightbulb"></i> El Momento de Revelación</h3>
              <p>
                Todo cambió cuando escribí mi primera línea de código. Fue como encontrar el lenguaje 
                que siempre había estado buscando para expresar mi creatividad y resolver problemas complejos. 
                La programación no era solo una herramienta, era mi <strong>forma de pensar</strong> y 
                <strong>crear soluciones elegantes</strong> a desafíos reales.
              </p>
            </motion.div>

            <motion.div 
              className="story-chapter"
              ref={chapter3Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter3Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h3><i className="fas fa-rocket"></i> La Transición: Aprendizaje Intensivo</h3>
              <p>
                Decidí hacer la transición completa al desarrollo, combinando mi experiencia administrativa 
                con nuevas habilidades técnicas. Esta combinación única me permite crear aplicaciones que 
                no solo funcionan técnicamente, sino que realmente <strong>resuelven problemas empresariales</strong> 
                y mejoran la experiencia del usuario.
              </p>
            </motion.div>

            <motion.div 
              className="story-chapter"
              ref={chapter4Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter4Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <h3><i className="fas fa-heart"></i> Mi Pasión Actual</h3>
              <p>
                Hoy, cada proyecto es una oportunidad para crear algo único que impacte positivamente 
                en las personas. La programación no es solo mi profesión, es mi <strong>forma de expresión</strong> 
                y lo que quiero hacer por el resto de mi vida. Mi objetivo es seguir creciendo, 
                aprendiendo nuevas tecnologías y contribuyendo a proyectos que marquen la diferencia.
              </p>
            </motion.div>
          </motion.div>

          <div className="story-stats" ref={statsRef}>
            <motion.div
              className="stat-card"
              ref={stat1Ref}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={stat1Visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">3+</span>
                <span className="stat-label">Años Programando</span>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              ref={stat2Ref}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={stat2Visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="stat-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">45+</span>
                <span className="stat-label">Repositorios GitHub</span>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              ref={stat3Ref}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={stat3Visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="stat-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tecnologías Dominadas</span>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              ref={stat4Ref}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={stat4Visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="stat-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">∞</span>
                <span className="stat-label">Ganas de Aprender</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="future-vision"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3><i className="fas fa-telescope"></i> Visión de Futuro</h3>
          <p>
            Aspiro a ser parte de equipos que desarrollen tecnologías que transformen industrias. 
            Mi combinación única de experiencia administrativa y habilidades técnicas me permite 
            aportar una perspectiva integral a cualquier proyecto. Busco oportunidades donde pueda 
            seguir creciendo, enfrentar nuevos desafíos y contribuir a crear el futuro digital.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;