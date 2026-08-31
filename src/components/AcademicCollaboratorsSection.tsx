const collaborators = [
  { name: 'Maxime C. Cohen', affiliation: 'Desautels Faculty of Management, McGill University', url: 'https://maxccohen.github.io/' },
  { name: 'Warut Khern-am-nuai', affiliation: 'Desautels Faculty of Management, McGill University', url: 'https://www.warut.info/' },
  { name: 'Daniel M. McCarthy', affiliation: 'University of Maryland - Robert H. Smith School of Business', url: 'https://www.rhsmith.umd.edu/directory/daniel-mccarthy' },
  { name: 'D. Daniel Sokol', affiliation: 'USC Gould School of Law; USC Marshall School of Business', url: 'https://gould.usc.edu/faculty/profile/d-daniel-sokol/' },
];

const AcademicCollaboratorsSection = () => {
  return <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--site-text-muted)' }}>
    I feel very fortunate and grateful to have worked and published academic work with{' '}
    {collaborators.map((c, i, arr) => (
      <span key={c.name}>
        <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-link)', textDecoration: 'underline' }}>{c.name}</a>
        <span style={{ color: 'var(--site-text-faint)' }}> ({c.affiliation})</span>
        {i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ', and ' : ''}
      </span>
    ))}.
  </p>;
};
export default AcademicCollaboratorsSection;
