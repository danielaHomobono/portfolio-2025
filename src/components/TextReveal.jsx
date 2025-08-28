import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TextReveal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Split text into spans for each letter
      const splitText = (element) => {
        const text = element.textContent
        element.innerHTML = text
          .split('')
          .map(char => char === ' ' ? ' ' : `<span class="char">${char}</span>`)
          .join('')
      }

      // Apply only to specific titles
      const headings = document.querySelectorAll('.spectacular-title')
      headings.forEach(splitText)

      // Animate letters with stagger
      gsap.set('.char', { opacity: 0, y: 30, rotationX: 30 })
      gsap.to('.char', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.spectacular-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Glow trail effect
      gsap.to('.char', {
        textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
        duration: 0.3,
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
        delay: 1,
        scrollTrigger: {
          trigger: '.spectacular-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Wave effect on hover
      const addWaveEffect = () => {
        const titles = document.querySelectorAll('.spectacular-title')
        
        titles.forEach(title => {
          title.addEventListener('mouseenter', () => {
            const chars = title.querySelectorAll('.char')
            gsap.to(chars, {
              y: -10,
              duration: 0.3,
              stagger: 0.02,
              ease: 'power2.out',
              yoyo: true,
              repeat: 1
            })
          })
        })
      }

      setTimeout(addWaveEffect, 2000)

    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default TextReveal