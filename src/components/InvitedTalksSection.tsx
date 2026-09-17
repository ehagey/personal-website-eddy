const InvitedTalksSection = () => {
  return (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
      <p style={{ marginBottom: '2px', color: 'var(--site-text)' }}>
        <a
          href="https://sites.google.com/view/rotmanyoungscholarseminar/seminars?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--site-link)', textDecoration: 'underline' }}
        >
          Rotman Young Scholar Seminar Series
        </a>
        <span style={{ color: 'var(--site-text-muted)' }}>
          , presented "Confirmation Bias in LLM Pricing Recommendations"
        </span>
      </p>
    </div>
  );
};

export default InvitedTalksSection;
