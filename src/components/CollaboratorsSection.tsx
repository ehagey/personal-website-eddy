const collaborators = [
  {
    name: 'Maxime C. Cohen',
    affiliation: 'Desautels Faculty of Management, McGill University',
    url: 'https://maxccohen.github.io/',
  },
  {
    name: 'Warut Khern-am-nuai',
    affiliation: 'Desautels Faculty of Management, McGill University',
    url: 'https://www.warut.info/',
  },
  {
    name: 'Daniel McCarthy',
    affiliation: 'University of Maryland - Robert H. Smith School of Business',
    url: 'https://www.rhsmith.umd.edu/directory/daniel-mccarthy',
  },
  {
    name: 'D. Daniel Sokol',
    affiliation: 'USC Gould School of Law; USC Marshall School of Business',
    url: 'https://gould.usc.edu/faculty/profile/d-daniel-sokol/',
  },
];

const CollaboratorsSection = () => {
  return (
    <section id="collaborators" style={{
      padding: '5px 20px 5px 20px',
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          fontWeight: 'normal',
        }}>Collaborators</h2>
        <div style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#666',
        }}>
          {collaborators.map((c, i) => (
            <div key={c.name} style={{
              marginBottom: i < collaborators.length - 1 ? '12px' : '0',
            }}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" style={{
                color: '#333',
                textDecoration: 'underline',
                fontSize: '15px',
              }}>
                {c.name}
              </a>
              <p style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>
                {c.affiliation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
