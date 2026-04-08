import { useState, useRef, useCallback } from 'react';
import judoPhoto from '@/assets/judo-real.jpg';

const MediaPreview = ({
  src,
  alt,
  type,
  show,
}: {
  src: string;
  alt: string;
  type: 'image' | 'video';
  show: boolean;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: show ? 'translateX(-50%) translateY(-8px) scale(1)' : 'translateX(-50%) translateY(0) scale(0.95)',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        zIndex: 10,
        width: type === 'video' ? '200px' : '220px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
        background: 'var(--site-bg)',
        border: '1px solid var(--site-border, rgba(128,128,128,0.15))',
      }}
    >
      {type === 'image' ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', display: 'block' }}
        />
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', display: 'block' }}
        />
      )}
    </div>
  );
};

const InlineMediaLink = ({
  label,
  src,
  alt,
  type,
}: {
  label: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
}) => {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const show = hovered || tapped;

  const handleTouchStart = () => {
    setTapped(true);
    clearTimeout(timeoutRef.current);
  };

  const handleTouchEnd = () => {
    timeoutRef.current = setTimeout(() => setTapped(false), 1500);
  };

  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <MediaPreview src={src} alt={alt} type={type} show={show} />
      <span
        style={{
          color: 'var(--site-link)',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        {label}
      </span>
    </span>
  );
};

const AboutSection = () => {
  const [guitarStep, setGuitarStep] = useState<'hidden' | 'prompt' | 'video'>('hidden');
  return <section id="about" style={{
    padding: '5px 20px 5px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      
      {/* About Me */}
      <div style={{
      marginBottom: '25px'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '400',
            color: 'var(--site-text)'
          }}>About Me</h2>
        </div>
        <div style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: 'var(--site-text-muted)'
      }}>
           <img
             src="/lovable-uploads/e3682f1c-f543-43d2-8b64-8b6d2732dc0e.jpg"
             alt="Eddy Hage Youssef"
             loading="eager"
             decoding="sync"
             fetchPriority="high"
             style={{
                width: '110px',
                height: '110px',
               borderRadius: '6px',
               objectFit: 'cover',
               float: 'left',
               marginRight: '15px',
               marginBottom: '5px',
               display: 'block',
             }}
           />
           <p style={{
          marginBottom: '10px'
}}>I'm Eddy, a fourth-year undergraduate student in Computer Science and Statistics at McGill University. I am incredibly grateful to work with <a href="https://maxccohen.github.io/" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>Professor Maxime Cohen</a> on applied AI research. A major part of our work involves extensive industry collaborations to build and deploy practical AI agents. Our work has been featured in outlets like <a href="https://hbr.org/2025/10/what-happens-when-ai-sets-wages" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
           }}>Harvard Business Review</a>. Since September 2025, I have been working as a contracted consultant with the European Competition team at Charles River Associates, where I design and deploy internal AI tools for legal case work.</p>
          
          <p style={{
          marginBottom: '10px'
}}>Previously, I've worked on benchmarking criteria for LLMs in medical settings at the <a href="https://aihealthinstitute.org/" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>AI Health Institute</a>. My introduction to agentic AI started in Summer 2024 when I worked on building RAG and Ontology frameworks for domain-specific language models.</p>
          
          <p style={{
          marginBottom: '10px'
        }}>Outside of research, I've been fortunate to compete in <InlineMediaLink label="Judo" src={judoPhoto} alt="Eddy doing Judo" type="image" /> at a high level, earning my black belt and competing in national and regional championships. Beyond the physical aspects, judo has taught me to stay calm when facing difficult situations, approach challenges with discipline and grit, and trust that hard work pays off over time. These are all mindsets that have shaped how I approach everything in life.</p>
          
          <p style={{ marginBottom: '10px' }}>In my free time, I enjoy playing the <span
            onClick={() => setGuitarStep(prev => prev === 'hidden' ? 'prompt' : 'hidden')}
            style={{ color: 'var(--site-link)', textDecoration: 'underline', cursor: 'pointer' }}
          >guitar</span>, working out, reading, and spending time with my family (especially my nieces and nephew!) and friends. Recently, I got into running, and I am currently training for my next 50km race. I also really enjoy cooking and sharing a meal with the people I care about.</p>
          
          {guitarStep === 'prompt' && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid var(--site-border, rgba(128,128,128,0.15))',
              background: 'var(--site-bg)',
              marginBottom: '10px',
              fontSize: '13px',
              color: 'var(--site-text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              <span>🎸 This is me testing a new overdrive pedal I got.</span>
              <span
                onClick={() => setGuitarStep('video')}
                style={{ color: 'var(--site-link)', textDecoration: 'underline', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >Watch video →</span>
              <span
                onClick={() => setGuitarStep('hidden')}
                style={{ color: 'var(--site-text-muted)', cursor: 'pointer', opacity: 0.6, whiteSpace: 'nowrap' }}
              >Dismiss</span>
            </div>
          )}

          {guitarStep === 'video' && (
            <div style={{ marginBottom: '10px' }}>
              <div style={{
                fontSize: '13px',
                color: 'var(--site-text-muted)',
                marginBottom: '6px',
              }}>🎸 Testing a new overdrive pedal.</div>
              <video
                src="/videos/guitar.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  borderRadius: '8px',
                  display: 'block',
                }}
              />
              <span
                onClick={() => setGuitarStep('hidden')}
                style={{ fontSize: '12px', color: 'var(--site-text-muted)', cursor: 'pointer', opacity: 0.6, marginTop: '6px', display: 'inline-block' }}
              >Close</span>
            </div>
          )}
        </div>
      </div>

    </section>;
};
export default AboutSection;
