'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  triggerOnce?: boolean;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800,
  triggerOnce = true,
  width = 'fit-content',
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      let translateX = 0;
      let translateY = 0;

      switch (direction) {
        case 'up':
          translateY = 20;
          break;
        case 'down':
          translateY = -20;
          break;
        case 'left':
          translateX = 20;
          break;
        case 'right':
          translateX = -20;
          break;
      }

      // Initial state
      anime.set(ref.current, {
        opacity: 0,
        translateX: direction === 'none' ? 0 : translateX,
        translateY: direction === 'none' ? 0 : translateY,
      });

      // Animate to final state
      anime({
        targets: ref.current,
        opacity: [0, 1],
        translateX: direction === 'none' ? 0 : [translateX, 0],
        translateY: direction === 'none' ? 0 : [translateY, 0],
        duration: duration,
        delay: delay,
        easing: 'easeOutExpo',
        complete: () => {
          setHasAnimated(true);
        },
      });
    }
  }, [isVisible, hasAnimated, direction, delay, duration]);

  return (
    <div ref={ref} className={className} style={{ width, opacity: 0 }}>
      {children}
    </div>
  );
};
