const HeroSection = () => {
  return <section id="home" style={{
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <h1 style={{
      margin: '0 0 15px 0',
      fontSize: '20px',
      fontWeight: 'normal'
    }}>
      Eddy Hage-Youssef
    </h1>
      <p style={{
      fontSize: '14px',
      color: '#666',
      marginBottom: '15px',
      lineHeight: '1.5'
    }}>I'm passionate about AI research and building products that improve people's lives. I'm particularly interested in working at the intersection of AI, business, and strategy.</p>
      
      <img src="/lovable-uploads/e223e9a5-8da0-4699-81b5-a41032f24b8a.png" alt="Profile" style={{
      width: '200px',
      height: '150px',
      objectFit: 'contain',
      margin: '10px 0',
      display: 'block'
    }} />
    </section>;
};
export default HeroSection;