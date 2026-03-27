const HeroSection = () => {
  return <section id="home" style={{
    padding: '20px 20px 5px 20px',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <img
      src="/lovable-uploads/e3682f1c-f543-43d2-8b64-8b6d2732dc0e.jpg"
      alt="Eddy Hage Youssef"
      style={{
        width: '150px',
        height: '150px',
        borderRadius: '8px',
        objectFit: 'cover',
        border: '1px solid var(--site-border, #e0e0e0)',
      }}
    />
  </section>;
};
export default HeroSection;
