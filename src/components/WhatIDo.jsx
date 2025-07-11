import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhatIDo = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  }

  return (
    <div id="what-i-do" className="what-i-do-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
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
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <i className={item.icon} aria-hidden="true"></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;