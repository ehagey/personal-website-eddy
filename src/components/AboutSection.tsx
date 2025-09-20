const AboutSection = () => {
  const skills = ['Programming', 'Machine Learning', 'Data Analytics', 'Artificial Intelligence', 'Research', 'Statistical Analysis', 'LLM Engineering', 'Prompt Design and Engineering', 'Problem Structuring'];
  
  const hobbies = [
    {
      name: 'Judo',
      details: ['Black Belt', '7× Lebanese National Champion', 'Arab Championship First Place (2017)']
    },
    {
      name: 'Guitar',
      details: ['PRS Silver Sky (Electric)', 'Princeton Reverb (Amp)', 'Art & Lutherie (Acoustic)'],
      context: '(for the geeks)'
    },
    {
      name: 'Currently Reading',
      details: ['1. Man\'s Search for Meaning (Viktor Frankl)', '2. How Innovation Works and Why it Flourishes in Freedom (Matt Ridley)']
    }
  ];
  
  const quotes = [
    {
      text: "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
      author: "Thomas Jefferson"
    },
    {
      text: "It's not what happens to you, but how you react to it that matters.",
      author: "Epictetus"
    },
    {
      text: "Be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    }
  ];

  return (
    <section id="about" style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* About Me */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About Me</h2>
          <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            <p style={{ marginBottom: '15px' }}>I'm Eddy, a fourth-year Computer Science and Statistics student at McGill University.</p>
            
            <p style={{ marginBottom: '15px' }}>My experience and interests lie in AI and data analytics. I have previously built RAG and Ontology frameworks for a domain-specific Large Language Model. Currently, my interest and focus is on AI agents. Additionally, I have been working on developing robust benchmarking criteria for LLMs in medical and clinical settings at the <a href="https://aihealthinstitute.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'underline' }}>AI Health Institute</a>. I am also involved in research on generative AI applications in pricing recommendations for retail and commercial settings.</p>
            
            <p>Outside of academics, I enjoy hitting the gym, playing guitar, practicing Judo, and spending time with family and friends.</p>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>My Skills</h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#666' }}>
            {skills.map(skill => (
              <li key={skill} style={{ marginBottom: '5px' }}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Featured Project */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Featured Project</h3>
          <div style={{ border: '1px solid #ddd', padding: '20px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>AI Health Institute</h4>
            <p style={{ color: '#666', marginBottom: '15px' }}>Advancing rigorous evaluation and performance assessment of large language models (LLMs) to ensure they deliver accurate, reliable, and clinically relevant outputs that improve patient care and support clinicians.</p>
            <div style={{ marginBottom: '15px' }}>
              <strong>Tags:</strong> Healthcare, AI, Research, LLMs
            </div>
            <div>
              <a href="https://aihealthinstitute.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', padding: '8px 16px', border: '1px solid #333', marginRight: '10px' }}>
                Visit Site
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7311005835336306689/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', padding: '8px 16px', border: '1px solid #333' }}>
                LinkedIn Announcement
              </a>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Hobbies</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {hobbies.map(hobby => (
              <div key={hobby.name} style={{ border: '1px solid #ddd', padding: '15px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {hobby.name} 
                  {hobby.context && <span style={{ fontSize: '12px', color: '#666' }}> {hobby.context}</span>}
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '14px', color: '#666' }}>
                  {hobby.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Quotes */}
        <div>
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Favorite Quotes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {quotes.map((quote, index) => (
              <div key={index} style={{ border: '1px solid #ddd', padding: '15px' }}>
                <blockquote style={{ fontStyle: 'italic', marginBottom: '10px', color: '#666' }}>
                  "{quote.text}"
                </blockquote>
                <p style={{ textAlign: 'right', fontSize: '14px', color: '#666' }}>
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;