
import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, delay = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-visible');
              entry.target.classList.remove('reveal-hidden');
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    element.classList.add('reveal');
    element.classList.add('reveal-hidden');
    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, delay]);

  return ref;
};
