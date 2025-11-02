// Mobile Effects - Intersection Observer para efectos en móvil vertical
export const initMobileEffects = () => {
  // Solo ejecutar en móvil vertical
  if (window.innerWidth > 768 || window.innerHeight < window.innerWidth) {
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observar todas las tech-cards
  const techCards = document.querySelectorAll('.tech-card');
  techCards.forEach((card) => {
    observer.observe(card);
  });

  // Cleanup function
  return () => {
    observer.disconnect();
  };
};