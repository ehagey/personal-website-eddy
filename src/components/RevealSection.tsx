import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const RevealSection = ({ children }: { children: ReactNode }) => {
  const ref = useScrollReveal();
  return <div ref={ref}>{children}</div>;
};

export default RevealSection;
