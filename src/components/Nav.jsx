'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site.config';

const PAGES = [
  { href: '/',                 label: 'Home' },
  { href: '/timeline',         label: 'Timeline' },
  { href: '/prizes',           label: 'Prizes' },
  { href: '/community-leads',  label: 'Community Leads' },
  { href: '/partners',         label: 'Partners' },
  { href: '/faq',              label: 'FAQ' },
  { href: '/about',            label: 'About' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('grh-theme', next); } catch {}
    setIsLight(next === 'light');
  };

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="/" onClick={close}>
          <img src="/assets/tigergraph-logo.png" alt="TigerGraph" />
          <span className="pipe"></span>
          <span className="ev"><b>GraphRAG</b> · Hackathon 2026</span>
        </a>
        <button
          type="button"
          className={`nav-burger ${open ? 'active' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {PAGES.map(p => {
            const active = p.href === '/' ? pathname === '/' : pathname.startsWith(p.href);
            return (
              <a key={p.href} href={p.href} className={active ? 'active' : ''} onClick={close}>{p.label}</a>
            );
          })}
          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle theme"
            title="Toggle theme"
            onClick={toggleTheme}
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          </button>
          <a href={SITE.unstopUrl} target="_blank" rel="noopener" className="nav-cta">Register →</a>
        </div>
      </div>
    </nav>
  );
}
