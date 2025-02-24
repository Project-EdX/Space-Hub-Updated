import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const starCount = 200;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = `${0.1 + Math.random() * 0.3}rem`;
      star.style.width = size;
      star.style.height = size;
      
      // Random animation duration
      star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="starry-bg" />;
};

export default StarryBackground;