import { motion } from 'framer-motion';
import { useState } from 'react';

const PerformanceMetrics = ({ project }) => {
  const [activeMetric, setActiveMetric] = useState('lighthouse');

  const performanceData = {
    'iPhone 15 Pro Max Website': {
      lighthouse: {
        performance: 92,
        accessibility: 95,
        bestPractices: 88,
        seo: 90,
        details: {
          'First Contentful Paint': '1.2s',
          'Largest Contentful Paint': '2.1s',
          'Cumulative Layout Shift': '0.05',
          'Total Blocking Time': '180ms'
        }
      },
      webVitals: {
        'Core Web Vitals': 'Passed',
        'LCP': '2.1s (Good)',
        'FID': '45ms (Good)', 
        'CLS': '0.05 (Good)',
        'FCP': '1.2s (Good)',
        'TTI': '2.8s (Good)'
      },
      optimization: [
        'Lazy loading de modelos 3D implementado',
        'Compresión GLTF con Draco reduciendo 70% el tamaño',
        'Sistema de LOD (Level of Detail) automático',
        'Preload de assets críticos',
        'Service Worker para caché inteligente'
      ]
    },
    'AI Resume Analyzer': {
      lighthouse: {
        performance: 94,
        accessibility: 98,
        bestPractices: 92,
        seo: 85,
        details: {
          'First Contentful Paint': '0.8s',
          'Largest Contentful Paint': '1.5s',
          'Cumulative Layout Shift': '0.02',
          'Total Blocking Time': '120ms'
        }
      },
      apiMetrics: {
        'Tiempo de Análisis': '15-30s',
        'Precisión IA': '94%',
        'Rate Limit': '10 req/min',
        'Uptime': '99.8%',
        'Error Rate': '<0.5%'
      },
      optimization: [
        'Implementación de rate limiting inteligente',
        'Caché de resultados para análisis similares',
        'Compresión de PDFs antes del procesamiento',
        'Streaming de respuestas de IA',
        'Fallback para errores de API'
      ]
    }
  };

  const currentData = performanceData[project?.title];

  if (!currentData) {
    return (
      <div className="performance-placeholder">
        <p>Métricas de rendimiento disponibles para proyectos seleccionados</p>
      </div>
    );
  }

  const renderLighthouseScore = (score) => {
    const getColor = (score) => {
      if (score >= 90) return '#0CCE6B';
      if (score >= 50) return '#FFA400';
      return '#FF4E42';
    };

    return (
      <div className="lighthouse-score" style={{ '--score-color': getColor(score) }}>
        <div className="score-circle">
          <svg viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="var(--score-color)"
              strokeWidth="2"
              strokeDasharray={`${score}, 100`}
            />
          </svg>
          <span className="score-text">{score}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="performance-metrics">
      <div className="metrics-tabs">
        <button 
          className={activeMetric === 'lighthouse' ? 'active' : ''}
          onClick={() => setActiveMetric('lighthouse')}
        >
          <i className="fas fa-lighthouse"></i> Lighthouse
        </button>
        {currentData.webVitals && (
          <button 
            className={activeMetric === 'webVitals' ? 'active' : ''}
            onClick={() => setActiveMetric('webVitals')}
          >
            <i className="fas fa-chart-line"></i> Web Vitals
          </button>
        )}
        {currentData.apiMetrics && (
          <button 
            className={activeMetric === 'apiMetrics' ? 'active' : ''}
            onClick={() => setActiveMetric('apiMetrics')}
          >
            <i className="fas fa-server"></i> API Metrics
          </button>
        )}
        <button 
          className={activeMetric === 'optimization' ? 'active' : ''}
          onClick={() => setActiveMetric('optimization')}
        >
          <i className="fas fa-rocket"></i> Optimizaciones
        </button>
      </div>

      <motion.div
        className="metrics-content"
        key={activeMetric}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeMetric === 'lighthouse' && (
          <div className="lighthouse-metrics">
            <div className="lighthouse-scores">
              <div className="score-item">
                <span className="score-label">Performance</span>
                {renderLighthouseScore(currentData.lighthouse.performance)}
              </div>
              <div className="score-item">
                <span className="score-label">Accessibility</span>
                {renderLighthouseScore(currentData.lighthouse.accessibility)}
              </div>
              <div className="score-item">
                <span className="score-label">Best Practices</span>
                {renderLighthouseScore(currentData.lighthouse.bestPractices)}
              </div>
              <div className="score-item">
                <span className="score-label">SEO</span>
                {renderLighthouseScore(currentData.lighthouse.seo)}
              </div>
            </div>
            <div className="lighthouse-details">
              {Object.entries(currentData.lighthouse.details).map(([key, value]) => (
                <div key={key} className="detail-item">
                  <span className="detail-label">{key}</span>
                  <span className="detail-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMetric === 'webVitals' && currentData.webVitals && (
          <div className="web-vitals">
            {Object.entries(currentData.webVitals).map(([key, value]) => (
              <div key={key} className="vital-item">
                <span className="vital-label">{key}</span>
                <span className={`vital-value ${value.includes('Good') ? 'good' : 'neutral'}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeMetric === 'apiMetrics' && currentData.apiMetrics && (
          <div className="api-metrics">
            {Object.entries(currentData.apiMetrics).map(([key, value]) => (
              <div key={key} className="api-item">
                <span className="api-label">{key}</span>
                <span className="api-value">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeMetric === 'optimization' && (
          <div className="optimization-list">
            {currentData.optimization.map((item, index) => (
              <div key={index} className="optimization-item">
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PerformanceMetrics;