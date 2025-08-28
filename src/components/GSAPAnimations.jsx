import { useEffect } from 'react'
import { gsap } from 'gsap'

const GSAPAnimations = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Floating animation for profile image
      const profileImg = document.querySelector('.profile-image')
      if (profileImg) {
        gsap.to(profileImg, {
          y: -10,
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1
        })
      }

      // Magnetic effect for cards
      const addMagneticEffect = () => {
        const cards = document.querySelectorAll('.project-card, .tech-card')
        
        cards.forEach(card => {
          const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2
            
            gsap.to(card, {
              x: x * 0.1,
              y: y * 0.1,
              rotationY: x * 0.05,
              rotationX: -y * 0.05,
              duration: 0.3,
              ease: 'power2.out'
            })
          }
          
          const handleMouseLeave = () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              rotationY: 0,
              rotationX: 0,
              duration: 0.5,
              ease: 'elastic.out(1, 0.3)'
            })
          }
          
          card.addEventListener('mousemove', handleMouseMove)
          card.addEventListener('mouseleave', handleMouseLeave)
        })
      }

      // Add magnetic effect after elements are loaded
      setTimeout(addMagneticEffect, 2000)
      
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default GSAPAnimations