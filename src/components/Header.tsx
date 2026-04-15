import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{
      backgroundColor: 'var(--site-header-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--site-header-border)',
      zIndex: 50,
      transition: 'background-color 0.3s, border-color 0.3s'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          <Link to="/" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '20px', fontWeight: 500, color: 'var(--site-text)', textDecoration: 'none', letterSpacing: '-0.01em' }}>
            Eddy Hage-Youssef
          </Link>
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--site-text-muted)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s'
            }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
