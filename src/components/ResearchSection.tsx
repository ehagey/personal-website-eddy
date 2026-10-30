const linkStyle = { color: 'var(--site-link)', textDecoration: 'underline' } as const;

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
    {children}
  </a>
);

const threads = [
  {
    title: 'Bias in AI-set wages',
    body: (
      <>
        Do LLMs treat workers fairly when they set pay? We prompted eight LLMs for hourly rates on 60,000 freelancer
        profiles. The models recommend higher rates than humans and show no gender gap, but they price workers
        differently by geography and age. Prompt design can largely close the geographic gaps, while the age gaps
        persist. See{' '}
        <ExtLink href="https://link.springer.com/article/10.1007/s43681-026-01472-x">
          When AI Sets Wages
        </ExtLink>{' '}
        and the{' '}
        <ExtLink href="https://hbr.org/2025/10/what-happens-when-ai-sets-wages">HBR article</ExtLink>.
      </>
    ),
  },
  {
    title: 'Independence of LLM pricing advice',
    body: (
      <>
        When managers use LLMs as decision support, do the recommendations reflect independent judgment? Across
        350,000 pricing recommendations, both models discount implausible suggested prices, but that independence is
        fragile: a single follow-up challenge such as "Are you sure?" can lead a model to drop its answer and adopt the
        suggestion. See{' '}
        <ExtLink href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7111078">
          Confirmation Bias in LLM Pricing Recommendations
        </ExtLink>
        .
      </>
    ),
  },
  {
    title: 'Generative AI and web data',
    body: (
      <>
        Generative AI makes web scraping cheaper and far more accessible, which raises questions about who can collect
        data and on what terms. One paper measures how well AI-based methods extract data from real websites; the
        other asks how lower technical costs interact with access and reuse restrictions. See{' '}
        <ExtLink href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353923">
          Generative AI for Data Scraping
        </ExtLink>{' '}
        and{' '}
        <ExtLink href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7577638">
          Generative AI and Competition for Web Data
        </ExtLink>
        .
      </>
    ),
  },
  {
    title: 'Strategy in AI markets',
    body: (
      <>
        Is AI a winner-take-all race? Using consumer data on AI assistants, we find that distinct strategies coexist and
        grow together: reach, adjacency to an existing business, and premium specialization. See{' '}
        <ExtLink href="https://cmr.berkeley.edu/2026/08/69-1-three-winning-ai-strategies/">
          Three Winning AI Strategies
        </ExtLink>
        .
      </>
    ),
  },
];

const ResearchSection = () => (
  <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
    {threads.map(({ title, body }, i) => (
      <div
        key={title}
        style={{
          marginBottom: i === threads.length - 1 ? 0 : '15px',
          paddingBottom: i === threads.length - 1 ? 0 : '15px',
          borderBottom: i === threads.length - 1 ? 'none' : '1px solid var(--site-border)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--site-text)', marginBottom: '6px' }}>{title}</h3>
        <p>{body}</p>
      </div>
    ))}
  </div>
);

export default ResearchSection;
