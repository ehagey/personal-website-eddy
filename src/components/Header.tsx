import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--site-header-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--site-header-border)',
      zIndex: 50,
      transition: 'background-color 0.3s, border-color 0.3s'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          <Link to="/" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--site-text)', textDecoration: 'none' }}>
            Eddy Hage-Youssef
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>
    </header>
  );
};

export default Header;
