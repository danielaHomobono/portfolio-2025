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
      title: "VeriQuery",
      image: "/assets/img/veryq.png",
      shortDescription: "Plataforma que convierte consultas en lenguaje natural en queries SQL seguras usando Azure OpenAI. Reconocida en el Microsoft AI Challenge 2026 — Código Facilito.",
      description: "Plataforma Natural Language to SQL desarrollada para el Microsoft AI Challenge 2026. Convierte consultas en lenguaje natural en queries SQL seguras utilizando Azure OpenAI, con soporte multi-database y arquitectura backend modular. Destacada por Código Facilito entre los proyectos del hackathon.",
      link: "https://github.com/danielaHomobono/VeriQuery",
      github: "https://github.com/danielaHomobono/VeriQuery",
      githubUrl: "https://github.com/danielaHomobono/VeriQuery",
      color: "#FF6B35",
      techStack: ["Python", "FastAPI", "Azure OpenAI", "SQL Server", "PostgreSQL", "SQLite", "Docker", "REST APIs"],
      challenges: [
        "Convertir lenguaje natural ambiguo en queries SQL precisas y seguras",
        "Soporte para múltiples motores de base de datos (SQL Server, PostgreSQL, SQLite)",
        "Protección contra SQL injection y prompt injection simultáneamente",
        "Diseño de arquitectura backend modular y escalable"
      ],
      solutions: [
        "Integré Azure OpenAI con sistema de prompts diseñado para generación de SQL seguro y explicable",
        "Implementé capa de abstracción multi-database con adaptadores por motor",
        "Desarrollé pipeline de validación con seguridad Zero-Trust antes de ejecutar cualquier query generada",
        "Diseñé arquitectura modular con separación clara entre generación, validación y ejecución de queries"
      ],
      architecture: "Backend modular con FastAPI. Pipeline de procesamiento: entrada en lenguaje natural → Azure OpenAI → validación de seguridad → adaptador de base de datos → ejecución → respuesta con explicabilidad. Seguridad Zero-Trust en cada capa.",
      learnings: [
        "Integración avanzada con Azure OpenAI para generación de código SQL",
        "Diseño de sistemas con seguridad Zero-Trust para IA generativa",
        "Soporte multi-database con patrones de abstracción",
        "Prompt engineering orientado a generación de código seguro"
      ],
      performance: {
        "Reconocimiento": "Microsoft AI Challenge 2026",
        "Organización": "Código Facilito",
        "Bases de datos": "SQL Server, PostgreSQL, SQLite",
        "Seguridad": "Zero-Trust + Anti-injection"
      }
    },
    {
      title: "AI Resume Analyzer",
      image: "/assets/img/ai-resume.png",
      shortDescription: "Analizador de CVs con Claude 3 Sonnet que genera feedback ATS personalizado y scoring en 8 dimensiones. 500+ usuarios activos.",
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
      title: "HacéloCorto — Video Processor SaaS",
      image: "/assets/img/hacelocorto.png",
      shortDescription: "Plataforma SaaS que convierte videos horizontales a formato vertical para Reels, Shorts y TikTok con procesamiento asíncrono. Equipo de 7 personas, NoCountry.",
      description: "Trabajé como Dev Backend en un equipo de 7 personas construyendo una plataforma que automatiza la conversión de videos horizontales a formato vertical con encuadre inteligente y publicación directa a YouTube. Arquitectura desacoplada en dos nodos: API REST (FastAPI + Redis + PostgreSQL) y nodo de procesamiento de video independiente (OpenCV + FFmpeg), comunicados mediante cola de tareas asíncrona con Redis.",
      link: "https://github.com/No-Country-simulation/S02-26-Equipo-04-Web-App-Development",
      github: "https://github.com/No-Country-simulation/S02-26-Equipo-04-Web-App-Development",
      githubUrl: "https://github.com/No-Country-simulation/S02-26-Equipo-04-Web-App-Development",
      color: "#0080FF",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Google OAuth 2.0", "YouTube API v3", "JWT", "MinIO", "OpenCV", "FFmpeg"],
      challenges: [
        "Implementar autenticación segura con hashing y manejo de sesiones JWT",
        "Desarrollar flujo OAuth 2.0 con Google desde cero sin librerías de alto nivel",
        "Proteger contra CSRF en el flujo OAuth usando Redis como store de state con TTL",
        "Integrar YouTube Data API v3 con tokens OAuth de larga duración"
      ],
      solutions: [
        "Implementé registro y login con JWT, hashing seguro de contraseñas y middleware de autorización para protección de endpoints",
        "Desarrollé el flujo OAuth completo: generación de authorization URL, intercambio de código por token y emisión de JWT propio",
        "Usé Redis como store de state con TTL para protección CSRF en el flujo OAuth",
        "Integré YouTube Data API v3 con control de privacidad y manejo de refresh tokens de larga duración"
      ],
      architecture: "Arquitectura desacoplada en dos nodos: Nodo 1 (FastAPI + Redis + PostgreSQL) gestiona endpoints, valida datos y publica tareas asíncronas. Nodo 2 (Video processing) consume las tareas y ejecuta el procesamiento pesado de forma independiente. Permite escalar API y procesamiento por separado, evitar bloqueos y mejorar tolerancia a fallos.",
      learnings: [
        "Diseño de arquitecturas desacopladas con procesamiento asíncrono",
        "Implementación de OAuth 2.0 desde cero sin librerías de abstracción",
        "Integración con APIs externas de terceros (Google, YouTube)",
        "Trabajo en equipo remoto de 7 personas con Git flow estructurado"
      ],
      performance: {
        "Equipo": "7 personas",
        "Rol": "Dev Backend",
        "Stack backend": "FastAPI + PostgreSQL + Redis",
        "Contexto": "NoCountry S02-26"
      }
    },
    {
      title: "EventPass",
      image: "/assets/img/eventpass.png",
      shortDescription: "Plataforma de venta de entradas con pagos reales (Stripe), control de stock en tiempo real, transacciones MongoDB y autenticación multi-rol. MERN Stack.",
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
      architecture: "API REST con Express.js and MongoDB. Frontend React con Context API. Sistema de pagos con Stripe. Autenticación JWT con refresh tokens.",
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
      title: "El Lector Voraz",
      image: "/assets/img/voraz.png",
      shortDescription: "Sistema de gestión para librería con búsqueda avanzada por aggregation pipeline MongoDB, autenticación JWT y arquitectura MVC. Node.js + Express.",
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
      title: "Lingua Academy",
      image: "/assets/img/lingua.png",
      shortDescription: "SaaS multi-tenant para consultoras de idiomas con 80+ endpoints REST, JWT, RBAC y testing automatizado. Equipo de 5 developers, Scrum.",
      description: "Plataforma de gestión académica multi-tenant para consultoras de idiomas: gestión de profesores, estudiantes, clases y facturación automatizada. Desarrollada en equipo de 5 personas bajo metodología Scrum. Resultado: 60% menos tiempo administrativo, 80% automatización de procesos.",
      link: "https://ppiv-consultora-deidiomastechmoms.vercel.app",
      github: "https://github.com/romarvz/ppiv_consultora_de_idiomas_techmoms",
      liveUrl: "https://ppiv-consultora-deidiomastechmoms.vercel.app",
      githubUrl: "https://github.com/romarvz/ppiv_consultora_de_idiomas_techmoms",
      color: "#7B2FBE",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Jest", "Supertest", "React", "Context API"],
      challenges: [
        "Arquitectura multi-tenant con aislamiento de datos por tenant",
        "Sistema de roles y permisos (RBAC) para múltiples tipos de usuario",
        "Testing automatizado de más de 80 endpoints REST",
        "Trabajo colaborativo en equipo de 5 personas con Git flow"
      ],
      solutions: [
        "Implementé middleware de autorización con JWT y control de roles por endpoint",
        "Desarrollé suite de tests con Jest y Supertest cubriendo todos los endpoints",
        "Coordiné integración entre frontend y backend con metodología Scrum",
        "Diseñé arquitectura de rutas modular para escalar a múltiples tenants"
      ],
      architecture: "API REST con Express.js y MongoDB. Autenticación JWT con RBAC. Testing automatizado con Jest y Supertest. Frontend React con Context API para gestión de estado global.",
      learnings: [
        "Arquitectura multi-tenant and aislamiento de datos",
        "Testing automatizado de APIs REST a escala",
        "Trabajo en equipo con metodología Scrum real",
        "Diseño de sistemas de autorización con roles complejos"
      ],
      performance: {
        "Endpoints": "80+",
        "Cobertura tests": "Alta",
        "Equipo": "5 developers",
        "Reducción tiempo admin": "60%"
      }
    },
    {
      title: "Tata Clothe",
      image: "/assets/img/ecommerce.png",
      shortDescription: "E-commerce MERN completo con carrito persistente, pagos con Stripe, webhooks de confirmación, gestión de inventario y roles admin/cliente.",
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
      title: "Queen of the Court",
      image: "/assets/img/kapp.png",
      shortDescription: "App Android nativa para gestión de club de tenis: reservas, torneos y socios. Arquitectura MVVM, Room ORM y Material Design. Kotlin.",
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
                src={project.image}
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