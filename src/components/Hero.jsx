import Aurora from './Aurora'
import { motion } from 'framer-motion'
import foto from '../assets/img/foto3.jpeg'

const Hero = () => {
  return (
    <section id="about-me" className="hero-section">
      <Aurora
        colorStops={["#00FFFF", "#0080FF", "#32FF32"]}
        blend={0.7}
        amplitude={1.2}
        speed={0.3}
      />
      <div className="hero-content">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-content">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hola!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Soy <span className="highlight">Daniela Homobono</span>, Full Stack Developer
              especializada en soluciones escalables con React, Node.js y AWS desde
              Río Tercero, Córdoba. Con experiencia comprobada en diseño e implementación
              de aplicaciones digitales, actualmente trabajo como Account Administrator
              en Milkaut, donde he reducido un 25% los tiempos de procesamiento
              administrativo. Certificada por Stanford University y AWS, mi pasión
              es optimizar procesos y crear soluciones innovadoras que impulsen
              los objetivos del negocio.
            </motion.p>
          </div>
          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <img
              src={foto}
              alt="Daniela Homobono"
              className="profile-image"
            />
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
                icon: "fas fa-laptop-code",
                title: "Crear Experiencias Web",
                description: "Diseño y desarrollo sitios web responsivos, modernos y accesibles usando HTML, CSS y JavaScript, transformando ideas en experiencias digitales únicas."
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Conectar a Través de Apps",
                description: "Creo aplicaciones móviles intuitivas con Kotlin y bases de datos como SQLite, llevando soluciones prácticas a la palma de la mano."
              },
              {
                icon: "fas fa-server",
                title: "Potenciar el Backend",
                description: "Construyo APIs robustas y escalables con Python, Flask y Node.js, asegurando que los sistemas funcionen sin problemas detrás de escena."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="mission-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <i className={item.icon} aria-hidden="true"></i>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;