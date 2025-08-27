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
            <h2 className="spectacular-title">
              ¡Hola!
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Soy <span className="highlight" style={{fontSize: '1.4em', fontWeight: 'bold', textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'}}>Daniela Homobono</span>, Full Stack Developer de Río Tercero, Córdoba. Desde que escribí mi primera línea de código, supe que había encontrado mi verdadera pasión. Cada proyecto es una oportunidad para crear algo único que resuelva problemas reales. Me fascina el proceso creativo de transformar ideas en experiencias digitales que impacten positivamente en las personas. La programación no es solo mi profesión, es mi forma de expresión y lo que quiero hacer por el resto de mi vida.
            </motion.p>
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
              <span className="highlight" style={{fontSize: '2.2em', fontWeight: 'bold', display: 'block', marginTop: '1.5rem', letterSpacing: '2px'}}>
                ¡Bienvenidos a mi mundo digital!
              </span>
            </motion.div>
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
                icon: "fas fa-code",
                title: "Desarrollo Full Stack",
                description: "Creo aplicaciones web completas utilizando React, Redux y Node.js en el frontend, e implemento APIs robustas con Express, Flask y bases de datos SQL/NoSQL. Mi enfoque end-to-end garantiza soluciones coherentes y escalables."
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Desarrollo Móvil",
                description: "Diseño y desarrollo aplicaciones móviles nativas con Kotlin y C#, integrando bases de datos SQLite para crear experiencias fluidas y responsivas que funcionan perfectamente en cualquier dispositivo."
              },
              {
                icon: "fas fa-server",
                title: "DevOps y Cloud",
                description: "Implemento y gestiono infraestructura en la nube con AWS, automatizo procesos de CI/CD con GitHub Actions y aplico metodologías ágiles para garantizar despliegues eficientes y seguros."
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