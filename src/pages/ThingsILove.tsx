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
          color: '#666', 
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
        color: '#333',
        lineHeight: '1.3'
      }}>
        Things I Love
      </h1>
      
      <div style={{ 
        lineHeight: '1.7', 
        fontSize: '16px',
        color: '#333'
      }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333'
          }}>
            Books
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>Extreme Ownership: How U.S. Navy SEALs Lead and Win</em> by Jocko Willink
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>Discipline Equals Freedom: Field Manual</em> by Jocko Willink
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>Can't Hurt Me</em> by David Goggins
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>Meditations</em> by Marcus Aurelius
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>Man's Search for Meaning</em> by Viktor Frankl
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>The Signal and the Noise</em> by Nate Silver
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              <em>Factfulness</em> by Hans Rosling
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333'
          }}>
            Music
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              John Mayer 🐐
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Stevie Ray Vaughan
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Eric Clapton
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Bob Dylan
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Bill Evans
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333'
          }}>
            Guitar Pedals
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Ibanez TS10 Tube Screamer
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Keeley Katana Clean Boost
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Way Huge Aqua-Puss Analog Delay
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Electro-Harmonix Q-Tron+
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              J. Rockett Archer / Klon Centaur
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333'
          }}>
            Judo Throws
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Uchi Mata
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Sode Tsurikomi Goshi
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Tai Otoshi
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#666' }}>•</span>
              Yoko Tomoe Nage
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ThingsILove;