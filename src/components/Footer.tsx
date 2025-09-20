const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: '#333', color: '#ccc', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '30px' }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#home" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a>
              </li>
              <li>
                <a href="/resume" style={{ color: '#ccc', textDecoration: 'none' }}>Resume</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Connect</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <a href="https://github.com/ehagey" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/eddy-hage-youssef-29b6b618b/" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/eddy.g.hage/" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>
                Instagram
              </a>
              <a href="mailto:eddy.hage1@gmail.com" style={{ color: '#ccc', textDecoration: 'none' }}>
                Email
              </a>
            </div>
            <p>
              <a href="mailto:eddy.hage1@gmail.com" style={{ color: '#ccc', textDecoration: 'none' }}>
                eddy.hage1@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #555', paddingTop: '20px', textAlign: 'center' }}>
          <p>© {currentYear} Eddy Hage-Youssef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;