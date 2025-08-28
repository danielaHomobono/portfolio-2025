import { useEffect } from 'react'

const Parallax3D = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      const rate2 = scrolled * 0.3
      const rate3 = scrolled * -0.2
      
      // Parallax directo con transform
      const slowElements = document.querySelectorAll('.parallax-slow')
      const fastElements = document.querySelectorAll('.parallax-fast')
      const floatElements = document.querySelectorAll('.float-3d')
      
      slowElements.forEach(el => {
        el.style.transform = `translateY(${rate}px)`
      })
      
      fastElements.forEach(el => {
        el.style.transform = `translateY(${rate2}px) rotateY(${scrolled * 0.1}deg)`
      })
      
      floatElements.forEach((el, i) => {
        if (el.classList.contains('shape')) {
          el.style.transform = `translateY(${rate3 * (i + 1)}px) rotateX(${scrolled * 0.05}deg)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="floating-shapes">
      <div className="shape shape-1 parallax-slow"></div>
      <div className="shape shape-2 parallax-fast"></div>
      <div className="shape shape-3 float-3d"></div>
      <div className="shape shape-4 parallax-slow"></div>
    </div>
  )
}

export default Parallax3D