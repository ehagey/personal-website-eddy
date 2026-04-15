import { Link } from 'react-router-dom';

const linkStyle = {
  color: 'var(--site-link)',
  textDecoration: 'underline' as const,
  textUnderlineOffset: '3px',
  textDecorationColor: 'var(--site-divider)',
};

const WritingSection = () => {
  return (
    <div id="writing">
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: '26px',
          marginBottom: '15px',
          fontWeight: 400,
          color: 'var(--site-text)',
          letterSpacing: '-0.01em',
        }}>Writing</h2>
        <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--site-text-muted)' }}>
          <div style={{ marginBottom: '12px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
              <Link to="/blog/on-mental-models" style={linkStyle}>
                On Mental Models
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingSection;
