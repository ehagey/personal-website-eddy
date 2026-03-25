import { Link } from 'react-router-dom';
const ReadingSection = () => {
  return <section id="reading" style={{
    padding: '5px 20px 5px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          fontWeight: 'normal',
        }}>
          <Link to="/things-i-love" style={{
            color: 'var(--site-link)',
            textDecoration: 'underline'
          }}>
            My Favorites
          </Link>
        </h2>
      </div>
    </section>;
};
export default ReadingSection;
