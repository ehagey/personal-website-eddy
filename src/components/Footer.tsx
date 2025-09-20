const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '40px 20px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
      <div style={{ marginBottom: '15px' }}>
        <a href="#home" style={{ color: '#666', textDecoration: 'none', marginRight: '15px' }}>Home</a>
        <a href="#about" style={{ color: '#666', textDecoration: 'none', marginRight: '15px' }}>About</a>
        <a href="#contact" style={{ color: '#666', textDecoration: 'none', marginRight: '15px' }}>Contact</a>
        <a href="/resume" style={{ color: '#666', textDecoration: 'none' }}>Resume</a>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <a href="https://github.com/ehagey" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none', marginRight: '15px' }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/eddy-hage-youssef-29b6b618b/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none', marginRight: '15px' }}>
          LinkedIn
        </a>
        <a href="https://www.instagram.com/eddy.g.hage/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none', marginRight: '15px' }}>
          Instagram
        </a>
        <a href="mailto:eddy.hage1@gmail.com" style={{ color: '#666', textDecoration: 'none' }}>
          Email
        </a>
      </div>
      
      <p>© {currentYear} Eddy Hage-Youssef</p>
    </footer>
  );
};

export default Footer;