import { Link } from 'react-router-dom';
const ReadingSection = () => {
  return <section id="reading" style={{
    padding: '5px 20px 5px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <div style={{
      marginBottom: '25px'
    }}>
        <h2 style={{
        fontSize: '24px',
        marginBottom: '15px',
        fontWeight: 'normal',
        color: 'var(--site-text)'
      }}>My Favorites</h2>
        <div style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: 'var(--site-text-muted)'
      }}>
          <div>
            <h3 style={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--site-text)',
            marginBottom: '8px'
          }}>
              <Link to="/things-i-love" style={{
              color: 'var(--site-link)',
              textDecoration: 'underline'
            }}>
                My Favorites
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>;
};
export default ReadingSection;
