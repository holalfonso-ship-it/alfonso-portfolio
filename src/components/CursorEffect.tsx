
import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        getComputedStyle(target).cursor === 'pointer'
      );
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    
    // Hide cursor initially for 1 second to avoid showing at initial position
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timer);
    };
  }, []);
  
  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed pointer-events-none z-[9999] mix-blend-difference" 
        style={{ 
          left: position.x, 
          top: position.y, 
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`
          h-8 w-8 bg-white rounded-full
          transition-all duration-100 ease-out
          ${isPointer ? 'scale-150 opacity-70' : 'scale-100 opacity-100'}
        `} />
      </div>
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
};

export default CursorEffect;
