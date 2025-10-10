const PublicationsSection = () => {
  return <section id="publications" style={{
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
      <div>
        <h2 style={{
        fontSize: '16px',
        marginBottom: '10px',
        fontWeight: 'normal'
      }}>Publications</h2>
        <div style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#666'
      }}>
          <div style={{ marginBottom: '10px' }}>
            <div>
              <a href="https://hbr.org/2025/10/what-happens-when-ai-sets-wages" target="_blank" rel="noopener noreferrer" style={{
              color: '#333',
              textDecoration: 'underline'
            }}>
                What Happens When AI Sets Wages
              </a>
              <span style={{ color: '#666' }}> with M. C. Cohen and W. Khern-am-nuai</span>
            </div>
            <div style={{ fontSize: '13px', color: '#888' }}>Harvard Business Review, 2025</div>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <div>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5404966" target="_blank" rel="noopener noreferrer" style={{
              color: '#333',
              textDecoration: 'underline'
            }}>
                When AI Sets Wages: Biases and Labor Discrimination in Generative Pricing
              </a>
              <span style={{ color: '#666' }}> with M. C. Cohen and W. Khern-am-nuai</span>
            </div>
            <div style={{ fontSize: '13px', color: '#888' }}>Submitted</div>
          </div>
          
          <div>
            <div>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353923" target="_blank" rel="noopener noreferrer" style={{
              color: '#333',
              textDecoration: 'underline'
            }}>
                Generative AI for Data Scraping
              </a>
              <span style={{ color: '#666' }}> with M. C. Cohen</span>
            </div>
            <div style={{ fontSize: '13px', color: '#888' }}>INFORMS Journal on Data Science, Major Revision</div>
          </div>
        </div>
      </div>
    </section>;
};
export default PublicationsSection;