import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Terminal } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme, retro, toggleRetro } = useTheme();
  
  return (
    <header style={{
      backgroundColor: 'var(--site-header-bg)',
      borderBottom: `1px solid var(--site-header-border)`,
      zIndex: 50,
      transition: 'background-color 0.3s, border-color 0.3s',
      ...(retro ? { backdropFilter: 'none' } : {})
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          <Link to="/" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--site-text)', textDecoration: 'none' }}>
            {retro ? '> eddy_hage_youssef' : 'Eddy Hage-Youssef'}
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={toggleRetro}
              aria-label="Toggle retro mode"
              title="Retro mode"
              style={{
                background: retro ? 'rgba(0, 255, 65, 0.15)' : 'none',
                border: retro ? '1px solid #00ff41' : '1px solid transparent',
                borderRadius: '4px',
                cursor: 'pointer',
                color: retro ? '#00ff41' : 'var(--site-text-muted)',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.2s'
              }}
            >
              <Terminal size={18} />
            </button>
            
            {!retro && (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
