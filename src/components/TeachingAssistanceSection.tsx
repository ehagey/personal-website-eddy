const entries = [
  { course: 'MATH 262. Intermediate Calculus', role: 'Teaching Assistant' },
  { course: 'MATH 240. Discrete Structures', role: 'Course Assistant' },
  { course: 'MATH 223. Linear Algebra', role: 'Course Assistant' },
];

const TeachingAssistanceSection = () => {
  return (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
      <p style={{ fontSize: '13px', color: 'var(--site-text-faint)', marginBottom: '8px' }}>McGill University</p>
      {entries.map(({ course, role }) => (
        <p key={course} style={{ marginBottom: '2px', color: 'var(--site-text)' }}>
          {course}. {role}.
        </p>
      ))}
    </div>
  );
};

export default TeachingAssistanceSection;
