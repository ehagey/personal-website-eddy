const HeroSection = () => {
  return (
    <section id="home" style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ margin: '0 0 10px 0', fontSize: '36px', fontWeight: 'normal' }}>
        Eddy Hage-Youssef
      </h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>
        I'm passionate about building products that improve people's lives. Interested in working at the intersection of AI, business, and strategy.
      </p>
      
      <img 
        src="/lovable-uploads/e223e9a5-8da0-4699-81b5-a41032f24b8a.png" 
        alt="Profile" 
        style={{ width: '150px', height: '112px', objectFit: 'contain', margin: '20px 0' }}
      />
      
      <div style={{ fontSize: '14px' }}>
        <a href="/resume" style={{ color: '#333', textDecoration: 'underline', marginRight: '20px' }}>Resume</a>
        <a href="https://github.com/ehagey" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'underline', marginRight: '20px' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/eddy-hage-youssef-29b6b618b/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'underline', marginRight: '20px' }}>LinkedIn</a>
        <a href="mailto:eddy.hage-youssef@mail.mcgill.ca" style={{ color: '#333', textDecoration: 'underline' }}>Email</a>
      </div>
    </section>
  );
};

export default HeroSection;