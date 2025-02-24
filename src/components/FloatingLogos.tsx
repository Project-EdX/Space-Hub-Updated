import React from 'react';

const FloatingLogos: React.FC = () => {
  const logos = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 4}s infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-12 h-12 opacity-20"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLogos;