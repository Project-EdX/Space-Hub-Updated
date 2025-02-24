import React, { useState, useEffect } from 'react';

interface TypewriterComponentProps {
  text: string;
  className?: string;
}

const TypewriterComponent: React.FC<TypewriterComponentProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <h1 className={className}>{displayText}</h1>;
};

export default TypewriterComponent;