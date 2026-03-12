import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <nav
      className={`fixed w-full flex items-center py-5 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md shadow-lg shadow-indigo-500/10' : 'bg-transparent'
      }`}
      style={{
        padding: '0 5%',
        height: 'var(--navbar-height)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('home');
            window.scrollTo(0, 0);
          }}
          style={{ textDecoration: 'none' }}
        >
          <p style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            margin: 0
          }}>
            Y<span className="accent-text">.Patil</span>
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              style={{
                cursor: 'pointer',
                fontSize: '1.125rem',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
            >
              <a 
                href={`#${link.id}`}
                style={{
                  color: active === link.title ? 'white' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = active === link.title ? 'white' : 'var(--text-secondary)'}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
