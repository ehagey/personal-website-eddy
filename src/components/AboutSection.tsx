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
        fontWeight: 'normal'
      }}>About</h2>
        <div style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#666'
      }}>
          <p style={{
          marginBottom: '10px'
        }}>I'm Eddy, a fourth-year Computer Science and Statistics student at McGill University. I am very fortunate and grateful to work under <a href="https://maxccohen.github.io/" target="_blank" rel="noopener noreferrer" style={{
            color: '#333',
            textDecoration: 'underline'
          }}>Professor Maxime Cohen</a>, where our research focuses on Artificial Intelligence. A major part of our work involves extensive industry collaborations to build and deploy practical AI agents. Since September 2025, I have also been working with Charles River Associates as a consultant advising on AI.</p>
          
          <p style={{
          marginBottom: '10px'
        }}>I'm also currently exploring AI agents and working on benchmarking criteria for LLMs in medical settings at the <a href="https://aihealthinstitute.org/" target="_blank" rel="noopener noreferrer" style={{
            color: '#333',
            textDecoration: 'underline'
          }}>AI Health Institute</a>. Previously, I've worked on building RAG and Ontology frameworks for domain-specific language models.</p>
          
          <p style={{
          marginBottom: '10px'
        }}>Outside of research, I've been fortunate to compete in Judo at a high level, earning my black belt and competing in national and regional championships. Beyond the physical aspects, judo has taught me to stay calm when facing difficult situations, approach challenges with discipline and grit, and trust that hard work pays off over time. These are all mindsets that have shaped how I approach everything in life.</p>
          
          <p>In my free time, I enjoy spending time at the gym, playing guitar, reading, and hanging out with family and friends.</p>
        </div>
      </div>

    </section>;
};
export default AboutSection;