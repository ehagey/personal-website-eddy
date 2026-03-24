const HeroSection = () => {
  return <section id="home" style={{
    padding: '20px 20px 5px 20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <h1 style={{
      margin: '0 0 20px 0',
      fontSize: '24px',
      fontWeight: 'normal'
    }}>
      Eddy Hage-Youssef
    </h1>
      

      
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