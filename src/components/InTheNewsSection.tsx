const InTheNewsSection = () => {
  return <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
    <div style={{
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid var(--site-border)'
  }}>
      <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
        <a href="https://finance.yahoo.com/technology/ai/articles/strategic-fit-not-market-share-172600753.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-link)', textDecoration: 'underline' }}>
          Strategic Fit—Not Market Share—Separates Winners in AI, Study Shows
        </a>
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>Yahoo Finance, August 27, 2026</p>
    </div>

    <div style={{
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid var(--site-border)'
  }}>
      <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
        <a href="https://techxplore.com/news/2026-08-strategic-winners-ai.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-link)', textDecoration: 'underline' }}>
          Strategic Fit—Not Market Share—Separates Winners in AI, Study Shows
        </a>
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>Tech Xplore, August 25, 2026</p>
    </div>

    <div>
      <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
        <a href="https://www.ilo.org/sites/default/files/2026-03/TMDWAI-2026-EN_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-link)', textDecoration: 'underline' }}>
          AI in Manufacturing: Challenges and Opportunities for Promoting Decent Work, Productivity and a Just Transition
        </a>
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>International Labour Organization, 2026. Cites "What Happens When AI Sets Wages" (Harvard Business Review).</p>
    </div>
  </div>;
};
export default InTheNewsSection;
