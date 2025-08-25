import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "iPhone 15 Pro Max Website",
      image: "/assets/img/iphone.png",
      description: "Un sitio web moderno e interactivo inspirado en la experiencia oficial de Apple, creado con React, Vite y Three.js. Descubre el iPhone 15 Pro Max en 3D, explora sus características, colores y tecnología de una forma visualmente impactante.",
      link: "https://iphon-ewebsite.vercel.app/",
      color: "#00FFFF"
    },
    {
      title: "AI Resume Analyzer",
      image: "/assets/img/ai-resume.png",
      description: "Aplicación web full-stack construida con React, React Router, TypeScript y TailwindCSS. Permite a los usuarios subir su currículum, analizarlo con inteligencia artificial (Claude 3 Sonnet vía Puter), obtener feedback personalizado y visualizar resultados de manera interactiva.",
      link: "https://puter.com/app/jsm-ai-resume-analizer",
      color: "#32FF32"
    },
    {
      title: "Generador de CV",
      image: "/assets/img/generador-cv.png",
      description: "Generador automático de CV con API de GitHub, React y Node.js",
      link: "https://github.com/danielaHomobono/Portfolio-generator",
      color: "#0080FF"
    },
    {
      title: "El Lector Voraz",
      image: "/assets/img/voraz.png",
      description: "Aplicación gastronómica creada con Node.js y MongoDB",
      link: "https://el-lector-voraz.onrender.com",
      color: "#00FFFF"
    },
    {
      title: "Queen of the Court",
      image: "/assets/img/kapp.png",
      description: "App de gestión de club de tenis con Kotlin y SQLite",
      link: "https://github.com/danielaHomobono/AndroidClubDeportivo",
      color: "#32FF32"
    },
    {
      title: "EventPass",
      image: "/assets/img/eventpass.png",
      description: "Sitio de venta de entradas creado con React, Node y MongoDB",
      link: "https://eventpass.vercel.app/",
      color: "#0080FF"
    },
    {
      title: "Avatar con React Three Fiber",
      image: "/assets/img/porfolio.png",
      description: "Sitio creado con React y React Three Fiber",
      link: "https://r3f-vite-portfolio.vercel.app/",
      color: "#00FFFF"
    },
    {
      title: "Calculadora de Probabilidad",
      image: "/assets/img/probabilidad.png",
      description: "Herramienta de cálculo estadístico desarrollada con Python",
      link: "https://github.com/danielaHomobono/Simulacion3.git",
      color: "#0080FF"
    }
  ];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Proyectos Destacados
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            whileHover={{ 
              y: -15,
              boxShadow: `0 20px 40px rgba(${project.color === "#00FFFF" ? "0, 255, 255" : 
                          project.color === "#32FF32" ? "50, 255, 50" : 
                          "0, 128, 255"}, 0.3)`
            }}
          >
            <div className="project-image-container" style={{ borderColor: project.color }}>
              <img src={project.image} alt={project.title} />
            </div>
            <h3 style={{ color: project.color }}>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" 
              style={{ 
                background: `linear-gradient(135deg, ${project.color}, ${project.color === "#00FFFF" ? "#0080FF" : 
                                                                        project.color === "#32FF32" ? "#00FFFF" : 
                                                                        "#32FF32"})`
              }}
            >
              Ver más
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;