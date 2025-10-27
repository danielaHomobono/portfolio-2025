import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import OptimizedImage from './OptimizedImage';
import '../styles/optimized-image.css';
import '../styles/project-images.css';
import '../styles/image-enhancements.css';
import '../styles/specific-image-fixes.css';

const Projects = ({ onOpenModal }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const { isMobile } = useDeviceDetection();
  
  const projects = [
    {
      title: "iPhone 15 Pro Max Website",
      image: "/assets/img/iphone.png",
      shortDescription: "Recreación interactiva del sitio oficial de Apple con experiencias 3D inmersivas usando React y Three.js.",
      description: "Un sitio web moderno e interactivo inspirado en la experiencia oficial de Apple, creado con React, Vite y Three.js. Descubre el iPhone 15 Pro Max en 3D, explora sus características, colores y tecnología de una forma visualmente impactante.",
      link: "https://iphon-ewebsite.vercel.app/",
      github: "https://github.com/danielaHomobono/iPhone-website",
      liveUrl: "https://iphon-ewebsite.vercel.app/",
      githubUrl: "https://github.com/danielaHomobono/iPhone-website",
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
      shortDescription: "Analizador inteligente de currículums con IA que proporciona feedback personalizado y métricas detalladas.",
      description: "Aplicación web full-stack construida con React, React Router, TypeScript y TailwindCSS. Permite a los usuarios subir su currículum, analizarlo con inteligencia artificial (Claude 3 Sonnet vía Puter), obtener feedback personalizado y visualizar resultados de manera interactiva.",
      link: "https://puter.com/app/jsm-ai-resume-analizer",
      github: "https://github.com/danielaHomobono/ai-resume-analyzer",
      liveUrl: "https://puter.com/app/jsm-ai-resume-analizer",
      githubUrl: "https://github.com/danielaHomobono/ai-resume-analyzer",
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
      title: "Tata Clothe",
      image: "/assets/img/ecommerce.png",
      shortDescription: "E-commerce completo de ropa con carrito, pagos y gestión de inventario",
      description: "Tienda online de ropa desarrollada con React y Node.js",
  link: "https://ecommerce-project-tataclothe-ahhya9bk6.vercel.app/",
  github: "https://github.com/danielaHomobono/Ecommerce-project",
  githubUrl: "https://github.com/danielaHomobono/Ecommerce-project",
      color: "#32CD32",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Cloudinary"],
      challenges: [
        "Implementación de sistema de carrito de compras persistente",
        "Gestión de inventario en tiempo real con stock tracking",
        "Integración segura con pasarela de pagos Stripe",
        "Sistema de autenticación y roles (cliente/admin)"
      ],
      solutions: [
        "Desarrollé carrito persistente con localStorage y sincronización",
        "Implementé sistema de reservas temporales para control de stock",
        "Creé webhooks seguros para confirmación de pagos",
        "Implementé JWT con refresh tokens y middleware de autorización"
      ],
      architecture: "Aplicación full-stack con API REST. Frontend React con Context API para estado global. Backend Express con MongoDB. Integración con Stripe y Cloudinary para imágenes.",
      learnings: [
        "Arquitectura completa de e-commerce con múltiples servicios",
        "Manejo de transacciones y consistencia de datos",
        "Integración con servicios de terceros (pagos, storage)",
        "Optimización de rendimiento para catálogos grandes"
      ],
      performance: {
        "Productos": "500+",
        "Tiempo Carga": "1.4s",
        "Conversión": "8.5%",
        "Uptime": "99.8%"
      }
    },
    {
      title: "El Lector Voraz",
      image: "/assets/img/voraz.png",
      shortDescription: "Sistema completo de gestión para librería con inventario y ventas",
      description: "Aplicación para librería creada con Node.js y MongoDB",
      link: "https://el-lector-voraz.onrender.com",
      github: "https://el-lector-voraz.onrender.com",
      liveUrl: "https://el-lector-voraz.onrender.com",
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
      shortDescription: "App Android nativa para gestión completa de clubes de tenis con arquitectura MVVM y Material Design.",
      description: "App de gestión de club de tenis con Kotlin y SQLite",
      link: "https://github.com/danielaHomobono/AndroidClubDeportivo",
      github: "https://github.com/danielaHomobono/AndroidClubDeportivo",
      githubUrl: "https://github.com/danielaHomobono/AndroidClubDeportivo",
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
      shortDescription: "Plataforma de venta de entradas con pagos seguros y gestión de eventos",
      description: "Sitio de venta de entradas creado con React, Node y MongoDB",
      link: "https://eventpass.vercel.app/",
      github: "https://github.com/danielaHomobono/eventpass",
      liveUrl: "https://eventpass.vercel.app/",
      githubUrl: "https://github.com/danielaHomobono/eventpass",
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
      image: "/assets/img/porfolio2.png",
      shortDescription: "Portfolio interactivo 3D con avatar personalizado y física avanzada",
      description: "Sitio creado con React y React Three Fiber",
      link: "https://r3f-vite-portfolio.vercel.app/",
      github: "https://github.com/danielaHomobono/r3f-portfolio",
      liveUrl: "https://r3f-vite-portfolio.vercel.app/",
      githubUrl: "https://github.com/danielaHomobono/r3f-portfolio",
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
      title: "Generador de CV",
      image: "/assets/img/generador-cv.png",
      shortDescription: "Generador automático de currículums profesionales integrando datos de GitHub con templates personalizables.",
      description: "Generador automático de CV con API de GitHub, React y Node.js",
      link: "https://github.com/danielaHomobono/Portfolio-generator",
      github: "https://github.com/danielaHomobono/Portfolio-generator",
      githubUrl: "https://github.com/danielaHomobono/Portfolio-generator",
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
      ],
      performance: {
        "Repositorios": "100+",
        "Tiempo Gen": "3.2s",
        "Templates": "5+",
        "API Calls": "15+"
      }
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
      
  <div className={`projects-grid ${isMobile ? 'mobile' : 'desktop'}`}> 
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card enhanced-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: isVisible ? 0.1 * index : 0, duration: 0.6 }}
            whileHover={{ 
              y: -20,
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              boxShadow: `0 30px 60px rgba(${project.color === "#00FFFF" ? "0, 255, 255" : 
                          project.color === "#32FF32" ? "50, 255, 50" : 
                          project.color === "#32CD32" ? "50, 205, 50" :
                          "0, 128, 255"}, 0.4)`
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(26, 26, 62, 0.9), rgba(45, 27, 105, 0.8))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '25px',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Animated border gradient - desktop only */}
            <div 
              className="animated-border desktop-only"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '20px',
                padding: '2px',
                background: `conic-gradient(from 0deg, ${project.color}, transparent, ${project.color})`,
                animation: 'rotate 8s linear infinite',
                zIndex: -1,
                contain: 'layout style paint',
                willChange: 'transform'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(26, 26, 62, 0.95), rgba(45, 27, 105, 0.9))'
              }} />
            </div>
            
            {/* Shimmer effect - desktop only */}
            <div 
              className="shimmer-effect desktop-only"
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent)`,
                animation: 'shimmer 8s ease-in-out infinite',
                zIndex: 1,
                pointerEvents: 'none',
                contain: 'layout style paint',
                willChange: 'transform'
              }}
            />
            
            {/* Glow orb - desktop only */}
            <div 
              className="glow-orb desktop-only"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${project.color}30, transparent)`,
                filter: 'blur(20px)',
                animation: 'pulse 6s ease-in-out infinite alternate',
                zIndex: 0,
                contain: 'layout style paint',
                willChange: 'transform, opacity'
              }}
            />
            
            <div className="project-image-container" style={{ position: 'relative', zIndex: 2 }}>
              <OptimizedImage
                src={project.image.replace('/assets/img/', '/assets/img/optimized/').replace('.png', '')}
                alt={`Captura de pantalla del proyecto ${project.title} - ${(project.shortDescription || project.description).substring(0, 100)}...`}
                className="project-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>
            <h3 style={{ 
              color: project.color, 
              position: 'relative', 
              zIndex: 2,
              textShadow: `0 0 20px ${project.color}40`
            }}>{project.title}</h3>
            <p style={{ position: 'relative', zIndex: 2 }}>{project.shortDescription || project.description}</p>
            <div className="project-actions" style={{ position: 'relative', zIndex: 2 }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" 
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}, ${project.color === "#00FFFF" ? "#0080FF" : 
                                                                          project.color === "#32FF32" ? "#00FFFF" : 
                                                                          project.color === "#32CD32" ? "#228B22" :
                                                                          "#32FF32"})`,
                  boxShadow: `0 4px 15px ${project.color}30`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = `0 8px 25px ${project.color}50`;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = `0 4px 15px ${project.color}30`;
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-external-link-alt"></i> Ver Proyecto
              </a>
              <button 
                onClick={() => onOpenModal(project)}
                className="details-button"
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}, rgba(255,255,255,0.1))`,
                  border: `1px solid ${project.color}`,
                  color: 'white',
                  boxShadow: `0 4px 15px ${project.color}20`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = `0 8px 25px ${project.color}40`;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = `0 4px 15px ${project.color}20`;
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-info-circle"></i> Detalles Técnicos
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { 
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            transform: translateX(100%) translateY(100%) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0% { 
            opacity: 0.2; 
            transform: scale(0.95); 
          }
          100% { 
            opacity: 0.4; 
            transform: scale(1.05); 
          }
        }
        
        .enhanced-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          contain: layout style paint;
          will-change: transform;
        }
        
        .desktop-only {
          display: block;
        }
        
        /* Desktop effects */
        @media (min-width: 769px) and (prefers-reduced-motion: no-preference) {
          .enhanced-card:hover {
            transform: translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.02);
          }
          
          .enhanced-card:hover .shimmer-effect {
            animation-duration: 4s;
          }
          
          .enhanced-card:hover .glow-orb {
            animation-duration: 3s;
            opacity: 0.6;
          }
          
          .enhanced-card:hover .animated-border {
            animation-duration: 6s;
          }
        }
        
        /* Mobile optimizations - disable animations */
        @media (max-width: 768px) {
          .enhanced-card {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: linear-gradient(135deg, rgba(26, 26, 62, 0.95), rgba(45, 27, 105, 0.9)) !important;
          }
          
          .enhanced-card:hover {
            transform: translateY(-5px);
          }
          
          .shimmer-effect {
            display: none !important;
          }
          
          .glow-orb {
            display: none !important;
          }
          
          .animated-border {
            display: none !important;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 480px) {
          .enhanced-card {
            background: rgba(26, 26, 62, 0.9) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          
          .enhanced-card:hover {
            transform: none;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important;
          }
        }
        
        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .enhanced-card {
            transition: transform 0.2s ease;
          }
          
          .animated-border,
          .shimmer-effect,
          .glow-orb {
            animation: none !important;
            opacity: 0.2;
          }
          
          .enhanced-card:hover {
            transform: translateY(-5px);
          }
        }
        
        /* High refresh rate optimization */
        @media (min-resolution: 120dpi) {
          .animated-border {
            animation-duration: 10s;
          }
          
          .shimmer-effect {
            animation-duration: 10s;
          }
          
          .glow-orb {
            animation-duration: 8s;
          }
        }
      `}</style>

    </section>
  );
};

export default Projects;