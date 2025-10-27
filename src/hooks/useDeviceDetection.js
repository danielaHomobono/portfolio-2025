import { useState, useEffect } from 'react'

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      // Detectar móvil
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)

      // Detectar dispositivo de baja gama
      const lowEnd = mobile && (
        navigator.hardwareConcurrency <= 4 || // 4 cores o menos
        navigator.deviceMemory <= 4 || // 4GB RAM o menos
        window.innerWidth <= 768 // Pantalla pequeña
      )
      setIsLowEnd(lowEnd)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    window.addEventListener('orientationchange', checkDevice)
    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('orientationchange', checkDevice)
    }
  }, [])

  return { isMobile, isLowEnd }
}