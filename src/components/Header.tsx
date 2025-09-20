const Header = () => {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>
            Eddy Hage-Youssef
          </a>
        </h1>
        
        <nav>
          <a href="#about" style={{ marginRight: '20px', color: '#333', textDecoration: 'none' }}>About</a>
          <a href="#contact" style={{ marginRight: '20px', color: '#333', textDecoration: 'none' }}>Contact</a>
          <a href="/resume" style={{ color: '#333', textDecoration: 'none', padding: '8px 16px', border: '1px solid #333' }}>Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;