const ReadingSection = () => {
  return (
    <section id="reading" style={{
      padding: '15px 20px 30px 20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{
        marginBottom: '25px'
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          fontWeight: 'normal'
        }}>Reading</h2>
        <div style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#666'
        }}>
          {/* Placeholder for favorite books - you can add them later */}
          <div>
            <p style={{ fontSize: '16px', color: '#333' }}>
              Favorite books coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingSection;