'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  type?: 'char' | 'word';
}

export const TextReveal = ({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'div',
  type = 'word',
}: TextRevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const words = children.split(' ');

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            anime({
              targets: ref.current?.children,
              translateY: [20, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 800,
              delay: anime.stagger(type === 'char' ? 30 : 100, { start: delay }),
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [delay, type]);

  return (
    <Tag ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.2em] opacity-0 translate-y-4">
          {word}
        </span>
      ))}
    </Tag>
  );
};
