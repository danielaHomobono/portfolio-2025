import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const projects = [
    {
      title: "iPhone 15 Pro Max Website",
      image: "/assets/img/iphone.png",
      description: "Un sitio web moderno e interactivo inspirado en la experiencia oficial de Apple, creado con React, Vite y Three.js. Descubre el iPhone 15 Pro Max en 3D, explora sus características, colores y tecnología de una forma visualmente impactante.",
      link: "https://iphon-ewebsite.vercel.app/",
      github: "https://github.com/danielaHomobono/iPhone-website",
      color: "#00FFFF",
      techStack: ["React", "Three.js", "GSAP", "Vite", "WebGL", "Framer Motion"],
      challenges: [
        "Optimización de modelos 3D para web sin comprometer calidad visual",
        "Implementación de animaciones fluidas con GSAP y Three.js sincronizadas",
        "Gestión eficiente de memoria para múltiples modelos 3D",
        "Responsive design para experiencias 3D en dispositivos móviles"
      ],
      solutions: [
        "Implementé lazy loading y LOD (Level of Detail) para modelos 3D",
        "Creé un sistema de animaciones secuenciales con timeline de GSAP",
        "Desarrollé un sistema de caché inteligente para texturas y geometrías",
        "Implementé fallbacks 2D para dispositivos de baja potencia"
      ],
      architecture: "Arquitectura modular con componentes React especializados para cada sección 3D. Sistema de estado global para controlar animaciones y transiciones. Pipeline de optimización automática para assets 3D.",
      learnings: [
        "Dominio avanzado de Three.js y WebGL para experiencias inmersivas",
        "Técnicas de optimización para aplicaciones 3D en web",
        "Integración compleja entre librerías de animación (GSAP + Three.js)",
        "Estrategias de fallback para garantizar accesibilidad universal"
      ],
      performance: {
        "Lighthouse Score": "92/100",
        "First Paint": "1.2s",
        "3D Load Time": "2.8s",
        "FPS Promedio": "60fps"
      }
    },
    {
      title: "AI Resume Analyzer",
      image: "/assets/img/ai-resume.png",
      description: "Aplicación web full-stack construida con React, React Router, TypeScript y TailwindCSS. Permite a los usuarios subir su currículum, analizarlo con inteligencia artificial (Claude 3 Sonnet vía Puter), obtener feedback personalizado y visualizar resultados de manera interactiva.",
      link: "https://puter.com/app/jsm-ai-resume-analizer",
      github: "https://github.com/danielaHomobono/ai-resume-analyzer",
      color: "#32FF32",
      techStack: ["React", "TypeScript", "TailwindCSS", "Claude 3 Sonnet", "Puter API", "React Router"],
      challenges: [
        "Integración con API de IA externa (Claude 3) manteniendo seguridad",
        "Procesamiento y análisis de documentos PDF en tiempo real",
        "Diseño de interfaz intuitiva para feedback complejo de IA",
        "Manejo de estados complejos durante el análisis asíncrono"
      ],
      solutions: [
        "Implementé autenticación segura y rate limiting para API calls",
        "Desarrollé parser personalizado para extraer texto estructurado de PDFs",
        "Creé componentes de visualización interactivos para resultados de IA",
        "Implementé máquina de estados con React Query para gestión asíncrona"
      ],
      architecture: "Arquitectura de microservicios con frontend React y backend serverless. Sistema de colas para procesamiento de documentos. Cache inteligente para optimizar llamadas a IA.",
      learnings: [
        "Integración avanzada con APIs de inteligencia artificial",
        "Técnicas de procesamiento de documentos en el navegador",
        "Diseño UX para aplicaciones con IA conversacional",
        "Optimización de costos en servicios de IA externos"
      ],
      performance: {
        "Tiempo de Análisis": "15-30s",
        "Precisión IA": "94%",
        "Uptime": "99.8%",
        "Usuarios Activos": "500+"
      }
    },
    {
      title: "Generador de CV",
      image: "/assets/img/generador-cv.png",
      description: "Generador automático de CV con API de GitHub, React y Node.js",
      link: "https://github.com/danielaHomobono/Portfolio-generator",
      github: "https://github.com/danielaHomobono/Portfolio-generator",
      color: "#0080FF",
      techStack: ["React", "Node.js", "GitHub API", "Express", "HTML/CSS", "JavaScript"],
      challenges: [
        "Integración compleja con múltiples endpoints de GitHub API",
        "Generación dinámica de layouts de CV responsivos",
        "Manejo de rate limits y autenticación con GitHub",
        "Optimización de rendimiento para múltiples llamadas API"
      ],
      solutions: [
        "Implementé sistema de caché inteligente para datos de GitHub",
        "Desarrollé templates modulares con CSS Grid y Flexbox",
        "Creé middleware personalizado para gestión de tokens OAuth",
        "Implementé batching de requests y lazy loading de repositorios"
      ],
      architecture: "API REST con Express.js que consume GitHub API. Frontend React con sistema de templates dinámicos. Base de datos en memoria para caché temporal.",
      learnings: [
        "Integración avanzada con APIs externas y OAuth",
        "Generación dinámica de contenido HTML/CSS",
        "Estrategias de optimización para APIs con rate limits",
        "Arquitectura de microservicios para herramientas de productividad"
      ]
    },
    {
      title: "El Lector Voraz",
      image: "/assets/img/voraz.png",
      description: "Aplicación para librería creada con Node.js y MongoDB",
      link: "https://el-lector-voraz.onrender.com",
      github: "https://el-lector-voraz.onrender.com",
      color: "#00FFFF",
      techStack: ["Node.js", "MongoDB", "Express", "EJS", "Mongoose", "Bootstrap"],
      challenges: [
        "Diseño de base de datos NoSQL para inventario complejo de libros",
        "Sistema de búsqueda avanzada con múltiples filtros",
        "Gestión de sesiones y autenticación de usuarios",
        "Optimización de consultas MongoDB para grandes volúmenes"
      ],
      solutions: [
        "Implementé esquemas Mongoose con índices optimizados",
        "Desarrollé sistema de búsqueda con agregation pipeline",
        "Creé middleware de autenticación con JWT y sessions",
        "Implementé paginación y lazy loading para mejorar rendimiento"
      ],
      architecture: "Aplicación MVC con Express.js y MongoDB. Sistema de templates EJS para renderizado server-side. Middleware personalizado para autenticación y logging.",
      learnings: [
        "Diseño de esquemas NoSQL para aplicaciones comerciales",
        "Implementación de sistemas de búsqueda complejos",
        "Arquitectura MVC en aplicaciones Node.js",
        "Optimización de rendimiento en bases de datos MongoDB"
      ],
      performance: {
        "Tiempo de Búsqueda": "<200ms",
        "Libros en BD": "1000+",
        "Usuarios Registrados": "50+",
        "Uptime": "99.5%"
      }
    },
    {
      title: "Queen of the Court",
      image: "/assets/img/kapp.png",
      description: "App de gestión de club de tenis con Kotlin y SQLite",
      link: "https://github.com/danielaHomobono/AndroidClubDeportivo",
      github: "https://github.com/danielaHomobono/AndroidClubDeportivo",
      color: "#32FF32",
      techStack: ["Kotlin", "Android SDK", "SQLite", "Room Database", "Material Design", "MVVM"],
      challenges: [
        "Implementación de arquitectura MVVM en Android nativo",
        "Diseño de base de datos SQLite para gestión compleja de socios",
        "Desarrollo de UI responsiva siguiendo Material Design",
        "Gestión de estados y navegación entre múltiples Activities"
      ],
      solutions: [
        "Implementé patrón MVVM con LiveData y ViewModel",
        "Desarrollé esquema de BD normalizado con Room ORM",
        "Creé componentes UI reutilizables con Material Components",
        "Implementé Navigation Component para flujo de pantallas"
      ],
      architecture: "Arquitectura MVVM con Repository pattern. Base de datos SQLite con Room ORM. Inyección de dependencias manual para ViewModels.",
      learnings: [
        "Desarrollo nativo Android con Kotlin",
        "Implementación de patrones arquitectónicos móviles",
        "Diseño de bases de datos relacionales en SQLite",
        "Principios de Material Design y UX móvil"
      ]
    },
    {
      title: "EventPass",
      image: "/assets/img/eventpass.png",
      description: "Sitio de venta de entradas creado con React, Node y MongoDB",
      link: "https://eventpass.vercel.app/",
      github: "https://github.com/danielaHomobono/eventpass",
      color: "#0080FF",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
      challenges: [
        "Integración segura con pasarela de pagos (Stripe)",
        "Sistema de reservas en tiempo real con control de stock",
        "Autenticación y autorización de usuarios multi-rol",
        "Manejo de transacciones atómicas en MongoDB"
      ],
      solutions: [
        "Implementé webhooks de Stripe para confirmación de pagos",
        "Desarrollé sistema de locks optimistas para control de inventario",
        "Creé middleware JWT con refresh tokens y roles",
        "Implementé transacciones MongoDB con sessions"
      ],
      architecture: "API REST con Express.js y MongoDB. Frontend React con Context API. Sistema de pagos con Stripe. Autenticación JWT con refresh tokens.",
      learnings: [
        "Integración con pasarelas de pago y webhooks",
        "Manejo de transacciones en aplicaciones de e-commerce",
        "Sistemas de autenticación y autorización complejos",
        "Arquitectura de aplicaciones de venta online"
      ],
      performance: {
        "Tiempo de Carga": "1.8s",
        "Transacciones": "100+",
        "Eventos Activos": "25+",
        "Conversión": "12%"
      }
    },
    {
      title: "Avatar con React Three Fiber",
      image: "/assets/img/porfolio.png",
      description: "Sitio creado con React y React Three Fiber",
      link: "https://r3f-vite-portfolio.vercel.app/",
      github: "https://github.com/danielaHomobono/r3f-portfolio",
      color: "#00FFFF",
      techStack: ["React", "Three.js", "React Three Fiber", "Drei", "Framer Motion", "Vite"],
      challenges: [
        "Creación de avatar 3D interactivo y realista",
        "Optimización de rendimiento para modelos 3D complejos",
        "Implementación de física y animaciones fluidas",
        "Integración de controles de cámara intuitivos"
      ],
      solutions: [
        "Implementé sistema de morphing facial con blend shapes",
        "Desarrollé LOD system y frustum culling personalizado",
        "Creé sistema de animaciones con state machines",
        "Implementé controles orbitales con límites suaves"
      ],
      architecture: "Aplicación React con React Three Fiber para renderizado 3D. Sistema de componentes 3D modulares. Pipeline de optimización automática para assets.",
      learnings: [
        "Desarrollo avanzado con React Three Fiber",
        "Técnicas de optimización para gráficos 3D en web",
        "Implementación de sistemas de animación complejos",
        "Integración de física en aplicaciones 3D"
      ],
      performance: {
        "FPS Promedio": "60fps",
        "Tiempo de Carga": "3.2s",
        "Polígonos": "50K+",
        "Texturas": "4K"
      }
    },
    {
      title: "Calculadora de Probabilidad",
      image: "/assets/img/probabilidad.png",
      description: "Herramienta de cálculo estadístico desarrollada con Python",
      link: "https://github.com/danielaHomobono/Simulacion3.git",
      github: "https://github.com/danielaHomobono/Simulacion3.git",
      color: "#0080FF",
      techStack: ["Python", "NumPy", "Matplotlib", "SciPy", "Tkinter", "Pandas"],
      challenges: [
        "Implementación de algoritmos estadísticos complejos",
        "Visualización interactiva de distribuciones de probabilidad",
        "Optimización de cálculos para grandes datasets",
        "Diseño de interfaz intuitiva para herramienta científica"
      ],
      solutions: [
        "Implementé algoritmos optimizados con NumPy vectorizado",
        "Desarrollé gráficos dinámicos con Matplotlib",
        "Creé sistema de caché para cálculos repetitivos",
        "Implementé GUI responsiva con Tkinter personalizado"
      ],
      architecture: "Aplicación desktop Python con arquitectura modular. Módulos especializados para cada tipo de distribución. Sistema de plugins para nuevas funcionalidades.",
      learnings: [
        "Desarrollo de aplicaciones científicas con Python",
        "Implementación de algoritmos estadísticos avanzados",
        "Visualización de datos con Matplotlib",
        "Optimización de rendimiento en cálculos numéricos"
      ]
    }
  ];

  return (
    <section id="projects" ref={ref}>
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
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: isVisible ? 0.1 * index : 0, duration: 0.6 }}
            whileHover={{ 
              y: -15,
              boxShadow: `0 20px 40px rgba(${project.color === "#00FFFF" ? "0, 255, 255" : 
                          project.color === "#32FF32" ? "50, 255, 50" : 
                          "0, 128, 255"}, 0.3)`
            }}
          >
            <div className="project-image-container" style={{ borderColor: project.color }}>
              <img 
                src={project.image} 
                alt={`Captura de pantalla del proyecto ${project.title} - ${project.description.substring(0, 100)}...`}
                loading="lazy"
              />
            </div>
            <h3 style={{ color: project.color }}>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-actions">
              <a href={project.link} target="_blank" rel="noopener noreferrer" 
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}, ${project.color === "#00FFFF" ? "#0080FF" : 
                                                                          project.color === "#32FF32" ? "#00FFFF" : 
                                                                          "#32FF32"})`
                }}
              >
                <i className="fas fa-external-link-alt"></i> Ver Proyecto
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      

    </section>
  );
};

export default Projects;