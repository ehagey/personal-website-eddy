import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  delay?: number;
  showDivider?: boolean;
}

const SectionWrapper = ({ id, children, delay = 0, showDivider = true }: SectionWrapperProps) => {
  const ref = useScrollReveal({ delay });

  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: '5px 20px 5px 20px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      {children}
      {showDivider && (
        <div style={{
          width: '100%',
          height: '1px',
          background: 'var(--site-divider)',
          margin: '25px 0 0 0',
          opacity: 0.6,
        }} />
      )}
    </section>
  );
};

export default SectionWrapper;
