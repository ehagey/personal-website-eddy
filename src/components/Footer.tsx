const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '40px 20px', textAlign: 'center', fontSize: '12px', color: 'var(--site-text-pale)' }}>
      <div style={{ marginBottom: '15px' }}>
        <a href="#home" style={{ color: 'var(--site-text-muted)', textDecoration: 'none', marginRight: '15px' }}>Home</a>
        <a href="#about" style={{ color: 'var(--site-text-muted)', textDecoration: 'none', marginRight: '15px' }}>About</a>
        <a href="#contact" style={{ color: 'var(--site-text-muted)', textDecoration: 'none' }}>Contact</a>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <a href="https://www.instagram.com/eddy.g.hage/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-text-muted)', textDecoration: 'none', marginRight: '15px' }}>
          Instagram
        </a>
        <a href="mailto:eddy.hage1@gmail.com" style={{ color: 'var(--site-text-muted)', textDecoration: 'none' }}>
          Email
        </a>
      </div>
      
      <p>© {currentYear} Eddy Hage-Youssef</p>
    </footer>
  );
};

export default Footer;
