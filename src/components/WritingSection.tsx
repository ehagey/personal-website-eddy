import { Link } from 'react-router-dom';

const WritingSection = () => {
  return (
    <section id="writing" style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div>
        <h2 style={{
          fontSize: '16px',
          marginBottom: '10px',
          fontWeight: 'normal'
        }}>Writing</h2>
        <div style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#666'
        }}>
          <div style={{ marginBottom: '5px' }}>
            <Link 
              to="/blog/on-mental-models" 
              style={{
                color: '#333',
                textDecoration: 'underline'
              }}
            >
              On Mental Models
            </Link>
          </div>
          <div>
            <Link 
              to="/blog/become-someone-people-can-depend-on" 
              style={{
                color: '#333',
                textDecoration: 'underline'
              }}
            >
              Become Someone People Can Depend on
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;