import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeJSBackground = () => {
  const canvasRef = useRef()
  const sceneRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas.parentElement

    // Crear escena
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Crear cámara
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
    camera.position.z = 5

    // Crear renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    renderer.setClearColor(0x000000, 0)

    // Crear partículas
    const particles = []
    for (let i = 0; i < 100; i++) {
      const geometry = new THREE.SphereGeometry(0.05, 8, 8)
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x64b5f6, 
        transparent: true, 
        opacity: 0.8 
      })
      const particle = new THREE.Mesh(geometry, material)
      
      particle.position.x = (Math.random() - 0.5) * 20
      particle.position.y = (Math.random() - 0.5) * 20
      particle.position.z = (Math.random() - 0.5) * 10
      
      particles.push(particle)
      scene.add(particle)
    }

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)
      
      particles.forEach((particle, i) => {
        particle.rotation.x += 0.01
        particle.rotation.y += 0.01
        particle.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001
      })
      
      scene.rotation.y += 0.002
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      particles.forEach(particle => {
        scene.remove(particle)
        particle.geometry.dispose()
        particle.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default ThreeJSBackground