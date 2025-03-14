
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface TransitionEffectProps {
  className?: string;
}

const TransitionEffect: React.FC<TransitionEffectProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 bg-background transition-transform duration-1000 ease-in-out will-change-transform",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )}
    />
  );
};

export default TransitionEffect;
