const HeroSection = () => {
  return (
    <section id="home" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 10px 0', color: '#666' }}>Hello! My name is</p>
        <h1 style={{ margin: '0 0 20px 0', fontSize: '48px', fontWeight: 'bold' }}>
          Eddy Hage-Youssef
        </h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          I'm passionate about building products that improve people's lives. Interested in working at the intersection of AI, business, and strategy.
        </p>
        
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/lovable-uploads/e223e9a5-8da0-4699-81b5-a41032f24b8a.png" 
            alt="Profile" 
            style={{ width: '200px', height: '150px', objectFit: 'contain', border: '1px solid #ddd' }}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="/resume" style={{ color: '#333', textDecoration: 'none', padding: '10px 20px', border: '1px solid #333' }}>
            Resume
          </a>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://github.com/ehagey" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/eddy-hage-youssef-29b6b618b/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
              LinkedIn
            </a>
            <a href="mailto:eddy.hage-youssef@mail.mcgill.ca" style={{ color: '#333', textDecoration: 'none' }}>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;