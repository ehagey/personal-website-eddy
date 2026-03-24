const HeroSection = () => {
  return <section id="home" style={{
    padding: '20px 20px 5px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '10px'
      }}>
        <img src="/lovable-uploads/e223e9a5-8da0-4699-81b5-a41032f24b8a.png" alt="Eddy Hage-Youssef" style={{
          width: '180px',
          height: '140px',
          objectFit: 'contain',
          flexShrink: 0
        }} />
        <h1 style={{
          margin: 0,
          fontSize: '24px',
          fontWeight: 'normal'
        }}>
          Eddy Hage-Youssef
        </h1>
      </div>
    </section>;
};
export default HeroSection;
