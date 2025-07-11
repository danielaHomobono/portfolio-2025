import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ShootingStar({ position, direction, speed }) {
  const starRef = useRef()
  const trailRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (starRef.current) {
      starRef.current.position.x = position[0] + direction[0] * time * speed
      starRef.current.position.y = position[1] + direction[1] * time * speed
      starRef.current.position.z = position[2] + direction[2] * time * speed
      
      // Reiniciar cuando sale del campo
      if (Math.abs(starRef.current.position.x) > 20) {
        starRef.current.position.set(...position)
      }
    }
  })
  
  return (
    <group>
      <mesh ref={starRef} position={position}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00ffff"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh ref={trailRef} position={position}>
        <cylinderGeometry args={[0.01, 0.02, 2, 8]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.4}
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

function FloatingOrb({ position, size, speed, colorIndex }) {
  const orbRef = useRef()
  const colors = ['#ffffff', '#00ffff', '#32ff32', '#ffff00']
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (orbRef.current) {
      orbRef.current.position.y = position[1] + Math.sin(time * speed + colorIndex) * 2
      orbRef.current.position.x = position[0] + Math.cos(time * speed * 0.7 + colorIndex) * 1.5
      orbRef.current.rotation.y = time * speed
      
      // Pulsación de brillo
      const intensity = 0.5 + Math.sin(time * speed * 2) * 0.3
      orbRef.current.material.emissiveIntensity = intensity
    }
  })
  
  return (
    <mesh ref={orbRef} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial
        color={colors[colorIndex % 4]}
        transparent
        opacity={0.8}
        emissive={colors[colorIndex % 4]}
        emissiveIntensity={0.5}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  )
}

function MagicConstellation() {
  const elements = useMemo(() => {
    const shootingStars = Array.from({ length: 15 }, (_, i) => ({
      type: 'shooting',
      position: [
        -20 + Math.random() * 5,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      ],
      direction: [1, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.2],
      speed: Math.random() * 2 + 1
    }))
    
    const orbs = Array.from({ length: 40 }, (_, i) => ({
      type: 'orb',
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 20
      ],
      size: Math.random() * 0.25 + 0.08,
      speed: Math.random() * 0.5 + 0.2,
      colorIndex: i
    }))
    
    return [...shootingStars, ...orbs]
  }, [])
  
  const constellationRef = useRef()
  
  useFrame((state) => {
    if (constellationRef.current) {
      constellationRef.current.rotation.y = state.clock.elapsedTime * 0.05
      constellationRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })
  
  return (
    <group ref={constellationRef}>
      {elements.map((element, i) => 
        element.type === 'shooting' ? (
          <ShootingStar
            key={i}
            position={element.position}
            direction={element.direction}
            speed={element.speed}
          />
        ) : (
          <FloatingOrb
            key={i}
            position={element.position}
            size={element.size}
            speed={element.speed}
            colorIndex={element.colorIndex}
          />
        )
      )}
    </group>
  )
}

const ParticleBackground = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 12] }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#32ff32" />
        <pointLight position={[5, -5, 8]} intensity={0.4} color="#ffff00" />
        <spotLight position={[0, 15, 5]} intensity={0.4} color="#ffffff" angle={0.3} />
        <MagicConstellation />
      </Canvas>
    </div>
  )
}

export default ParticleBackground