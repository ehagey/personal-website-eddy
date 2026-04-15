import { Link } from 'react-router-dom';
const ReadingSection = () => {
  return <div id="reading">
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: '22px',
          marginBottom: '15px',
          fontWeight: 400,
          letterSpacing: '-0.01em',
        }}>
          <Link to="/things-i-love" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            textDecorationColor: 'var(--site-divider)',
          }}>
            My Favorites
          </Link>
        </h2>
      </div>
    </div>;
};
export default ReadingSection;
