import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <motion.header
      className={scrolled ? 'scrolled' : ''}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav>
        <ul>
          <li><a href="#about-me" onClick={(e) => handleSmoothScroll(e, '#about-me')}>Acerca de Mí</a></li>
          <li><a href="#what-i-do" onClick={(e) => handleSmoothScroll(e, '#what-i-do')}>¿Qué Hago?</a></li>
          <li><a href="#technologies" onClick={(e) => handleSmoothScroll(e, '#technologies')}>Tecnologías</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Proyectos</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contacto</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;