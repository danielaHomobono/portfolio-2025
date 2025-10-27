import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Configuración de viewport height dinámico para móviles
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Configurar inicialmente
setVh();

// Reconfigurar en resize y orientationchange
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', () => {
  // Delay para iOS después del cambio de orientación
  setTimeout(setVh, 100);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
