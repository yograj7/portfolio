import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'resume', title: 'Resume' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark');
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Observe sections to update active nav link
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const matched = navLinks.find((n) => n.id === id);
            if (matched) setActive(matched.title);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // close mobile menu on outside clicks or Escape key
  useEffect(() => {
    const onDocClick = (ev) => {
      if (!mobileOpen) return;
      if (navRef.current && !navRef.current.contains(ev.target)) setMobileOpen(false);
    };
    const onEsc = (ev) => { if (ev.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="nav-inner" ref={navRef}>
        <div className="nav-left">
          <a href="#home" className="brand" onClick={() => { setActive('Home'); window.scrollTo(0, 0); }}>
            <span className="brand-mark">Y</span>
            <span className="brand-text">Patil</span>
          </a>
        </div>

        <nav className="nav-center" aria-hidden={mobileOpen ? 'false' : 'false'}>
          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${active === link.title ? 'active' : ''}`}
                  aria-current={active === link.title ? 'page' : undefined}
                  onClick={() => { setActive(link.title); setMobileOpen(false); }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <button
            className="theme-toggle"
            aria-pressed={theme === 'dark' ? 'true' : 'false'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☾' : '☼'}
          </button>

          <button
            className="nav-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={`mobile-link ${active === link.title ? 'active' : ''}`} onClick={() => { setActive(link.title); setMobileOpen(false); }}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
