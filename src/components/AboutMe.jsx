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
              <h3><i className="fas fa-briefcase"></i> Los Inicios</h3>
              <p>
                Trabajé varios años en administración de cuentas, donde aprendí a optimizar procesos, 
                manejar bases de datos y colaborar con equipos técnicos. Esa experiencia me dio contexto 
                de negocio real que hoy aplico cuando diseño sistemas.
              </p>
            </motion.div>

            <motion.div 
              className="story-chapter"
              ref={chapter2Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter2Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h3><i className="fas fa-lightbulb"></i> El Descubrimiento</h3>
              <p>
                Un día ayudé a un ingeniero a optimizar consultas SQL en mi trabajo y entendí que 
                era esto lo que quería hacer. Empecé a estudiar programación mientras seguía trabajando 
                full-time y criando a mis tres hijos.
              </p>
            </motion.div>

            <motion.div 
              className="story-chapter"
              ref={chapter3Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter3Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h3><i className="fas fa-rocket"></i> La Transición</h3>
              <p>
                Terminé la Tecnicatura en Desarrollo de Software con un promedio de 9.35. 
                Desde entonces construí más de 10 proyectos reales, obtuve certificaciones de AWS, 
                Microsoft y Stanford, y participé en equipos de hasta 7 personas.
              </p>
            </motion.div>

            <motion.div 
              className="story-chapter"
              ref={chapter4Ref}
              initial={{ opacity: 0, x: -30 }}
              animate={chapter4Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <h3><i className="fas fa-heart"></i> Hoy</h3>
              <p>
                Estoy desarrollando una plataforma para ONGs con NestJS en el marco del programa 
                Acelerador v2.0 de Polo IT Buenos Aires, y busco mi primera oportunidad full-time 
                como Full Stack o Backend Developer.
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
      </motion.div>
    </section>
  );
};

export default AboutMe;
