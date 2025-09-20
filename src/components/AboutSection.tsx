const AboutSection = () => {
  return <section id="about" style={{
    padding: '60px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      
      {/* About Me */}
      <div style={{
      marginBottom: '40px'
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
        }}>I'm Eddy, a fourth-year Computer Science and Statistics student at McGill University.</p>
          
          <p style={{
          marginBottom: '10px'
        }}>My experience and interests lie in AI and data analytics. I have previously built RAG and Ontology frameworks for a domain-specific Large Language Model. Currently, my interest and focus is on AI agents. Additionally, I have been working on developing robust benchmarking criteria for LLMs in medical and clinical settings at the <a href="https://aihealthinstitute.org/" target="_blank" rel="noopener noreferrer" style={{
            color: '#333',
            textDecoration: 'underline'
          }}>AI Health Institute</a>. I am also involved in research on generative AI applications in pricing recommendations for retail and commercial settings.</p>
          
          <p>Outside of academics, I enjoy hitting the gym, playing guitar, practicing Judo, and spending time with family and friends.</p>
        </div>
      </div>

    </section>;
};
export default AboutSection;