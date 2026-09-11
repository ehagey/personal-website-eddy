const entries = [
  {
    course: 'MATH 262 — Intermediate Calculus',
    role: 'Teaching Assistant',
  },
  {
    course: 'MATH 240 — Discrete Structures',
    role: 'Course Assistant',
  },
  {
    course: 'MATH 223 — Linear Algebra',
    role: 'Course Assistant',
  },
];

const TeachingAssistanceSection = () => {
  return (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
      {entries.map(({ course, role }, i) => (
        <div
          key={course}
          style={{
            marginBottom: i < entries.length - 1 ? '15px' : 0,
            paddingBottom: i < entries.length - 1 ? '15px' : 0,
            borderBottom: i < entries.length - 1 ? '1px solid var(--site-border)' : 'none',
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'var(--site-text)', marginBottom: '8px' }}>
            {course}
            <span style={{ fontWeight: 'normal', color: 'var(--site-text-muted)' }}>, McGill University</span>
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--site-text-faint)' }}>{role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeachingAssistanceSection;
