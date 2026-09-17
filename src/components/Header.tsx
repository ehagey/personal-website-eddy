import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{
      backgroundColor: 'var(--site-header-bg)',
      borderBottom: '1px solid var(--site-header-border)',
      zIndex: 50,
      transition: 'background-color 0.3s, border-color 0.3s'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          <Link to="/" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--site-text)', textDecoration: 'none' }}>
            Eddy Hage-Youssef
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              className="last-updated"
              style={{ fontSize: '11px', color: 'var(--site-text-faint)', whiteSpace: 'nowrap' }}
            >
              Last updated: September 16, 2026
            </span>

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
      </div>
    </header>
  );
};

export default Header;
