const Header = () => {
  return (
    <header style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'normal' }}>
        Eddy Hage-Youssef
      </h1>
      <nav style={{ fontSize: '14px' }}>
        <a href="#about" style={{ marginRight: '20px', color: '#333', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ marginRight: '20px', color: '#333', textDecoration: 'none' }}>Contact</a>
        <a href="/resume" style={{ color: '#333', textDecoration: 'underline' }}>Resume</a>
      </nav>
    </header>
  );
};

export default Header;