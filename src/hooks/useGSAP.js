import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAP = () => {
  const containerRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero animations
        const title = document.querySelector('.spectacular-title')
        const profileImg = document.querySelector('.profile-image')
        const highlights = document.querySelectorAll('.highlight')
        
        if (title) {
          gsap.fromTo(title, 
            { y: 100, opacity: 0, rotationX: 90 },
            { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: 'back.out(1.7)' }
          )
        }

        if (profileImg) {
          gsap.fromTo(profileImg, 
            { scale: 0, rotation: 180, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)', delay: 0.3 }
          )
        }

        if (highlights.length > 0) {
          gsap.fromTo(highlights, 
            { backgroundPosition: '200% center' },
            { backgroundPosition: '0% center', duration: 2, ease: 'power2.inOut', delay: 0.8 }
          )
        }

        // Delayed animations for other sections
        setTimeout(() => {
          const techCards = document.querySelectorAll('.tech-card')
          const projectCards = document.querySelectorAll('.project-card')
          const missionCards = document.querySelectorAll('.mission-card')
          
          if (techCards.length > 0) {
            gsap.set(techCards, { opacity: 0, y: 30, scale: 0.8 })
            gsap.to(techCards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              stagger: 0.05,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: '.technologies-grid',
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            })
          }

          if (projectCards.length > 0) {
            gsap.set(projectCards, { transformOrigin: 'center center' })
            gsap.fromTo(projectCards, 
              { scale: 0.8, opacity: 0, y: 50 },
              { 
                scale: 1, 
                opacity: 1, 
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: '.projects-grid',
                  start: 'top 80%',
                  toggleActions: 'play none none reverse'
                }
              }
            )
          }

          if (missionCards.length > 0) {
            gsap.set(missionCards, { opacity: 0, y: 30 })
            gsap.to(missionCards, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: '.missions-grid',
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            })
          }
        }, 1000)

      }, containerRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return containerRef
}