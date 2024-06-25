"use client";

import React, { useEffect, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export type RevealVariants = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right';

type RevealOnScrollProps = {
  children: ReactNode;
  variant?: RevealVariants;
  threshold?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  delay?: number;
  mobileDisabled?: boolean;
};

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  variant = 'fade-up',
  threshold = 0.3,
  delay = 0,
  mobileDisabled = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <div ref={ref} className="reveal-ani-wrapper">
      <div
        className={`reveal-ani-container reveal-ani-${variant} ${
          inView && !prefersReducedMotion ? 'reveal-ani-revealed' : 'reveal-ani-hidden'
        } ${mobileDisabled ? 'reveal-ani-mobile-disabled' : ''}
        `}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealOnScroll;
