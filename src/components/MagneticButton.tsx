'use client';

import { useRef, useState, useEffect } from 'react';
import anime from 'animejs';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const MagneticButton = ({ children, className = '', href }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (ref.current) {
      anime({
        targets: ref.current,
        translateX: position.x,
        translateY: position.y,
        duration: 800,
        easing: 'easeOutElastic(1, .5)',
      });
    }
  }, [position]);

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-100 ease-linear ${className}`}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
