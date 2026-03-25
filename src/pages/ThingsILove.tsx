import { Link } from 'react-router-dom';

const ThingsILove = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Link 
        to="/" 
        style={{ 
          color: 'var(--site-text-muted)', 
          textDecoration: 'underline',
          fontSize: '14px',
          marginBottom: '30px',
          display: 'inline-block'
        }}
      >
        ← Back to Home
      </Link>
      
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: '600', 
        marginBottom: '30px',
        color: 'var(--site-text)',
        lineHeight: '1.3'
      }}>
        Things I Love
      </h1>
      
      <div style={{ 
        lineHeight: '1.7', 
        fontSize: '16px',
        color: 'var(--site-text)'
      }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', color: 'var(--site-text)' }}>Books</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Extreme Ownership: How U.S. Navy SEALs Lead and Win by Jocko Willink',
              'Discipline Equals Freedom: Field Manual by Jocko Willink',
              "Can't Hurt Me by David Goggins",
              'Meditations by Marcus Aurelius',
              "Man's Search for Meaning by Viktor Frankl",
              'The Signal and the Noise by Nate Silver',
              'Factfulness by Hans Rosling'].map((book, i) => {
              const parts = book.split(' by ');
              return (
                <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--site-text-muted)' }}>•</span>
                  <em>{parts[0]}</em>{parts[1] ? ` by ${parts[1]}` : ''}
                </li>
              );
            })}
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', color: 'var(--site-text)' }}>Music</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['John Mayer 🐐', 'Stevie Ray Vaughan', 'Eric Clapton', 'Bob Dylan', 'Bill Evans'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--site-text-muted)' }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', color: 'var(--site-text)' }}>Guitar Pedals</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Ibanez TS10 Tube Screamer', 'Keeley Katana Clean Boost', 'Way Huge Aqua-Puss Analog Delay', 'Electro-Harmonix Q-Tron+', 'J. Rockett Archer / Klon Centaur'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--site-text-muted)' }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', color: 'var(--site-text)' }}>Judo Throws</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Uchi Mata', 'Sode Tsurikomi Goshi', 'Tai Otoshi', 'Yoko Tomoe Nage'].map((item, i) => (
              <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--site-text-muted)' }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ThingsILove;
