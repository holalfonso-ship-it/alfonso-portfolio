import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  threshold?: number;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = false,
  delay = 0,
  threshold = 0.5
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-text-reveal');
          }, delay);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove('animate-text-reveal');
        }
      });
    }, {
      threshold
    });
    const currentRef = textRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, delay, threshold]);
  return <span ref={textRef} className="">
      {text}
    </span>;
};
export default AnimatedText;