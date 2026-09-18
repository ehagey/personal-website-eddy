import { useState, useRef } from 'react';
import { X } from 'lucide-react';
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
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '100%',
        left: isTouchDevice ? 'auto' : '0',
        right: isTouchDevice ? '0' : 'auto',
        transform: show ? 'translateY(-8px) scale(1)' : 'translateY(0) scale(0.95)',
        opacity: show ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        zIndex: 10,
        width: isTouchDevice ? 'min(170px, calc(100vw - 40px))' : '180px',
        maxWidth: 'calc(100vw - 40px)',
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
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const show = hovered || tapped;

  const handleTouchStart = () => {
    clearTimeout(timeoutRef.current);
    setTapped(true);
  };

  const handleTouchEnd = () => {
    timeoutRef.current = setTimeout(() => setTapped(false), 4000);
  };

  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => {
        if (!isTouchDevice) setHovered(true);
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) setHovered(false);
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => setTapped(false)}
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

const dailyReadPoem = `Do not love half lovers
Do not entertain half friends
Do not indulge in works of the half talented
Do not live half a life
and do not die a half death
If you choose silence, then be silent
When you speak, do so until you are finished
Do not silence yourself to say something
And do not speak to be silent
If you accept, then express it bluntly
Do not mask it
If you refuse then be clear about it
for an ambiguous refusal is but a weak acceptance
Do not accept half a solution
Do not believe half truths
Do not dream half a dream
Do not fantasize about half hopes
Half a drink will not quench your thirst
Half a meal will not satiate your hunger
Half the way will get you no where
Half an idea will bear you no results
Your other half is not the one you love
It is you in another time yet in the same space
It is you when you are not
Half a life is a life you didn't live,
A word you have not said
A smile you postponed
A love you have not had
A friendship you did not know
To reach and not arrive
Work and not work
Attend only to be absent
What makes you a stranger to them closest to you
and they strangers to you
The half is a mere moment of inability
but you are able for you are not half a being
You are a whole that exists to live a life
not half a life`;

const DailyRead = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginTop: '15px' }}>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setExpanded((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setExpanded((v) => !v);
        }}
        style={{
          color: 'var(--site-link)',
          textDecoration: 'underline',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        Daily Read
        {expanded && <X size={12} />}
      </span>
      {expanded && (
        <div
          style={{
            marginTop: '10px',
            padding: '15px',
            borderRadius: '6px',
            background: 'var(--site-blockquote-bg)',
            fontSize: '13px',
            fontStyle: 'italic',
            lineHeight: '1.7',
            color: 'var(--site-text-muted)',
            whiteSpace: 'pre-line',
          }}
        >
          {dailyReadPoem}
          <div style={{ marginTop: '10px', fontStyle: 'normal', color: 'var(--site-text-faint)' }}>
            - Gibran Khalil Gibran
          </div>
        </div>
      )}
    </div>
  );
};

const AboutSection = () => {
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
}}>I'm Eddy, a final-year undergraduate student in Computer Science and Statistics at McGill University. I am incredibly grateful to work with <a href="https://maxccohen.github.io/" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>Professor Maxime Cohen</a> on applied AI research. A major part of our work involves extensive industry collaborations to build and deploy practical AI agents. Our work has been featured in outlets like <a href="https://hbr.org/2025/10/what-happens-when-ai-sets-wages" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
           }}>Harvard Business Review</a>. I also work with the European Competition team at Charles River Associates as a contracted consultant, where I design and deploy internal AI tools for legal case work.</p>

          <p style={{
          marginBottom: '10px'
        }}>I've practiced <InlineMediaLink label="judo" src={judoPhoto} alt="Eddy doing Judo" type="image" /> since I was young, earning my black belt and competing in national and regional championships. This has shaped me more than anything in my life. In my free time, I enjoy playing the guitar, working out, reading, and spending time with my family and friends. I also really enjoy cooking and sharing a meal with the people I care about.</p>

          <DailyRead />
        </div>
      </div>

    </section>;
};
export default AboutSection;
