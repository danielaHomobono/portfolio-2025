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

      // TextReveal disabled - causing font issues
      // const holaTitle = document.querySelector('.spectacular-title')
      // if (holaTitle && !holaTitle.querySelector('.char')) {
      //   splitText(holaTitle)
      // }

      // TextReveal animations disabled - using GSAP in useGSAP hook instead

    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default TextReveal