import { Link } from 'react-router-dom';

const WritingSection = () => {
  return (
    <div style={{
      fontSize: '14px',
      lineHeight: '1.6',
      color: 'var(--site-text-muted)'
    }}>
      <div style={{ marginBottom: '12px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--site-text)',
          marginBottom: '8px'
        }}>
          <Link
            to="/blog/on-mental-models"
            style={{
              color: 'var(--site-link)',
              textDecoration: 'underline'
            }}
          >
            On Mental Models
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default WritingSection;
