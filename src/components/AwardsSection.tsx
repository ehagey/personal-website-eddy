const judoAwards = [
  '7x Lebanese Judo Champion',
  '8x Interscholastic Judo Champion',
  'Gold Medal, Arab Judo Championship, 2018',
];

const academicAwards = [
  '75th Percentile, Canadian Senior Mathematics Contest (CEMC, University of Waterloo)',
  '75th Percentile, Euclid Mathematics Contest (CEMC, University of Waterloo)',
];

const AwardsSection = () => {
  return (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)', marginBottom: '8px' }}>Judo</p>
      {judoAwards.map((award) => (
        <p key={award} style={{ marginBottom: '2px', color: 'var(--site-text)' }}>
          {award}
        </p>
      ))}

      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)', marginTop: '15px', marginBottom: '8px' }}>Academic</p>
      {academicAwards.map((award) => (
        <p key={award} style={{ marginBottom: '2px', color: 'var(--site-text)' }}>
          {award}
        </p>
      ))}
    </div>
  );
};

export default AwardsSection;
