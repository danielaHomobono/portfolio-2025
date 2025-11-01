// Mobile Typography Fix Detector (Portrait + Landscape)
export const initMobilePortraitFix = () => {
  const applyFix = () => {
    const isMobile = window.innerWidth <= 896; // Include landscape width
    const isPortrait = window.innerHeight > window.innerWidth;
    const isLandscape = window.innerWidth > window.innerHeight;
    
    if (isMobile && (isPortrait || isLandscape)) {
      document.documentElement.classList.add('mobile-portrait-fix');
      const orientation = isPortrait ? 'Portrait' : 'Landscape';
      console.log(`✅ Mobile ${orientation} Typography Fix APPLIED`);
      console.log(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
      console.log(`HTML font-size: ${getComputedStyle(document.documentElement).fontSize}`);
    } else {
      document.documentElement.classList.remove('mobile-portrait-fix');
      console.log('❌ Mobile Typography Fix REMOVED (Desktop)');
    }
  };
  
  // Apply on load
  applyFix();
  
  // Apply on resize/orientation change
  window.addEventListener('resize', applyFix);
  window.addEventListener('orientationchange', () => {
    setTimeout(applyFix, 100); // Delay for orientation change
  });
  
  return applyFix;
};