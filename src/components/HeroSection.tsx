const HeroSection = () => {
  return <section id="home" style={{
    padding: '40px 20px 30px 20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <h1 style={{
      margin: '0 0 5px 0',
      fontSize: '24px',
      fontWeight: 'normal'
    }}>
      Hi! My name is Eddy Hage-Youssef
    </h1>
      <p style={{
      fontSize: '16px',
      color: '#666',
      marginBottom: '10px',
      lineHeight: '1.5'
    }}> I'm passionate about AI research and building products that improve people's lives. I'm particularly interested in working at the intersection of AI, business, and strategy.</p>
      
      <img src="/lovable-uploads/e223e9a5-8da0-4699-81b5-a41032f24b8a.png" alt="Profile" style={{
      width: '240px',
      height: '180px',
      objectFit: 'contain',
      margin: '10px auto',
      display: 'block'
    }} />
      
      <div style={{
      fontSize: '14px'
    }}>
        <a href="mailto:eddy.hage-youssef@mail.mcgill.ca" style={{
        color: '#333',
        textDecoration: 'underline'
      }}></a>
      </div>
    </section>;
};
export default HeroSection;