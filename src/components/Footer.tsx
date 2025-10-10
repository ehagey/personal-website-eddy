const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '20px', fontSize: '12px', color: '#999' }}>
      <p>© {currentYear}</p>
    </footer>
  );
};

export default Footer;