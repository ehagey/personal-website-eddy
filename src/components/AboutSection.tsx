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
        <h2 style={{
        fontSize: '24px',
        marginBottom: '15px',
        fontWeight: '400',
        color: 'var(--site-text)'
      }}>About Me</h2>
        <div style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: 'var(--site-text-muted)'
      }}>
          <p style={{
          marginBottom: '10px'
        }}>I'm Eddy, a fourth-year undergraduate student in Computer Science and Statistics at McGill University. I am incredibly grateful to work under <a href="https://maxccohen.github.io/" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>Professor Maxime Cohen</a>, where our research focuses on AI. A major part of our work involves extensive industry collaborations to build and deploy practical AI agents. Since September 2025, I have also been working with the European Competition Team at Charles River Associates as a consultant advising on AI.</p>
          
          <p style={{
          marginBottom: '10px'
        }}>I've also been involved in working on benchmarking criteria for LLMs in medical settings at the <a href="https://aihealthinstitute.org/" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>AI Health Institute</a>. My introduction to agentic AI started in Summer 2024 when I worked on building RAG and Ontology frameworks for domain-specific language models.</p>
          
          <p style={{
          marginBottom: '10px'
        }}>Outside of research, I've been fortunate to compete in Judo at a high level, earning my black belt and competing in national and regional championships. Beyond the physical aspects, judo has taught me to stay calm when facing difficult situations, approach challenges with discipline and grit, and trust that hard work pays off over time. These are all mindsets that have shaped how I approach everything in life.</p>
          
          <p>In my free time, I enjoy playing the guitar, working out, reading, and spending time with my family and friends. Recently, I got into running, and I am currently training for my next 50km race. I also really enjoy cooking and sharing a meal with the people I care about.</p>
        </div>
      </div>

    </section>;
};
export default AboutSection;
