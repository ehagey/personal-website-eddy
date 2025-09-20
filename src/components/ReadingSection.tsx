import { Link } from 'react-router-dom';

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
        }}>My Favorites</h2>
        <div style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#666'
        }}>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#333',
              marginBottom: '8px'
            }}>
              <Link 
                to="/things-i-love" 
                style={{
                  color: '#333',
                  textDecoration: 'underline'
                }}
              >
                My Favorites
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingSection;