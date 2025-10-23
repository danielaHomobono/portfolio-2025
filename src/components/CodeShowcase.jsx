import { motion } from 'framer-motion';
import { useState } from 'react';

const CodeShowcase = ({ project }) => {
  const [activeTab, setActiveTab] = useState('architecture');

  const codeExamples = {
    'iPhone 15 Pro Max Website': {
      architecture: `// Arquitectura modular con Three.js optimizada
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

const Scene3D = () => {
  const modelRef = useRef()
  const [isLoading, setIsLoading] = useState(true)
  
  // Sistema de LOD (Level of Detail) para optimización
  const handleLOD = useCallback((distance) => {
    if (distance > 10) return 'low'
    if (distance > 5) return 'medium'
    return 'high'
  }, [])
  
  return (
    <Canvas camera={{ fov: 45, position: [0, 0, 5] }}>
      <Suspense fallback={<LoadingSpinner />}>
        <Model ref={modelRef} lod={handleLOD} />
      </Suspense>
    </Canvas>
  )
}`,
      performance: `// Sistema de caché inteligente para modelos 3D
class ModelCache {
  constructor() {
    this.cache = new Map()
    this.maxSize = 50 * 1024 * 1024 // 50MB
    this.currentSize = 0
  }
  
  async loadModel(url, quality = 'high') {
    const cacheKey = \`\${url}_\${quality}\`
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)
    }
    
    const model = await this.fetchAndOptimize(url, quality)
    this.addToCache(cacheKey, model)
    return model
  }
  
  addToCache(key, model) {
    if (this.currentSize + model.size > this.maxSize) {
      this.evictLRU()
    }
    this.cache.set(key, model)
    this.currentSize += model.size
  }
}`
    },
    'AI Resume Analyzer': {
      architecture: `// Integración segura con Claude 3 Sonnet
import { PuterAPI } from '@puter/sdk'

class AIResumeAnalyzer {
  constructor() {
    this.puter = new PuterAPI({
      apiKey: process.env.REACT_APP_PUTER_KEY,
      rateLimit: { requests: 10, window: 60000 }
    })
  }
  
  async analyzeResume(pdfFile) {
    try {
      // Extracción de texto con validación
      const text = await this.extractText(pdfFile)
      const sanitizedText = this.sanitizeInput(text)
      
      // Análisis con IA usando prompts optimizados
      const analysis = await this.puter.ai.analyze({
        model: 'claude-3-sonnet',
        prompt: this.buildAnalysisPrompt(sanitizedText),
        maxTokens: 2000
      })
      
      return this.formatResults(analysis)
    } catch (error) {
      throw new AnalysisError(error.message)
    }
  }
}`,
      security: `// Sistema de rate limiting y validación
const rateLimiter = {
  requests: new Map(),
  
  isAllowed(userId, limit = 5) {
    const now = Date.now()
    const userRequests = this.requests.get(userId) || []
    
    // Limpiar requests antiguos (ventana de 1 hora)
    const validRequests = userRequests.filter(
      time => now - time < 3600000
    )
    
    if (validRequests.length >= limit) {
      return false
    }
    
    validRequests.push(now)
    this.requests.set(userId, validRequests)
    return true
  }
}`
    }
  };

  const currentCode = codeExamples[project?.title] || {};

  if (!project || !currentCode.architecture) {
    return null;
  }

  return (
    <div className="code-showcase">
      <div className="code-tabs">
        <button 
          className={activeTab === 'architecture' ? 'active' : ''}
          onClick={() => setActiveTab('architecture')}
        >
          <i className="fas fa-sitemap"></i> Arquitectura
        </button>
        {currentCode.performance && (
          <button 
            className={activeTab === 'performance' ? 'active' : ''}
            onClick={() => setActiveTab('performance')}
          >
            <i className="fas fa-tachometer-alt"></i> Optimización
          </button>
        )}
        {currentCode.security && (
          <button 
            className={activeTab === 'security' ? 'active' : ''}
            onClick={() => setActiveTab('security')}
          >
            <i className="fas fa-shield-alt"></i> Seguridad
          </button>
        )}
      </div>

      <motion.div
        className="code-content"
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="code-header">
          <span className="language">JavaScript</span>
          <button className="copy-btn" onClick={() => navigator.clipboard.writeText(currentCode[activeTab])}>
            <i className="fas fa-copy"></i> Copiar
          </button>
        </div>
        <pre className="code-block">
          <code>{currentCode[activeTab]}</code>
        </pre>
      </motion.div>
    </div>
  );
};

export default CodeShowcase;