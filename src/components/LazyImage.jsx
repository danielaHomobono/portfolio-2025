import { useState, memo } from 'react';

const LazyImage = memo(({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`lazy-image-container ${className || ''}`}>
      {!loaded && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`lazy-image ${loaded ? 'loaded' : ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
});

export default LazyImage;