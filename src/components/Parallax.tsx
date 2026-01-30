'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax = ({ children, className = '', speed = 0.1 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const offset = (top - window.innerHeight / 2) * speed;

      anime.set(ref.current, {
        translateY: offset,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};
