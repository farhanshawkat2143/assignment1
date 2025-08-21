'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from '../lib/cookies';
import useTheme from '../lib/useTheme';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const [active, setActive] = useState<string | null>(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/tabs', label: 'Tabs Generator' },
    { href: '/escape-room', label: 'Escape Room' },
    { href: '/coding-races', label: 'Coding Races' },
    { href: '/court-room', label: 'Court Room' },
  ];


  useEffect(() => {
    const last = getCookie('lastPage') || '/';
    setActive(last);
  }, []);

  
  useEffect(() => {
    if (active) setCookie('lastPage', active, 30);
  }, [active]);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.6rem 1rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {/* Student Number */}
        <div style={{ fontWeight: 700 }}>21438507</div>

        {/* Hamburger Menu */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          style={{ background: 'none', border: 'none', padding: 6 }}
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav aria-label="Main navigation">
        <ul
          style={{
            display: open ? 'block' : 'flex',
            gap: 12,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  style={{
                    padding: '0.35rem 0.6rem',
                    borderRadius: 6,
                    background: isActive ? '#e8f0fe' : 'transparent',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
          style={{ padding: 6 }}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
