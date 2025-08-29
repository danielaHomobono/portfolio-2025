import { useEffect } from 'react'

export const useBackgroundEffect = () => {
  useEffect(() => {
    const originalBackground = document.body.style.background
    
    const handleScroll = () => {
      const whatIDoSection = document.querySelector('.what-i-do-section')
      if (!whatIDoSection) return

      const rect = whatIDoSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Activar cuando la sección esté visible
      const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
      
      if (isVisible) {
        document.body.style.background = `
          radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(67, 192, 221, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a23 0%, #1a1a3e 30%, #2d1b69 70%, #4c1d95 100%)
        `
        console.log('Fondo activado')
      } else {
        document.body.style.background = 'linear-gradient(135deg, #0a0a23 0%, #1a1a3e 30%, #2d1b69 70%, #4c1d95 100%)'
        console.log('Fondo desactivado')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.background = originalBackground
    }
  }, [])
}