import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

const SideNav = () => {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex"
      style={{
        position: 'fixed',
        top: '50%',
        left: '32px',
        transform: 'translateY(-50%)',
        flexDirection: 'column',
        gap: '14px',
        zIndex: 40,
      }}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontSize: '13px',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? 'var(--site-text)' : 'var(--site-text-faint)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'color 0.2s',
            }}
          >
            <span
              style={{
                width: isActive ? '18px' : '10px',
                height: '1px',
                backgroundColor: isActive ? 'var(--site-text)' : 'var(--site-text-faint)',
                transition: 'width 0.2s, background-color 0.2s',
              }}
            />
            {label}
          </a>
        );
      })}
    </nav>
  );
};

export default SideNav;
