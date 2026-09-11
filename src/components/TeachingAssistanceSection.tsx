const entries = [
  { course: 'MATH 262: Intermediate Calculus', role: 'Teaching Assistant' },
  { course: 'MATH 240: Discrete Structures', role: 'Course Assistant' },
  { course: 'MATH 223: Linear Algebra', role: 'Course Assistant' },
];

const TeachingAssistanceSection = () => {
  return (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)', marginBottom: '10px' }}>McGill University</p>
      {entries.map(({ course, role }) => (
        <p key={course} style={{ marginBottom: '4px' }}>
          <span style={{ color: 'var(--site-text)' }}>{course}</span>
          <span style={{ color: 'var(--site-text-faint)' }}> · {role}</span>
        </p>
      ))}
    </div>
  );
};

export default TeachingAssistanceSection;
