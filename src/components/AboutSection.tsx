const AboutSection = () => {
  const skills = ['Programming', 'Machine Learning', 'Data Analytics', 'Artificial Intelligence', 'Research', 'Statistical Analysis', 'LLM Engineering', 'Prompt Design and Engineering', 'Problem Structuring'];
  const hobbies = [{
    name: 'Judo',
    details: ['Black Belt', '7× Lebanese National Champion', 'Arab Championship First Place (2017)']
  }, {
    name: 'Guitar',
    details: ['PRS Silver Sky (Electric)', 'Princeton Reverb (Amp)', 'Art & Lutherie (Acoustic)'],
    context: '(for the geeks)'
  }, {
    name: 'Currently Reading',
    details: ['1. Man\'s Search for Meaning (Viktor Frankl)', '2. How Innovation Works and Why it Flourishes in Freedom (Matt Ridley)']
  }];
  const quotes = [{
    text: "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
    author: "Thomas Jefferson"
  }, {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  }, {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  }];
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


      {/* Hobbies */}
      <div style={{
      marginBottom: '40px'
    }}>
        <h3 style={{
        fontSize: '18px',
        marginBottom: '10px',
        fontWeight: 'normal'
      }}>Hobbies</h3>
        {hobbies.map(hobby => <div key={hobby.name} style={{
        marginBottom: '15px'
      }}>
            <h4 style={{
          fontSize: '14px',
          fontWeight: 'normal',
          marginBottom: '5px'
        }}>
              {hobby.name} 
              {hobby.context && <span style={{
            fontSize: '12px',
            color: '#999'
          }}> {hobby.context}</span>}
            </h4>
            <p style={{
          fontSize: '12px',
          color: '#666',
          lineHeight: '1.3',
          marginLeft: '10px'
        }}>
              {hobby.details.join(' • ')}
            </p>
          </div>)}
      </div>

      {/* Favorite Quotes */}
      <div>
        <h3 style={{
        fontSize: '18px',
        marginBottom: '10px',
        fontWeight: 'normal'
      }}>Favorite Quotes</h3>
        {quotes.map((quote, index) => <div key={index} style={{
        marginBottom: '15px'
      }}>
            <p style={{
          fontStyle: 'italic',
          marginBottom: '3px',
          color: '#666',
          fontSize: '14px',
          lineHeight: '1.3'
        }}>
              "{quote.text}"
            </p>
            <p style={{
          fontSize: '12px',
          color: '#999'
        }}>
              — {quote.author}
            </p>
          </div>)}
      </div>
    </section>;
};
export default AboutSection;