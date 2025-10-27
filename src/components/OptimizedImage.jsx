import { useState, memo } from 'react';

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generar diferentes formatos y tamaños
  const getImageSources = (baseSrc) => {
    const baseName = baseSrc.replace(/\.[^/.]+$/, '');
    const extension = baseSrc.split('.').pop();
    
    return {
      webp: `${baseName}.webp`,
      original: baseSrc,
      small: `${baseName}-small.${extension}`,
      medium: `${baseName}-medium.${extension}`,
      large: `${baseName}-large.${extension}`
    };
  };

  const sources = getImageSources(src);

  return (
    <div className={`optimized-image-container ${className}`}>
      {!loaded && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      <picture>
        {/* WebP sources para navegadores compatibles */}
        <source
          srcSet={`
            ${sources.webp.replace('.webp', '-small.webp')} 400w,
            ${sources.webp.replace('.webp', '-medium.webp')} 800w,
            ${sources.webp.replace('.webp', '-large.webp')} 1200w
          `}
          sizes={sizes}
          type="image/webp"
        />
        
        {/* Fallback para navegadores sin soporte WebP */}
        <source
          srcSet={`
            ${sources.small} 400w,
            ${sources.medium} 800w,
            ${sources.large} 1200w
          `}
          sizes={sizes}
          type={`image/${src.split('.').pop()}`}
        />
        
        <img
          src={sources.original}
          alt={alt}
          className={`optimized-image ${loaded ? 'loaded' : ''} ${error ? 'error' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...props}
        />
      </picture>
      
      {error && (
        <div className="image-error">
          <span>Error al cargar imagen</span>
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;