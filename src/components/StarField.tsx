import React, { useEffect, useRef } from "react";

const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const starCount = 150;

    // Clear existing stars
    container.innerHTML = "";

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random size
      const size = `${Math.random() * 3}px`;
      star.style.width = size;
      star.style.height = size;

      // Random twinkle duration
      star.style.setProperty("--twinkle-duration", `${2 + Math.random() * 3}s`);

      container.appendChild(star);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
