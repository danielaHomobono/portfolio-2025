import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';


const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);
  
  const projects = [
    {
      title: "iPhone 15 Pro Max Website",
      image: "/assets/img/iphone.png",
      description: "Un sitio web moderno e interactivo inspirado en la experiencia oficial de Apple, creado con React, Vite y Three.js. Descubre el iPhone 15 Pro Max en 3D, explora sus características, colores y tecnología de una forma visualmente impactante.",
      link: "https://iphon-ewebsite.vercel.app/",
      github: "https://github.com/danielaHomobono/iPhone-website",
      color: "#8b5cf6",
      techStack: ["React", "React Three Fiber", "Three.js", "GSAP", "Vite", "WebGL", "Framer Motion"],
      personalNote: "Lo que más me emocionó fue lograr que los modelos 3D se vieran exactamente como en la página oficial de Apple. Pasé días ajustando las luces y materiales hasta conseguir ese acabado premium.",
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
      color: "#0891b2",
      techStack: ["React", "TypeScript", "TailwindCSS", "Claude 3 Sonnet", "Puter API", "React Router"],
      personalNote: "Fue increíble ver cómo la IA podía analizar un CV y dar feedback tan preciso. El momento más satisfactorio fue cuando un usuario me dijo que consiguió trabajo gracias a las sugerencias de la app.",
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
      title: "Tata Clothe E-commerce",
      image: "/assets/img/ecommerce1.png",
      description: "Plataforma de e-commerce full-stack para tienda de ropa construida con React, Redux Toolkit y Node.js. Incluye autenticación JWT, carrito de compras, gestión de productos y panel administrativo completo.",
      link: "https://ecommerce-project-tataclothe-ahhya9bk6.vercel.app/",
      github: "https://github.com/danielaHomobono/Ecommerce-project",
      color: "#a855f7",
      techStack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Express", "JWT", "TailwindCSS", "Framer Motion"],
      personalNote: "Mi primer e-commerce completo. Lo más desafiante fue manejar el estado del carrito de compras de forma que fuera intuitivo para el usuario. Me encantó crear las animaciones de los productos.",
      challenges: [
        "Implementación de carrito de compras con estado persistente",
        "Sistema de autenticación y autorización con JWT",
        "Gestión compleja de inventario y productos",
        "Diseño responsive para experiencia móvil óptima"
      ],
      solutions: [
        "Implementé Redux Toolkit para manejo eficiente del estado global",
        "Desarrollé middleware personalizado para autenticación JWT",
        "Creé sistema CRUD completo para gestión de productos",
        "Implementé diseño responsive con TailwindCSS y componentes reutilizables"
      ],
      architecture: "Arquitectura full-stack con frontend React/Redux y backend Node.js/Express. Base de datos MongoDB con Mongoose. Autenticación JWT con cookies seguras.",
      learnings: [
        "Desarrollo de aplicaciones e-commerce completas",
        "Gestión avanzada de estado con Redux Toolkit",
        "Implementación de sistemas de autenticación seguros",
        "Arquitectura escalable para aplicaciones comerciales"
      ],
      performance: {
        "Tiempo de Carga": "1.5s",
        "Productos": "50+",
        "Usuarios Registrados": "25+",
        "Conversión": "8%"
      }
    },
    {
      title: "El Lector Voraz",
      image: "/assets/img/voraz.png",
      description: "Aplicación web full-stack para gestión de librería construida con Node.js, Express y MongoDB. Incluye autenticación con Passport, sistema de sesiones, testing con Jest y comunicación en tiempo real con Socket.io.",
      link: "https://el-lector-voraz.onrender.com",
      github: "https://el-lector-voraz.onrender.com",
      color: "#0284c7",
      techStack: ["Node.js", "Express", "MongoDB", "Passport", "Socket.io", "Jest", "Pug", "Mongoose"],
      personalNote: "Este proyecto me enseñó mucho sobre bases de datos NoSQL. Lo que más me gustó fue crear el sistema de búsqueda avanzada que permite encontrar libros por múltiples criterios.",
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
      color: "#8b5cf6",
      techStack: ["Kotlin", "Android SDK", "SQLite", "Room Database", "Material Design", "MVVM"],
      personalNote: "Mi primera app Android nativa. Me costó mucho entender el patrón MVVM al principio, pero una vez que lo dominé, me enamoré de lo limpio y organizado que quedaba el código.",
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
      color: "#0891b2",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
      personalNote: "Integrar Stripe fue todo un reto. Recuerdo la emoción cuando procesé mi primera transacción de prueba exitosa. Ver que todo el flujo de pagos funcionaba perfectamente fue muy gratificante.",
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
      color: "#a855f7",
      techStack: ["React", "Three.js", "React Three Fiber", "Drei", "Framer Motion", "Vite"],
      personalNote: "Crear un avatar 3D interactivo fue como magia. Lo más difícil fue hacer que las expresiones faciales se vieran naturales. Cuando finalmente logré que 'parpadeara' de forma realista, fue épico.",
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
      title: "Generador de CV",
      image: "/assets/img/generador-cv.png",
      description: "Generador automático de CV con API de GitHub, React y Node.js",
      link: "https://github.com/danielaHomobono/Portfolio-generator",
      github: "https://github.com/danielaHomobono/Portfolio-generator",
      color: "#0284c7",
      techStack: ["React", "Node.js", "GitHub API", "Express", "HTML/CSS", "JavaScript"],
      personalNote: "Este proyecto nació de mi propia necesidad de tener un CV actualizado. Lo más complicado fue manejar los rate limits de GitHub, pero aprendí mucho sobre optimización de APIs.",
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
    }
  ];

  return (
    <>
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
                boxShadow: `0 20px 40px rgba(${project.color === "#8b5cf6" ? "139, 92, 246" : 
                            project.color === "#0891b2" ? "8, 145, 178" : 
                            project.color === "#a855f7" ? "168, 85, 247" : 
                            project.color === "#0284c7" ? "2, 132, 199" : 
                            "67, 192, 221"}, 0.3)`
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
              <p>{project.description.substring(0, 100)}...</p>
              <div className="project-actions">
                <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" 
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}, ${project.color === "#8b5cf6" ? "#a855f7" : 
                                                                            project.color === "#0891b2" ? "#0284c7" : 
                                                                            project.color === "#a855f7" ? "#8b5cf6" : 
                                                                            project.color === "#0284c7" ? "#0891b2" : 
                                                                            "#0891b2"})`
                  }}
                >
                  <i className="fas fa-external-link-alt"></i> Ver Proyecto
                </a>
                <button 
                  onClick={() => {
                    console.log('Click en más detalles:', project.title);
                    setSelectedProject(project);
                  }}
                  className="details-btn"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color === "#8b5cf6" ? "#a855f7" : 
                                                                            project.color === "#0891b2" ? "#0284c7" : 
                                                                            project.color === "#a855f7" ? "#8b5cf6" : 
                                                                            project.color === "#0284c7" ? "#0891b2" : 
                                                                            "#0891b2"}, ${project.color})`
                  }}
                >
                  <i className="fas fa-info-circle"></i> Más Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {selectedProject && (
        <div style={{
          position: 'absolute',
          top: window.scrollY + 'px',
          left: '0',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: '9999999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          WebkitOverflowScrolling: 'touch'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.95))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '20px',
            padding: window.innerWidth <= 768 ? '20px' : '35px',
            maxWidth: '650px',
            width: '100%',
            maxHeight: '85vh',
            overflow: 'auto',
            position: 'relative',
            WebkitOverflowScrolling: 'touch',
            transform: 'translateZ(0)',
            boxShadow: '0 25px 50px rgba(168, 85, 247, 0.15)'
          }}>
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                fontSize: '18px',
                cursor: 'pointer',
                color: '#8b5cf6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(168, 85, 247, 0.2)';
                e.target.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(168, 85, 247, 0.1)';
                e.target.style.transform = 'rotate(0deg)';
              }}
            >×</button>
            <h2 style={{ color: selectedProject.color, marginBottom: '25px', fontSize: '28px', fontWeight: '700' }}>{selectedProject.title}</h2>
            <p style={{ color: '#475569', marginBottom: '25px', fontSize: '16px', lineHeight: '1.6' }}>{selectedProject.description}</p>
            
            {selectedProject.personalNote && (
              <div style={{ marginBottom: '25px', padding: '20px', background: `linear-gradient(135deg, ${selectedProject.color}15, ${selectedProject.color}08)`, borderRadius: '12px', borderLeft: `4px solid ${selectedProject.color}` }}>
                <p style={{ color: '#64748b', fontSize: '15px', fontStyle: 'italic', margin: '0', lineHeight: '1.6' }}>
                  "{selectedProject.personalNote}"
                </p>
              </div>
            )}
            
            {selectedProject.techStack && (
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#374151', marginBottom: '12px', fontSize: '17px', fontWeight: '600' }}>Tecnologías principales:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} style={{
                      background: `linear-gradient(135deg, ${selectedProject.color}20, ${selectedProject.color}10)`,
                      color: selectedProject.color,
                      border: `1px solid ${selectedProject.color}30`,
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
            
            <a 
              href={selectedProject.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}dd)`,
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '25px',
                fontSize: '15px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 15px ${selectedProject.color}40`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = `0 8px 25px ${selectedProject.color}60`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 4px 15px ${selectedProject.color}40`;
              }}
            >
              <i className="fab fa-github"></i> Ver en GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;