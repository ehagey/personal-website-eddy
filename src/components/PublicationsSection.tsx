const sectionHeadingStyle = {
  fontFamily: "'EB Garamond', Georgia, serif",
  fontSize: '26px',
  fontWeight: 400 as const,
  color: 'var(--site-text)',
  letterSpacing: '-0.01em',
};

const linkStyle = {
  color: 'var(--site-link)',
  textDecoration: 'underline' as const,
  textUnderlineOffset: '3px',
  textDecorationColor: 'var(--site-divider)',
};

const PublicationsSection = () => {
  return <div id="publications">
      <div style={{ marginBottom: '25px' }}>
        <h2 style={sectionHeadingStyle}>Publications</h2>
        <div style={{ marginTop: '15px', fontSize: '14px', lineHeight: '1.7', color: 'var(--site-text-muted)' }}>
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--site-border)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6331258" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Three Strategic Bets on AI's Future
              </a>
              <span style={{ fontWeight: 'normal', color: 'var(--site-text-muted)' }}> with M. C. Cohen, D. McCarthy, and D. D. Sokol</span>
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>Submitted</p>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>
              <a href="https://www.dropbox.com/scl/fi/gl99iry9nvwhxtyp77d9i/three-bets-AI-slides.pptx?rlkey=66yqsamsx7sdayvypkm58ra8q&e=1&st=9hwhj0wa&dl=0" target="_blank" rel="noopener noreferrer" style={linkStyle}>Slides</a> (prepared by Professor McCarthy)
            </p>
          </div>
          
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--site-border)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
              <a href="https://hbr.org/2025/10/what-happens-when-ai-sets-wages" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                What Happens When AI Sets Wages
              </a>
              <span style={{ fontWeight: 'normal', color: 'var(--site-text-muted)' }}> with M. C. Cohen and W. Khern-am-nuai</span>
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>Harvard Business Review, Digital Article, October 1, 2025</p>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)', marginTop: '4px' }}>Cited in <a href="https://www.ilo.org/sites/default/files/2026-03/TMDWAI-2026-EN_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-text-faint)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>ILO: AI in Manufacturing (2026)</a></p>
          </div>
          
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--site-border)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5404966" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                When AI Sets Wages: Biases and Labor Discrimination in Generative Pricing
              </a>
              <span style={{ fontWeight: 'normal', color: 'var(--site-text-muted)' }}> with M. C. Cohen and W. Khern-am-nuai</span>
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>Submitted</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353923" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Generative AI for Data Scraping
              </a>
              <span style={{ fontWeight: 'normal', color: 'var(--site-text-muted)' }}> with M. C. Cohen</span>
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)', marginBottom: '5px' }}>INFORMS Journal on Data Science, Major Revision</p>
          </div>
        </div>

        <h2 style={{ ...sectionHeadingStyle, marginTop: '30px' }}>Academic Collaborators</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--site-text-muted)', marginTop: '15px', marginBottom: '15px' }}>
          I feel very fortunate and grateful to have worked and published academic work with{' '}
          {[
            { name: 'Maxime C. Cohen', affiliation: 'Desautels Faculty of Management, McGill University', url: 'https://maxccohen.github.io/' },
            { name: 'Warut Khern-am-nuai', affiliation: 'Desautels Faculty of Management, McGill University', url: 'https://www.warut.info/' },
            { name: 'Daniel McCarthy', affiliation: 'University of Maryland - Robert H. Smith School of Business', url: 'https://www.rhsmith.umd.edu/directory/daniel-mccarthy' },
            { name: 'D. Daniel Sokol', affiliation: 'USC Gould School of Law; USC Marshall School of Business', url: 'https://gould.usc.edu/faculty/profile/d-daniel-sokol/' },
          ].map((c, i, arr) => (
            <span key={c.name}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{c.name}</a>
              <span style={{ color: 'var(--site-text-faint)' }}> ({c.affiliation})</span>
              {i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ', and ' : ''}
            </span>
          ))}.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: '30px' }}>Editing</h2>
        <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--site-text-muted)', marginTop: '15px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
              <a href="https://maxccohen.github.io/State-of-AI-in-Canada.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                The State of AI in Canada: Challenges, Opportunities, and Calls to Action
              </a>
              <span style={{ fontWeight: 'normal', color: 'var(--site-text-muted)' }}> by M. C. Cohen</span>
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>The State of AI in Canada White Paper, January 2026</p>
          </div>
        </div>
      </div>
    </div>;
};
export default PublicationsSection;
