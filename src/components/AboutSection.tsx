import { useState } from 'react';
import judoPhoto from '@/assets/judo-real.jpg';

const AboutSection = () => {
  const [showJudo, setShowJudo] = useState(false);
  const [showGuitar, setShowGuitar] = useState(false);
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
        }}>Outside of research, I've been fortunate to compete in <button type="button" onClick={() => setShowJudo(!showJudo)} style={{ color: 'var(--site-link)', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit' }}>Judo</button> at a high level, earning my black belt and competing in national and regional championships. Beyond the physical aspects, judo has taught me to stay calm when facing difficult situations, approach challenges with discipline and grit, and trust that hard work pays off over time. These are all mindsets that have shaped how I approach everything in life.</p>
          {showJudo && (
            <div style={{ position: 'relative', marginTop: '10px', marginBottom: '10px' }}>
              <button
                type="button"
                onClick={() => setShowJudo(false)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: '28px',
                  textAlign: 'center',
                  padding: 0,
                }}
                aria-label="Close photo"
              >
                ✕
              </button>
              <img
                src={judoPhoto}
                alt="Eddy doing Judo"
                loading="lazy"
                style={{
                  width: '100%',
                  borderRadius: '6px',
                  display: 'block',
                }}
              />
            </div>
          )}
          
          <p>In my free time, I enjoy playing the <button type="button" onClick={() => setShowGuitar(!showGuitar)} style={{ color: 'var(--site-link)', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit' }}>guitar</button>, working out, reading, and spending time with my family (especially my nieces and nephew!) and friends. Recently, I got into running, and I am currently training for my next 50km race. I also really enjoy cooking and sharing a meal with the people I care about.</p>
          {showGuitar && (
            <div style={{ position: 'relative', marginTop: '10px', marginBottom: '10px' }}>
              <button
                type="button"
                onClick={() => setShowGuitar(false)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: '28px',
                  textAlign: 'center',
                  padding: 0,
                  zIndex: 1,
                }}
                aria-label="Close video"
              >
                ✕
              </button>
              <video
                src="/videos/guitar.mp4"
                controls
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  borderRadius: '6px',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>
      </div>

    </section>;
};
export default AboutSection;
