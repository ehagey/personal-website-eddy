import { Link } from 'react-router-dom';
const ReadingSection = () => {
  return <section id="reading" style={{
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <div>
        <h2 style={{
        fontSize: '16px',
        marginBottom: '10px',
        fontWeight: 'normal'
      }}>Things I Love</h2>
        <div style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#666'
      }}>
          <Link to="/things-i-love" style={{
            color: '#333',
            textDecoration: 'underline'
          }}>
            My Favorites
          </Link>
        </div>
      </div>
    </section>;
};
export default ReadingSection;