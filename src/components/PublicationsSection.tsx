const PublicationsSection = () => {
  return (
    <section id="publications" style={{
      padding: '30px 20px',
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
        }}>Publications</h2>
        <div style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#666'
        }}>
          <div style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            borderBottom: '1px solid #eee'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#333',
              marginBottom: '8px'
            }}>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353923" target="_blank" rel="noopener noreferrer" style={{
                color: '#333',
                textDecoration: 'underline'
              }}>
                Generative AI for Data Scraping
              </a>
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#888',
              marginBottom: '5px'
            }}>INFORMS Journal on Data Science</p>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#333',
              marginBottom: '8px'
            }}>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5404966" target="_blank" rel="noopener noreferrer" style={{
                color: '#333',
                textDecoration: 'underline'
              }}>
                When AI Sets Wages: Biases and Labor Discrimination in Generative Pricing
              </a>
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#888'
            }}>Submitted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;